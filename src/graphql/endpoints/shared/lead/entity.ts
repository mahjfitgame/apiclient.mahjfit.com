import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../libs';

import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../folk/user-authorisation/entity';

export class LeadEntity {
  static metaname: string = (LeadEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the lead, auto generated. */
  id?: number;
  /** From user authorisation id of the lead. */
  from_uar_id?: number;
  /** To user authorisation id of the lead. */
  to_uar_id?: number;
  /** Reference id of the lead. */
  ref_id?: string;
  /** Reference type of the lead. */
  ref_type?: string;
  /** Concern issue of the lead. */
  concern_issue?: string;
  /** Preferred contact method of the lead. */
  preferred_contact_method?: string;
  /** Subject of the lead. */
  subject?: string;
  /** Comment of the lead. */
  comment?: string;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** When record is updated, date-time will be saved. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** From user of the lead. */
  fr_from_user_authorisation?: UserAuthorisationEntity;
  /** To user of the lead. */
  fr_to_user_authorisation?: UserAuthorisationEntity;
}

export class LeadSelectionSchema {
  /** Unique ID of the lead, auto generated. */
  id?: boolean = false;
  /** From user authorisation id of the lead. */
  from_uar_id?: boolean = false;
  /** To user authorisation id of the lead. */
  to_uar_id?: boolean = false;
  /** Reference id of the lead. */
  ref_id?: boolean = false;
  /** Reference type of the lead. */
  ref_type?: boolean = false;
  /** Concern issue of the lead. */
  concern_issue?: boolean = false;
  /** Preferred contact method of the lead. */
  preferred_contact_method?: boolean = false;
  /** Subject of the lead. */
  subject?: boolean = false;
  /** Comment of the lead. */
  comment?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** From user of the lead. */
  fr_from_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
  /** To user of the lead. */
  fr_to_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
}
