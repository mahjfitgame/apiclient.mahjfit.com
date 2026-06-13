import { Libs, UrlParams } from '../../../../utility';
import { RestBase } from '../../../libs/base';
import { WebCrawlerJobCompleteDto, WebCrawlerJobEnqueueDto } from '../../web-crawler';
import { GMBInputDto } from './dto';
import { AEPS_GMB_POST_ENQUEUE, AEPS_GMB_POST_INIT, AEPS_MAIN_GOOGLE_MY_BUSINESS } from './url.slug';

export class WebScrGoogleMyBusinessService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_GOOGLE_MY_BUSINESS, pathPattern, params);
  }

  private async initViaPost(args: { input: GMBInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobCompleteDto | boolean> {
    const path = this.makePath(AEPS_GMB_POST_INIT);
    return await this.postPublic<WebCrawlerJobCompleteDto | boolean>(path, args.input, args.headers, args.signal);
  }

  private async enqueueViaPost(args: { input: GMBInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobEnqueueDto> {
    const path = this.makePath(AEPS_GMB_POST_ENQUEUE);
    return await this.postPublic<WebCrawlerJobEnqueueDto>(path, args.input, args.headers, args.signal);
  }

  public readonly init = {
    post: this.initViaPost.bind(this),
  };

  public readonly enqueue = {
    post: this.enqueueViaPost.bind(this),
  };
}
