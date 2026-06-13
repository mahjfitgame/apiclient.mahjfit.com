import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { UserFindInputWhereDto } from '../../folk/user/dto';
import { CountryFindInputWhereDto } from '../country/dto';
import { CountryPhoneCodeEntity, CountryPhoneCodeSelectionSchema } from './entity';

export class CountryPhoneCodeDto extends CountryPhoneCodeEntity {
  /** Unique ID of the country language, auto generated. */
  declare id?: any;
  /** Country of the language. */
  declare country_id?: any;
  /** Phone code of the country. */
  declare phone_code?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: any;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: any;
  /** Country for country phone code. */
  declare fr_country?: any;
  /** Business mobile code for country phone code. */
  declare fr_mobile_businesses?: any[];
  /** Business whatsapp code for country phone code. */
  declare fr_whatsapp_businesses?: any[];
  /** Business mobile code for country phone code. */
  declare fr_mobile_business_branches?: any[];
  /** Business whatsapp code for country phone code. */
  declare fr_whatsapp_business_branches?: any[];
  /** Queue sms from mobile code for country phone code. */
  declare fr_from_queue_sms?: any[];
  /** Queue sms from mobile code for country phone code. */
  declare fr_to_queue_sms?: any[];
  /** Queue whatsapp from mobile code for country phone code. */
  declare fr_from_queue_whatsapp?: any[];
  /** Queue whatsapp from mobile code for country phone code. */
  declare fr_to_queue_whatsapp?: any[];
  /** User primary mobile code for country phone code. */
  declare fr_primary_users?: any[];
  /** User recovery mobile code for country phone code. */
  declare fr_recovery_users?: any[];
  /** User whatsapp code for country phone code. */
  declare fr_whatsapp_users?: any[];
  /** User address mobile code for country phone code. */
  declare fr_user_addresses?: any[];
  /** User profile info mobile code for country phone code. */
  declare fr_user_professional_infos?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class CountryPhoneCodeFindDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${FindArtefact}`;
}
export class CountryPhoneCodeFindSelectionSchema extends CountryPhoneCodeSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeFindInputWhereDto extends CountryPhoneCodeFindDto {
  /** Unique ID of the country language, auto generated. */
  declare id?: FindOperatorDto;
  /** Country of the language. */
  declare country_id?: FindOperatorDto;
  /** Phone code of the country. */
  declare phone_code?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: FindOperatorDto;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: FindOperatorDto;
  /** Country for country phone code. */
  declare fr_country?: CountryFindInputWhereDto[];
  /** User primary mobile code for country phone code. */
  declare fr_primary_users?: UserFindInputWhereDto[];
  /** User recovery mobile code for country phone code. */
  declare fr_recovery_users?: UserFindInputWhereDto[];
  /** User whatsapp code for country phone code. */
  declare fr_whatsapp_users?: UserFindInputWhereDto[];
}

export class CountryPhoneCodeFindInputSortOrderDto {
  /** Unique ID of the country language, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Country of the language. */
  declare country_id?: RecordSortDirectionEnum;
  /** Phone code of the country. */
  declare phone_code?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: RecordSortDirectionEnum;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: RecordSortDirectionEnum;
}

export class CountryPhoneCodeFindInputGroupByDto {
  /** Country of the language. */
  declare country_id?: boolean;
  /** Phone code of the country. */
  declare phone_code?: boolean;
  /** When record is created, date-time will be saved. */
  declare created?: boolean;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: boolean;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: boolean;
}

export class CountryPhoneCodeFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /** Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeFindInputWhereDto[];
  /** Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once. */
  declare groupBy?: CountryPhoneCodeFindInputGroupByDto;
  /** Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once. */
  declare order?: CountryPhoneCodeFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeFindOutputRowsDto extends CountryPhoneCodeFindDto {}
export class CountryPhoneCodeFindOutputRowsSelectionSchema extends CountryPhoneCodeFindSelectionSchema {}

export class CountryPhoneCodeFindOutputDto extends FindOutputPaginationOptionsDto {
  /** List of records found for the find query. It is an array of objects with fields and values as per entity schema. */
  declare rows?: CountryPhoneCodeFindOutputRowsDto[];
}
export class CountryPhoneCodeFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /** List of records found for the find query. It is an array of objects with fields and values as per entity schema. */
  rows?: typeof CountryPhoneCodeFindOutputRowsSelectionSchema | CountryPhoneCodeFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryPhoneCodeFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** CountryPhoneCodeFindOneById */
export class CountryPhoneCodeFindOneByIdDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeFindOneByIdInputDto extends IdInputDto {
  /** With deleted criteria for your operation. You can specify if you want to include soft deleted or removed records in result set or not. Retrive soft deleted or soft removed records.. */
  declare withDeleted?: boolean;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class CountryPhoneCodeCreateDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeCreateInputDto extends CountryPhoneCodeCreateDto {
  /** Country of the language. */
  declare country_id: number;
  /** Phone code of the country. */
  declare phone_code: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeCreateOutputDto extends CountryPhoneCodeFindOutputRowsDto {}
export class CountryPhoneCodeCreateOutputSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class CountryPhoneCodeUpdateDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeUpdateInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeUpdateInputSetsDto {
  /** Country of the language. */
  declare country_id?: number;
  /** Phone code of the country. */
  declare phone_code?: string;
}

export class CountryPhoneCodeUpdateInputDto {
  /** Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where: CountryPhoneCodeUpdateInputWhereDto[];
  /** Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once. */
  declare sets: CountryPhoneCodeUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeUpdateOutputAffectedRowsDto extends CountryPhoneCodeFindOutputRowsDto {}
export class CountryPhoneCodeUpdateOutputAffectedRowsSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {}

export class CountryPhoneCodeUpdateOutputDto extends CrudAffectedDto {
  /** List of records updated for the update query. It is an array of objects with fields and values as per entity schema. */
  declare affectedRows?: CountryPhoneCodeUpdateOutputAffectedRowsDto[];
}
export class CountryPhoneCodeUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records updated for the update query. It is an array of objects with fields and values as per entity schema. */
  affectedRows?: typeof CountryPhoneCodeUpdateOutputAffectedRowsSelectionSchema | CountryPhoneCodeUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryPhoneCodeUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class CountryPhoneCodeSoftDeleteDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeSoftDeleteInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeSoftDeleteInputDto {
  /** Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeSoftDeleteInputWhereDto[];
}

export class CountryPhoneCodeSoftDeleteOutputDto extends CrudAffectedDto {}
export class CountryPhoneCodeSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class CountryPhoneCodeDeleteDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeDeleteInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeDeleteInputDto {
  /** Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeDeleteInputWhereDto[];
}

export class CountryPhoneCodeDeleteOutputDto extends CrudAffectedDto {}
export class CountryPhoneCodeDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class CountryPhoneCodeRestoreDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeRestoreInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeRestoreInputDto {
  /** Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeRestoreInputWhereDto[];
}

export class CountryPhoneCodeRestoreOutputDto extends CrudAffectedDto {}
export class CountryPhoneCodeRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class CountryPhoneCodeUpsertDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeUpsertInputDto extends CountryPhoneCodeCreateInputDto {
  /** Unique ID of the country language, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeUpsertOutputDto extends CountryPhoneCodeFindOutputRowsDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  declare upsert_process?: UpsertStatusEnum;
}
export class CountryPhoneCodeUpsertOutputSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: typeof UpsertOutputProcessStatusSelectionSchema | UpsertOutputProcessStatusDto | SchemaRef | false =
    schemaRef(() => UpsertOutputProcessStatusSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class CountryPhoneCodeSoftRemoveDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeSoftRemoveInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeSoftRemoveInputDto {
  /** Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeSoftRemoveInputWhereDto[];
}

export class CountryPhoneCodeSoftRemoveOutputAffectedRowsDto extends CountryPhoneCodeFindOutputRowsDto {}
export class CountryPhoneCodeSoftRemoveOutputAffectedRowsSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {}

export class CountryPhoneCodeSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records soft removed for the soft remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountryPhoneCodeSoftRemoveOutputAffectedRowsDto[];
}
export class CountryPhoneCodeSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records soft removed for the soft remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof CountryPhoneCodeSoftRemoveOutputAffectedRowsSelectionSchema
    | CountryPhoneCodeSoftRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => CountryPhoneCodeSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class CountryPhoneCodeRemoveDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeRemoveInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeRemoveInputDto {
  /** Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeRemoveInputWhereDto[];
}

export class CountryPhoneCodeRemoveOutputAffectedRowsDto extends CountryPhoneCodeFindOutputRowsDto {}
export class CountryPhoneCodeRemoveOutputAffectedRowsSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {}

export class CountryPhoneCodeRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records removed for the remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountryPhoneCodeRemoveOutputAffectedRowsDto[];
}
export class CountryPhoneCodeRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records removed for the remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof CountryPhoneCodeRemoveOutputAffectedRowsSelectionSchema | CountryPhoneCodeRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryPhoneCodeRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class CountryPhoneCodeRecoverDto extends CountryPhoneCodeDto {
  static metaname: string = `${CountryPhoneCodeEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class CountryPhoneCodeRecoverInputWhereDto extends CountryPhoneCodeFindInputWhereDto {}

export class CountryPhoneCodeRecoverInputDto {
  /** Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryPhoneCodeRecoverInputWhereDto[];
}

export class CountryPhoneCodeRecoverOutputAffectedRowsDto extends CountryPhoneCodeFindOutputRowsDto {}
export class CountryPhoneCodeRecoverOutputAffectedRowsSelectionSchema extends CountryPhoneCodeFindOutputRowsSelectionSchema {}

export class CountryPhoneCodeRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records recovered for the recover query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountryPhoneCodeRecoverOutputAffectedRowsDto[];
}
export class CountryPhoneCodeRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof CountryPhoneCodeRecoverOutputAffectedRowsSelectionSchema | CountryPhoneCodeRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryPhoneCodeRecoverOutputAffectedRowsSelectionSchema);
}

export type CountryPhoneCodeFindResponse = { CountryPhoneCodeFind: CountryPhoneCodeFindOutputDto };
export type CountryPhoneCodeFindOneByIdResponse = { CountryPhoneCodeFindOneById: CountryPhoneCodeEntity };
export type CountryPhoneCodeCreateResponse = { CountryPhoneCodeCreate: CountryPhoneCodeCreateOutputDto[] };
export type CountryPhoneCodeUpdateResponse = { CountryPhoneCodeUpdate: CountryPhoneCodeUpdateOutputDto };
export type CountryPhoneCodeSoftDeleteResponse = { CountryPhoneCodeSoftDelete: CountryPhoneCodeSoftDeleteOutputDto };
export type CountryPhoneCodeDeleteResponse = { CountryPhoneCodeDelete: CountryPhoneCodeDeleteOutputDto };
export type CountryPhoneCodeRestoreResponse = { CountryPhoneCodeRestore: CountryPhoneCodeRestoreOutputDto };
export type CountryPhoneCodeUpsertResponse = { CountryPhoneCodeUpsert: CountryPhoneCodeUpsertOutputDto[] };
export type CountryPhoneCodeSoftRemoveResponse = { CountryPhoneCodeSoftRemove: CountryPhoneCodeSoftRemoveOutputDto };
export type CountryPhoneCodeRemoveResponse = { CountryPhoneCodeRemove: CountryPhoneCodeRemoveOutputDto };
export type CountryPhoneCodeRecoverResponse = { CountryPhoneCodeRecover: CountryPhoneCodeRecoverOutputDto };
