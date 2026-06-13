import { ApiError } from '../utility/errors';
import { HttpClient } from './http.client';
import type { AuthSession } from '../auth/auth.session';
import type { RequestHeaderValueMap, RequestHeaders, RequestHeaderValueSource } from '../utility/types';
import { DefaultHeaders } from '../utility/request.headers';

function shouldRefreshFromRestFailure(status: number, body: unknown): boolean {
  if (status === 401) return true;

  const text = JSON.stringify(body ?? '').toLowerCase();
  if (text.includes('invalid or expired token')) return true;
  if (text.includes('expired token')) return true;

  return false;
}

export class RestTransport {
  constructor(private readonly http: HttpClient, private readonly baseUrl: string) {}

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

  private join(path: string) {
    const b = this.baseUrl.replace(/\/+$/, '');
    const p = path.replace(/^\/+/, '');
    return `${b}/${p}`;
  }

  // Basic (no auth / no retry)
  public async post<T>(path: string, body: unknown, headers?: RequestHeaderValueMap, signal?: AbortSignal) {
    return await this.http.request<T>({ method: 'POST', url: this.join(path), body, headers, signal });
  }

  public async get<T>(path: string, headers?: RequestHeaderValueMap, signal?: AbortSignal) {
    return await this.http.request<T>({ method: 'GET', url: this.join(path), headers, signal });
  }

  /**
   * Auth-aware request:
   * - attaches Authorization header from THIS domain's AuthSession
   * - if 401: refresh once and retry once
   */
  public async requestWithAuth<T>(args: {
    session: AuthSession;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    body?: unknown;
    headers?: RequestHeaderValueMap;
    signal?: AbortSignal;
  }): Promise<T> {
    const url = this.join(args.path);
    const baseHeaders = this.http.ensureRequestIdHeader(args.headers ?? {});

    // 1) try with current token
    const h1 = { ...baseHeaders, ...(await args.session.getAuthHeader()) };
    const r1 = await this.http.requestRaw<T>({
      method: args.method,
      url,
      headers: h1,
      body: args.body,
      signal: args.signal,
    });

    if (r1.ok) return (r1.data ?? (r1.text as any)) as T;

    if (!shouldRefreshFromRestFailure(r1.status, r1.data ?? r1.text)) {
      throw new ApiError(`Request failed (${r1.status})`, r1.status, r1.url, r1.data ?? r1.text);
    }

    // 2) refresh (single-flight) and retry once
    await args.session.refresh();

    const h2 = { ...baseHeaders, ...(await args.session.getAuthHeader()) };
    const r2 = await this.http.requestRaw<T>({
      method: args.method,
      url,
      headers: h2,
      body: args.body,
      signal: args.signal,
    });

    if (r2.ok) return (r2.data ?? (r2.text as any)) as T;

    throw new ApiError(`Request failed after refresh (${r2.status})`, r2.status, r2.url, r2.data ?? r2.text);
  }
}
