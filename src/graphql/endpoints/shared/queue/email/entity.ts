import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../../folk/user-authorisation/entity';
import { WorkStatusEntity, WorkStatusSelectionSchema } from '../../master/work-status/entity';
import { WorkStatusEnum } from '../../master/work-status/enum';

export class QueueEmailEntity {
  static metaname: string = (QueueEmailEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the queue email, auto generated. */
  id?: number;

  /** Work status ID of the queue email. */
  wrkstatus_id?: WorkStatusEnum;

  /** From user ID of the queue email. */
  from_uar_id?: number;

  /** To user ID of the queue email. */
  to_uar_id?: number;

  /** Reference ID of the queue email. */
  ref_id?: string;

  /** Reference type of the queue email. */
  ref_type?: string;

  /** Authorisation role id of the user. */
  created_uar_id?: number;

  /** From email of the queue email. */
  from_email?: string;

  /** To email of the queue email. */
  to_email?: string;

  /** CC email of the queue email. */
  cc?: string;

  /** CC Other email of the queue email. */
  ccother?: string;

  /** BCC email of the queue email. */
  bcc?: string;

  /** Subject of the queue email. */
  subject?: string;

  /** Body of the queue email. */
  body?: string;

  /** Raw json data of the queue process. */
  raw_data?: any;

  /** Whether the queue email is sent or not. */
  sent?: DateTime;

  /** When record is created, date-time will be saved. */
  created?: DateTime;

  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: DateTime;

  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;

  /** From user authorisation of the queue email */
  fr_from_user_authorisation?: UserAuthorisationEntity;

  /** To user authorisation of the queue email */
  fr_to_user_authorisation?: UserAuthorisationEntity;

  /** Created User authorisation of the queue email added by */
  fr_created_user_authorisation?: UserAuthorisationEntity;

  /** Work status of the queue email */
  fr_work_status?: WorkStatusEntity;
}

export class QueueEmailSelectionSchema {
  /** Unique ID of the queue email, auto generated. */
  id?: boolean = false;
  /** Work status ID of the queue email. */
  wrkstatus_id?: boolean = false;
  /** From user ID of the queue email. */
  from_uar_id?: boolean = false;
  /** To user ID of the queue email. */
  to_uar_id?: boolean = false;
  /** Reference ID of the queue email. */
  ref_id?: boolean = false;
  /** Reference type of the queue email. */
  ref_type?: boolean = false;
  /** Authorisation role id of the user. */
  created_uar_id?: boolean = false;
  /** From email of the queue email. */
  from_email?: boolean = false;
  /** To email of the queue email. */
  to_email?: boolean = false;
  /** CC email of the queue email. */
  cc?: boolean = false;
  /** CC Other email of the queue email. */
  ccother?: boolean = false;
  /** BCC email of the queue email. */
  bcc?: boolean = false;
  /** Subject of the queue email. */
  subject?: boolean = false;
  /** Body of the queue email. */
  body?: boolean = false;
  /** Raw json data of the queue process. */
  raw_data?: boolean = false;
  /** Whether the queue email is sent or not. */
  sent?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;

  /** From user authorisation of the queue email */
  fr_from_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false =
    schemaRef(() => UserAuthorisationSelectionSchema);
  /** To user authorisation of the queue email */
  fr_to_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false =
    schemaRef(() => UserAuthorisationSelectionSchema);
  /** Created User authorisation of the queue email added by */
  fr_created_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false =
    schemaRef(() => UserAuthorisationSelectionSchema);
  /** Work status of the queue email */
  fr_work_status?: typeof WorkStatusSelectionSchema | WorkStatusSelectionSchema | SchemaRef | false = schemaRef(() => WorkStatusSelectionSchema);
}
