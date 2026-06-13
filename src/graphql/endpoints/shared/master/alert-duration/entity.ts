import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';

export class AlertDurationEntity {
  static metaname: string = (AlertDurationEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the email template, auto generated. */
  id?: number;
  /** Title of the email template. */
  title?: string;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** When record is updated, date-time will be saved. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  //fr_user_save_search?: UserSavedSearchEntity[];
}

export class AlertDurationSelectionSchema {
  /** Unique ID of the email template, auto generated. */
  id?: boolean = false;
  /** Title of the email template. */
  title?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  //fr_user_save_search?: typeof UserSavedSearchSelectionSchema | UserSavedSearchSelectionSchema | SchemaRef | false = schemaRef(() => UserSavedSearchSelectionSchema);
}
