import { ApiError } from '../utility/errors';
import { HttpClient } from './http.client';
import type { AuthSession } from '../auth/auth.session';
import type { RequestHeaderValueMap, RequestHeaders, RequestHeaderValueSource, GraphqlResponsePayload, GraphqlUploadArgs } from '../utility/types';
import { DefaultHeaders } from '../utility/request.headers';

function withAuthorizationHeader(headers: Record<string, string>, token: string): Record<string, string> {
  const merged = { ...headers };

  for (const key of Object.keys(merged)) {
    if (key.toLowerCase() === 'authorization') {
      delete merged[key];
    }
  }

  merged.authorization = `Bearer ${token}`;
  return merged;
}

function shouldRefreshFromGraphqlFailure(status: number, payload: GraphqlResponsePayload<unknown> | undefined): boolean {
  if (status === 401) return true;
  if (!payload?.errors?.length) return false;

  return payload.errors.some((error) => {
    const code = String(error?.extensions?.code ?? '').toUpperCase();
    const message = String(error?.message ?? '').toLowerCase();

    if (code === 'UNAUTHENTICATED') return true;
    if (message.includes('invalid or expired token')) return true;
    if (message.includes('expired token')) return true;

    return false;
  });
}
export class GraphqlTransport {
  constructor(
    private readonly http: HttpClient,
    private readonly gqlUrl: string,
  ) {}


  public setBuiltinRequestHeader(header: DefaultHeaders, value: RequestHeaderValueSource): void {
    this.http.setBuiltinRequestHeader(header, value);
  }

  public setRequestHeader(name: string, value: RequestHeaderValueSource): void {
    this.http.setRequestHeader(name, value);
  }

  public setRequestHeaders(headers: RequestHeaders): void {
    this.http.setRequestHeaders(headers);
  }

  public removeBuiltinRequestHeader(header: DefaultHeaders): void {
    this.http.removeBuiltinRequestHeader(header);
  }

  public removeRequestHeader(name: string): void {
    this.http.removeRequestHeader(name);
  }

  public clearRequestHeaders(): void {
    this.http.clearRequestHeaders();
  }

  private buildRequestHeaders(headers?: RequestHeaderValueMap): Record<string, string> {
    const merged = this.http.resolveRequestHeaderMap(headers ?? {});

    const hasHeader = (name: string) => Object.keys(merged).some((key) => key.toLowerCase() === name.toLowerCase());
    const setHeaderIfMissing = (name: string, value: string) => {
      if (!hasHeader(name)) merged[name] = value;
    };

    try {
      const url = new URL(this.gqlUrl);
      setHeaderIfMissing('origin', url.origin);
      setHeaderIfMissing('referer', `${url.origin}/`);
      setHeaderIfMissing('sec-fetch-site', 'same-origin');
      setHeaderIfMissing('sec-fetch-mode', 'cors');
      setHeaderIfMissing('sec-fetch-dest', 'empty');
      setHeaderIfMissing('user-agent', 'node.js @bfw/api-sdk');
      
    } catch {
      // Ignore invalid URL; request will still be sent with provided headers.
    }

    const acceptLanguageHeaderName = this.http.resolveRequestHeaderName(DefaultHeaders.ACCEPT_LANGUAGE);
    const acceptLanguageKey = Object.keys(merged).find((key) => key.toLowerCase() === acceptLanguageHeaderName.toLowerCase());
    if ((!acceptLanguageKey || merged[acceptLanguageKey].trim() === '*') && !this.http.hasDefaultRequestHeader(acceptLanguageHeaderName)) {
      merged[acceptLanguageKey ?? acceptLanguageHeaderName] = 'en-US,en;q=0.9';
    }

    return merged;
  }
  private buildMultipartPayload(params: {
    query: string;
    operationName?: string;
    variables?: Record<string, unknown>;
    fileVarName: string;   // e.g. "attachment"
    files: File[];         // browser File
  }): FormData {
    const vars = { ...(params.variables ?? {}) };

    // IMPORTANT: variable placeholder must be array of nulls
    vars[params.fileVarName] = params.files.map(() => null);

    const operations = {
      query: params.query,
      operationName: params.operationName,
      variables: vars,
    };

    const map: Record<string, string[]> = {};
    params.files.forEach((_, i) => {
      map[String(i)] = [`variables.${params.fileVarName}.${i}`];
    });

    const form = new FormData();
    form.append('operations', JSON.stringify(operations));
    form.append('map', JSON.stringify(map));
    params.files.forEach((f, i) => form.append(String(i), f));

    return form;
  }

  public async execute<T>(args: GraphqlUploadArgs): Promise<T> {
    const resp = await this.http.request<{ data?: T; errors?: any[] }>({
      method: 'POST',
      url: this.gqlUrl,
      headers: this.buildRequestHeaders(args.headers),
      body: { query: args.query, variables: args.variables, operationName: args.operationName },
      signal: args.signal,
    });

    if (resp.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, resp.errors);
    return resp.data as T;
  }

  public async executeWithAuth<T>(args: {
    session: AuthSession;
    query: string;
    variables?: Record<string, unknown>;
    operationName?: string;
    headers?: RequestHeaderValueMap;
    signal?: AbortSignal;
  }): Promise<T> {
    const baseHeaders = this.http.ensureRequestIdHeader(args.headers ?? {});
    const makeBody = () => ({
      query: args.query,
      variables: args.variables,
      operationName: args.operationName,
    });

    const call = async () => {
      const headers = this.buildRequestHeaders({ ...baseHeaders, ...(await args.session.getAuthHeader()) });
      return this.http.requestRaw<GraphqlResponsePayload<T>>({
        method: 'POST',
        url: this.gqlUrl,
        headers,
        body: makeBody(),
        signal: args.signal,
      });
    };

    const r1 = await call();
    const p1 = (r1.data ?? undefined) as GraphqlResponsePayload<T> | undefined;

    if (r1.ok && !shouldRefreshFromGraphqlFailure(r1.status, p1)) {
      if (p1?.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, p1.errors);
      return p1?.data as T;
    }

    if (!shouldRefreshFromGraphqlFailure(r1.status, p1)) {
      throw new ApiError(`GraphQL HTTP failed (${r1.status})`, r1.status, r1.url, r1.data ?? r1.text);
    }

    const refreshedAccessToken = await args.session.refresh();

    const headersAfterRefresh = withAuthorizationHeader(
      this.buildRequestHeaders({ ...baseHeaders }),
      refreshedAccessToken,
    );

    const r2 = await this.http.requestRaw<GraphqlResponsePayload<T>>({
      method: 'POST',
      url: this.gqlUrl,
      headers: headersAfterRefresh,
      body: makeBody(),
      signal: args.signal,
    });
    const p2 = (r2.data ?? undefined) as GraphqlResponsePayload<T> | undefined;

    if (!r2.ok) {
      throw new ApiError(`GraphQL HTTP failed after refresh (${r2.status})`, r2.status, r2.url, r2.data ?? r2.text);
    }

    if (p2?.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, p2.errors);
    return p2?.data as T;
  }


  // ---------------------------
  // UPLOAD (public)
  // ---------------------------
  public async executeUpload<T>(args: GraphqlUploadArgs & {
    files: File[];
    fileVarName?: string; // default "attachment"
  }): Promise<T> {
    const fileVarName = args.fileVarName ?? 'attachment';

    const form = this.buildMultipartPayload({
      query: args.query,
      operationName: args.operationName,
      variables: args.variables,
      files: args.files,
      fileVarName,
    });

    // IMPORTANT:
    // - Do NOT set 'content-type'. Browser will set boundary automatically.
    // - You may keep other headers like Authorization (not here), accept, etc.
    const headers = this.buildRequestHeaders(args.headers);
    delete (headers as any)['content-type'];
    delete (headers as any)['Content-Type'];

    const r = await this.http.requestRaw<{ data?: T; errors?: any[] }>({
      method: 'POST',
      url: this.gqlUrl,
      headers,
      body: form as any, // HttpClient must pass FormData to fetch without JSON-stringifying
      signal: args.signal,
    });

    if (!r.ok) throw new ApiError(`GraphQL upload failed (${r.status})`, r.status, r.url, r.data ?? r.text);

    const payload = (r.data ?? {}) as any;
    if (payload.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, payload.errors);
    return payload.data as T;
  }

  // ---------------------------
  // UPLOAD (auth-aware, 401 refresh retry)
  // ---------------------------
  public async executeUploadWithAuth<T>(args: {
    session: AuthSession;
    query: string;
    variables?: Record<string, unknown>;
    operationName?: string;
    headers?: RequestHeaderValueMap;
    signal?: AbortSignal;
    files: File[];
    fileVarName?: string; // default "attachment"
  }): Promise<T> {
    const fileVarName = args.fileVarName ?? 'attachment';
    const baseHeaders = this.http.ensureRequestIdHeader(args.headers ?? {});

    const makeHeaders = async () => {
      const h = this.buildRequestHeaders({ ...baseHeaders, ...(await args.session.getAuthHeader()) });
      delete (h as any)['content-type'];
      delete (h as any)['Content-Type'];
      return h;
    };

    const makeForm = () =>
      this.buildMultipartPayload({
        query: args.query,
        operationName: args.operationName,
        variables: args.variables,
        files: args.files,
        fileVarName,
      });

    // 1) try with current token
    const r1 = await this.http.requestRaw<GraphqlResponsePayload<T>>({
      method: 'POST',
      url: this.gqlUrl,
      headers: await makeHeaders(),
      body: makeForm() as any, // rebuild per attempt to be safe
      signal: args.signal,
    });

    const payload1 = (r1.data ?? undefined) as GraphqlResponsePayload<T> | undefined;

    if (r1.ok && !shouldRefreshFromGraphqlFailure(r1.status, payload1)) {
      if (payload1?.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, payload1.errors);
      return payload1?.data as T;
    }

    if (!shouldRefreshFromGraphqlFailure(r1.status, payload1)) {
      throw new ApiError(`GraphQL upload failed (${r1.status})`, r1.status, r1.url, r1.data ?? r1.text);
    }

    // 2) refresh and retry once
    const refreshedAccessToken = await args.session.refresh();

    const refreshedHeaders = withAuthorizationHeader(
      this.buildRequestHeaders({ ...baseHeaders }),
      refreshedAccessToken,
    );

    delete (refreshedHeaders as any)['content-type'];
    delete (refreshedHeaders as any)['Content-Type'];

    const r2 = await this.http.requestRaw<GraphqlResponsePayload<T>>({
      method: 'POST',
      url: this.gqlUrl,
      headers: refreshedHeaders,
      body: makeForm() as any,
      signal: args.signal,
    });

    if (!r2.ok) {
      throw new ApiError(`GraphQL upload failed after refresh (${r2.status})`, r2.status, r2.url, r2.data ?? r2.text);
    }

    const payload2 = (r2.data ?? undefined) as GraphqlResponsePayload<T> | undefined;
    if (payload2?.errors?.length) throw new ApiError('Server is not responding.', 200, this.gqlUrl, payload2.errors);
    return payload2?.data as T;
  }
}
