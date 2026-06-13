import { Libs, UrlParams } from '../../../utility';
import { RestBase } from '../../libs/base';
import { AEPS_MAIN_WEB_SCRAPER, AEPS_WEB_SCRAPER_PING } from './url.slug';

export class WebScraperService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_WEB_SCRAPER, pathPattern, params);
  }

  private async pingViaGet(args?: { headers?: Record<string, string>; signal?: AbortSignal }): Promise<string> {
    const path = this.makePath(AEPS_WEB_SCRAPER_PING);
    return await this.getPublic<string>(path, args?.headers, args?.signal);
  }

  public readonly ping = {
    get: this.pingViaGet.bind(this),
  };
}
