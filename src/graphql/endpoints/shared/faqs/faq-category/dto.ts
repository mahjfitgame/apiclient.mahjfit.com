import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { FaqFindInputWhereDto } from '../faq/dto';
import { FaqCategoryEntity, FaqCategorySelectionSchema } from './entity';

export class FaqCategoryDto extends FaqCategoryEntity {
  /** Unique ID of the faq category, auto generated. */
  declare id?: any;
  /** Title of the faq category. */
  declare title?: any;
  /** Description of the faq category. */
  declare desc?: any;
  /** Active of the faq category. */
  declare active?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** When record is updated, date-time will be saved. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  declare deleted?: any;
  /** Faq category of faq category. */
  declare fr_faq_categories?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class FaqCategoryFindDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${FindArtefact}`;
}
export class FaqCategoryFindSelectionSchema extends FaqCategorySelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class FaqCategoryFindInputWhereDto extends FaqCategoryFindDto {
  /** Unique ID of the faq category, auto generated. */
  declare id?: FindOperatorDto;
  /** Title of the faq category. */
  declare title?: FindOperatorDto;
  /** Active of the faq category. */
  declare active?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** When record is updated, date-time will be saved. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** Faq category of faq category. */
  declare fr_faq_categories?: FaqFindInputWhereDto[];
}

export class FaqCategoryFindInputSortOrderDto {
  /** Unique ID of the faq category, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Title of the faq category. */
  declare title?: RecordSortDirectionEnum;
  /** Active of the faq category. */
  declare active?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** When record is updated, date-time will be saved. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class FaqCategoryFindInputGroupByDto {
  /** Title of the faq category. */
  title?: boolean;
  /** Active of the faq category. */
  active?: boolean;
  /** When record is created, date-time will be saved. */
  created?: boolean;
  /** When record is updated, date-time will be saved. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate
   * record is not deleted.
   */
  deleted?: boolean;
}

export class FaqCategoryFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategoryFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: FaqCategoryFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: FaqCategoryFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class FaqCategoryFindOutputRowsDto extends FaqCategoryFindDto {}
export class FaqCategoryFindOutputRowsSelectionSchema extends FaqCategoryFindSelectionSchema {}

export class FaqCategoryFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: FaqCategoryFindOutputRowsDto[];
}
export class FaqCategoryFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?:
    | typeof FaqCategoryFindOutputRowsSelectionSchema
    | FaqCategoryFindOutputRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => FaqCategoryFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

/** FaqCategoryFindOneById */
export class FaqCategoryFindOneByIdDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class FaqCategoryFindOneByIdInputDto extends IdInputDto {
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

/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class FaqCategoryCreateDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryCreateInputDto extends FaqCategoryCreateDto {
  /** Title of the faq category. */
  declare title: string;
  /** Description of the faq category. */
  declare desc?: string;
  /** Active of the faq category. */
  declare active?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryCreateOutputDto extends FaqCategoryFindOutputRowsDto {}
export class FaqCategoryCreateOutputSelectionSchema extends FaqCategoryFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class FaqCategoryUpdateDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class FaqCategoryUpdateInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategoryUpdateInputSetsDto {
  /** Title of the faq category. */
  declare title?: string;
  /** Description of the faq category. */
  declare desc?: string;
  /** Active of the faq category. */
  declare active?: string;
}

export class FaqCategoryUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: FaqCategoryUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: FaqCategoryUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryUpdateOutputAffectedRowsDto extends FaqCategoryFindOutputRowsDto {}
export class FaqCategoryUpdateOutputAffectedRowsSelectionSchema extends FaqCategoryFindOutputRowsSelectionSchema {}

export class FaqCategoryUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: FaqCategoryUpdateOutputAffectedRowsDto[];
}
export class FaqCategoryUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof FaqCategoryUpdateOutputAffectedRowsSelectionSchema
    | FaqCategoryUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => FaqCategoryUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class FaqCategorySoftDeleteDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class FaqCategorySoftDeleteInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategorySoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategorySoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategorySoftDeleteOutputDto extends CrudAffectedDto {}
export class FaqCategorySoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class FaqCategoryDeleteDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryDeleteInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategoryDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategoryDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryDeleteOutputDto extends CrudAffectedDto {}
export class FaqCategoryDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class FaqCategoryRestoreDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRestoreInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategoryRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategoryRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRestoreOutputDto extends CrudAffectedDto {}
export class FaqCategoryRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class FaqCategoryUpsertDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryUpsertInputDto extends FaqCategoryUpsertDto {
  /** Title of the faq category. */
  declare title: string;
  /** Description of the faq category. */
  declare desc?: string;
  /** Active of the faq category. */
  declare active?: string;
  /** Unique ID of the faq category, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryUpsertOutputDto extends FaqCategoryFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class FaqCategoryUpsertOutputSelectionSchema
  extends FaqCategoryFindOutputRowsSelectionSchema
  implements UpsertOutputProcessStatusSelectionSchema
{
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class FaqCategorySoftRemoveDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class FaqCategorySoftRemoveInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategorySoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategorySoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategorySoftRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the soft remove query. */
  declare affectedRows?: FaqCategoryFindOutputRowsDto[];
}
export class FaqCategorySoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the soft remove query. */
  affectedRows?: typeof FaqCategoryFindOutputRowsSelectionSchema | FaqCategoryFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqCategoryFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class FaqCategoryRemoveDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRemoveInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategoryRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategoryRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the remove query. */
  declare affectedRows?: FaqCategoryFindOutputRowsDto[];
}
export class FaqCategoryRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the remove query. */
  affectedRows?: typeof FaqCategoryFindOutputRowsSelectionSchema | FaqCategoryFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqCategoryFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class FaqCategoryRecoverDto extends FaqCategoryDto {
  static metaname: string = `${FaqCategoryEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRecoverInputWhereDto extends FaqCategoryFindInputWhereDto {}

export class FaqCategoryRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqCategoryRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class FaqCategoryRecoverOutputDto extends CrudAffectedDto {
  /** List of records affected by the recover query. */
  declare affectedRows?: FaqCategoryFindOutputRowsDto[];
}
export class FaqCategoryRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the recover query. */
  affectedRows?: typeof FaqCategoryFindOutputRowsSelectionSchema | FaqCategoryFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqCategoryFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESPONSE DTO ██████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export type FaqCategoryFindResponse = { FaqCategoryFind: FaqCategoryFindOutputDto };
export type FaqCategoryFindOneByIdResponse = { FaqCategoryFindOneById: FaqCategoryEntity };
export type FaqCategoryCreateResponse = { FaqCategoryCreate: FaqCategoryCreateOutputDto[] };
export type FaqCategoryUpdateResponse = { FaqCategoryUpdate: FaqCategoryUpdateOutputDto };
export type FaqCategorySoftDeleteResponse = { FaqCategorySoftDelete: FaqCategorySoftDeleteOutputDto };
export type FaqCategoryDeleteResponse = { FaqCategoryDelete: FaqCategoryDeleteOutputDto };
export type FaqCategoryRestoreResponse = { FaqCategoryRestore: FaqCategoryRestoreOutputDto };
export type FaqCategoryUpsertResponse = { FaqCategoryUpsert: FaqCategoryUpsertOutputDto[] };
export type FaqCategorySoftRemoveResponse = { FaqCategorySoftRemove: FaqCategorySoftRemoveOutputDto };
export type FaqCategoryRemoveResponse = { FaqCategoryRemove: FaqCategoryRemoveOutputDto };
export type FaqCategoryRecoverResponse = { FaqCategoryRecover: FaqCategoryRecoverOutputDto };
