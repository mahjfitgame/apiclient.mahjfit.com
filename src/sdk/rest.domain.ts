import type { ApiOptions, RequestHeaders, RequestHeaderValueSource, RequestLogContext, RequestLogger, ResponseLogContext, ResponseLogger } from '../utility/types';
import { DefaultHeaders } from '../utility/request.headers';
import { createDefaultTokenStore } from '../utility/token.store';

import { HttpClient } from '../transports/http.client';
import { RestTransport } from '../transports/rest.transport';

import { RestApiAuth } from '../auth/rest.api.auth';
import { AuthSession } from '../auth/auth.session';
import { StatefulAuthSession } from '../auth/stateful.auth.session';
import { RestWsDomain } from './rest.ws.domain';
import { LazyRegistry } from './lazy';
import {
  WebScrFacebookDmService,
  WebScrGoogleMyBusinessService,
  JwksService,
  RestModuleFactories,
  RestModuleToken,
  RestAppService,
  WebCrawlerService,
  WebScraperService,
  WebhookGatewayService,
  WebScrChatGptService,
} from '../rest/endpoints';

export class RestDomain {
  private readonly reg = new LazyRegistry();

  // low-level transport
  public readonly transport: RestTransport;

  // auth
  public readonly apiAuth: RestApiAuth;
  public readonly authSession: AuthSession;
  public readonly statefulAuthSession: StatefulAuthSession;
  public readonly ws: RestWsDomain;

  private readonly factories: RestModuleFactories = {
    restApp: () => new RestAppService(this.transport, this.authSession, this.statefulAuthSession),
    webCrawler: () => new WebCrawlerService(this.transport, this.authSession, this.statefulAuthSession),
    webhookGateway: () => new WebhookGatewayService(this.transport, this.authSession, this.statefulAuthSession),
    jwks: () => new JwksService(this.transport, this.authSession, this.statefulAuthSession),
    webScraper: () => new WebScraperService(this.transport, this.authSession, this.statefulAuthSession),
    webScrGoogleMyBusiness: () => new WebScrGoogleMyBusinessService(this.transport, this.authSession, this.statefulAuthSession),
    webScrFacebookDm: () => new WebScrFacebookDmService(this.transport, this.authSession, this.statefulAuthSession),
    webScrChatGpt: () => new WebScrChatGptService(this.transport, this.authSession, this.statefulAuthSession),
  };

  constructor(opts: ApiOptions['rest'], config?: ApiOptions['config']) {
    const http = new HttpClient({
      ...opts,
      defaultHeaderNames: { ...(config?.defaultHeaderNames ?? {}), ...(opts.defaultHeaderNames ?? {}) },
      headers: { ...(config?.headers ?? {}), ...(opts.headers ?? {}) },
      domain: 'rest',
      requestId: config?.requestId ?? opts.requestId,
      requestLogger: resolveRequestLogger(config),
      responseLogger: resolveResponseLogger(config),
    });
    this.transport = new RestTransport(http, opts.baseUrl);

    this.apiAuth = new RestApiAuth(this.transport);
    this.authSession = new AuthSession(createDefaultTokenStore(config?.tokenStore), this.apiAuth);
    this.statefulAuthSession = new StatefulAuthSession();
    this.ws = new RestWsDomain(opts.ws, config, this.authSession);

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

  public use<K extends keyof RestModuleFactories>(token: RestModuleToken<K, ReturnType<RestModuleFactories[K]>>): ReturnType<RestModuleFactories[K]> {
    return this.reg.require(String(token.key), this.factories[token.key]) as ReturnType<RestModuleFactories[K]>;
  }

  public get restApp(): RestAppService {
    return this.reg.get<RestAppService>('restApp');
  }

  public get webCrawler(): WebCrawlerService {
    return this.reg.get<WebCrawlerService>('webCrawler');
  }

  public get webhookGateway(): WebhookGatewayService {
    return this.reg.get<WebhookGatewayService>('webhookGateway');
  }

  public get jwks(): JwksService {
    return this.reg.get<JwksService>('jwks');
  }

  public get webScraper(): WebScraperService {
    return this.reg.get<WebScraperService>('webScraper');
  }

  public get webScrGoogleMyBusiness(): WebScrGoogleMyBusinessService {
    return this.reg.get<WebScrGoogleMyBusinessService>('webScrGoogleMyBusiness');
  }

  public get webScrFacebookDm(): WebScrFacebookDmService {
    return this.reg.get<WebScrFacebookDmService>('webScrFacebookDm');
  }

  public get webScrChatGpt(): WebScrChatGptService {
    return this.reg.get<WebScrChatGptService>('webScrChatGpt');
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
