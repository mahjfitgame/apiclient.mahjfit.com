import { DateTime, EntitySuffix, JWT, YesNoEnum, SchemaRef, schemaRef } from '../../../libs';
import { DeviceEntity, DeviceSelectionSchema } from '../master/device/entity';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../folk/user-authorisation/entity';
import { UserAuthenticationEntity, UserAuthenticationSelectionSchema } from '../folk/user-auth/entity';

export class SessionEntity {
  static metaname: string = (SessionEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the entity, auto generated. */
  id?: number;
  /** Authentication id of the user. */
  auth_id?: number;
  /** User Authorisation id of the user. */
  uar_id?: number;
  /** Registered device id used by user. */
  device_id?: number;
  /** Is user logged in or not flag. */
  logged_in?: YesNoEnum;
  /** Keep user logged in or not flag. */
  keep_logged?: YesNoEnum;
  /** JWT token of the user session. */
  jwt?: JWT;
  /** Session data storage in JSON format for the user. */
  data?: string;
  /** Created datetime of the user auth. */
  created?: DateTime;
  /** Updated datetime of the user auth. */
  updated?: DateTime;
  /** Deleted datetime of the user auth. */
  deleted?: DateTime;
  /** Master device info of the session user. */
  fr_device?: DeviceEntity;
  /** Authentication info of the session user. */
  fr_user_auth?: UserAuthenticationEntity;
  /** User Authorisation info of the session user. */
  fr_user_authorisation?: UserAuthorisationEntity;
}

export class SessionSelectionSchema {
  /** Unique ID of the entity, auto generated. */
  id?: boolean = false;
  /** Authentication id of the user. */
  auth_id?: boolean = false;
  /** User Authorisation id of the user. */
  uar_id?: boolean = false;
  /** Registered device id used by user. */
  device_id?: boolean = false;
  /** Is user logged in or not flag. */
  logged_in?: boolean = false;
  /** Keep user logged in or not flag. */
  keep_logged?: boolean = false;
  /** JWT token of the user session. */
  jwt?: boolean = false;
  /** Session data storage in JSON format for the user. */
  data?: boolean = false;
  /** Created datetime of the user auth. */
  created?: boolean = false;
  /** Updated datetime of the user auth. */
  updated?: boolean = false;
  /** Deleted datetime of the user auth. */
  deleted?: boolean = false;
  /** Master device info of the session user. */
  fr_device?: typeof DeviceSelectionSchema | DeviceSelectionSchema | SchemaRef | false = schemaRef(() => DeviceSelectionSchema);
  /** Authentication info of the session user. */
  fr_user_auth?: typeof UserAuthenticationSelectionSchema | UserAuthenticationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationSelectionSchema);
  /** User Authorisation info of the session user. */
  fr_user_authorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
}
