import {
  WebCrawlerAttemptDto,
  WebCrawlerInputDto,
  WebCrawlerJobCompleteDto,
  WebCrawlerJobEnqueueDto,
  WebCrawlerOutputDto,
  WebCrawlerQueueDto,
} from '../../web-crawler';
import { ChatgptPromptTemplateEnum } from './enum';

export class ChatGptQueueDto extends WebCrawlerQueueDto {
  declare prompt: string;
  declare prompt_template: ChatgptPromptTemplateEnum;
  declare prompt_template_var: Record<string, unknown>;
  declare reference_data: Record<string, unknown>;
}

export class ChatGptInputDto extends WebCrawlerInputDto {
  declare queue: ChatGptQueueDto[];
  declare global_prompt: string;
}

// ChatGptOutputDto is not requird in this SDK but just created as standard artifact and future extension
export class ChatGptOutputDto extends WebCrawlerOutputDto implements ChatGptQueueDto {
  declare prompt: string;
  declare prompt_template: ChatgptPromptTemplateEnum;
  declare prompt_template_var: Record<string, unknown>;
  declare reference_data: Record<string, unknown>;
}

export class ChatGptAttemptDto extends WebCrawlerAttemptDto {
  declare output?: ChatGptOutputDto;
}

export class ChatGptInitOutputDto extends WebCrawlerJobCompleteDto {}

export class ChatGptEnqueueOutputDto extends WebCrawlerJobEnqueueDto {}
