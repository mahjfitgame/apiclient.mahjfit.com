import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { QueueEmailEntity, QueueEmailSelectionSchema } from '../../queue/email/entity';

export class WorkStatusEntity {
  static metaname: string = (WorkStatusEntity.name).replace(EntitySuffix, '');

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
  /** Queue email associated with this work status. */
  fr_queue_email?: QueueEmailEntity[];
}

export class WorkStatusSelectionSchema {
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
  /** Queue email associated with this work status. */
  fr_queue_email?: typeof QueueEmailSelectionSchema | QueueEmailSelectionSchema | SchemaRef | false = schemaRef(() => QueueEmailSelectionSchema);
}
