import { WebhookGatewayBulkSmsTypeEnum } from './enum';

export class WebhookGatewayDto {
  static metaname: string = 'WebhookGateway';
}

export class WebhookGatewayTrialInputDto extends WebhookGatewayDto {
  [key: string]: unknown;
}

export class WebhookGatewayTrialOutputDto extends WebhookGatewayDto {
  declare token: string;
}

export class WebhookGatewayBulkSmsSubmissionDto extends WebhookGatewayDto {
  declare id?: string | null;
  declare date?: string | null;
}

export class WebhookGatewayBulkSmsStatusDto extends WebhookGatewayDto {
  declare id?: string | null;
  declare type?: string | null;
}

export class WebhookGatewayBulkSmsInputDto extends WebhookGatewayDto {
  declare id: number;
  declare type: WebhookGatewayBulkSmsTypeEnum;
  declare from?: number | null;
  declare to?: number | null;
  declare body?: string | null;
  declare encoding?: string | null;
  declare protocolId?: number | null;
  declare messageClass?: number | null;
  declare numberOfParts?: number | null;
  declare creditCost?: number | null;
  declare submission?: WebhookGatewayBulkSmsSubmissionDto | null;
  declare status?: WebhookGatewayBulkSmsStatusDto | null;
  declare relatedSentMessageId?: string | null;
  declare userSuppliedId?: string | null;
}
