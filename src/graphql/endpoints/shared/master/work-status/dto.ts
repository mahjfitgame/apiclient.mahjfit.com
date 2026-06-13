import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { WorkStatusEntity, WorkStatusSelectionSchema } from './entity';
import { QueueEmailFindInputWhereDto } from '../../queue/email/dto';
export class WorkStatusDto extends WorkStatusEntity {
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
  /** News letter for work status. */
  declare fr_nl_status?: any[];
  /** News letter schedule for work status. */
  declare fr_nl_schedule_status?: any[];
  /** News letter schedule approval status for work status. */
  declare fr_nl_schedule_approval_status?: any[];
  /** Marketing campaign for work status. */
  declare fr_marketing_campaign?: any[];
  /** facebook direct message for work status. */
  declare fr_facebook_dm?: any[];
  /** Crawler job batch associated with this work status. */
  declare fr_job_batch?: any[];
  /** Crawler job batch attempt associated with this work status. */
  declare fr_job_batch_attempt?: any[];
  /** Crawler job batch queue associated with this job batch. */
  declare fr_job_batch_queue?: any[];
  /** Queue email associated with this work status. */
  declare fr_queue_email?: any[];
  /** Queue sms associated with this work status. */
  declare fr_queue_sms?: any[];
  /** Queue whatsapp associated with this work status. */
  declare fr_queue_whatsapp?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class WorkStatusFindDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${FindArtefact}`;
}
export class WorkStatusFindSelectionSchema extends WorkStatusSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class WorkStatusFindInputWhereDto extends WorkStatusFindDto {
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
  /** Queue email associated with this work status. */
  declare fr_queue_email?: QueueEmailFindInputWhereDto[];
}

export class WorkStatusFindInputSortOrderDto {
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

export class WorkStatusFindInputGroupByDto {
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

export class WorkStatusFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: WorkStatusFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: WorkStatusFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusFindOutputRowsDto extends WorkStatusFindDto {}
export class WorkStatusFindOutputRowsSelectionSchema extends WorkStatusFindSelectionSchema {}

export class WorkStatusFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: WorkStatusFindOutputRowsDto[];
}
export class WorkStatusFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?:
    | typeof WorkStatusFindOutputRowsSelectionSchema
    | WorkStatusFindOutputRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => WorkStatusFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/
/** WorkStatusFindOneById */
export class WorkStatusFindOneByIdDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class WorkStatusFindOneByIdInputDto extends IdInputDto {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class WorkStatusCreateDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class WorkStatusCreateInputDto extends WorkStatusCreateDto {
  /** Title of the email template. */
  declare title: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusCreateOutputDto extends WorkStatusFindOutputRowsDto {}
export class WorkStatusCreateOutputSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class WorkStatusUpdateDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class WorkStatusUpdateInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusUpdateInputSetsDto {
  /** Title of the email template. */
  declare title?: string;
}

export class WorkStatusUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: WorkStatusUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: WorkStatusUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusUpdateOutputAffectedRowsDto extends WorkStatusFindOutputRowsDto {}
export class WorkStatusUpdateOutputAffectedRowsSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema {}

export class WorkStatusUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: WorkStatusUpdateOutputAffectedRowsDto[];
}
export class WorkStatusUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof WorkStatusUpdateOutputAffectedRowsSelectionSchema
    | WorkStatusUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => WorkStatusUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class WorkStatusSoftDeleteDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class WorkStatusSoftDeleteInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusSoftDeleteOutputDto extends CrudAffectedDto {}
export class WorkStatusSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class WorkStatusDeleteDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class WorkStatusDeleteInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusDeleteOutputDto extends CrudAffectedDto {}
export class WorkStatusDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class WorkStatusRestoreDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class WorkStatusRestoreInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusRestoreOutputDto extends CrudAffectedDto {}
export class WorkStatusRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class WorkStatusUpsertDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████
export class WorkStatusUpsertInputDto extends WorkStatusCreateInputDto {
  /** Unique ID of the email template, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusUpsertOutputDto extends WorkStatusFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  declare upsert_process?: UpsertStatusEnum;
}
export class WorkStatusUpsertOutputSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class WorkStatusSoftRemoveDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class WorkStatusSoftRemoveInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusSoftRemoveOutputAffectedRowsDto extends WorkStatusFindOutputRowsDto {}
export class WorkStatusSoftRemoveOutputAffectedRowsSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema {}

export class WorkStatusSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: WorkStatusSoftRemoveOutputAffectedRowsDto[];
}
export class WorkStatusSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof WorkStatusSoftRemoveOutputAffectedRowsSelectionSchema
    | WorkStatusSoftRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => WorkStatusSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class WorkStatusRemoveDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class WorkStatusRemoveInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusRemoveOutputAffectedRowsDto extends WorkStatusFindOutputRowsDto {}
export class WorkStatusRemoveOutputAffectedRowsSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema {}

export class WorkStatusRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: WorkStatusRemoveOutputAffectedRowsDto[];
}
export class WorkStatusRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof WorkStatusRemoveOutputAffectedRowsSelectionSchema
    | WorkStatusRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => WorkStatusRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class WorkStatusRecoverDto extends WorkStatusDto {
  static metaname: string = `${WorkStatusEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class WorkStatusRecoverInputWhereDto extends WorkStatusFindInputWhereDto {}

export class WorkStatusRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: WorkStatusRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████
export class WorkStatusRecoverOutputAffectedRowsDto extends WorkStatusFindOutputRowsDto {}
export class WorkStatusRecoverOutputAffectedRowsSelectionSchema extends WorkStatusFindOutputRowsSelectionSchema {}

export class WorkStatusRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: WorkStatusRecoverOutputAffectedRowsDto[];
}
export class WorkStatusRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof WorkStatusRecoverOutputAffectedRowsSelectionSchema
    | WorkStatusRecoverOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => WorkStatusRecoverOutputAffectedRowsSelectionSchema);
}

export type WorkStatusFindResponse = {
  WorkStatusFind: WorkStatusFindOutputDto;
};

export type WorkStatusFindOneByIdResponse = {
  WorkStatusFindOneById: WorkStatusEntity;
};

export type WorkStatusCreateResponse = {
  WorkStatusCreate: WorkStatusCreateOutputDto[];
};

export type WorkStatusUpdateResponse = {
  WorkStatusUpdate: WorkStatusUpdateOutputDto;
};

export type WorkStatusSoftDeleteResponse = {
  WorkStatusSoftDelete: WorkStatusSoftDeleteOutputDto;
};

export type WorkStatusDeleteResponse = {
  WorkStatusDelete: WorkStatusDeleteOutputDto;
};

export type WorkStatusRestoreResponse = {
  WorkStatusRestore: WorkStatusRestoreOutputDto;
};

export type WorkStatusUpsertResponse = {
  WorkStatusUpsert: WorkStatusUpsertOutputDto[];
};

export type WorkStatusSoftRemoveResponse = {
  WorkStatusSoftRemove: WorkStatusSoftRemoveOutputDto;
};

export type WorkStatusRemoveResponse = {
  WorkStatusRemove: WorkStatusRemoveOutputDto;
};

export type WorkStatusRecoverResponse = {
  WorkStatusRecover: WorkStatusRecoverOutputDto;
};
