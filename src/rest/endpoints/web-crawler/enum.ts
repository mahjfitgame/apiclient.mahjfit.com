export enum WebCrawlerResponseTypeEnum {
  LOCAL_CSV = '1',
  REMOTE_GOOGLE_SHEETS = '2',
  REMOTE_MS_EXCEL = '3',
  WEBHOOK_API = '4',
}

export enum WebCrawlerWorkStatusEnum {
  PENDING = '1',
  SUCCESS = '2',
  FAILED = '3',
  BLOCKED = '8',
  ERROR = '9',
  CANCELLED = '10',
  INTERRUPTED = '11',
  NOT_FOUND = '12',
  TIMEOUT = '13',
}

export enum WebCrawlerTwofaAuthenticationTypeEnum {
  TWOFAT_2FAAPP = '1',
  TWOFAT_EMAIL = '2',
  TWOFAT_SMS = '3',
  TWOFAT_WHATSAPP = '4',
  TWOFAT_SEQURITY_QUE = '5',
  TWOFAT_SECONDARY_DEVICE = '6',
}
