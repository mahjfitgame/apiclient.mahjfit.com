import { Libs, UrlParams } from '../../../utility';
import { RestBase } from '../../libs/base';
import { RestAppHelloInputDto, RestAppHelloOutputDto } from './dto';
import { AEPS_MAIN_REST_APP, AEPS_REST_APP_HELLO } from './url.slug';

export class RestAppService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_REST_APP, pathPattern, params);
  }

  private async helloViaGet(args?: { headers?: Record<string, string>; signal?: AbortSignal }): Promise<RestAppHelloOutputDto> {
    const path = this.makePath(AEPS_REST_APP_HELLO);
    return await this.getPublic<RestAppHelloOutputDto>(path, args?.headers, args?.signal);
  }

  private async helloViaPost(args: { input: RestAppHelloInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<RestAppHelloOutputDto> {
    const path = this.makePath(AEPS_REST_APP_HELLO);
    return await this.postPublic<RestAppHelloOutputDto>(path, args.input, args.headers, args.signal);
  }

  public readonly hello = {
    get: this.helloViaGet.bind(this),
    post: this.helloViaPost.bind(this),
  };


  // Example for future pattern-based endpoints:
  // this.makePath('webhook/:user/:session', { user: 'u-1', session: 's-2' });
  // this.makePath('cdn/*path', { path: 'folder/a.png' });
}
