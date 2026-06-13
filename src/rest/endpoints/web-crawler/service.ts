import { Libs, UrlParams } from '../../../utility';
import { RestBase } from '../../libs/base';
import { WebCrawlerSubmitOtpInputDto } from './dto';
import {
  AEPS_MAIN_WEB_CRAWLER,
  AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_GET,
  AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_POST,
} from './url.slug';

export class WebCrawlerService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_WEB_CRAWLER, pathPattern, params);
  }

  private async submitOtpViaGet(args: {
    fingerprint: string;
    id: string;
    otp: string;
    headers?: Record<string, string>;
    signal?: AbortSignal;
  }): Promise<boolean> {
    const path = this.makePath(AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_GET, {
      fingerprint: args.fingerprint,
      id: args.id,
      otp: args.otp,
    });
    return await this.getPublic<boolean>(path, args?.headers, args?.signal);
  }

  private async submitOtpViaPost(args: {
    fingerprint: string;
    id: string;
    input: WebCrawlerSubmitOtpInputDto;
    headers?: Record<string, string>;
    signal?: AbortSignal;
  }): Promise<boolean> {
    const path = this.makePath(AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_POST, {
      fingerprint: args.fingerprint,
      id: args.id,
    });

    return await this.postPublic<boolean>(path, args.input, args.headers, args.signal);
  }

  public readonly submitOtp = {
    get: this.submitOtpViaGet.bind(this),
    post: this.submitOtpViaPost.bind(this),
  };

}
