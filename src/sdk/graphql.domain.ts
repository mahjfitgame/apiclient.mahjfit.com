import type { ApiOptions, RequestHeaders, RequestHeaderValueSource, RequestLogContext, RequestLogger, ResponseLogContext, ResponseLogger } from '../utility/types';
import { DefaultHeaders } from '../utility/request.headers';
import { createDefaultTokenStore } from '../utility/token.store';

import { HttpClient } from '../transports/http.client';
import { GraphqlTransport } from '../transports/graphql.transport';

import { GraphqlApiAuth } from '../auth/graphql.api.auth';
import { AuthSession } from '../auth/auth.session';
import { StatefulAuthSession } from '../auth/stateful.auth.session';
import { GraphqlWsDomain } from './graphql.ws.domain';

// Graph modules

import { LazyRegistry } from './lazy';
import { GraphModuleFactories, GraphService, GraphqlModuleToken } from '../graphql';
import { createBusinessGraphqlFactories } from '../graphql/endpoints/business/domain';
import { createSharedGraphqlFactories, SharedGraphqlDomainAccessors } from '../graphql/endpoints/shared/domain';


export class GraphDomain extends SharedGraphqlDomainAccessors {
  protected readonly reg = new LazyRegistry();

  // low-level transport
  public readonly transport: GraphqlTransport;

  // auth
  public readonly apiAuth: GraphqlApiAuth;
  public readonly authSession: AuthSession;
  public readonly statefulAuthSession: StatefulAuthSession;
  public readonly ws: GraphqlWsDomain;
  
  private readonly factories!: GraphModuleFactories;

  // modules (GraphQL)
  public readonly graph!: GraphService;


  constructor(opts: ApiOptions['graphql'], config?: ApiOptions['config']) {
    super();
    const http = new HttpClient({
      ...opts,
      defaultHeaderNames: { ...(config?.defaultHeaderNames ?? {}), ...(opts.defaultHeaderNames ?? {}) },
      headers: { ...(config?.headers ?? {}), ...(opts.headers ?? {}) },
      domain: 'graphql',
      requestId: config?.requestId ?? opts.requestId,
      requestLogger: resolveRequestLogger(config),
      responseLogger: resolveResponseLogger(config),
    });
    this.transport = new GraphqlTransport(http, opts.baseUrl);

    this.apiAuth = new GraphqlApiAuth(this.transport);
    this.authSession = new AuthSession(createDefaultTokenStore(config?.tokenStore), this.apiAuth);
    this.statefulAuthSession = new StatefulAuthSession();
    this.ws = new GraphqlWsDomain(opts.ws, config, this.authSession);

    this.factories = {
      ...createSharedGraphqlFactories(this.transport, this.authSession, this.statefulAuthSession),
      ...createBusinessGraphqlFactories(this.transport, this.authSession),
    } as GraphModuleFactories;


    // main auth module for GraphQL 
    this.graph = new GraphService(this.transport, this.authSession, this.statefulAuthSession);
  }

  public setBuiltinRequestHeader(header: DefaultHeaders, value: RequestHeaderValueSource): this {
    this.transport.setBuiltinRequestHeader(header, value);
    return this;
  }

  public setRequestHeader(name: string, value: RequestHeaderValueSource): this {
    this.transport.setRequestHeader(name, value);
    return this;
  }

  public setRequestHeaders(headers: RequestHeaders): this {
    this.transport.setRequestHeaders(headers);
    return this;
  }

  public removeBuiltinRequestHeader(header: DefaultHeaders): this {
    this.transport.removeBuiltinRequestHeader(header);
    return this;
  }

  public removeRequestHeader(name: string): this {
    this.transport.removeRequestHeader(name);
    return this;
  }

  public clearRequestHeaders(): this {
    this.transport.clearRequestHeaders();
    return this;
  }

  /**
   * Lazily create a GraphQL module (if not already created) and cache it.
   * @template K The key of the module to create.
   * @param token The module token.
   * @returns The created module.
   * 
   * befrore any module need to use this method to activate tat module such as
   * const obj = new BwfApiSdk(opts);
   * obj.graphql.use(AapiEndpointAuth); <-- this is important
   * obj.graphql.apiEndpointAuth.your_method_will_go();
   */
  public use<K extends keyof GraphModuleFactories>(token: GraphqlModuleToken<K, ReturnType<GraphModuleFactories[K]>>): ReturnType<GraphModuleFactories[K]> {
    return this.reg.require(String(token.key), this.factories[token.key]) as ReturnType<GraphModuleFactories[K]>;
  }
}


function resolveRequestLogger(config?: ApiOptions['config']): RequestLogger | undefined {
  if (typeof config?.requestLogger === 'function') {
    return config.requestLogger;
  }

  if (!config?.logRequest) return undefined;

  return (ctx: RequestLogContext) => {
    console.log(`[REQUEST] [BfwApiSdk:${ctx.domain}] ${ctx.method} ${ctx.url} @ ${Date.now()}`);
    console.dir(
      {
        headers: ctx.headers,
        body: ctx.body,
      },
      { depth: null, colors: true },
    );
  };
}

function resolveResponseLogger(config?: ApiOptions['config']): ResponseLogger | undefined {
  if (typeof config?.responseLogger === 'function') {
    return config.responseLogger;
  }

  if (!config?.logResponse) return undefined;

  return (ctx: ResponseLogContext) => {
    console.log(`[RESPONSE] [${ctx.status}] [BfwApiSdk:${ctx.domain}] ${ctx.method} ${ctx.url} @ ${Date.now()}`);
    console.dir(
      {
        ok: ctx.ok,
        headers: ctx.headers,
        response: ctx.data,
        text: ctx.text,
      },
      { depth: null, colors: true },
    );
  };
}
