import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDto, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { AlertDurationEntity, AlertDurationSelectionSchema } from './entity';

export class AlertDurationDto extends AlertDurationEntity {
  /** Unique ID of the email template, auto generated. */
  declare id?: any;
  /** Title of the email template. */
  declare title?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class AlertDurationFindDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${FindArtefact}`;
}
export class AlertDurationFindSelectionSchema extends AlertDurationSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class AlertDurationFindInputWhereDto extends AlertDurationFindDto {
  /** Unique ID of the email template, auto generated. */
  declare id?: FindOperatorDto;
  /** Title of the email template. */
  declare title?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
}

export class AlertDurationFindInputSortOrderDto {
  /** Unique ID of the email template, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Title of the email template. */
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

export class AlertDurationFindInputGroupByDto {
  /** Title of the email template. */
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

export class AlertDurationFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: AlertDurationFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: AlertDurationFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class AlertDurationFindOutputRowsDto extends AlertDurationFindDto {}
export class AlertDurationFindOutputRowsSelectionSchema extends AlertDurationFindSelectionSchema {}

export class AlertDurationFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: AlertDurationFindOutputRowsDto[];
}
export class AlertDurationFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?:
    | typeof AlertDurationFindOutputRowsSelectionSchema
    | AlertDurationFindOutputRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AlertDurationFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/
/** AlertDurationFindOneById */
export class AlertDurationFindOneByIdDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class AlertDurationFindOneByIdInputDto extends IdInputDto {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class AlertDurationCreateDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class AlertDurationCreateInputDto extends AlertDurationCreateDto {
  /** Title of the email template. */
  declare title: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class AlertDurationCreateOutputDto extends AlertDurationFindOutputRowsDto {}
export class AlertDurationCreateOutputSelectionSchema extends AlertDurationFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class AlertDurationUpdateDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class AlertDurationUpdateInputWhereDto extends AlertDurationFindInputWhereDto {}

export class AlertDurationUpdateInputSetsDto {
  /** Title of the email template. */
  declare title?: string;
}

export class AlertDurationUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: AlertDurationUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: AlertDurationUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class AlertDurationUpdateOutputAffectedRowsDto extends AlertDurationFindOutputRowsDto {}
export class AlertDurationUpdateOutputAffectedRowsSelectionSchema extends AlertDurationFindOutputRowsSelectionSchema {}

export class AlertDurationUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AlertDurationUpdateOutputAffectedRowsDto[];
}
export class AlertDurationUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AlertDurationUpdateOutputAffectedRowsSelectionSchema
    | AlertDurationUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AlertDurationUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class AlertDurationSoftDeleteDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class AlertDurationSoftDeleteInputWhereDto extends AlertDurationFindInputWhereDto {}

export class AlertDurationSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class AlertDurationSoftDeleteOutputDto extends CrudAffectedDto {}
export class AlertDurationSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class AlertDurationDeleteDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class AlertDurationDeleteInputWhereDto extends AlertDurationFindInputWhereDto {}

export class AlertDurationDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class AlertDurationDeleteOutputDto extends CrudAffectedDto {}
export class AlertDurationDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class AlertDurationRestoreDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class AlertDurationRestoreInputWhereDto extends AlertDurationFindInputWhereDto {}

export class AlertDurationRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
export class AlertDurationRestoreOutputDto extends CrudAffectedDto {}
export class AlertDurationRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class AlertDurationUpsertDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████
export class AlertDurationUpsertInputDto extends AlertDurationCreateInputDto {
  /** Unique ID of the email template, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████
export class AlertDurationUpsertOutputDto extends AlertDurationCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class AlertDurationUpsertOutputSelectionSchema extends AlertDurationCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class AlertDurationSoftRemoveDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class AlertDurationSoftRemoveInputWhereDto extends AlertDurationUpdateInputWhereDto {}

export class AlertDurationSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class AlertDurationSoftRemoveOutputAffectedRowsDto extends AlertDurationFindOutputRowsDto {}
export class AlertDurationSoftRemoveOutputAffectedRowsSelectionSchema extends AlertDurationFindOutputRowsSelectionSchema {}

export class AlertDurationSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AlertDurationSoftRemoveOutputAffectedRowsDto[];
}
export class AlertDurationSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AlertDurationSoftRemoveOutputAffectedRowsSelectionSchema
    | AlertDurationSoftRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AlertDurationSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class AlertDurationRemoveDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class AlertDurationRemoveInputWhereDto extends AlertDurationUpdateInputWhereDto {}

export class AlertDurationRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class AlertDurationRemoveOutputAffectedRowsDto extends AlertDurationFindOutputRowsDto {}
export class AlertDurationRemoveOutputAffectedRowsSelectionSchema extends AlertDurationFindOutputRowsSelectionSchema {}

export class AlertDurationRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AlertDurationRemoveOutputAffectedRowsDto[];
}
export class AlertDurationRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AlertDurationRemoveOutputAffectedRowsSelectionSchema
    | AlertDurationRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AlertDurationRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class AlertDurationRecoverDto extends AlertDurationDto {
  static metaname: string = `${AlertDurationEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class AlertDurationRecoverInputWhereDto extends AlertDurationUpdateInputWhereDto {}

export class AlertDurationRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AlertDurationRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class AlertDurationRecoverOutputAffectedRowsDto extends AlertDurationFindOutputRowsDto {}
export class AlertDurationRecoverOutputAffectedRowsSelectionSchema extends AlertDurationFindOutputRowsSelectionSchema {}

export class AlertDurationRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AlertDurationRecoverOutputAffectedRowsDto[];
}
export class AlertDurationRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AlertDurationRecoverOutputAffectedRowsSelectionSchema
    | AlertDurationRecoverOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AlertDurationRecoverOutputAffectedRowsSelectionSchema);
}

export type AlertDurationFindResponse = { AlertDurationFind: AlertDurationFindOutputDto };
export type AlertDurationFindOneByIdResponse = { AlertDurationFindOneById: AlertDurationEntity };
export type AlertDurationCreateResponse = { AlertDurationCreate: AlertDurationCreateOutputDto[] };
export type AlertDurationUpdateResponse = { AlertDurationUpdate: AlertDurationUpdateOutputDto };
export type AlertDurationSoftDeleteResponse = { AlertDurationSoftDelete: AlertDurationSoftDeleteOutputDto };
export type AlertDurationDeleteResponse = { AlertDurationDelete: AlertDurationDeleteOutputDto };
export type AlertDurationRestoreResponse = { AlertDurationRestore: AlertDurationRestoreOutputDto };
export type AlertDurationUpsertResponse = { AlertDurationUpsert: AlertDurationUpsertOutputDto[] };
export type AlertDurationSoftRemoveResponse = { AlertDurationSoftRemove: AlertDurationSoftRemoveOutputDto };
export type AlertDurationRemoveResponse = { AlertDurationRemove: AlertDurationRemoveOutputDto };
export type AlertDurationRecoverResponse = { AlertDurationRecover: AlertDurationRecoverOutputDto };
