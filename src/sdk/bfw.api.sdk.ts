import type { ApiOptions, RequestHeaders, RequestHeaderValueSource } from '../utility/types';
import { GraphDomain } from './graphql.domain';
import { RestDomain } from './rest.domain';
import { DefaultHeaders, type AuthconfRequestHeaderKey } from '../utility/request.headers';

/**
 * Facade for the independent GraphQL and REST domains.
 * Each domain owns its HTTP and optional WebSocket transports.
 */
export class BfwApiSdk {
  /** Connect with GaphQL API endpoints */
  public readonly graphql: GraphDomain;
  /** Connect with REST API endpoints */
  public readonly rest: RestDomain;

  constructor(opts: ApiOptions) {
    this.graphql = new GraphDomain(opts.graphql, opts.config);
    this.rest = new RestDomain(opts.rest, opts.config);
  }


  /**
   * Set or replace a dynamic default request header for both REST and GraphQL.
   * The value is resolved before each request, so callbacks can read the latest
   * value from app state without recreating the SDK instance.
   */
  public setBuiltinRequestHeader(header: DefaultHeaders, value: RequestHeaderValueSource): this {
    this.graphql.setBuiltinRequestHeader(header, value);
    this.rest.setBuiltinRequestHeader(header, value);
    return this;
  }

  public setRequestHeader(name: string, value: RequestHeaderValueSource): this {
    this.graphql.setRequestHeader(name, value);
    this.rest.setRequestHeader(name, value);
    return this;
  }

  public setRequestHeaders(headers: RequestHeaders): this {
    this.graphql.setRequestHeaders(headers);
    this.rest.setRequestHeaders(headers);
    return this;
  }

  public removeBuiltinRequestHeader(header: DefaultHeaders): this {
    this.graphql.removeBuiltinRequestHeader(header);
    this.rest.removeBuiltinRequestHeader(header);
    return this;
  }

  public removeRequestHeader(name: string): this {
    this.graphql.removeRequestHeader(name);
    this.rest.removeRequestHeader(name);
    return this;
  }

  public clearRequestHeaders(): this {
    this.graphql.clearRequestHeaders();
    this.rest.clearRequestHeaders();
    return this;
  }

  public setAuthconfRequestHeader(name: AuthconfRequestHeaderKey, value: RequestHeaderValueSource): this {
    return this.setBuiltinRequestHeader(name, value);
  }

  public setHeaderAcceptLanguage(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.ACCEPT_LANGUAGE, value);
  }

  public setHeaderCurrentBidi(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.CURRENT_BIDI, value);
  }

  public setHeaderDToken(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.DTOKEN, value);
  }

  public setHeaderApolloRequirePreflight(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.APOLLO_REQUIRE_PREFLIGHT, value);
  }

  public setHeaderAppClientInstanceId(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.APP_CLIENT_INSTANCE_ID, value);
  }

  public setHeaderSession(value: RequestHeaderValueSource): this {
    return this.setAuthconfRequestHeader(DefaultHeaders.SESSION, value);
  }

  public setHeaderRequestId(value: RequestHeaderValueSource): this {
    return this.setBuiltinRequestHeader(DefaultHeaders.REQUEST_ID, value);
  }

}
