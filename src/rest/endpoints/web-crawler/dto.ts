import { WebCrawlerResponseTypeEnum, WebCrawlerTwofaAuthenticationTypeEnum, WebCrawlerWorkStatusEnum } from './enum';

export class WebCrawlerDto {
  static metaname: string = 'WebCrawler';
}

export class WebCrawlerBatchDto extends WebCrawlerDto {
  declare id: string;
  declare alert_email: string;
  declare at: string;
}

export class WebCrawlerAuthDto extends WebCrawlerDto {
  declare u?: string;
  declare p?: string;
  declare keep_login?: boolean;
  declare twofa: WebCrawlerTwofaAuthenticationTypeEnum | null;
  declare sque_a?: string | null;
  declare sans_a?: string;
  declare sque_b?: string | null;
  declare sans_b?: string | null;
  declare sque_c?: string | null;
  declare sans_c?: string | null;
  declare sque_d?: string | null;
  declare sans_d?: string | null;
  declare sque_e?: string | null;
  declare sans_e?: string | null;
}

export class WebCrawlerUniqueQueueDto extends WebCrawlerDto {
    declare id: string | number;
    declare browse_url: string;
}

export class WebCrawlerQueueDto extends WebCrawlerUniqueQueueDto {
}
export class WebCrawlerReqRespConfDto extends WebCrawlerDto {
  declare type: WebCrawlerResponseTypeEnum;
  declare webhook?: string;
  declare jwt?: string;
  declare u?: string;
  declare p?: string;
  declare at?: string;
}
export class WebCrawlerRequestDto extends WebCrawlerReqRespConfDto {
    
}
export class WebCrawlerResponseDto extends WebCrawlerReqRespConfDto {
  
}

export class WebCrawlerInputDto extends WebCrawlerDto {
    declare client_id: string;
    declare batch: WebCrawlerBatchDto;
    declare auth: WebCrawlerAuthDto;
    declare response: WebCrawlerResponseDto;
    declare queue: WebCrawlerQueueDto[];
}
export class WebCrawlerOutputDto extends WebCrawlerQueueDto {
    declare process_ip: string;
    declare process_status: WebCrawlerWorkStatusEnum;
    declare process_at: string;
    declare process_by: string;
    declare process_batch: string;
    declare process_uid: string;
    declare process_note: string;
    declare process_raw_data?: string;
}

export class WebCrawlerAttemptDto extends WebCrawlerDto {
    declare attempt: number;
    declare status: WebCrawlerWorkStatusEnum;
    declare ref: string | null;
    declare note: string | null;
    declare output?: WebCrawlerOutputDto;
}

export class WebCrawlerJobCompleteDto extends WebCrawlerDto {
  declare service_name: string;
  declare system_id: string;
  declare batch_id: string;
  declare request_queue_id: string;
  declare output_data_url: string;
  declare attempt_log_url: string;
  declare resp_type: WebCrawlerResponseTypeEnum;
  declare link_expire_date: string;
  declare request_date: string;
  declare complete_date: string;
  declare note: string;
  declare email_alert: boolean;
}

export class WebCrawlerJobEnqueueDto extends WebCrawlerDto {
  declare service_name: string;
  declare system_id: string;
  declare batch_id: string;
}

export class WebCrawlerSubmitOtpInputDto extends WebCrawlerDto {
  declare otp: string;
}
