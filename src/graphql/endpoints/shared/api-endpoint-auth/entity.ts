import { DateTime, EmailAddress, EntitySuffix, JWT, UploadFileAccessUrlDto, UploadFileAccessUrlSelectionSchema, SchemaRef, schemaRef } from '../../../libs';
import { ApiUserRoleEnum } from './enum';

export class ApiEndpointAuthEntity {
  static metaname: string = (ApiEndpointAuthEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the user, auto generated. */
  id?: number;
  /** Required to gain access permission to restricted data. */
  role_id?: ApiUserRoleEnum;
  /** Required to gain access to API endpoint. */
  username?: string;
  /** Email is required for varification and communication. */
  email?: EmailAddress;
  /**
   * Minimum 8 charector long
   * At least one digit 
   * At least one special character 
   * At least one uppercase letter
   * At least one lowercase letter
   * No leading period or newline
   * No spaces
   * Prevents three or more consecutive identical characters.
   * **/
  identify?: string;
  /** Used for authentication using jwt bearer token. Life span is shorter. */
  jwt_access_token?: JWT;
  /** Required to refresh jwt access token. Life span is bit longer. */
  jwt_refresh_token?: JWT;
  /** If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended. */
  suspended?: DateTime;
  /** Record created date time. */
  created?: DateTime;
  /** Record last updated date time. Update can be any. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
}
export class ApiEndpointAuthSelectionSchema {
  /** Unique ID of the user, auto generated. */
  id?: boolean = false;
  /** Required to gain access permission to restricted data. */
  role_id?: boolean = false;
  /** Required to gain access to API endpoint. */
  username?: boolean = false;
  /** Required to gain access to API endpoint. */
  identify?: boolean = false;
  /** Email is required for varification and communication. */
  email?: boolean = false;
  /** Used for authentication using jwt bearer token. Life span is shorter. */
  jwt_access_token?: boolean = false;
  /** Required to refresh jwt access token. Life span is bit longer. */
  jwt_refresh_token?: boolean = false;
  /** If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended. */
  suspended?: boolean = false;
  /** Record created date time. */
  created?: boolean = false;
  /** Record last updated date time. Update can be any. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
}