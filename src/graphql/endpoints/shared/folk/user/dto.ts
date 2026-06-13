import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UploadArtefact, UploadDeleteArtefact, UploadDeleteInputDto, UploadDeleteOutputDto, UploadDeleteOutputSelectionSchema, UploadInputDto, UploadOutputDto, UploadOutputSelectionSchema, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, YesNoEnum, SchemaRef, schemaRef } from '../../../../libs';
import { CountryPhoneCodeFindInputWhereDto } from '../../geo/country-phone-code/dto';
import { UserAuthenticationFindInputWhereDto } from '../user-auth/dto';
import { UserAuthorisationFindInputWhereDto } from '../user-authorisation/dto';
import { UserDeviceFindInputWhereDto } from '../user-device/dto';
import { UserEntity, UserSelectionSchema } from './entity';
import { UserUploadFileFieldEnum } from './enum';

export class UserDto extends UserEntity {
  /** Unique ID of the entity, auto generated. */
  declare id?: any;
  /** Username of the user. Required if primary_email or primary_mobile is not provided. */
  declare username?: any;
  /** Url slug of the user. Set as empty string ("") to generate automatically as per set data and to remove set to null. */
  declare url_slug?: any;
  /** Connection source ID. */
  declare connsrc_id?: any;
  /** First name of the user. */
  declare fname?: any;
  /** Last name of the user. */
  declare lname?: any;
  /** Middle name of the user. */
  declare mname?: any;
  /** Primary email of the user. Required if username or primary_mobile is not provided. */
  declare primary_email?: any;
  /** Primary mobile of the user. Provide in USA mobile format. Required if username or primary_email is not provided. */
  declare primary_mobile?: any;
  /** Primary mobile country code of the user. */
  declare primary_mobile_cc?: any;
  /** Used to reset password. */
  declare recovery_email?: any;
  /** Provide in USA mobile format. Used to reset password. */
  declare recovery_mobile?: any;
  /** Recovery mobile country code of the user. */
  declare recovery_mobile_cc?: any;
  /** Provide whatsapp of the user. */
  declare whatsapp?: any;
  /** Whatsapp country code of the user. */
  declare whatsapp_cc?: any;
  /** Flag to indicate if user has two factor authentication. */
  declare has_two_factor_auth?: any;
  /** Flag to indicate if primary email is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  declare pemail_verified?: any;
  /** Flag to indicate if primary mobile is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified. */
  declare pmobile_verified?: any;
  /** Flag to indicate if user is verified. When record is verified, date-time will be saved otherwise null to indicate not verified. */
  declare verified?: any;
  /** Flag to indicate if user is suspended. When record is suspended, date-time will be saved otherwise null to indicate record is active. */
  declare suspended?: any;
  /** Date time when user is created. */
  declare created?: any;
  /** Date time when user is updated. */
  declare updated?: any;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: any;
  /** Import batch of the user. */
  declare import_batch?: any;
  /** Import unique Id of the user. */
  declare import_unique_id?: any;
  /** Whatsapp country code of the user. */
  declare import_note?: any;
  /** User profile photo. */
  declare file_profile_photo?: any;
  /** User profile photo url. */
  declare file_profile_photo_url?: any;
  /** User profile banner. */
  declare file_profile_banner?: any;
  /** User profile banner url. */
  declare file_profile_banner_url?: any;
  /** User auth info of the user. */
  declare fr_user_auth?: any;
  /** Registered devices of the user. */
  declare fr_user_devices?: any[];
  /** User professional info of the user. */
  declare fr_user_professional_infos?: any[];
  /** User personal info of the user. */
  declare fr_user_personal_infos?: any;
  /** User authorisations of the user. */
  declare fr_user_authorisations?: any[];
  /** User address of the user. */
  declare fr_user_addresses?: any[];
  /** User identity card of the user. */
  declare fr_user_identity_cards?: any[];
  /** User files. */
  declare fr_user_files?: any[];
  /** Buissness user. */
  declare fr_businesses?: any[];
  /** Connection source for this user. */
  declare fr_connection_source?: any;
  /** User Security questions. */
  declare fr_user_security_questions?: any[];
  /** Registered devices of the user. */
  declare fr_user_twofa_recovery_codes?: any[];
  /** Business branch user. */
  declare fr_business_branches?: any[];
  /** Primary mobile code of the user. */
  declare fr_primary_country_phone_code?: any;
  /** Recovery mobile code of the user. */
  declare fr_recovery_country_phone_code?: any;
  /** Whatsapp country code of the user. */
  declare fr_whatsapp_country_phone_code?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserFindDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${FindArtefact}`;
}
export class UserFindSelectionSchema extends UserSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████

export class UserFindInputWhereDto extends UserFindDto {
  declare id?: FindOperatorDto;
  declare username?: FindOperatorDto;
  declare url_slug?: FindOperatorDto;
  declare connsrc_id?: FindOperatorDto;
  declare fname?: FindOperatorDto;
  declare lname?: FindOperatorDto;
  declare mname?: FindOperatorDto;
  declare primary_email?: FindOperatorDto;
  declare primary_mobile?: FindOperatorDto;
  declare primary_mobile_cc?: FindOperatorDto;
  declare recovery_email?: FindOperatorDto;
  declare recovery_mobile?: FindOperatorDto;
  declare recovery_mobile_cc?: FindOperatorDto;
  declare whatsapp?: FindOperatorDto;
  declare whatsapp_cc?: FindOperatorDto;
  declare has_two_factor_auth?: FindOperatorDto;
  declare pemail_verified?: FindOperatorDto;
  declare pmobile_verified?: FindOperatorDto;
  declare created?: FindOperatorDto;
  declare updated?: FindOperatorDto;
  declare deleted?: FindOperatorDto;
  declare import_batch?: FindOperatorDto;
  declare import_unique_id?: FindOperatorDto;
  declare import_note?: FindOperatorDto;
  declare fr_user_auth?: UserAuthenticationFindInputWhereDto[];
  declare fr_user_authorisations?: UserAuthorisationFindInputWhereDto[];
  declare fr_user_devices?: UserDeviceFindInputWhereDto[];
  declare fr_primary_country_phone_code?: CountryPhoneCodeFindInputWhereDto[];
  declare fr_recovery_country_phone_code?: CountryPhoneCodeFindInputWhereDto[];
  declare fr_whatsapp_country_phone_code?: CountryPhoneCodeFindInputWhereDto[];
}

export class UserFindInputSortOrderDto {
  declare id?: RecordSortDirectionEnum;
  declare fname?: RecordSortDirectionEnum;
  declare connsrc_id?: RecordSortDirectionEnum;
  declare lname?: RecordSortDirectionEnum;
  declare primary_mobile_cc?: RecordSortDirectionEnum;
  declare recovery_mobile_cc?: RecordSortDirectionEnum;
  declare has_two_factor_auth?: RecordSortDirectionEnum;
  declare pemail_verified?: RecordSortDirectionEnum;
  declare pmobile_verified?: RecordSortDirectionEnum;
  declare created?: RecordSortDirectionEnum;
  declare updated?: RecordSortDirectionEnum;
  declare deleted?: RecordSortDirectionEnum;
}

export class UserFindInputGroupByDto {
  declare primary_mobile_cc?: boolean;
  declare recovery_mobile_cc?: boolean;
  declare has_two_factor_auth?: boolean;
  declare pemail_verified?: boolean;
  declare pmobile_verified?: boolean;
  declare created?: boolean;
  declare updated?: boolean;
  declare deleted?: boolean;
}

export class UserFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  declare where?: UserFindInputWhereDto[];
  declare groupBy?: UserFindInputGroupByDto;
  declare order?: UserFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

export class UserFindOutputRowsDto extends UserFindDto {}
export class UserFindOutputRowsSelectionSchema extends UserFindSelectionSchema {}

export class UserFindOutputDto extends FindOutputPaginationOptionsDto {
  declare rows?: UserFindOutputRowsDto[];
}
export class UserFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  rows?: typeof UserFindOutputRowsSelectionSchema | UserFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
export class UserFindOneByIdDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

export class UserFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserCreateDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class UserCreateInputDto {
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
  declare has_two_factor_auth: YesNoEnum;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class UserCreateOutputDto extends UserFindOutputRowsDto {}
export class UserCreateOutputSelectionSchema extends UserFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserUpdateDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

export class UserUpdateInputWhereDto extends UserFindInputWhereDto {}

export class UserUpdateInputSetsDto {
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
  declare has_two_factor_auth?: YesNoEnum;
}

export class UserUpdateInputDto {
  declare where: UserUpdateInputWhereDto[];
  declare sets: UserUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class UserUpdateOutputAffectedRowsDto extends UserFindOutputRowsDto {}
export class UserUpdateOutputAffectedRowsSelectionSchema extends UserFindOutputRowsSelectionSchema {}

export class UserUpdateOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserUpdateOutputAffectedRowsDto[];
}
export class UserUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserUpdateOutputAffectedRowsSelectionSchema | UserUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserSoftDeleteDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class UserSoftDeleteInputWhereDto extends UserFindInputWhereDto {}

export class UserSoftDeleteInputDto {
  declare where?: UserSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserSoftDeleteOutputDto extends CrudAffectedDto {}
export class UserSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserDeleteDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class UserDeleteInputWhereDto extends UserFindInputWhereDto {}

export class UserDeleteInputDto {
  declare where?: UserDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeleteOutputDto extends CrudAffectedDto {}
export class UserDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserRestoreDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class UserRestoreInputWhereDto extends UserFindInputWhereDto {}

export class UserRestoreInputDto {
  declare where?: UserRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class UserRestoreOutputDto extends CrudAffectedDto {}
export class UserRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserUpsertDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class UserUpsertInputDto extends UserCreateInputDto {
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class UserUpsertOutputDto extends UserCreateOutputDto implements UpsertOutputProcessStatusDto {
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}

export class UserUpsertOutputSelectionSchema extends UserCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserSoftRemoveDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserSoftRemoveInputWhereDto extends UserFindInputWhereDto {}

export class UserSoftRemoveInputDto {
  declare where?: UserSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserSoftRemoveOutputAffectedRowsDto extends UserFindOutputRowsDto {}
export class UserSoftRemoveOutputAffectedRowsSelectionSchema extends UserFindOutputRowsSelectionSchema {}

export class UserSoftRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserSoftRemoveOutputAffectedRowsDto[];
}
export class UserSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserSoftRemoveOutputAffectedRowsSelectionSchema | UserSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserRemoveDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserRemoveInputWhereDto extends UserFindInputWhereDto {}

export class UserRemoveInputDto {
  declare where?: UserRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserRemoveOutputAffectedRowsDto extends UserFindOutputRowsDto {}
export class UserRemoveOutputAffectedRowsSelectionSchema extends UserFindOutputRowsSelectionSchema {}

export class UserRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserRemoveOutputAffectedRowsDto[];
}
export class UserRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserRemoveOutputAffectedRowsSelectionSchema | UserRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserRecoverDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class UserRecoverInputWhereDto extends UserFindInputWhereDto {}

export class UserRecoverInputDto {
  declare where?: UserRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class UserRecoverOutputAffectedRowsDto extends UserFindOutputRowsDto {}
export class UserRecoverOutputAffectedRowsSelectionSchema extends UserFindOutputRowsSelectionSchema {}

export class UserRecoverOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserRecoverOutputAffectedRowsDto[];
}
export class UserRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserRecoverOutputAffectedRowsSelectionSchema | UserRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserRecoverOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserUploadDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${UploadArtefact}`;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████

export class UserUploadInputDto extends UploadInputDto {
  declare file_field: UserUploadFileFieldEnum;
  declare ref_id: string;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████

export class UserUploadOutputDto extends UploadOutputDto {
  declare file_field?: UserUploadFileFieldEnum;
}
export class UserUploadOutputSelectionSchema extends UploadOutputSelectionSchema {
  file_field?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DELETE DTO █████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserUploadDeleteDto extends UserDto {
  static metaname: string = `${UserEntity.metaname}${UploadDeleteArtefact}`;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████

export class UserUploadDeleteInputDto extends UploadDeleteInputDto {
  declare file_field: UserUploadFileFieldEnum;
  declare ref_id: string;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████

export class UserUploadDeleteOutputDto extends UploadDeleteOutputDto {
  declare file_field?: UserUploadFileFieldEnum;
}
export class UserUploadDeleteOutputSelectionSchema extends UploadDeleteOutputSelectionSchema {
  file_field?: boolean = false;
}

/**
 * █████████████████████
 * █ TYPE: Response ████
 * █████████████████████
**/

export type UserFindResponse = { UserFind: UserFindOutputDto };
export type UserFindOneByIdResponse = { UserFindOneById: UserEntity };
export type UserCreateResponse = { UserCreate: UserCreateOutputDto[] };
export type UserUpdateResponse = { UserUpdate: UserUpdateOutputDto };
export type UserSoftDeleteResponse = { UserSoftDelete: UserSoftDeleteOutputDto };
export type UserDeleteResponse = { UserDelete: UserDeleteOutputDto };
export type UserRestoreResponse = { UserRestore: UserRestoreOutputDto };
export type UserUpsertResponse = { UserUpsert: UserUpsertOutputDto[] };
export type UserSoftRemoveResponse = { UserSoftRemove: UserSoftRemoveOutputDto };
export type UserRemoveResponse = { UserRemove: UserRemoveOutputDto };
export type UserRecoverResponse = { UserRecover: UserRecoverOutputDto };
export type UserUploadResponse = { UserUpload: UserUploadOutputDto[] };
export type UserUploadDeleteResponse = { UserUploadDelete: UserUploadDeleteOutputDto[] };
