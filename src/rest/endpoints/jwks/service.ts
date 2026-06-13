import { Libs, UrlParams } from '../../../utility';
import { RestBase } from '../../libs/base';
import { JwksOutputDto } from './dto';
import { AEPS_JWKS_JSON, AEPS_MAIN_JWKS } from './url.slug';

export class JwksService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_JWKS, pathPattern, params);
  }

  private async jsonViaGet(args?: { headers?: Record<string, string>; signal?: AbortSignal }): Promise<JwksOutputDto> {
    const path = this.makePath(AEPS_JWKS_JSON);
    return await this.getPublic<JwksOutputDto>(path, args?.headers, args?.signal);
  }

  public readonly json = {
    get: this.jsonViaGet.bind(this),
  };
}
