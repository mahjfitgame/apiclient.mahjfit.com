import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DateTime, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../libs';
import { UserAuthorisationFindInputWhereDto } from '../folk/user-authorisation/dto';
import { LeadEntity, LeadSelectionSchema } from './entity';

export class LeadDto extends LeadEntity {
  /** Unique ID of the lead, auto generated. */
  declare id?: any;
  /** From user authorisation id of the lead. */
  declare from_uar_id?: any;
  /** To user authorisation id of the lead. */
  declare to_uar_id?: any;
  /** Reference id of the lead. */
  declare ref_id?: any;
  /** Reference type of the lead. */
  declare ref_type?: any;
  /** Concern issue of the lead. */
  declare concern_issue?: any;
  /** Preferred contact method of the lead. */
  declare preferred_contact_method?: any;
  /** Subject of the lead. */
  declare subject?: any;
  /** Comment of the lead. */
  declare comment?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** From user of the lead. */
  declare fr_from_user_authorisation?: any;
  /** To user of the lead. */
  declare fr_to_user_authorisation?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class LeadFindDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${FindArtefact}`;
}
export class LeadFindSelectionSchema extends LeadSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class LeadFindInputWhereDto extends LeadFindDto {
  /** Unique ID of the lead, auto generated. */
  declare id?: FindOperatorDto;
  /** From user authorisation id of the lead. */
  declare from_uar_id?: FindOperatorDto;
  /** To user authorisation id of the lead. */
  declare to_uar_id?: FindOperatorDto;
  /** Reference id of the lead. */
  declare ref_id?: FindOperatorDto;
  /** Reference type of the lead. */
  declare ref_type?: FindOperatorDto;
  /** Subject of the lead. */
  declare subject?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** From user of the lead. */
  declare fr_from_user_authorisation?: UserAuthorisationFindInputWhereDto[];
  /** To user of the lead. */
  declare fr_to_user_authorisation?: UserAuthorisationFindInputWhereDto[];
}

export class LeadFindInputSortOrderDto {
  /** Unique ID of the lead, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** From user authorisation id of the lead. */
  declare from_uar_id?: RecordSortDirectionEnum;
  /** To user authorisation id of the lead. */
  declare to_uar_id?: RecordSortDirectionEnum;
  /** Reference id of the lead. */
  declare ref_id?: RecordSortDirectionEnum;
  /** Reference type of the lead. */
  declare ref_type?: RecordSortDirectionEnum;
  /** Subject of the lead. */
  declare subject?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class LeadFindInputGroupByDto {
  /** From user authorisation id of the lead. */
  from_uar_id?: boolean;
  /** To user authorisation id of the lead. */
  to_uar_id?: boolean;
  /** Reference id of the lead. */
  ref_id?: boolean;
  /** Reference type of the lead. */
  ref_type?: boolean;
  /** Subject of the lead. */
  subject?: boolean;
  /** When record is created, date-time will be saved. */
  created?: boolean;
  /** When record is updated, date-time will be saved. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class LeadFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: LeadFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: LeadFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class LeadFindOutputRowsDto extends LeadFindDto {}
export class LeadFindOutputRowsSelectionSchema extends LeadFindSelectionSchema {}

export class LeadFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: LeadFindOutputRowsDto[];
}
export class LeadFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof LeadFindOutputRowsSelectionSchema | LeadFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => LeadFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO ████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** LeadFindOneById */
export class LeadFindOneByIdDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class LeadFindOneByIdInputDto extends IdInputDto {
  /**
   * With deleted criteria for your operation. You can specify if you want to include soft deleted or removed records in result set or not. Retrive soft deleted or soft removed records..
   */
  declare withDeleted?: boolean;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new records in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class LeadCreateDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class LeadCreateInputDto {
  /** From user authorisation id of the lead. */
  declare from_uar_id?: number;
  /** To user authorisation id of the lead. */
  declare to_uar_id?: number;
  /** Reference id of the lead. */
  declare ref_id?: string;
  /** Reference type of the lead. */
  declare ref_type?: string;
  /** Concern issue of the lead. */
  declare concern_issue?: string;
  /** Preferred contact method of the lead. */
  declare preferred_contact_method?: string;
  /** Subject of the lead. */
  declare subject?: string;
  /** Comment of the lead. */
  declare comment?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class LeadCreateOutputDto extends LeadFindOutputRowsDto {}
export class LeadCreateOutputSelectionSchema extends LeadFindOutputRowsSelectionSchema {}


/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class LeadUpdateDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class LeadUpdateInputWhereDto extends LeadFindInputWhereDto {}

export class LeadUpdateInputSetsDto {
  /** From user authorisation id of the lead. */
  declare from_uar_id?: number;
  /** To user authorisation id of the lead. */
  declare to_uar_id?: number;
  /** Reference id of the lead. */
  declare ref_id?: string;
  /** Reference type of the lead. */
  declare ref_type?: string;
  /** Concern issue of the lead. */
  declare concern_issue?: string;
  /** Preferred contact method of the lead. */
  declare preferred_contact_method?: string;
  /** Subject of the lead. */
  declare subject?: string;
  /** Comment of the lead. */
  declare comment?: string;
}

export class LeadUpdateInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets?: LeadUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class LeadUpdateOutputAffectedRowsDto extends LeadFindOutputRowsDto {}
export class LeadUpdateOutputAffectedRowsSelectionSchema extends LeadFindOutputRowsSelectionSchema {}

export class LeadUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: LeadUpdateOutputAffectedRowsDto[];
}
export class LeadUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof LeadUpdateOutputAffectedRowsSelectionSchema | LeadUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => LeadUpdateOutputAffectedRowsSelectionSchema);
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Soft delete records that can be restored or recovered later. */
export class LeadSoftDeleteDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class LeadSoftDeleteInputWhereDto extends LeadFindInputWhereDto {}

export class LeadSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for softDelete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class LeadSoftDeleteOutputDto extends CrudAffectedDto {}
export class LeadSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}


/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class LeadDeleteDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class LeadDeleteInputWhereDto extends LeadFindInputWhereDto {}

export class LeadDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class LeadDeleteOutputDto extends CrudAffectedDto {}
export class LeadDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}


/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class LeadRestoreDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████
export class LeadRestoreInputWhereDto extends LeadFindInputWhereDto {}

export class LeadRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class LeadRestoreOutputDto extends CrudAffectedDto {}
export class LeadRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Soft remove records that can be recovered or restored later. Checked the record in database before it perform soft remove operation. You will get soft removed records in return. */
export class LeadSoftRemoveDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class LeadSoftRemoveInputWhereDto extends LeadFindInputWhereDto {}

export class LeadSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for softRemove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class LeadSoftRemoveOutputAffectedRowsDto extends LeadFindOutputRowsDto {}
export class LeadSoftRemoveOutputAffectedRowsSelectionSchema extends LeadFindOutputRowsSelectionSchema {}

export class LeadSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: LeadSoftRemoveOutputAffectedRowsDto[];
}
export class LeadSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof LeadSoftRemoveOutputAffectedRowsSelectionSchema | LeadSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => LeadSoftRemoveOutputAffectedRowsSelectionSchema);
}


/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class LeadRemoveDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class LeadRemoveInputWhereDto extends LeadFindInputWhereDto {}

export class LeadRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class LeadRemoveOutputAffectedRowsDto extends LeadFindOutputRowsDto {}
export class LeadRemoveOutputAffectedRowsSelectionSchema extends LeadFindOutputRowsSelectionSchema {}

export class LeadRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: LeadRemoveOutputAffectedRowsDto[];
}
export class LeadRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof LeadRemoveOutputAffectedRowsSelectionSchema | LeadRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => LeadRemoveOutputAffectedRowsSelectionSchema);
}


/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Recover records, which are soft deleted or removed. Unlike restore recover check record in database before it perform recover operation. You will get recovered records in return. */
export class LeadRecoverDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class LeadRecoverInputWhereDto extends LeadFindInputWhereDto {}

export class LeadRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: LeadRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class LeadRecoverOutputAffectedRowsDto extends LeadFindOutputRowsDto {}
export class LeadRecoverOutputAffectedRowsSelectionSchema extends LeadFindOutputRowsSelectionSchema {}

export class LeadRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: LeadRecoverOutputAffectedRowsDto[];
}
export class LeadRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof LeadRecoverOutputAffectedRowsSelectionSchema | LeadRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => LeadRecoverOutputAffectedRowsSelectionSchema);
}


/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class LeadUpsertDto extends LeadDto {
  static metaname: string = `${LeadEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████
export class LeadUpsertInputDto extends LeadCreateInputDto {
  /** Unique ID of the lead, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████
export class LeadUpsertOutputDto extends LeadCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class LeadUpsertOutputSelectionSchema extends LeadCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

export type LeadFindResponse = { LeadFind: LeadFindOutputDto };
export type LeadFindOneByIdResponse = { LeadFindOneById: LeadEntity };
export type LeadCreateResponse = { LeadCreate: LeadCreateOutputDto[] };
export type LeadUpdateResponse = { LeadUpdate: LeadUpdateOutputDto };
export type LeadSoftDeleteResponse = { LeadSoftDelete: LeadSoftDeleteOutputDto };
export type LeadDeleteResponse = { LeadDelete: LeadDeleteOutputDto };
export type LeadRestoreResponse = { LeadRestore: LeadRestoreOutputDto };
export type LeadUpsertResponse = { LeadUpsert: LeadUpsertOutputDto[] };
export type LeadSoftRemoveResponse = { LeadSoftRemove: LeadSoftRemoveOutputDto };
export type LeadRemoveResponse = { LeadRemove: LeadRemoveOutputDto };
export type LeadRecoverResponse = { LeadRecover: LeadRecoverOutputDto };
