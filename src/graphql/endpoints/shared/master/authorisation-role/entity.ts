import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../../folk/user-authorisation/entity';

export class AuthorisationRoleEntity {
  static metaname: string = (AuthorisationRoleEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the authorisation role, auto generated. */
  id?: number;
  /** Title of the authorisation role. */
  role_title?: string;
  /** Indicates whether the authorisation role is active or inactive. */
  active?: DateTime;
  /** Record created date time. */
  created?: DateTime;
  /** Record last updated date time. Update can be any. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** List of user authorisations for given role. */
  fr_user_authorisations?: UserAuthorisationEntity[];
}

export class AuthorisationRoleSelectionSchema {
  /** Unique ID of the authorisation role, auto generated. */
  id?: boolean = false;
  /** Title of the authorisation role. */
  role_title?: boolean = false;
  /** Indicates whether the authorisation role is active or inactive. */
  active?: boolean = false;
  /** Record created date time. */
  created?: boolean = false;
  /** Record last updated date time. Update can be any. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** List of user authorisations for given role. */
  fr_user_authorisations?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
}
