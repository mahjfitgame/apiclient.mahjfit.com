import type { DefaultHeaderNameOverrides } from './request.headers';

export type JwtTokenPair = {
  jwt_access_token: string;
  jwt_refresh_token: string;
};

export type RequestHeaderValue = string | boolean | number | null | undefined;

export type RequestHeaderValueProvider = () => RequestHeaderValue | Promise<RequestHeaderValue>;

export type RequestHeaderValueSource = RequestHeaderValue | RequestHeaderValueProvider;

export type RequestHeaderValueMap = Record<string, RequestHeaderValue>;

export type RequestHeaders = Record<string, RequestHeaderValueSource>;

export type RequestIdOptions = {
  /**
   * Enable/disable automatic request-id header injection.
   * @default true
   */
  enabled?: boolean;
  /**
   * Header name used for the request id.
   * @default DefaultHeaders.REQUEST_ID ("bfwapisdkrequestid")
   */
  headerName?: string;
  /**
   * Request id generator.
   * @default uuidv7()
   */
  generator?: () => string;
};

export type DomainOptions = {
  baseUrl: string; // graph baseUrl should be https://.../graphql, rest baseUrl can be https://.../rest
  timeoutMs?: number;

  /**
   * Optional websocket connection owned by this API domain.
   * GraphQL and REST use separate clients and their own auth sessions.
   */
  ws?: WsOptions;

  /**
   * Optional overrides for SDK built-in header names. For example, map
   * DefaultHeaders.ACCEPT_LANGUAGE to "x-language" if your API expects
   * a custom language header name.
   *
   * For DefaultHeaders.REQUEST_ID, `requestId.headerName` is still
   * supported and takes precedence over this map.
   */
  defaultHeaderNames?: DefaultHeaderNameOverrides;

  /**
   * Default headers for every REST/GraphQL HTTP request. Values may be static
   * or provider functions that are resolved immediately before each request.
   * Per-call headers are applied last so a single request can override them.
   */
  headers?: RequestHeaders;

  fetchImpl?: typeof fetch;
  /**
   * Browser HTTP cookie handling for REST/GraphQL fetch requests.
   *
   * - true: sends browser-managed cookies by using fetch credentials "include".
   * - false: blocks browser-managed cookies by using fetch credentials "omit".
   * - undefined: keeps the runtime fetch default behavior.
   * 
   * browserCookie: true | false
   *
   * For cross-origin cookie sessions, the server must also send compatible CORS
   * headers such as Access-Control-Allow-Credentials: true and a non-wildcard
   * Access-Control-Allow-Origin.
   */
  browserCookie?: boolean;

  /**
   * Node.js / SSR cookie forwarding for REST/GraphQL fetch requests.
   *
   * When provided, the SDK sends this value as the HTTP Cookie header unless a
   * Cookie header was already provided in `headers` or per-request headers.
   *
   * Use a function when the cookie value can change per request.
   * ssrCookie: () => req.headers.cookie,
   *
   * Note: browsers forbid manually setting the Cookie header. Use
   * `browserCookie: true` for browser-managed cookies.
   */
  ssrCookie?: string | (() => string | undefined);

  /**
   * Optional request-id header added to every outgoing HTTP request.
   * Useful for request tracing / correlation across services and logs.
   * If both `DomainOptions.requestId` and `ApiOptions.config.requestId` are provided,
   * `ApiOptions.config.requestId` takes precedence.
   */

  requestId?: RequestIdOptions;
};
export type WsConnectionState = 'idle' | 'connecting' | 'connected' | 'reconnecting' | 'disconnected';

export type WsSocketOptions = {
  /** Socket.IO path or equivalent transport endpoint path. */
  path?: string;
  /** Transport order to try when establishing the socket connection. */
  transports?: string[];
  /** Whether the browser should send cookies or credentials with the socket request. */
  withCredentials?: boolean;
  /** Extra socket auth payload merged into the adapter options. */
  auth?: Record<string, unknown>;
};

export type WsSocket = {
  connected: boolean;
  id?: string;
  connect(): void;
  disconnect(): void;
  on(event: string, handler: (payload?: unknown) => void): void;
  off(event: string, handler: (payload?: unknown) => void): void;
  emit(event: string, payload?: unknown): void;
};

export type WsSocketFactoryCreateArgs = {
  url: string;
  options?: WsSocketOptions;
};

export type WsSocketFactory = (args: WsSocketFactoryCreateArgs) => WsSocket;

export type WsConnectOptions = {
};

export type WsOptions = {
  /** Ws socket server url, e.g. https://your-host */
  baseUrl: string;
  /** Optional prefix before each sdk event name, e.g. `bfw.nestjs.microservice.api`. */
  eventPrefix?: string;
  /** Socket-level options forwarded to the adapter factory, such as socket.io client settings. */
  socket?: WsSocketOptions;
  /** When a token exists, the SDK can auto-set the socket auth token with this prefix. */
  auth?: {
    /** Prefix added before the access token, usually `Bearer`. */
    socketAuthTokenPrefix?: string;
  };
  /** Required adapter/factory for the socket runtime, such as `io` from `socket.io-client`. */
  socketFactory?: WsSocketFactory;
};

export type RequestLogContext = {
  domain: 'graphql' | 'rest';
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: unknown;
};

export type RequestLogger = (ctx: RequestLogContext) => void;

export type ResponseLogContext = {
  domain: 'graphql' | 'rest';
  method: string;
  url: string;
  status: number;
  ok: boolean;
  headers: Record<string, string>;
  data?: unknown;
  text?: string;
};

export type ResponseLogger = (ctx: ResponseLogContext) => void;

export type ApiOptions = {
  config?: SdkConfig;
  graphql: DomainOptions;
  rest: DomainOptions;
};

export type SdkConfig = {
  tokenStore?: TokenStoreConfig;

  /**
   * Request-id header options (applies to BOTH GraphQL + REST domains).
   * If provided, overrides any per-domain `DomainOptions.requestId`.
   */
  requestId?: RequestIdOptions;

  /**
   * Optional built-in header name overrides applied to BOTH GraphQL + REST
   * HTTP requests. Per-domain `DomainOptions.defaultHeaderNames` can override
   * these values for that domain only.
   *
   * For DefaultHeaders.REQUEST_ID, `requestId.headerName` is still
   * supported and takes precedence over this map.
   */
  defaultHeaderNames?: DefaultHeaderNameOverrides;

  /**
   * Default headers applied to BOTH GraphQL + REST HTTP requests. Values may
   * be static or provider functions resolved before each request.
   */
  headers?: RequestHeaders;

  /**
   * If true, SDK logs outgoing request details right before sending.
   * Uses console.debug by default.
   */
  logRequest?: boolean;

  /**
   * Custom request logger. When provided, it overrides default console logging.
   */
  requestLogger?: RequestLogger;

  /**
   * If true, SDK logs response details after receiving server response.
   * Uses console.debug by default.
   */
  logResponse?: boolean;

  /**
   * Custom response logger. When provided, it overrides default console logging.
   */
  responseLogger?: ResponseLogger;
};

export type TokenStoreConfig = {
  /**
   * Token persistence strategy.
   * - inmemory: use in-memory tokens only (no long-term persistence).
   * - auto: file in Node.js, sessionStorage in browsers, localStorage, cookie, then memory fallback.
   * - file: use Node.js file system.
   * - cookie: use browser cookie.
   * - browserSessionStorage: use browser sessionStorage.
   * - browserLocalStorage: use browser localStorage.
   * - browserIndexedDb: reserved for future async store support (falls back in current sync API).
   */
  persistentStorageStrategy?: 'inmemory' | 'auto' | 'file' | 'cookie' | 'browserSessionStorage' | 'browserLocalStorage' | 'browserIndexedDb';

  /**
   * File name for token persistence in current working directory.
   * Ignored when filePath is provided.
   */
  fileName?: string;

  /**
   * Absolute or relative file path for token persistence.
   */
  filePath?: string;

  /**
   * Cookie key name when strategy is cookie.
   */
  cookieName?: string;

  /**
   * Cookie path when strategy is cookie.
   */
  cookiePath?: string;

  /**
   * Cookie max age in seconds when strategy is cookie.
   */
  cookieMaxAgeSeconds?: number;

  /**
   * Cookie Secure flag when strategy is cookie.
   */
  cookieSecure?: boolean;

  /**
   * Cookie SameSite mode when strategy is cookie.
   */
  cookieSameSite?: 'Strict' | 'Lax' | 'None';

  /**
   * Browser session storage key when strategy is browserSessionStorage.
   */
  browserSessionStorageKey?: string;

  /**
   * Browser local storage key when strategy is browserLocalStorage.
   */
  browserLocalStorageKey?: string;
};

export type GraphqlUploadArgs = {
  query: string;
  variables?: Record<string, unknown>;
  operationName?: string;
  headers?: RequestHeaderValueMap;
  signal?: AbortSignal;
};
export type GraphqlResponsePayload<T> = { data?: T; errors?: any[] };

export type WsEventHandler = (payload: unknown) => void;

export type WsEventListener = {
  event: string;
  handler: WsEventHandler;
};

export type WsUnsubscribeType = () => void;
