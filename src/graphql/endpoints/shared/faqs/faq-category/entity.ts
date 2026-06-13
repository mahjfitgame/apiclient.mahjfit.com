import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { FaqEntity, FaqSelectionSchema } from '../faq/entity';

export class FaqCategoryEntity {
  static metaname: string = (FaqCategoryEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the faq category, auto generated. */
  id?: number;

  /** Title of the faq category. */
  title?: string;

  /** Description of the faq category. */
  desc?: string;

  /** Active of the faq category. */
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

  /** Faq category of faq category. */
  fr_faq_categories?: FaqEntity[];
}

export class FaqCategorySelectionSchema {
  /** Unique ID of the faq category, auto generated. */
  id?: boolean = false;

  /** Title of the faq category. */
  title?: boolean = false;

  /** Description of the faq category. */
  desc?: boolean = false;

  /** Active of the faq category. */
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

  /** Faq category of faq category. */
  fr_faq_categories?: typeof FaqSelectionSchema | FaqSelectionSchema | SchemaRef | false = schemaRef(() => FaqSelectionSchema);
}
