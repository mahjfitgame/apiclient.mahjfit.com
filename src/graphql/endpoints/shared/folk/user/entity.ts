import { DateTime, EntitySuffix, UploadFileAccessUrlDto, UploadFileAccessUrlSelectionSchema, SchemaRef, schemaRef } from '../../../../libs';
import { CountryPhoneCodeEntity, CountryPhoneCodeSelectionSchema } from '../../geo/country-phone-code/entity';
import { UserAuthenticationEntity, UserAuthenticationSelectionSchema } from '../user-auth/entity';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../user-authorisation/entity';
import { UserDeviceEntity, UserDeviceSelectionSchema } from '../user-device/entity';
export class UserEntity {
  static metaname: string = UserEntity.name.replace(EntitySuffix, '');

  /** Unique ID of the entity, auto generated. */
  declare id?: number;
  /** Username of the user. Required if primary_email or primary_mobile is not provided. */
  declare username?: string;
  /** Url slug of the user. Set as empty string ("") to generate automatically as per set data and to remove set to null. */
  declare url_slug?: string;
  /** Connection source ID. */
  declare connsrc_id?: number;
  /** First name of the user. */
  declare fname?: string;
  /** Last name of the user. */
  declare lname?: string;
  /** Middle name of the user. */
  declare mname?: string;
  /** Primary email of the user. Required if username or primary_mobile is not provided. */
  declare primary_email?: string;
  /** Primary mobile of the user. Provide in USA mobile format. Required if username or primary_email is not provided. */
  declare primary_mobile?: string;
  /** Primary mobile country code of the user. */
  declare primary_mobile_cc?: string;
  /** Used to reset password. */
  declare recovery_email?: string;
  /** Provide in USA mobile format. Used to reset password. */
  declare recovery_mobile?: string;
  /** Recovery mobile country code of the user. */
  declare recovery_mobile_cc?: string;
  /** Provide whatsapp of the user. */
  declare whatsapp?: string;
  /** Whatsapp country code of the user. */
  declare whatsapp_cc?: string;
  /** Flag to indicate if user has two factor authentication. */
  declare has_two_factor_auth?: boolean;
  /** Flag to indicate if primary email is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  declare pemail_verified?: DateTime;
  /** Flag to indicate if primary mobile is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  declare pmobile_verified?: DateTime;
  /** Flag to indicate if user is verified. When record is verified, date-time will be saved otherwise null to indicate not verified. */
  declare verified?: DateTime;
  /** Flag to indicate if user is suspended. When record is suspended, date-time will be saved otherwise null to indicate record is active. */
  declare suspended?: DateTime;
  /** Date time when user is created. */
  declare created?: DateTime;
  /** Date time when user is updated. */
  declare updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: DateTime;
  /** Import batch of the user. */
  declare import_batch?: string;
  /** Import unique Id of the user. */
  declare import_unique_id?: string;
  /** Whatsapp country code of the user. */
  declare import_note?: string;
  /** User profile photo. */
  declare file_profile_photo?: string;
  /** User profile photo url. */
  declare file_profile_photo_url?: UploadFileAccessUrlDto;
  /** User profile banner. */
  declare file_profile_banner?: string;
  /** User profile banner url. */
  declare file_profile_banner_url?: UploadFileAccessUrlDto;
  /** User auth info of the user. */
  declare fr_user_auth?: UserAuthenticationEntity;
  /** Registered devices of the user. */
  declare fr_user_devices?: UserDeviceEntity[];
  /** User authorisations of the user. */
  declare fr_user_authorisations?: UserAuthorisationEntity[];
  /** Primary mobile code of the user. */
  declare fr_primary_country_phone_code?: CountryPhoneCodeEntity;
  /** Recovery mobile code of the user. */
  declare fr_recovery_country_phone_code?: CountryPhoneCodeEntity;
  /** Whatsapp country code of the user. */
  declare fr_whatsapp_country_phone_code?: CountryPhoneCodeEntity;
}

export class UserSelectionSchema {
  /** Unique ID of the entity, auto generated. */
  id?: boolean = false;
  /** Username of the user. Required if primary_email or primary_mobile is not provided. */
  username?: boolean = false;
  /** Url slug of the user. Set as empty string ("") to generate automatically as per set data and to remove set to null. */
  url_slug?: boolean = false;
  /** Connection source ID. */
  connsrc_id?: boolean = false;
  /** First name of the user. */
  fname?: boolean = false;
  /** Last name of the user. */
  lname?: boolean = false;
  /** Middle name of the user. */
  mname?: boolean = false;
  /** Primary email of the user. Required if username or primary_mobile is not provided. */
  primary_email?: boolean = false;
  /** Primary mobile of the user. Provide in USA mobile format. Required if username or primary_email is not provided. */
  primary_mobile?: boolean = false;
  /** Primary mobile country code of the user. */
  primary_mobile_cc?: boolean = false;
  /** Used to reset password. */
  recovery_email?: boolean = false;
  /** Provide in USA mobile format. Used to reset password. */
  recovery_mobile?: boolean = false;
  /** Recovery mobile country code of the user. */
  recovery_mobile_cc?: boolean = false;
  /** Provide whatsapp of the user. */
  whatsapp?: boolean = false;
  /** Whatsapp country code of the user. */
  whatsapp_cc?: boolean = false;
  /** Flag to indicate if user has two factor authentication. */
  has_two_factor_auth?: boolean = false;
  /** Flag to indicate if primary email is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  pemail_verified?: boolean = false;
  /** Flag to indicate if primary mobile is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  pmobile_verified?: boolean = false;
  /** Flag to indicate if user is verified. When record is verified, date-time will be saved otherwise null to indicate not verified. */
  verified?: boolean = false;
  /** Flag to indicate if user is suspended. When record is suspended, date-time will be saved otherwise null to indicate record is active. */
  suspended?: boolean = false;
  /** Date time when user is created. */
  created?: boolean = false;
  /** Date time when user is updated. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** Import batch of the user. */
  import_batch?: boolean = false;
  /** Import unique Id of the user. */
  import_unique_id?: boolean = false;
  /** Whatsapp country code of the user. */
  import_note?: boolean = false;
  /** User profile photo. */
  file_profile_photo?: boolean = false;
  /** User profile photo url. */
  file_profile_photo_url?: typeof UploadFileAccessUrlSelectionSchema | UploadFileAccessUrlSelectionSchema | SchemaRef | false = schemaRef(() => UploadFileAccessUrlSelectionSchema);
  /** User profile banner. */
  file_profile_banner?: boolean = false;
  /** User profile banner url. */
  file_profile_banner_url?: typeof UploadFileAccessUrlSelectionSchema | UploadFileAccessUrlSelectionSchema | SchemaRef | false = schemaRef(() => UploadFileAccessUrlSelectionSchema);
  /** User auth info of the user. */
  fr_user_auth?: typeof UserAuthenticationSelectionSchema | UserAuthenticationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationSelectionSchema);
  /** Registered devices of the user. */
  fr_user_devices?: typeof UserDeviceSelectionSchema | UserDeviceSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceSelectionSchema);
  /** User authorisations of the user. */
  fr_user_authorisations?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
  /** Primary mobile code of the user. */
  fr_primary_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
  /** Recovery mobile code of the user. */
  fr_recovery_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
  /** Whatsapp country code of the user. */
  fr_whatsapp_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
}
