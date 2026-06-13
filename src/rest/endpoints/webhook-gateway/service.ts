import { Libs, UrlParams } from '../../../utility';
import { RestBase } from '../../libs/base';
import {
  WebhookGatewayBulkSmsInputDto,
  WebhookGatewayTrialInputDto,
  WebhookGatewayTrialOutputDto,
} from './dto';
import { WebhookGatewayBulkSmsOutput } from './type';
import {
  AEPS_MAIN_WEBHOOK_GATEWAY,
  AEPS_WEBHOOK_GATEWAY_BULK_SMS,
  AEPS_WEBHOOK_GATEWAY_TRIAL,
  AEPS_WEBHOOK_GATEWAY_WEBSOCKET,
} from './url.slug';

export class WebhookGatewayService extends RestBase {
  private makePath(pathPattern: string, params?: UrlParams): string {
    return Libs.composePatternUrl(AEPS_MAIN_WEBHOOK_GATEWAY, pathPattern, params);
  }

  private async trialViaPost(args: { input: WebhookGatewayTrialInputDto; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebhookGatewayTrialOutputDto> {
    const path = this.makePath(AEPS_WEBHOOK_GATEWAY_TRIAL);
    return await this.postPublic<WebhookGatewayTrialOutputDto>(path, args.input, args.headers, args.signal);
  }

  private async websocketViaGet(args?: { headers?: Record<string, string>; signal?: AbortSignal }): Promise<boolean> {
    const path = this.makePath(AEPS_WEBHOOK_GATEWAY_WEBSOCKET);
    return await this.getPublic<boolean>(path, args?.headers, args?.signal);
  }

  private async bulkSmsViaPost(args: { input: WebhookGatewayBulkSmsInputDto[]; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<WebhookGatewayBulkSmsOutput> {
    const path = this.makePath(AEPS_WEBHOOK_GATEWAY_BULK_SMS);
    return await this.postPublic<WebhookGatewayBulkSmsOutput>(path, args.input, args.headers, args.signal);
  }

  public readonly trial = {
    post: this.trialViaPost.bind(this),
  };

  public readonly websocket = {
    get: this.websocketViaGet.bind(this),
  };

  public readonly bulkSms = {
    post: this.bulkSmsViaPost.bind(this),
  };
}
