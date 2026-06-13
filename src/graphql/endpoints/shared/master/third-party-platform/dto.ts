import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDto, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { ThirdPartyPlatformEntity, ThirdPartyPlatformSelectionSchema } from './entity';

export class ThirdPartyPlatformDto extends ThirdPartyPlatformEntity {
  /** Unique ID of the thirdparty platform, auto generated. */
  declare id?: any;
  /** Description of the thirdparty platform. */
  declare slug?: any;
  /** Name of the thirdparty platform. */
  declare name?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** Provides list of webhook responses. */
  declare fr_webhook_responses?: any[];
  /** Newsletter of third party platform. */
  declare fr_newsletter_third_party_platforms?: any[];
  /** business review. */
  declare fr_business_review?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class ThirdPartyPlatformFindDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${FindArtefact}`;
}
export class ThirdPartyPlatformFindSelectionSchema extends ThirdPartyPlatformSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformFindInputWhereDto extends ThirdPartyPlatformFindDto {
  /** Unique ID of the thirdparty platform, auto generated. */
  declare id?: FindOperatorDto;
  /** Description of the thirdparty platform. */
  declare slug?: FindOperatorDto;
  /** Name of the thirdparty platform. */
  declare name?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
}

export class ThirdPartyPlatformFindInputSortOrderDto {
  /** Unique ID of the thirdparty platform, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Description of the thirdparty platform. */
  declare slug?: RecordSortDirectionEnum;
  /** Name of the thirdparty platform. */
  declare name?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class ThirdPartyPlatformFindInputGroupByDto {
  /** Description of the thirdparty platform. */
  slug?: boolean;
  /** Name of the thirdparty platform. */
  name?: boolean;
  /** When record is created, date-time will be saved. */
  created?: boolean;
  /** When record is updated, date-time will be saved. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class ThirdPartyPlatformFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: ThirdPartyPlatformFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: ThirdPartyPlatformFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformFindOutputRowsDto extends ThirdPartyPlatformFindDto {}
export class ThirdPartyPlatformFindOutputRowsSelectionSchema extends ThirdPartyPlatformFindSelectionSchema {}

export class ThirdPartyPlatformFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: ThirdPartyPlatformFindOutputRowsDto[];
}
export class ThirdPartyPlatformFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?:
    | typeof ThirdPartyPlatformFindOutputRowsSelectionSchema
    | ThirdPartyPlatformFindOutputRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => ThirdPartyPlatformFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/
/** ThirdPartyPlatformFindOneById */
export class ThirdPartyPlatformFindOneByIdDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformFindOneByIdInputDto extends IdInputDto {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ThirdPartyPlatformCreateDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformCreateInputDto extends ThirdPartyPlatformCreateDto {
  /** Description of the thirdparty platform. */
  declare slug: string;
  /** Name of the thirdparty platform. */
  declare name: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformCreateOutputDto extends ThirdPartyPlatformFindOutputRowsDto {}
export class ThirdPartyPlatformCreateOutputSelectionSchema extends ThirdPartyPlatformFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class ThirdPartyPlatformUpdateDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformUpdateInputWhereDto extends ThirdPartyPlatformFindInputWhereDto {}

export class ThirdPartyPlatformUpdateInputSetsDto {
  /** Description of the thirdparty platform. */
  declare slug?: string;
  /** Name of the thirdparty platform. */
  declare name?: string;
}

export class ThirdPartyPlatformUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: ThirdPartyPlatformUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: ThirdPartyPlatformUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformUpdateOutputAffectedRowsDto extends ThirdPartyPlatformFindOutputRowsDto {}
export class ThirdPartyPlatformUpdateOutputAffectedRowsSelectionSchema extends ThirdPartyPlatformFindOutputRowsSelectionSchema {}

export class ThirdPartyPlatformUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ThirdPartyPlatformUpdateOutputAffectedRowsDto[];
}
export class ThirdPartyPlatformUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof ThirdPartyPlatformUpdateOutputAffectedRowsSelectionSchema
    | ThirdPartyPlatformUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => ThirdPartyPlatformUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class ThirdPartyPlatformSoftDeleteDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class ThirdPartyPlatformSoftDeleteInputWhereDto extends ThirdPartyPlatformFindInputWhereDto {}

export class ThirdPartyPlatformSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformSoftDeleteOutputDto extends CrudAffectedDto {}
export class ThirdPartyPlatformSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class ThirdPartyPlatformDeleteDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformDeleteInputWhereDto extends ThirdPartyPlatformFindInputWhereDto {}

export class ThirdPartyPlatformDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformDeleteOutputDto extends CrudAffectedDto {}
export class ThirdPartyPlatformDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class ThirdPartyPlatformRestoreDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class ThirdPartyPlatformRestoreInputWhereDto extends ThirdPartyPlatformFindInputWhereDto {}

export class ThirdPartyPlatformRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
export class ThirdPartyPlatformRestoreOutputDto extends CrudAffectedDto {}
export class ThirdPartyPlatformRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ThirdPartyPlatformUpsertDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████
export class ThirdPartyPlatformUpsertInputDto extends ThirdPartyPlatformCreateInputDto {
  /** Unique ID of the thirdparty platform, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████
export class ThirdPartyPlatformUpsertOutputDto extends ThirdPartyPlatformCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class ThirdPartyPlatformUpsertOutputSelectionSchema extends ThirdPartyPlatformCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class ThirdPartyPlatformSoftRemoveDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class ThirdPartyPlatformSoftRemoveInputWhereDto extends ThirdPartyPlatformUpdateInputWhereDto {}

export class ThirdPartyPlatformSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto extends ThirdPartyPlatformFindOutputRowsDto {}
export class ThirdPartyPlatformSoftRemoveOutputAffectedRowsSelectionSchema extends ThirdPartyPlatformFindOutputRowsSelectionSchema {}

export class ThirdPartyPlatformSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto[];
}
export class ThirdPartyPlatformSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof ThirdPartyPlatformSoftRemoveOutputAffectedRowsSelectionSchema
    | ThirdPartyPlatformSoftRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => ThirdPartyPlatformSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ThirdPartyPlatformRemoveDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class ThirdPartyPlatformRemoveInputWhereDto extends ThirdPartyPlatformUpdateInputWhereDto {}

export class ThirdPartyPlatformRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class ThirdPartyPlatformRemoveOutputAffectedRowsDto extends ThirdPartyPlatformFindOutputRowsDto {}
export class ThirdPartyPlatformRemoveOutputAffectedRowsSelectionSchema extends ThirdPartyPlatformFindOutputRowsSelectionSchema {}

export class ThirdPartyPlatformRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ThirdPartyPlatformRemoveOutputAffectedRowsDto[];
}
export class ThirdPartyPlatformRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof ThirdPartyPlatformRemoveOutputAffectedRowsSelectionSchema
    | ThirdPartyPlatformRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => ThirdPartyPlatformRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ThirdPartyPlatformRecoverDto extends ThirdPartyPlatformDto {
  static metaname: string = `${ThirdPartyPlatformEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class ThirdPartyPlatformRecoverInputWhereDto extends ThirdPartyPlatformUpdateInputWhereDto {}

export class ThirdPartyPlatformRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ThirdPartyPlatformRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class ThirdPartyPlatformRecoverOutputAffectedRowsDto extends ThirdPartyPlatformFindOutputRowsDto {}
export class ThirdPartyPlatformRecoverOutputAffectedRowsSelectionSchema extends ThirdPartyPlatformFindOutputRowsSelectionSchema {}

export class ThirdPartyPlatformRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ThirdPartyPlatformRecoverOutputAffectedRowsDto[];
}
export class ThirdPartyPlatformRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof ThirdPartyPlatformRecoverOutputAffectedRowsSelectionSchema
    | ThirdPartyPlatformRecoverOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => ThirdPartyPlatformRecoverOutputAffectedRowsSelectionSchema);
}

export type ThirdPartyPlatformFindResponse = { ThirdPartyPlatformFind: ThirdPartyPlatformFindOutputDto };
export type ThirdPartyPlatformFindOneByIdResponse = { ThirdPartyPlatformFindOneById: ThirdPartyPlatformEntity };
export type ThirdPartyPlatformCreateResponse = { ThirdPartyPlatformCreate: ThirdPartyPlatformCreateOutputDto[] };
export type ThirdPartyPlatformUpdateResponse = { ThirdPartyPlatformUpdate: ThirdPartyPlatformUpdateOutputDto };
export type ThirdPartyPlatformSoftDeleteResponse = { ThirdPartyPlatformSoftDelete: ThirdPartyPlatformSoftDeleteOutputDto };
export type ThirdPartyPlatformDeleteResponse = { ThirdPartyPlatformDelete: ThirdPartyPlatformDeleteOutputDto };
export type ThirdPartyPlatformRestoreResponse = { ThirdPartyPlatformRestore: ThirdPartyPlatformRestoreOutputDto };
export type ThirdPartyPlatformUpsertResponse = { ThirdPartyPlatformUpsert: ThirdPartyPlatformUpsertOutputDto[] };
export type ThirdPartyPlatformSoftRemoveResponse = { ThirdPartyPlatformSoftRemove: ThirdPartyPlatformSoftRemoveOutputDto };
export type ThirdPartyPlatformRemoveResponse = { ThirdPartyPlatformRemove: ThirdPartyPlatformRemoveOutputDto };
export type ThirdPartyPlatformRecoverResponse = { ThirdPartyPlatformRecover: ThirdPartyPlatformRecoverOutputDto };
