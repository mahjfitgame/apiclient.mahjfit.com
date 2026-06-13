import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { SessionEntity, SessionSelectionSchema } from '../../session/entity';
import { UserEntity, UserSelectionSchema } from '../user/entity';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../user-authorisation/entity';

export class UserAuthenticationEntity {
  static metaname: string = UserAuthenticationEntity.name.replace(EntitySuffix, '');

  /** Unique ID of the entity, auto generated. This is is same with user id. */
  id?: number;
  /** One time password for the user signin. */
  otp?: string;
  /** One time password expiry datetime for the user signin. */
  otp_expiry?: DateTime;
  /** two factor authentication for the user signin. */
  twofa_secret?: string;
  /** Created datetime of the user auth. */
  created?: DateTime;
  /** Updated datetime of the user auth. */
  updated?: DateTime;
  /** Deleted datetime of the user auth. */
  deleted?: DateTime;
  /** User info of the user. */
  fr_user?: UserEntity;
  /** Authorisations (roles) of the user. */
  fr_user_authorisations?: UserAuthorisationEntity[];
  /** Sessions of the user. */
  fr_sessions?: SessionEntity[];
}

export class UserAuthenticationSelectionSchema {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  id?: boolean = false;
  /** One time password for the user signin. */
  otp?: boolean = false;
  /** One time password expiry datetime for the user signin. */
  otp_expiry?: boolean = false;
  /** two factor authentication for the user signin. */
  twofa_secret?: boolean = false;
  /** Created datetime of the user auth. */
  created?: boolean = false;
  /** Updated datetime of the user auth. */
  updated?: boolean = false;
  /** Deleted datetime of the user auth. */
  deleted?: boolean = false;
  /** User info of the user. */
  fr_user?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
  /** Authorisations (roles) of the user. */
  fr_user_authorisations?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
  /** Sessions of the user. */
  fr_sessions?: typeof SessionSelectionSchema | SessionSelectionSchema | SchemaRef | false = schemaRef(() => SessionSelectionSchema);
}
