import { Libs, UrlParams } from '../../../../utility';
import { RestBase } from '../../../libs/base';
import { WebCrawlerJobCompleteDto, WebCrawlerJobEnqueueDto } from '../../web-crawler';
import { FBDMInputDto } from './dto';
import { AEPS_FBDM_POST_ENQUEUE, AEPS_FBDM_POST_INIT, AEPS_MAIN_FACEBOOK_DM } from './url.slug';

export class WebScrFacebookDmService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_FACEBOOK_DM, pathPattern, params);
  }

  private async initViaPost(args: { input: FBDMInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobCompleteDto | boolean> {
    const path = this.makePath(AEPS_FBDM_POST_INIT);
    return await this.postPublic<WebCrawlerJobCompleteDto | boolean>(path, args.input, args.headers, args.signal);
  }

  private async enqueueViaPost(args: { input: FBDMInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobEnqueueDto> {
    const path = this.makePath(AEPS_FBDM_POST_ENQUEUE);
    return await this.postPublic<WebCrawlerJobEnqueueDto>(path, args.input, args.headers, args.signal);
  }

  public readonly init = {
    post: this.initViaPost.bind(this),
  };

  public readonly enqueue = {
    post: this.enqueueViaPost.bind(this),
  };
}
