import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DateTime, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { ConnectionSourceFindInputWhereDto } from '../source/dto';
import { ConnectionSourceCategoriesEntity, ConnectionSourceCategoriesSelectionSchema } from './entity';

export class ConnectionSourceCategoriesDto extends ConnectionSourceCategoriesEntity {
  /** Unique ID of the connection source categories, auto generated. */
  declare id?: any;
  /** Title of the connection source categories. */
  declare title?: any;
  /** Description of the connection source categories. */
  declare desc?: any;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** Categories of the connection source. */
  declare fr_connection_sources?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class ConnectionSourceCategoriesFindDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${FindArtefact}`;
}
export class ConnectionSourceCategoriesFindSelectionSchema extends ConnectionSourceCategoriesSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesFindInputWhereDto extends ConnectionSourceCategoriesFindDto {
  /** Unique ID of the connection source categories, auto generated. */
  declare id?: FindOperatorDto;
  /** Title of the connection source categories. */
  declare title?: FindOperatorDto;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** Categories of the connection source. */
  declare fr_connection_sources?: ConnectionSourceFindInputWhereDto[];
}

export class ConnectionSourceCategoriesFindInputSortOrderDto {
  /** Unique ID of the connection source categories, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Title of the connection source categories. */
  declare title?: RecordSortDirectionEnum;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class ConnectionSourceCategoriesFindInputGroupByDto {
  /** Title of the connection source categories. */
  title?: boolean;
  /** Indicates whether the connection source is currently active or inactive. */
  active?: boolean;
  /** When record is created, date-time will be saved. */
  created?: boolean;
  /** When record is updated, date-time will be saved. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class ConnectionSourceCategoriesFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: ConnectionSourceCategoriesFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: ConnectionSourceCategoriesFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesFindOutputRowsDto extends ConnectionSourceCategoriesFindDto {}
export class ConnectionSourceCategoriesFindOutputRowsSelectionSchema extends ConnectionSourceCategoriesFindSelectionSchema {}

export class ConnectionSourceCategoriesFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: ConnectionSourceCategoriesFindOutputRowsDto[];
}
export class ConnectionSourceCategoriesFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof ConnectionSourceCategoriesFindOutputRowsSelectionSchema | ConnectionSourceCategoriesFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesFindOutputRowsSelectionSchema);
}

/** ConnectionSourceCategoriesFindOneById */
export class ConnectionSourceCategoriesFindOneByIdDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${FindOneByIdArtefact}`;
}

export class ConnectionSourceCategoriesFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ConnectionSourceCategoriesCreateDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesCreateInputDto {
  /** Title of the connection source categories. */
  declare title: string;
  /** Description of the connection source categories. */
  declare desc?: string;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: DateTime;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesCreateOutputDto extends ConnectionSourceCategoriesFindOutputRowsDto {}
export class ConnectionSourceCategoriesCreateOutputSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class ConnectionSourceCategoriesUpdateDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesUpdateInputWhereDto extends ConnectionSourceCategoriesFindInputWhereDto {}

export class ConnectionSourceCategoriesUpdateInputSetsDto {
  /** Title of the connection source categories. */
  declare title?: string;
  /** Description of the connection source categories. */
  declare desc?: string;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: DateTime;
}

export class ConnectionSourceCategoriesUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: ConnectionSourceCategoriesUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: ConnectionSourceCategoriesUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesUpdateOutputAffectedRowsDto extends ConnectionSourceCategoriesFindOutputRowsDto {}
export class ConnectionSourceCategoriesUpdateOutputAffectedRowsSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {}

export class ConnectionSourceCategoriesUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceCategoriesUpdateOutputAffectedRowsDto[];
}
export class ConnectionSourceCategoriesUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceCategoriesUpdateOutputAffectedRowsSelectionSchema | ConnectionSourceCategoriesUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and performs very fast. Unlike softRemove, softDelete does not perform data checks and directly performs soft delete. */
export class ConnectionSourceCategoriesSoftDeleteDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesSoftDeleteInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesSoftDeleteOutputDto extends CrudAffectedDto {}
export class ConnectionSourceCategoriesSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records that cannot be recovered or restored. Unlike remove, delete does not check records in database before performing delete operation, so it is fast. */
export class ConnectionSourceCategoriesDeleteDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesDeleteInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesDeleteOutputDto extends CrudAffectedDto {}
export class ConnectionSourceCategoriesDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records that are soft deleted or soft removed. Unlike recover, restore does not check records in database before performing restore operation, so it is fast. */
export class ConnectionSourceCategoriesRestoreDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRestoreInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRestoreOutputDto extends CrudAffectedDto {}
export class ConnectionSourceCategoriesRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new records in entity. It can insert and update at the same time. You can also upsert multiple records at once and it returns only saved data. */
export class ConnectionSourceCategoriesUpsertDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesUpsertInputDto {
  /** Title of the connection source categories. */
  declare title: string;
  /** Description of the connection source categories. */
  declare desc?: string;
  /** Indicates whether the connection source is currently active or inactive. */
  declare active?: DateTime;
  /**
   * Unique ID of the connection source categories, auto generated. undefined
   */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesUpsertOutputDto extends ConnectionSourceCategoriesFindOutputRowsDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class ConnectionSourceCategoriesUpsertOutputSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  upsert_process?: typeof UpsertOutputProcessStatusSelectionSchema | UpsertOutputProcessStatusDto | SchemaRef | false = schemaRef(() => UpsertOutputProcessStatusSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records that can be recovered or restored later. Soft remove checks existing records in database before applying the operation. */
export class ConnectionSourceCategoriesSoftRemoveDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesSoftRemoveInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto extends ConnectionSourceCategoriesFindOutputRowsDto {}
export class ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {}

export class ConnectionSourceCategoriesSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto[];
}
export class ConnectionSourceCategoriesSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsSelectionSchema | ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ConnectionSourceCategoriesRemoveDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRemoveInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRemoveOutputAffectedRowsDto extends ConnectionSourceCategoriesFindOutputRowsDto {}
export class ConnectionSourceCategoriesRemoveOutputAffectedRowsSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {}

export class ConnectionSourceCategoriesRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceCategoriesRemoveOutputAffectedRowsDto[];
}
export class ConnectionSourceCategoriesRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceCategoriesRemoveOutputAffectedRowsSelectionSchema | ConnectionSourceCategoriesRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ConnectionSourceCategoriesRecoverDto extends ConnectionSourceCategoriesDto {
  static metaname: string = `${ConnectionSourceCategoriesEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRecoverInputWhereDto extends ConnectionSourceCategoriesUpdateInputWhereDto {}

export class ConnectionSourceCategoriesRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceCategoriesRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCategoriesRecoverOutputAffectedRowsDto extends ConnectionSourceCategoriesFindOutputRowsDto {}
export class ConnectionSourceCategoriesRecoverOutputAffectedRowsSelectionSchema extends ConnectionSourceCategoriesFindOutputRowsSelectionSchema {}

export class ConnectionSourceCategoriesRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceCategoriesRecoverOutputAffectedRowsDto[];
}
export class ConnectionSourceCategoriesRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceCategoriesRecoverOutputAffectedRowsSelectionSchema | ConnectionSourceCategoriesRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesRecoverOutputAffectedRowsSelectionSchema);
}

export interface ConnectionSourceCategoriesFindResponse {
  ConnectionSourceCategoriesFind: ConnectionSourceCategoriesFindOutputDto;
}
export interface ConnectionSourceCategoriesFindOneByIdResponse {
  ConnectionSourceCategoriesFindOneById: ConnectionSourceCategoriesEntity;
}
export interface ConnectionSourceCategoriesCreateResponse {
  ConnectionSourceCategoriesCreate: ConnectionSourceCategoriesCreateOutputDto[];
}
export interface ConnectionSourceCategoriesUpdateResponse {
  ConnectionSourceCategoriesUpdate: ConnectionSourceCategoriesUpdateOutputDto;
}
export interface ConnectionSourceCategoriesSoftDeleteResponse {
  ConnectionSourceCategoriesSoftDelete: ConnectionSourceCategoriesSoftDeleteOutputDto;
}
export interface ConnectionSourceCategoriesDeleteResponse {
  ConnectionSourceCategoriesDelete: ConnectionSourceCategoriesDeleteOutputDto;
}
export interface ConnectionSourceCategoriesRestoreResponse {
  ConnectionSourceCategoriesRestore: ConnectionSourceCategoriesRestoreOutputDto;
}
export interface ConnectionSourceCategoriesUpsertResponse {
  ConnectionSourceCategoriesUpsert: ConnectionSourceCategoriesUpsertOutputDto[];
}
export interface ConnectionSourceCategoriesSoftRemoveResponse {
  ConnectionSourceCategoriesSoftRemove: ConnectionSourceCategoriesSoftRemoveOutputDto;
}
export interface ConnectionSourceCategoriesRemoveResponse {
  ConnectionSourceCategoriesRemove: ConnectionSourceCategoriesRemoveOutputDto;
}
export interface ConnectionSourceCategoriesRecoverResponse {
  ConnectionSourceCategoriesRecover: ConnectionSourceCategoriesRecoverOutputDto;
}
