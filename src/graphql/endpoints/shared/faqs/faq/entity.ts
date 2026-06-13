import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { FaqCategoryEntity, FaqCategorySelectionSchema } from '../faq-category/entity';

export class FaqEntity {
  static metaname: string = (FaqEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the pagemaster, auto generated. */
  id?: number;

  /** Faq category of the faq. */
  faqcat_id?: number;

  /** Url slug of the faq. */
  url_slug?: string;

  /** Question of the faq. */
  question?: string;

  /** Answer of the faq. */
  answer?: string;

  /** Active of the faq. */
  active?: DateTime;

  /** When record is created, date-time will be saved. */
  created?: DateTime;

  /** When record is updated, date-time will be saved. */
  updated?: DateTime;

  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  deleted?: DateTime;

  /** Faq categories of the faq. */
  fr_faq_category?: FaqCategoryEntity;
}

export class FaqSelectionSchema {
  /** Unique ID of the pagemaster, auto generated. */
  id?: boolean = false;

  /** Faq category of the faq. */
  faqcat_id?: boolean = false;

  /** Url slug of the faq. */
  url_slug?: boolean = false;

  /** Question of the faq. */
  question?: boolean = false;

  /** Answer of the faq. */
  answer?: boolean = false;

  /** Active of the faq. */
  active?: boolean = false;

  /** When record is created, date-time will be saved. */
  created?: boolean = false;

  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;

  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  deleted?: boolean = false;

  /** Faq categories of the faq. */
  fr_faq_category?: typeof FaqCategorySelectionSchema | FaqCategorySelectionSchema | SchemaRef | false = schemaRef(() => FaqCategorySelectionSchema);
}
