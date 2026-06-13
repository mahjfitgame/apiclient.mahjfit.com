import { ApiError } from '../utility/errors';
import type { DomainOptions, RequestHeaderValueMap, RequestHeaders, RequestHeaderValueSource, RequestLogger, ResponseLogger } from '../utility/types';
import { DefaultHeaders, findDefaultHeader, resolveRequestHeaderName, type DefaultHeaderNameOverrides } from '../utility/request.headers';
import { uuidv7 } from 'uuidv7';

export type BwfSdkHttpRawResponse<T = unknown> = {
  ok: boolean;
  status: number;
  url: string;
  data?: T;
  text?: string;
};

type HttpClientOptions = DomainOptions & {
  domain: 'graphql' | 'rest';
  requestLogger?: RequestLogger;
  responseLogger?: ResponseLogger;
};

const NOOP_REQUEST_LOGGER: RequestLogger = () => {};
const NOOP_RESPONSE_LOGGER: ResponseLogger = () => {};

export class HttpClient {
  private fetchImpl: typeof fetch;
  private readonly requestLogger: RequestLogger;
  private readonly responseLogger: ResponseLogger;
  private readonly requestIdEnabled: boolean;
  private readonly requestIdHeaderName: string;
  private readonly requestIdGenerator: () => string;
  private readonly defaultHeaderNames: DefaultHeaderNameOverrides;
  private readonly headers: RequestHeaders;
  private readonly headerKeysByLowerName: Record<string, string>;

  constructor(private readonly opts: HttpClientOptions) {
    this.fetchImpl = opts.fetchImpl ?? this.getDefaultFetchImpl();
    this.requestLogger = opts.requestLogger ?? NOOP_REQUEST_LOGGER;
    this.responseLogger = opts.responseLogger ?? NOOP_RESPONSE_LOGGER;
    this.requestIdEnabled = opts.requestId?.enabled ?? true;
    this.defaultHeaderNames = { ...(opts.defaultHeaderNames ?? {}) };
    this.requestIdHeaderName = opts.requestId?.headerName ?? resolveRequestHeaderName(this.defaultHeaderNames, DefaultHeaders.REQUEST_ID);
    this.requestIdGenerator = opts.requestId?.generator ?? uuidv7;
    this.headers = {};
    this.headerKeysByLowerName = {};
    this.setRequestHeaders(opts.headers ?? {});
    if (!this.fetchImpl) throw new Error('fetch not available. Provide fetchImpl.');
  }

  public ensureRequestIdHeader(headers: RequestHeaderValueMap = {}): Record<string, string> {
    const merged = this.resolveRequestHeaderMap(headers);
    if (!this.requestIdEnabled) return merged;

    const existingKey = Object.keys(merged).find((k) => k.toLowerCase() === this.requestIdHeaderName.toLowerCase());
    if (existingKey) return merged;

    merged[this.requestIdHeaderName] = this.requestIdGenerator();
    return merged;
  }


  public resolveRequestHeaderName(header: DefaultHeaders): string {
    if (header === DefaultHeaders.REQUEST_ID) return this.requestIdHeaderName;
    return resolveRequestHeaderName(this.defaultHeaderNames, header);
  }

  public setBuiltinRequestHeader(header: DefaultHeaders, value: RequestHeaderValueSource): void {
    this.setRequestHeader(this.resolveRequestHeaderName(header), value);
  }

  public setRequestHeader(name: string, value: RequestHeaderValueSource): void {
    const normalizedName = this.resolveConfiguredHeaderName(name).trim();
    if (!normalizedName) return;

    const lowerName = normalizedName.toLowerCase();
    const existingKey = this.headerKeysByLowerName[lowerName];
    if (existingKey) delete this.headers[existingKey];

    this.headerKeysByLowerName[lowerName] = normalizedName;
    this.headers[normalizedName] = value;
  }

  public setRequestHeaders(headers: RequestHeaders): void {
    for (const [name, value] of Object.entries(headers)) {
      this.setRequestHeader(name, value);
    }
  }

  public removeBuiltinRequestHeader(header: DefaultHeaders): void {
    this.removeRequestHeader(this.resolveRequestHeaderName(header));
  }

  public removeRequestHeader(name: string): void {
    const normalizedName = this.resolveConfiguredHeaderName(name).trim();
    if (!normalizedName) return;

    const lowerName = normalizedName.toLowerCase();
    const existingKey = this.headerKeysByLowerName[lowerName];
    if (!existingKey) return;

    delete this.headers[existingKey];
    delete this.headerKeysByLowerName[lowerName];
  }

  public clearRequestHeaders(): void {
    for (const key of Object.keys(this.headers)) {
      delete this.headers[key];
    }

    for (const key of Object.keys(this.headerKeysByLowerName)) {
      delete this.headerKeysByLowerName[key];
    }
  }


  public hasDefaultRequestHeader(name: string): boolean {
    const normalizedName = this.resolveConfiguredHeaderName(name).toLowerCase();
    return Boolean(this.headerKeysByLowerName[normalizedName]);
  }


  public resolveRequestHeaderMap(headers: RequestHeaderValueMap = {}): Record<string, string> {
    const resolved: Record<string, string> = {};

    for (const [key, value] of Object.entries(headers)) {
      if (value != null) resolved[this.resolveConfiguredHeaderName(key)] = String(value);
    }

    return resolved;
  }

  private resolveConfiguredHeaderName(name: string): string {
    const normalizedName = name.trim();
    const builtinHeader = findDefaultHeader(normalizedName);
    if (!builtinHeader) return normalizedName;

    return this.resolveRequestHeaderName(builtinHeader);
  }

  private async resolveDefaultHeaders(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};

    for (const [key, source] of Object.entries(this.headers)) {
      const value = typeof source === 'function' ? await source() : source;
      if (value == null) continue;
      headers[key] = String(value);
    }

    return headers;
  }

  private resolveSsrCookie(): string | undefined {
    const value = this.opts.ssrCookie;
    if (typeof value === 'function') return value();
    return value;
  }

  private hasHeader(headers: Record<string, string>, name: string): boolean {
    return Object.keys(headers).some((key) => key.toLowerCase() === name.toLowerCase());
  }

  private resolveBrowserCredentials(): RequestCredentials | undefined {
    if (this.opts.browserCookie === true) return 'include';
    if (this.opts.browserCookie === false) return 'omit';
    return undefined;
  }

  private getDefaultFetchImpl(): typeof fetch {
    const defaultFetch = globalThis.fetch;
    if (typeof defaultFetch !== 'function') {
      return defaultFetch as typeof fetch;
    }

    // Keep fetch bound to globalThis so browser/WebView environments do not throw
    // "Failed to execute 'fetch' on 'Window': Illegal invocation".
    return defaultFetch.bind(globalThis) as typeof fetch;
  }

  /**
   * Raw request that does NOT throw on non-2xx.
   * Used by transports to detect 401 and trigger refresh.
   */
  public async requestRaw<T>(args: {
    method: string;
    url: string;
    headers?: RequestHeaderValueMap;
    body?: unknown;
    signal?: AbortSignal;
  }): Promise<BwfSdkHttpRawResponse<T>> {
    const headers = this.sanitizeHeaders(this.ensureRequestIdHeader({
      ...(await this.resolveDefaultHeaders()),
      ...this.resolveRequestHeaderMap(args.headers ?? {}),
    }));

    const ssrCookie = this.resolveSsrCookie()?.trim();
    if (ssrCookie && !this.hasHeader(headers, 'cookie')) {
      headers.Cookie = ssrCookie;
    }

    let body: any = undefined;

    if (args.body !== undefined) {
      const b: any = args.body;

      // 1) FormData: DO NOT set content-type (browser/undici will add boundary)
      const isFormData = typeof FormData !== 'undefined' && b instanceof FormData;

      if (isFormData) {
        // Remove any content-type (it breaks multipart boundary)
        delete headers['content-type'];
        delete headers['Content-Type'];
        body = b;
      } else {
        // 2) If caller already set content-type, respect it
        const ct = headers['content-type'] ?? headers['Content-Type'];

        // 3) Auto JSON only when body is a plain object AND no explicit content-type was set
        const isPlainObject =
          typeof b === 'object' &&
          b !== null &&
          !Array.isArray(b) &&
          (Object.getPrototypeOf(b) === Object.prototype || Object.getPrototypeOf(b) === null);

        if (!ct) {
          if (isPlainObject) {
            headers['content-type'] = 'application/json';
            body = JSON.stringify(b);
          } else {
            // Blob/ArrayBuffer/Uint8Array/Buffer/stream/etc
            body = b;
          }
        } else {
          // Explicit content-type set by caller
          body = String(ct).includes('application/json') ? JSON.stringify(b) : b;
        }
      }
    }

    const signal = args.signal ?? this.buildTimeoutSignal(this.opts.timeoutMs);

    this.requestLogger({
      domain: this.opts.domain,
      method: args.method,
      url: args.url,
      headers,
      body,
    });

    const credentials = this.resolveBrowserCredentials();

    const res = await this.fetchImpl(args.url, {
      method: args.method,
      headers,
      body,
      signal,
      ...(credentials ? { credentials } : {}),
    });

    const text = await res.text();
    const parsed = safeJson(text);

    this.responseLogger({
      domain: this.opts.domain,
      method: args.method,
      url: args.url,
      status: res.status,
      ok: res.ok,
      headers: this.responseHeadersToObject(res.headers),
      data: parsed ?? undefined,
      text: parsed ? undefined : text,
    });

    return {
      ok: res.ok,
      status: res.status,
      url: args.url,
      data: (parsed ?? undefined) as T | undefined,
      text: parsed ? undefined : text,
    };
  }

  /**
   * Convenience method that throws on non-2xx.
   * Keep for auth endpoints and normal calls where you don't need 401 handling.
   */
  public async request<T>(args: {
    method: string;
    url: string;
    headers?: RequestHeaderValueMap;
    body?: unknown;
    signal?: AbortSignal;
  }): Promise<T> {
    const raw = await this.requestRaw<T>(args);

    if (!raw.ok) {
      throw new ApiError(`Request failed (${raw.status})`, raw.status, raw.url, raw.data ?? raw.text);
    }
    // prefer parsed JSON if available, else text
    return (raw.data ?? (raw.text as any)) as T;
  }

  private buildTimeoutSignal(timeoutMs?: number): AbortSignal | undefined {
    if (!timeoutMs) return undefined;

    const anyAbortSignal = AbortSignal as any;
    if (typeof anyAbortSignal.timeout === 'function') {
      return anyAbortSignal.timeout(timeoutMs) as AbortSignal;
    }

    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeoutMs);
    return controller.signal;
  }



  private responseHeadersToObject(headers: Headers): Record<string, string> {
    const responseHeaders: Record<string, string> = {};

    headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    return responseHeaders;
  }
  private sanitizeHeaders(headers: Record<string, unknown>): Record<string, string> {
    const clean: Record<string, string> = {};
    const normalizedKeyIndex: Record<string, string> = {};

    for (const [key, value] of Object.entries(headers)) {
      if (typeof value !== 'string') continue;

      const normalizedValue = value.trim();
      if (!normalizedValue) continue;

      const isNullishLiteral = normalizedValue.toLowerCase() === 'null' || normalizedValue.toLowerCase() === 'undefined';
      if (isNullishLiteral) continue;

      const normalizedKey = key.toLowerCase();
      const previousKey = normalizedKeyIndex[normalizedKey];

      if (previousKey) {
        delete clean[previousKey];
      }

      normalizedKeyIndex[normalizedKey] = key;
      clean[key] = normalizedValue;
    }

    return clean;
  }
}

function safeJson(text: string) {
  try {
    return text ? JSON.parse(text) : undefined;
  } catch {
    return undefined;
  }
}
