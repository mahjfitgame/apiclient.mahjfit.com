export class WebScraperDto {
  static metaname: string = 'WebScraper';
}

export class WebScraperPingOutputDto extends WebScraperDto {
  declare message: string;
}
