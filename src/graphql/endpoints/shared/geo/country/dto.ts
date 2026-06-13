import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { CountryPhoneCodeFindInputWhereDto } from '../country-phone-code/dto';
import { CountryEntity, CountrySelectionSchema } from './entity';

export class CountryDto extends CountryEntity {
  /** Unique ID of the country, auto generated. */
  declare id?: any;
  /** Name of the country. */
  declare name?: any;
  /** Numeric code of the country. */
  declare numeric_code?: any;
  /** ISO III code of the country. */
  declare iso_iii?: any;
  /** ISO II code of the country. */
  declare iso_ii?: any;
  /** Capital of the country. */
  declare capital?: any;
  /** Currency code of the country. */
  declare currency?: any;
  /** Currency name of the country. */
  declare currency_name?: any;
  /** Currency symbol of the country. */
  declare currency_symbol?: any;
  /** Emoji of the country. */
  declare emoji?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: any;
  /** List of country phone code for this country. */
  declare fr_country_phone_codes?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class CountryFindDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${FindArtefact}`;
}
export class CountryFindSelectionSchema extends CountrySelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class CountryFindInputWhereDto extends CountryFindDto {
  /** Unique ID of the country, auto generated. */
  declare id?: FindOperatorDto;
  /** Name of the country. */
  declare name?: FindOperatorDto;
  /** Numeric code of the country. */
  declare numeric_code?: FindOperatorDto;
  /** ISO III code of the country. */
  declare iso_iii?: FindOperatorDto;
  /** ISO II code of the country. */
  declare iso_ii?: FindOperatorDto;
  /** Capital of the country. */
  declare capital?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: FindOperatorDto;
  /** List of country phone code for this country. */
  declare fr_country_phone_codes?: CountryPhoneCodeFindInputWhereDto[];
}

export class CountryFindInputSortOrderDto {
  /** Unique ID of the country, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Name of the country. */
  declare name?: RecordSortDirectionEnum;
  /** ISO III code of the country. */
  declare iso_iii?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: RecordSortDirectionEnum;
}

export class CountryFindInputGroupByDto {
  /** ISO III code of the country. */
  declare iso_iii?: boolean;
  /** When record is created, date-time will be saved. */
  declare created?: boolean;
  /** When record is updated, date-time will be saved. */
  declare updated?: boolean;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: boolean;
}

export class CountryFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /** Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryFindInputWhereDto[];
  /** Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once. */
  declare groupBy?: CountryFindInputGroupByDto;
  /** Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once. */
  declare order?: CountryFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class CountryFindOutputRowsDto extends CountryFindDto {}
export class CountryFindOutputRowsSelectionSchema extends CountryFindSelectionSchema {}

export class CountryFindOutputDto extends FindOutputPaginationOptionsDto {
  /** List of records found for the find query. It is an array of objects with fields and values as per entity schema. */
  declare rows?: CountryFindOutputRowsDto[];
}
export class CountryFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /** List of records found for the find query. It is an array of objects with fields and values as per entity schema. */
  rows?: typeof CountryFindOutputRowsSelectionSchema | CountryFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** CountryFindOneById */
export class CountryFindOneByIdDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class CountryFindOneByIdInputDto extends IdInputDto {
  /** With deleted criteria for your operation. You can specify if you want to include soft deleted or removed records in result set or not. Retrive soft deleted or soft removed records.. */
  declare withDeleted?: boolean;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class CountryCreateDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class CountryCreateInputDto extends CountryCreateDto {
  /** Name of the country. */
  declare name: string;
  /** Numeric code of the country. */
  declare numeric_code?: string;
  /** ISO III code of the country. */
  declare iso_iii?: string;
  /** ISO II code of the country. */
  declare iso_ii?: string;
  /** Capital of the country. */
  declare capital?: string;
  /** Currency code of the country. */
  declare currency?: string;
  /** Currency name of the country. */
  declare currency_name?: string;
  /** Currency symbol of the country. */
  declare currency_symbol?: string;
  /** Emoji of the country. */
  declare emoji?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class CountryCreateOutputDto extends CountryFindOutputRowsDto {}
export class CountryCreateOutputSelectionSchema extends CountryFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class CountryUpdateDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class CountryUpdateInputWhereDto extends CountryFindInputWhereDto {}

export class CountryUpdateInputSetsDto {
  /** Name of the country. */
  declare name?: string;
  /** Numeric code of the country. */
  declare numeric_code?: string;
  /** ISO III code of the country. */
  declare iso_iii?: string;
  /** ISO II code of the country. */
  declare iso_ii?: string;
  /** Capital of the country. */
  declare capital?: string;
  /** Currency code of the country. */
  declare currency?: string;
  /** Currency name of the country. */
  declare currency_name?: string;
  /** Currency symbol of the country. */
  declare currency_symbol?: string;
  /** Emoji of the country. */
  declare emoji?: string;
}

export class CountryUpdateInputDto {
  /** Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where: CountryUpdateInputWhereDto[];
  /** Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once. */
  declare sets: CountryUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class CountryUpdateOutputAffectedRowsDto extends CountryFindOutputRowsDto {}
export class CountryUpdateOutputAffectedRowsSelectionSchema extends CountryFindOutputRowsSelectionSchema {}

export class CountryUpdateOutputDto extends CrudAffectedDto {
  /** List of records updated for the update query. It is an array of objects with fields and values as per entity schema. */
  declare affectedRows?: CountryUpdateOutputAffectedRowsDto[];
}
export class CountryUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records updated for the update query. It is an array of objects with fields and values as per entity schema. */
  affectedRows?: typeof CountryUpdateOutputAffectedRowsSelectionSchema | CountryUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class CountrySoftDeleteDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class CountrySoftDeleteInputWhereDto extends CountryFindInputWhereDto {}

export class CountrySoftDeleteInputDto {
  /** Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountrySoftDeleteInputWhereDto[];
}

export class CountrySoftDeleteOutputDto extends CrudAffectedDto {}
export class CountrySoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class CountryDeleteDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class CountryDeleteInputWhereDto extends CountryFindInputWhereDto {}

export class CountryDeleteInputDto {
  /** Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryDeleteInputWhereDto[];
}

export class CountryDeleteOutputDto extends CrudAffectedDto {}
export class CountryDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class CountryRestoreDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████
export class CountryRestoreInputWhereDto extends CountryFindInputWhereDto {}

export class CountryRestoreInputDto {
  /** Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryRestoreInputWhereDto[];
}

export class CountryRestoreOutputDto extends CrudAffectedDto {}
export class CountryRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class CountryUpsertDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████
export class CountryUpsertInputDto extends CountryCreateInputDto {
  /** Unique ID of the country, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████
export class CountryUpsertOutputDto extends CountryFindOutputRowsDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  declare upsert_process?: UpsertStatusEnum;
}
export class CountryUpsertOutputSelectionSchema extends CountryFindOutputRowsSelectionSchema {
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
export class CountrySoftRemoveDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class CountrySoftRemoveInputWhereDto extends CountryFindInputWhereDto {}

export class CountrySoftRemoveInputDto {
  /** Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountrySoftRemoveInputWhereDto[];
}

export class CountrySoftRemoveOutputAffectedRowsDto extends CountryFindOutputRowsDto {}
export class CountrySoftRemoveOutputAffectedRowsSelectionSchema extends CountryFindOutputRowsSelectionSchema {}

export class CountrySoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records soft removed for the soft remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountrySoftRemoveOutputAffectedRowsDto[];
}
export class CountrySoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records soft removed for the soft remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof CountrySoftRemoveOutputAffectedRowsSelectionSchema | CountrySoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountrySoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class CountryRemoveDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class CountryRemoveInputWhereDto extends CountryFindInputWhereDto {}

export class CountryRemoveInputDto {
  /** Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryRemoveInputWhereDto[];
}

export class CountryRemoveOutputAffectedRowsDto extends CountryFindOutputRowsDto {}
export class CountryRemoveOutputAffectedRowsSelectionSchema extends CountryFindOutputRowsSelectionSchema {}

export class CountryRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records removed for the remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountryRemoveOutputAffectedRowsDto[];
}
export class CountryRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records removed for the remove query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof CountryRemoveOutputAffectedRowsSelectionSchema | CountryRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class CountryRecoverDto extends CountryDto {
  static metaname: string = `${CountryEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class CountryRecoverInputWhereDto extends CountryFindInputWhereDto {}

export class CountryRecoverInputDto {
  /** Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: CountryRecoverInputWhereDto[];
}

export class CountryRecoverOutputAffectedRowsDto extends CountryFindOutputRowsDto {}
export class CountryRecoverOutputAffectedRowsSelectionSchema extends CountryFindOutputRowsSelectionSchema {}

export class CountryRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records recovered for the recover query.
   * It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: CountryRecoverOutputAffectedRowsDto[];
}
export class CountryRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query.
   * It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof CountryRecoverOutputAffectedRowsSelectionSchema | CountryRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => CountryRecoverOutputAffectedRowsSelectionSchema);
}

export type CountryFindResponse = { CountryFind: CountryFindOutputDto };
export type CountryFindOneByIdResponse = { CountryFindOneById: CountryEntity };
export type CountryCreateResponse = { CountryCreate: CountryCreateOutputDto[] };
export type CountryUpdateResponse = { CountryUpdate: CountryUpdateOutputDto };
export type CountrySoftDeleteResponse = { CountrySoftDelete: CountrySoftDeleteOutputDto };
export type CountryDeleteResponse = { CountryDelete: CountryDeleteOutputDto };
export type CountryRestoreResponse = { CountryRestore: CountryRestoreOutputDto };
export type CountryUpsertResponse = { CountryUpsert: CountryUpsertOutputDto[] };
export type CountrySoftRemoveResponse = { CountrySoftRemove: CountrySoftRemoveOutputDto };
export type CountryRemoveResponse = { CountryRemove: CountryRemoveOutputDto };
export type CountryRecoverResponse = { CountryRecover: CountryRecoverOutputDto };
