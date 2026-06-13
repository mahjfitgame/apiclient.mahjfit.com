import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { ConnectionSourceCategoriesFindInputWhereDto } from '../source-categories/dto';
import { UserFindInputWhereDto } from '../../folk/user/dto';
import { ConnectionSourceEntity, ConnectionSourceSelectionSchema } from './entity';

export class ConnectionSourceDto extends ConnectionSourceEntity {
  /** Unique ID of the connection source, auto generated. */
  declare id?: any;
  /** Connection source category of the connection source. */
  declare connsrccat_id?: any;
  /** Title of the connection source. */
  declare title?: any;
  /** Description of the connection source. */
  declare desc?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** Connection source of the connection source category. */
  declare fr_connection_source_category?: any;
  /** User of the connection source category. */
  declare fr_users?: any[];
  /** Buissness of the connection source category. */
  declare fr_businesses?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class ConnectionSourceFindDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${FindArtefact}`;
}
export class ConnectionSourceFindSelectionSchema extends ConnectionSourceSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceFindInputWhereDto extends ConnectionSourceFindDto {
  /** Unique ID of the connection source, auto generated. */
  declare id?: FindOperatorDto;
  /** Connection source category of the connection source. */
  declare connsrccat_id?: FindOperatorDto;
  /** Title of the connection source. */
  declare title?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** Connection source of the connection source category. */
  declare fr_connection_source_category?: ConnectionSourceCategoriesFindInputWhereDto[];
  /** User of the connection source category. */
  declare fr_users?: UserFindInputWhereDto[];
}

export class ConnectionSourceFindInputSortOrderDto {
  /** Unique ID of the connection source, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Connection source category of the connection source. */
  declare connsrccat_id?: RecordSortDirectionEnum;
  /** Title of the connection source. */
  declare title?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class ConnectionSourceFindInputGroupByDto {
  /** Connection source category of the connection source. */
  connsrccat_id?: boolean;
  /** Title of the connection source. */
  title?: boolean;
  /** When record is created, date-time will be saved. */
  created?: boolean;
  /** When record is updated, date-time will be saved. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class ConnectionSourceFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: ConnectionSourceFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: ConnectionSourceFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceFindOutputRowsDto extends ConnectionSourceFindDto {}
export class ConnectionSourceFindOutputRowsSelectionSchema extends ConnectionSourceFindSelectionSchema {}

export class ConnectionSourceFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: ConnectionSourceFindOutputRowsDto[];
}
export class ConnectionSourceFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof ConnectionSourceFindOutputRowsSelectionSchema | ConnectionSourceFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceFindOutputRowsSelectionSchema);
}

/** ConnectionSourceFindOneById */
export class ConnectionSourceFindOneByIdDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${FindOneByIdArtefact}`;
}

export class ConnectionSourceFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ConnectionSourceCreateDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCreateInputDto {
  /** Connection source category of the connection source. */
  declare connsrccat_id: number;
  /** Title of the connection source. */
  declare title: string;
  /** Description of the connection source. */
  declare desc?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceCreateOutputDto extends ConnectionSourceFindOutputRowsDto {}
export class ConnectionSourceCreateOutputSelectionSchema extends ConnectionSourceFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class ConnectionSourceUpdateDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceUpdateInputWhereDto extends ConnectionSourceFindInputWhereDto {}

export class ConnectionSourceUpdateInputSetsDto {
  /** Connection source category of the connection source. */
  declare connsrccat_id?: number;
  /** Title of the connection source. */
  declare title?: string;
  /** Description of the connection source. */
  declare desc?: string;
}

export class ConnectionSourceUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: ConnectionSourceUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: ConnectionSourceUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceUpdateOutputAffectedRowsDto extends ConnectionSourceFindOutputRowsDto {}
export class ConnectionSourceUpdateOutputAffectedRowsSelectionSchema extends ConnectionSourceFindOutputRowsSelectionSchema {}

export class ConnectionSourceUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceUpdateOutputAffectedRowsDto[];
}
export class ConnectionSourceUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceUpdateOutputAffectedRowsSelectionSchema | ConnectionSourceUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class ConnectionSourceSoftDeleteDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceSoftDeleteInputWhereDto extends ConnectionSourceFindInputWhereDto {}

export class ConnectionSourceSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceSoftDeleteOutputDto extends CrudAffectedDto {}
export class ConnectionSourceSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. This is very fast and delete records without checking in database. So, you will not get data in return. */
export class ConnectionSourceDeleteDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceDeleteInputWhereDto extends ConnectionSourceUpdateInputWhereDto {}

export class ConnectionSourceDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceDeleteOutputDto extends CrudAffectedDto {}
export class ConnectionSourceDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class ConnectionSourceRestoreDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████
export class ConnectionSourceRestoreInputWhereDto extends ConnectionSourceFindInputWhereDto {}

export class ConnectionSourceRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
export class ConnectionSourceRestoreOutputDto extends CrudAffectedDto {}
export class ConnectionSourceRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ConnectionSourceUpsertDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████
export class ConnectionSourceUpsertInputDto extends ConnectionSourceCreateInputDto {
  /** Unique ID of the connection source, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████
export class ConnectionSourceUpsertOutputDto extends ConnectionSourceCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class ConnectionSourceUpsertOutputSelectionSchema extends ConnectionSourceCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class ConnectionSourceSoftRemoveDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceSoftRemoveInputWhereDto extends ConnectionSourceUpdateInputWhereDto {}

export class ConnectionSourceSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceSoftRemoveOutputAffectedRowsDto extends ConnectionSourceFindOutputRowsDto {}
export class ConnectionSourceSoftRemoveOutputAffectedRowsSelectionSchema extends ConnectionSourceFindOutputRowsSelectionSchema {}

export class ConnectionSourceSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceSoftRemoveOutputAffectedRowsDto[];
}
export class ConnectionSourceSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceSoftRemoveOutputAffectedRowsSelectionSchema | ConnectionSourceSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ConnectionSourceRemoveDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceRemoveInputWhereDto extends ConnectionSourceUpdateInputWhereDto {}

export class ConnectionSourceRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceRemoveOutputAffectedRowsDto extends ConnectionSourceFindOutputRowsDto {}
export class ConnectionSourceRemoveOutputAffectedRowsSelectionSchema extends ConnectionSourceFindOutputRowsSelectionSchema {}

export class ConnectionSourceRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceRemoveOutputAffectedRowsDto[];
}
export class ConnectionSourceRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceRemoveOutputAffectedRowsSelectionSchema | ConnectionSourceRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ConnectionSourceRecoverDto extends ConnectionSourceDto {
  static metaname: string = `${ConnectionSourceEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceRecoverInputWhereDto extends ConnectionSourceUpdateInputWhereDto {}

export class ConnectionSourceRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ConnectionSourceRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████
export class ConnectionSourceRecoverOutputAffectedRowsDto extends ConnectionSourceFindOutputRowsDto {}
export class ConnectionSourceRecoverOutputAffectedRowsSelectionSchema extends ConnectionSourceFindOutputRowsSelectionSchema {}

export class ConnectionSourceRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ConnectionSourceRecoverOutputAffectedRowsDto[];
}
export class ConnectionSourceRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ConnectionSourceRecoverOutputAffectedRowsSelectionSchema | ConnectionSourceRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceRecoverOutputAffectedRowsSelectionSchema);
}

export interface ConnectionSourceFindResponse {
  ConnectionSourceFind: ConnectionSourceFindOutputDto;
}
export interface ConnectionSourceFindOneByIdResponse {
  ConnectionSourceFindOneById: ConnectionSourceEntity;
}
export interface ConnectionSourceCreateResponse {
  ConnectionSourceCreate: ConnectionSourceCreateOutputDto[];
}
export interface ConnectionSourceUpdateResponse {
  ConnectionSourceUpdate: ConnectionSourceUpdateOutputDto;
}
export interface ConnectionSourceSoftDeleteResponse {
  ConnectionSourceSoftDelete: ConnectionSourceSoftDeleteOutputDto;
}
export interface ConnectionSourceDeleteResponse {
  ConnectionSourceDelete: ConnectionSourceDeleteOutputDto;
}
export interface ConnectionSourceRestoreResponse {
  ConnectionSourceRestore: ConnectionSourceRestoreOutputDto;
}
export interface ConnectionSourceUpsertResponse {
  ConnectionSourceUpsert: ConnectionSourceUpsertOutputDto[];
}
export interface ConnectionSourceSoftRemoveResponse {
  ConnectionSourceSoftRemove: ConnectionSourceSoftRemoveOutputDto;
}
export interface ConnectionSourceRemoveResponse {
  ConnectionSourceRemove: ConnectionSourceRemoveOutputDto;
}
export interface ConnectionSourceRecoverResponse {
  ConnectionSourceRecover: ConnectionSourceRecoverOutputDto;
}
