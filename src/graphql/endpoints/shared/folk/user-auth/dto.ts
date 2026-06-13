import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, CrudSnapshotDto, CrudSnapshotSelectionSchema, DateTime, SnapshotListSelectionSchema, YesNoEnum, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { SessionFindInputWhereDto } from '../../session/dto';
import { CountryPhoneCodeSelectionSchema } from '../../geo/country-phone-code/entity';
import { UserFindInputWhereDto } from '../user/dto';
import { UserAuthorisationFindInputWhereDto } from '../user-authorisation/dto';
import { UserAuthenticationEntity, UserAuthenticationSelectionSchema } from './entity';

export class UserAuthenticationDto extends UserAuthenticationEntity {
    /** Unique ID of the entity, auto generated. This is is same with user id. */
    declare id?: any;
    /** One time password for the user signin. */
    declare otp?: any;
    /** One time password expiry datetime for the user signin. */
    declare otp_expiry?: any;
    /** two factor authentication for the user signin. */
    declare twofa_secret?: any;
    /** Created datetime of the user auth. */
    declare created?: any;
    /** Updated datetime of the user auth. */
    declare updated?: any;
    /** Deleted datetime of the user auth. */
    declare deleted?: any;
    /** User info of the user. */
    declare fr_user?: any;
    /** Authorisations (roles) of the user. */
    declare fr_user_authorisations?: any[];
    /** Sessions of the user. */
    declare fr_sessions?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class UserAuthenticationFindDto extends UserAuthenticationDto {
    static metaname: string = `${UserAuthenticationEntity?.metaname}${FindArtefact}`;
}
export class UserAuthenticationFindSelectionSchema extends UserAuthenticationSelectionSchema {
}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class UserAuthenticationFindInputWhereDto extends UserAuthenticationFindDto {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  declare id?: FindOperatorDto;
  /** Last changed identify string by the user. */
  declare last_changed?: FindOperatorDto;
  /** Force user to reset identify strig. */
  declare force_reset?: FindOperatorDto;
  /** Created datetime of the user auth. */
  declare created?: FindOperatorDto;
  /** Updated datetime of the user auth. */
  declare updated?: FindOperatorDto;
  /** Deleted datetime of the user auth. */
  declare deleted?: FindOperatorDto;
  /** User info of the user. */
  declare fr_user?: UserFindInputWhereDto[];
  /** Authorisations (roles) of the user. */
  declare fr_user_authorisations?: UserAuthorisationFindInputWhereDto[];
  /** Sessions of the user. */
  declare fr_sessions?: SessionFindInputWhereDto[];
}

export class UserAuthenticationFindInputSortOrderDto {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  declare id?: RecordSortDirectionEnum;
  /** Last changed identify string by the user. */
  declare last_changed?: RecordSortDirectionEnum;
  /** Force user to reset identify strig. */
  declare force_reset?: RecordSortDirectionEnum;
  /** Created datetime of the user auth. */
  declare created?: RecordSortDirectionEnum;
  /** Updated datetime of the user auth. */
  declare updated?: RecordSortDirectionEnum;
  /** Deleted datetime of the user auth. */
  declare deleted?: RecordSortDirectionEnum;
}

export class UserAuthenticationFindInputGroupByDto {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  id?: boolean;
  /** Last changed identify string by the user. */
  last_changed?: boolean;
  /** Force user to reset identify strig. */
  force_reset?: boolean;
  /** Created datetime of the user auth. */
  created?: boolean;
  /** Updated datetime of the user auth. */
  updated?: boolean;
  /** Deleted datetime of the user auth. */
  deleted?: boolean;
}

export class UserAuthenticationFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: UserAuthenticationFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: UserAuthenticationFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationFindOutputRowsDto extends UserAuthenticationFindDto {
}
export class UserAuthenticationFindOutputRowsSelectionSchema extends UserAuthenticationFindSelectionSchema {
}

export class UserAuthenticationFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: UserAuthenticationFindOutputRowsDto[];
}
export class UserAuthenticationFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof UserAuthenticationFindOutputRowsSelectionSchema | UserAuthenticationFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** UserAuthenticationFindOneById */
export class UserAuthenticationFindOneByIdDto extends UserAuthenticationDto {
    static metaname: string = `${UserAuthenticationEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationFindOneByIdInputDto extends IdInputDto{
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class UserAuthenticationCreateDto extends UserAuthenticationDto {
    static metaname: string = `${UserAuthenticationEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationCreateInputDto extends UserAuthenticationCreateDto {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  declare id: number;
  /** Identify string for the user. Password should be combination of digit, uppercase, lowercase, special charector and no more than 3 consecutive identical characters. */
  declare identify?: string;
  /** Enter your password again. */
  declare identify_confirm?: string;
  /** Force user to reset identify strig. */
  declare force_reset?: DateTime;
  /** One time password for the user signin. */
  declare otp?: string;
  /** One time password expiry datetime for the user signin. */
  declare otp_expiry?: DateTime;
  /** two factor authentication for the user signin. */
  declare twofa_secret?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationCreateOutputDto extends UserAuthenticationFindOutputRowsDto {
}
export class UserAuthenticationCreateOutputSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class UserAuthenticationUpdateDto extends UserAuthenticationDto {
    static metaname: string = `${UserAuthenticationEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class UserAuthenticationUpdateInputWhereDto extends UserAuthenticationFindInputWhereDto {
}

export class UserAuthenticationUpdateInputSetsDto {
  /** Unique ID of the entity, auto generated. This is is same with user id. */
  declare id?: number;
  /** Identify string for the user. Password should be combination of digit, uppercase, lowercase, special charector and no more than 3 consecutive identical characters. */
  declare identify?: string;
  /** Force user to reset identify strig. */
  declare force_reset?: DateTime;
  /** One time password for the user signin. */
  declare otp?: string;
  /** One time password expiry datetime for the user signin. */
  declare otp_expiry?: DateTime;
  /** two factor authentication for the user signin. */
  declare twofa_secret?: string;
}

export class UserAuthenticationUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: UserAuthenticationUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: UserAuthenticationUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationUpdateOutputAffectedRowsDto extends UserAuthenticationFindOutputRowsDto {
}
export class UserAuthenticationUpdateOutputAffectedRowsSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema {
}

export class UserAuthenticationUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: UserAuthenticationUpdateOutputAffectedRowsDto[];
}
export class UserAuthenticationUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof UserAuthenticationUpdateOutputAffectedRowsSelectionSchema | UserAuthenticationUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class UserAuthenticationSoftDeleteDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationSoftDeleteInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationSoftDeleteInputWhereDto[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationSoftDeleteOutputDto extends CrudAffectedDto {
}
export class UserAuthenticationSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class UserAuthenticationDeleteDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationDeleteInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationDeleteOutputDto extends CrudAffectedDto {
}
export class UserAuthenticationDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class UserAuthenticationRestoreDto extends UserAuthenticationDto {
    static metaname: string = `${UserAuthenticationEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class UserAuthenticationRestoreInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████

export class UserAuthenticationRestoreOutputDto extends CrudAffectedDto {
}
export class UserAuthenticationRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert record, if not exist create record or if exist update record. */
export class UserAuthenticationUpsertDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationUpsertInputDto extends UserAuthenticationCreateInputDto {
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationUpsertOutputDto extends UserAuthenticationFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class UserAuthenticationUpsertOutputSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft remove records. This is safer than softDelete because it checks records before delete and return processed data in return. */
export class UserAuthenticationSoftRemoveDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationSoftRemoveInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationSoftRemoveInputWhereDto[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationSoftRemoveOutputAffectedRowsDto extends UserAuthenticationFindOutputRowsDto {
}
export class UserAuthenticationSoftRemoveOutputAffectedRowsSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema {
}

export class UserAuthenticationSoftRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthenticationSoftRemoveOutputAffectedRowsDto[];
}
export class UserAuthenticationSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthenticationSoftRemoveOutputAffectedRowsSelectionSchema | UserAuthenticationSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Unlike delete remove checks record in database before it performs remove operation and returns processed data. */
export class UserAuthenticationRemoveDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationRemoveInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationRemoveOutputAffectedRowsDto extends UserAuthenticationFindOutputRowsDto {
}
export class UserAuthenticationRemoveOutputAffectedRowsSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema {
}

export class UserAuthenticationRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthenticationRemoveOutputAffectedRowsDto[];
}
export class UserAuthenticationRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthenticationRemoveOutputAffectedRowsSelectionSchema | UserAuthenticationRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Recover records, which are soft deleted or removed. Unlike restore recover checks records before restore and returns processed data. */
export class UserAuthenticationRecoverDto extends UserAuthenticationDto {
  static metaname: string = `${UserAuthenticationEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationRecoverInputWhereDto extends UserAuthenticationFindInputWhereDto {

}

export class UserAuthenticationRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserAuthenticationRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class UserAuthenticationRecoverOutputAffectedRowsDto extends UserAuthenticationFindOutputRowsDto {
}
export class UserAuthenticationRecoverOutputAffectedRowsSelectionSchema extends UserAuthenticationFindOutputRowsSelectionSchema {
}

export class UserAuthenticationRecoverOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthenticationRecoverOutputAffectedRowsDto[];
}
export class UserAuthenticationRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthenticationRecoverOutputAffectedRowsSelectionSchema | UserAuthenticationRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationRecoverOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████
 * █ TYPE: Response ████
 * █████████████████████
**/

export type UserAuthenticationFindResponse = { UserAuthenticationFind: UserAuthenticationFindOutputDto };
export type UserAuthenticationFindOneByIdResponse = { UserAuthenticationFindOneById: UserAuthenticationEntity };
export type UserAuthenticationCreateResponse = { UserAuthenticationCreate: UserAuthenticationCreateOutputDto[] };
export type UserAuthenticationUpdateResponse = { UserAuthenticationUpdate: UserAuthenticationUpdateOutputDto };
export type UserAuthenticationSoftDeleteResponse = { UserAuthenticationSoftDelete: UserAuthenticationSoftDeleteOutputDto };
export type UserAuthenticationDeleteResponse = { UserAuthenticationDelete: UserAuthenticationDeleteOutputDto };
export type UserAuthenticationRestoreResponse = { UserAuthenticationRestore: UserAuthenticationRestoreOutputDto };
export type UserAuthenticationUpsertResponse = { UserAuthenticationUpsert: UserAuthenticationUpsertOutputDto[] };
export type UserAuthenticationSoftRemoveResponse = { UserAuthenticationSoftRemove: UserAuthenticationSoftRemoveOutputDto };
export type UserAuthenticationRemoveResponse = { UserAuthenticationRemove: UserAuthenticationRemoveOutputDto };
export type UserAuthenticationRecoverResponse = { UserAuthenticationRecover: UserAuthenticationRecoverOutputDto };

import { UserEntity, UserSelectionSchema } from '../user/entity';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from '../user-authorisation/entity';
import { UserDeviceEntity, UserDeviceSelectionSchema } from '../user-device/entity';
import { SessionEntity, SessionSelectionSchema } from '../../session/entity';
import { DeviceEntity, DeviceSelectionSchema } from '../../master/device/entity';
import { UserMultiFactorAuthenticationTypeEnum } from './enum';

export class AuthenticatedSigninOutputDto {
  declare user?: UserEntity;
  declare uauthorisation?: UserAuthorisationEntity;
  declare udevice?: UserDeviceEntity;
  declare session?: SessionEntity;
  declare device?: DeviceEntity;
}
export class AuthenticatedSigninOutputSelectionSchema {
  user?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
  uauthorisation?: typeof UserAuthorisationSelectionSchema | UserAuthorisationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationSelectionSchema);
  udevice?: typeof UserDeviceSelectionSchema | UserDeviceSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceSelectionSchema);
  session?: typeof SessionSelectionSchema | SessionSelectionSchema | SchemaRef | false = schemaRef(() => SessionSelectionSchema);
  device?: typeof DeviceSelectionSchema | DeviceSelectionSchema | SchemaRef | false = schemaRef(() => DeviceSelectionSchema);
}

export class AppUserOutputDto extends UserEntity {
  declare import_batch?: string;
  declare import_unique_id?: string;
  declare import_note?: string;
  declare fr_user_professional_infos?: any[];
  declare fr_user_personal_infos?: any;
  declare fr_businesses?: any[];
  declare fr_business_branches?: any[];
  declare fr_primary_country_phone_code?: any;
  declare fr_recovery_country_phone_code?: any;
  declare fr_whatsapp_country_phone_code?: any;
  declare snapshot?: CrudSnapshotDto['snapshot'];
  declare authenticated?: AuthenticatedSigninOutputDto;
}
export class AppUserOutputSelectionSchema extends UserSelectionSchema {
  import_batch?: boolean = false;
  import_unique_id?: boolean = false;
  import_note?: boolean = false;
  fr_primary_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
  fr_recovery_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
  fr_whatsapp_country_phone_code?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
  snapshot?: typeof SnapshotListSelectionSchema | SnapshotListSelectionSchema | SchemaRef | false = schemaRef(() => SnapshotListSelectionSchema);
  authenticated?: typeof AuthenticatedSigninOutputSelectionSchema | AuthenticatedSigninOutputSelectionSchema | SchemaRef | false = schemaRef(() => AuthenticatedSigninOutputSelectionSchema);
}

export class AppSignupDto { static metaname: string = 'AppSignup'; }
export class AppSignupInputDto {
  declare username?: string;
  declare connsrc_id?: number;
  declare primary_email?: string;
  declare primary_mobile?: string;
  declare primary_mobile_cc?: string;
  declare identify?: string;
  declare arole_id: number;
  declare identify_confirm?: string;
}
export class AppSignupOutputDto extends AppUserOutputDto {}
export class AppSignupOutputSelectionSchema extends AppUserOutputSelectionSchema {}

export class AppGrantSignupDto { static metaname: string = 'AppGrantSignup'; }
export class AppGrantSignupInputDto {
  declare un_pe_pm: string;
  declare identify?: string;
  declare arole_id: number;
  declare identify_confirm?: string;
  declare u_id: number;
}
export class AppGrantSignupOutputDto extends AppUserOutputDto {}
export class AppGrantSignupOutputSelectionSchema extends AppUserOutputSelectionSchema {}

export class AppSigninDto { static metaname: string = 'AppSignin'; }
export class AppSigninInputDto {
  declare arole_id: number;
  declare keep_logged: YesNoEnum;
  declare dtoken: string;
  declare identify?: string;
  declare otp?: string;
  declare un_pe_pm: string;
}
export class AppSigninOutputDto extends AppUserOutputDto {}
export class AppSigninOutputSelectionSchema extends AppUserOutputSelectionSchema {}

export class AppOtpSigninDto { static metaname: string = 'AppOtpSignin'; }
export class AppOtpSigninInputDto { declare arole_id: number; declare un_pe_pm: string; }
export class AppOtpSigninOutputDto extends CrudSnapshotDto { declare id?: number; declare otp?: string; declare otp_expiry?: DateTime; }
export class AppOtpSigninOutputSelectionSchema extends CrudSnapshotSelectionSchema { id?: boolean = false; otp?: boolean = false; otp_expiry?: boolean = false; }

export class AppResetPasswordDto { static metaname: string = 'AppResetPassword'; }
export class AppResetPasswordInputDto {
  declare primary_email?: string;
  declare primary_mobile?: string;
  declare primary_mobile_cc?: string;
  declare recovery_email: string;
  declare recovery_mobile: string;
  declare recovery_mobile_cc: string;
  declare identify?: string;
  declare arole_id: number;
  declare identify_confirm?: string;
}
export class AppResetPasswordOutputDto extends CrudAffectedDto {}
export class AppResetPasswordOutputSelectionSchema extends CrudAffectedSelectionSchema {}

export class AppForgotPasswordDto { static metaname: string = 'AppForgotPassword'; }
export class AppForgotPasswordInputDto { declare arole_id: number; declare un_pe_pm: string; declare pass_recover_url: string; }
export class AppForgotPasswordOutputDto extends CrudSnapshotDto { declare pass_recover_token?: string; }
export class AppForgotPasswordOutputSelectionSchema extends CrudSnapshotSelectionSchema { pass_recover_token?: boolean = false; }

export class AppRecoverForgotPasswordDto { static metaname: string = 'AppRecoverForgotPassword'; }
export class AppRecoverForgotPasswordInputDto { declare un_pe_pm: string; declare identify?: string; declare identify_confirm?: string; declare pass_recover_token: string; }
export class AppRecoverForgotPasswordOutputDto extends CrudAffectedDto {}
export class AppRecoverForgotPasswordOutputSelectionSchema extends CrudAffectedSelectionSchema {}

export class AppSignoutDto { static metaname: string = 'AppSignout'; }
export class AppWhoAmIDto { static metaname: string = 'AppWhoAmI'; }

export class AppStepSigninOutputDto extends CrudSnapshotDto {
  declare stamp?: string;
  declare next_step?: string;
  declare previous_step?: string;
  declare ref_id?: number;
  declare ref_value?: string;
  declare available_mfao?: any;
  declare selected_mfao?: UserMultiFactorAuthenticationTypeEnum;
  declare authenticated?: AuthenticatedSigninOutputDto;
}
export class AppStepSigninOutputSelectionSchema extends CrudSnapshotSelectionSchema {
  stamp?: boolean = false;
  next_step?: boolean = false;
  previous_step?: boolean = false;
  ref_id?: boolean = false;
  ref_value?: boolean = false;
  available_mfao?: boolean = false;
  selected_mfao?: boolean = false;
  authenticated?: typeof AuthenticatedSigninOutputSelectionSchema | AuthenticatedSigninOutputSelectionSchema | SchemaRef | false = schemaRef(() => AuthenticatedSigninOutputSelectionSchema);
}

export class AppStepSigninUserDto { static metaname: string = 'AppStepSigninUser'; }
export class AppStepSigninUserInputDto { declare dtoken: string; declare duuid: string; declare stamp: string; declare un_pe_pm: string; declare arole_id: number; }
export class AppStepSigninUserOutputDto extends AppStepSigninOutputDto {}
export class AppStepSigninUserOutputSelectionSchema extends AppStepSigninOutputSelectionSchema {}

export class AppStepSigninPasswordDto { static metaname: string = 'AppStepSigninPassword'; }
export class AppStepSigninPasswordInputDto { declare dtoken: string; declare duuid: string; declare stamp: string; declare keep_logged: YesNoEnum; declare identify?: string; }
export class AppStepSigninPasswordOutputDto extends AppStepSigninOutputDto {}
export class AppStepSigninPasswordOutputSelectionSchema extends AppStepSigninOutputSelectionSchema {}

export class AppStepSigninMultiFAOptionDto { static metaname: string = 'AppStepSigninMultiFAOption'; }
export class AppStepSigninMultiFAOptionInputDto { declare dtoken: string; declare duuid: string; declare stamp: string; declare mfa_option: UserMultiFactorAuthenticationTypeEnum; }
export class AppStepSigninMultiFAOptionOutputDto extends AppStepSigninOutputDto {}
export class AppStepSigninMultiFAOptionOutputSelectionSchema extends AppStepSigninOutputSelectionSchema {}

export class AppStepSigninMultiFAVerifyDto { static metaname: string = 'AppStepSigninMultiFAVerify'; }
export class AppStepSigninMultiFAVerifyInputDto { declare dtoken: string; declare duuid: string; declare stamp: string; declare otp?: string; declare answer?: string; }
export class AppStepSigninMultiFAVerifyOutputDto extends AppStepSigninOutputDto {}
export class AppStepSigninMultiFAVerifyOutputSelectionSchema extends AppStepSigninOutputSelectionSchema {}

export class AppGenerateTwoFAQrDto { static metaname: string = 'AppGenerateTwoFAQR'; }
export class AppGenerateTwoFAQrInputDto { declare arole_id: number; declare un_pe_pm: string; }
export class AppGenerateTwoFAQrOutputDto extends CrudSnapshotDto { declare recovery_code?: string[]; declare qrcode_dataurl?: string; }
export class AppGenerateTwoFAQrOutputSelectionSchema extends CrudSnapshotSelectionSchema { recovery_code?: boolean = false; qrcode_dataurl?: boolean = false; }

export class AppVerifyTwoFAQrDto { static metaname: string = 'AppVerifyTwoFAQR'; }
export class AppVerifyTwoFAQrInputDto { declare arole_id: number; declare un_pe_pm: string; declare otp_token: string; }
export class AppVerifyTwoFAQrOutputDto extends CrudSnapshotDto {}
export class AppVerifyTwoFAQrOutputSelectionSchema extends CrudSnapshotSelectionSchema {}

export class AppRegenerateTwoFARecoveryCodeDto { static metaname: string = 'AppRegenerateTwoFARecoveryCode'; }
export class AppRegenerateTwoFARecoveryCodeInputDto { declare arole_id: number; declare un_pe_pm: string; }
export class AppRegenerateTwoFARecoveryCodeOutputDto extends CrudSnapshotDto { declare recovery_code?: string[]; }
export class AppRegenerateTwoFARecoveryCodeOutputSelectionSchema extends CrudSnapshotSelectionSchema { recovery_code?: boolean = false; }

export class AppVerifyTwoFARecoveryCodeDto { static metaname: string = 'AppVerifyTwoFARecoveryCode'; }
export class AppVerifyTwoFARecoveryCodeInputDto { declare arole_id: number; declare un_pe_pm: string; declare otp_token: string; }
export class AppVerifyTwoFARecoveryCodeOutputDto extends CrudSnapshotDto { declare recovery_code?: string; }
export class AppVerifyTwoFARecoveryCodeOutputSelectionSchema extends CrudSnapshotSelectionSchema { recovery_code?: boolean = false; }

export type AppSignupResponse = { AppSignup: AppSignupOutputDto };
export type AppGrantSignupResponse = { AppGrantSignup: AppGrantSignupOutputDto };
export type AppGrantRoleResponse = { AppGrantRole: import('../user-authorisation').UserAuthorisationCreateOutputDto[] };
export type AppSigninResponse = { AppSignin: AppSigninOutputDto };
export type AppOtpSigninResponse = { AppOtpSignin: AppOtpSigninOutputDto };
export type AppResetPasswordResponse = { AppResetPassword: AppResetPasswordOutputDto };
export type AppForgotPasswordResponse = { AppForgotPassword: AppForgotPasswordOutputDto };
export type AppRecoverForgotPasswordResponse = { AppRecoverForgotPassword: AppRecoverForgotPasswordOutputDto };
export type AppSignoutResponse = { AppSignout: boolean };
export type AppWhoAmIResponse = { AppWhoAmI: AppSigninOutputDto };
export type AppStepSigninUserResponse = { AppStepSigninUser: AppStepSigninUserOutputDto };
export type AppStepSigninPasswordResponse = { AppStepSigninPassword: AppStepSigninPasswordOutputDto };
export type AppStepSigninMultiFAOptionResponse = { AppStepSigninMultiFAOption: AppStepSigninMultiFAOptionOutputDto };
export type AppStepSigninMultiFAVerifyResponse = { AppStepSigninMultiFAVerify: AppStepSigninMultiFAVerifyOutputDto };
export type AppGenerateTwoFAQrResponse = { AppGenerateTwoFAQR: AppGenerateTwoFAQrOutputDto };
export type AppVerifyTwoFAQrResponse = { AppVerifyTwoFAQR: AppVerifyTwoFAQrOutputDto };
export type AppRegenerateTwoFARecoveryCodeResponse = { AppRegenerateTwoFARecoveryCode: AppRegenerateTwoFARecoveryCodeOutputDto };
export type AppVerifyTwoFARecoveryCodeResponse = { AppVerifyTwoFARecoveryCode: AppVerifyTwoFARecoveryCodeOutputDto };
