import { Libs, UrlParams } from '../../../../utility';
import { RestBase } from '../../../libs/base';
import { WebCrawlerJobCompleteDto, WebCrawlerJobEnqueueDto } from '../../web-crawler';
import { ChatGptInputDto } from './dto';
import { AEPS_CGPT_POST_ENQUEUE, AEPS_CGPT_POST_INIT, AEPS_MAIN_CHAT_GPT } from './url.slug';

export class WebScrChatGptService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_CHAT_GPT, pathPattern, params);
  }

  private async initViaPost(args: { input: ChatGptInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobCompleteDto | boolean> {
    const path = this.makePath(AEPS_CGPT_POST_INIT);
    return await this.postPublic<WebCrawlerJobCompleteDto | boolean>(path, args.input, args.headers, args.signal);
  }

  private async enqueueViaPost(args: { input: ChatGptInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebCrawlerJobEnqueueDto> {
    const path = this.makePath(AEPS_CGPT_POST_ENQUEUE);
    return await this.postPublic<WebCrawlerJobEnqueueDto>(path, args.input, args.headers, args.signal);
  }

  public readonly init = {
    post: this.initViaPost.bind(this),
  };

  public readonly enqueue = {
    post: this.enqueueViaPost.bind(this),
  };
}
