import type { DIFactory } from '../../sdk/lazy';
import type { JwksService } from './jwks/service';
import type { RestAppService } from './rest-app/service';
import type { WebCrawlerService } from './web-crawler/service';
import type { WebScraperService } from './web-scraper/service';
import type { WebhookGatewayService } from './webhook-gateway/service';
import type { WebScrGoogleMyBusinessService } from './web-scraper/google-my-business/service';
import type { WebScrFacebookDmService } from './web-scraper/facebook-dm/service';
import type { WebScrChatGptService } from './web-scraper/chat-gpt/service';

export type RestModuleToken<K extends keyof RestModuleFactories, T> = {
  key: K;
  _type?: T;
};

export type RestModuleFactories = {
  restApp: DIFactory<RestAppService>;
  webCrawler: DIFactory<WebCrawlerService>;
  webhookGateway: DIFactory<WebhookGatewayService>;
  jwks: DIFactory<JwksService>;
  webScraper: DIFactory<WebScraperService>;
  webScrGoogleMyBusiness: DIFactory<WebScrGoogleMyBusinessService>;
  webScrFacebookDm: DIFactory<WebScrFacebookDmService>;
  webScrChatGpt: DIFactory<WebScrChatGptService>;
};

export const RestApp = { key: 'restApp' } as
  RestModuleToken<'restApp', RestAppService>;

export const WebCrawler = { key: 'webCrawler' } as
  RestModuleToken<'webCrawler', WebCrawlerService>;

export const WebhookGateway = { key: 'webhookGateway' } as
  RestModuleToken<'webhookGateway', WebhookGatewayService>;

export const Jwks = { key: 'jwks' } as
  RestModuleToken<'jwks', JwksService>;

export const WebScraper = { key: 'webScraper' } as
  RestModuleToken<'webScraper', WebScraperService>;

export const WebScrGoogleMyBusiness = { key: 'webScrGoogleMyBusiness' } as
  RestModuleToken<'webScrGoogleMyBusiness', WebScrGoogleMyBusinessService>;

export const WebScrFacebookDm = { key: 'webScrFacebookDm' } as
  RestModuleToken<'webScrFacebookDm', WebScrFacebookDmService>;

export const WebScrChatGpt = { key: 'webScrChatGpt' } as
  RestModuleToken<'webScrChatGpt', WebScrChatGptService>;
