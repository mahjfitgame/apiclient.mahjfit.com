import {
  WebCrawlerAttemptDto,
  WebCrawlerInputDto,
  WebCrawlerJobCompleteDto,
  WebCrawlerJobEnqueueDto,
  WebCrawlerOutputDto,
  WebCrawlerQueueDto,
} from '../../web-crawler';

export class FBDMQueueDto extends WebCrawlerQueueDto {
  declare message: string;
}

export class FBDMInputDto extends WebCrawlerInputDto {
  declare queue: FBDMQueueDto[];
}

// FBDMOutputDto is not requird in this SDK but just created as standard artifact and future extension
export class FBDMOutputDto extends WebCrawlerOutputDto implements FBDMQueueDto {
    declare message: string;
    is_logged_in?: boolean | null;
    is_sent?: boolean | null;
}
export class FBDMAttemptDto extends WebCrawlerAttemptDto {
    declare output?: FBDMOutputDto;
}

export class FBDMInitOutputDto extends WebCrawlerJobCompleteDto {}

export class FBDMEnqueueOutputDto extends WebCrawlerJobEnqueueDto {}
