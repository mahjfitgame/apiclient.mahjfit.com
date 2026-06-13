export class RestAppDto {
  static metaname: string = 'RestApp';
}

export class RestAppHelloInputDto extends RestAppDto {
  declare data: Record<string, unknown>;
}

export class RestAppHelloOutputDto extends RestAppDto {
  declare success: boolean;
  declare message: string;
  declare data?: Record<string, unknown>;
}
