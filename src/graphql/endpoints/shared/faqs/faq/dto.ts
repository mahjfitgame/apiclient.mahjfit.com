import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { FaqCategoryFindInputWhereDto } from '../faq-category/dto';
import { FaqCategoryEntity, FaqCategorySelectionSchema } from '../faq-category/entity';
import { FaqEntity, FaqSelectionSchema } from './entity';

export class FaqDto extends FaqEntity {
  /** Unique ID of the pagemaster, auto generated. */
  declare id?: any;
  /** Faq category of the faq. */
  declare faqcat_id?: any;
  /** Url slug of the faq. */
  declare url_slug?: any;
  /** Question of the faq. */
  declare question?: any;
  /** Answer of the faq. */
  declare answer?: any;
  /** Active of the faq. */
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
  /** Faq categories of the faq. */
  declare fr_faq_category?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class FaqFindDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${FindArtefact}`;
}
export class FaqFindSelectionSchema extends FaqSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class FaqFindInputWhereDto extends FaqFindDto {
  /** Unique ID of the pagemaster, auto generated. */
  declare id?: FindOperatorDto;
  /** Faq category of the faq. */
  declare faqcat_id?: FindOperatorDto;
  /** Url slug of the faq. */
  declare url_slug?: FindOperatorDto;
  /** Active of the faq. */
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
  /** Faq categories of the faq. */
  declare fr_faq_category?: FaqCategoryFindInputWhereDto[];
}

export class FaqFindInputSortOrderDto {
  /** Unique ID of the pagemaster, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Faq category of the faq. */
  declare faqcat_id?: RecordSortDirectionEnum;
  /** Url slug of the faq. */
  declare url_slug?: RecordSortDirectionEnum;
  /** Active of the faq. */
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

export class FaqFindInputGroupByDto {
  /** Faq category of the faq. */
  faqcat_id?: boolean;
  /** Url slug of the faq. */
  url_slug?: boolean;
  /** Active of the faq. */
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

export class FaqFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: FaqFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: FaqFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class FaqFindOutputRowsDto extends FaqFindDto {}
export class FaqFindOutputRowsSelectionSchema extends FaqFindSelectionSchema {}

export class FaqFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: FaqFindOutputRowsDto[];
}
export class FaqFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof FaqFindOutputRowsSelectionSchema | FaqFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

/** FaqFindOneById */
export class FaqFindOneByIdDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class FaqFindOneByIdInputDto extends IdInputDto {
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
export class FaqCreateDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class FaqCreateInputDto extends FaqCreateDto {
  /** Faq category of the faq. */
  declare faqcat_id: number;
  /** Url slug of the faq. */
  declare url_slug: string;
  /** Question of the faq. */
  declare question: string;
  /** Answer of the faq. */
  declare answer: string;
  /** Active of the faq. */
  declare active?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class FaqCreateOutputDto extends FaqFindOutputRowsDto {}
export class FaqCreateOutputSelectionSchema extends FaqFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class FaqUpdateDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class FaqUpdateInputWhereDto extends FaqFindInputWhereDto {}

export class FaqUpdateInputSetsDto {
  /** Faq category of the faq. */
  declare faqcat_id?: number;
  /** Url slug of the faq. */
  declare url_slug?: string;
  /** Question of the faq. */
  declare question?: string;
  /** Answer of the faq. */
  declare answer?: string;
  /** Active of the faq. */
  declare active?: string;
}

export class FaqUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: FaqUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: FaqUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class FaqUpdateOutputAffectedRowsDto extends FaqFindOutputRowsDto {}
export class FaqUpdateOutputAffectedRowsSelectionSchema extends FaqFindOutputRowsSelectionSchema {}

export class FaqUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: FaqUpdateOutputAffectedRowsDto[];
}
export class FaqUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof FaqUpdateOutputAffectedRowsSelectionSchema
    | FaqUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => FaqUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class FaqSoftDeleteDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class FaqSoftDeleteInputWhereDto extends FaqFindInputWhereDto {}

export class FaqSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class FaqSoftDeleteOutputDto extends CrudAffectedDto {}
export class FaqSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class FaqDeleteDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class FaqDeleteInputWhereDto extends FaqFindInputWhereDto {}

export class FaqDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class FaqDeleteOutputDto extends CrudAffectedDto {}
export class FaqDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class FaqRestoreDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class FaqRestoreInputWhereDto extends FaqFindInputWhereDto {}

export class FaqRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class FaqRestoreOutputDto extends CrudAffectedDto {}
export class FaqRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class FaqUpsertDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class FaqUpsertInputDto extends FaqUpsertDto {
  /** Faq category of the faq. */
  declare faqcat_id: number;
  /** Url slug of the faq. */
  declare url_slug: string;
  /** Question of the faq. */
  declare question: string;
  /** Answer of the faq. */
  declare answer: string;
  /** Active of the faq. */
  declare active?: string;
  /** Unique ID of the pagemaster, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class FaqUpsertOutputDto extends FaqFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class FaqUpsertOutputSelectionSchema
  extends FaqFindOutputRowsSelectionSchema
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
export class FaqSoftRemoveDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class FaqSoftRemoveInputWhereDto extends FaqFindInputWhereDto {}

export class FaqSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class FaqSoftRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the soft remove query. */
  declare affectedRows?: FaqFindOutputRowsDto[];
}
export class FaqSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the soft remove query. */
  affectedRows?: typeof FaqFindOutputRowsSelectionSchema | FaqFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class FaqRemoveDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class FaqRemoveInputWhereDto extends FaqFindInputWhereDto {}

export class FaqRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class FaqRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the remove query. */
  declare affectedRows?: FaqFindOutputRowsDto[];
}
export class FaqRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the remove query. */
  affectedRows?: typeof FaqFindOutputRowsSelectionSchema | FaqFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class FaqRecoverDto extends FaqDto {
  static metaname: string = `${FaqEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class FaqRecoverInputWhereDto extends FaqFindInputWhereDto {}

export class FaqRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: FaqRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class FaqRecoverOutputDto extends CrudAffectedDto {
  /** List of records affected by the recover query. */
  declare affectedRows?: FaqFindOutputRowsDto[];
}
export class FaqRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the recover query. */
  affectedRows?: typeof FaqFindOutputRowsSelectionSchema | FaqFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => FaqFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESPONSE DTO ██████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export type FaqFindResponse = { FaqFind: FaqFindOutputDto };
export type FaqFindOneByIdResponse = { FaqFindOneById: FaqEntity };
export type FaqCreateResponse = { FaqCreate: FaqCreateOutputDto[] };
export type FaqUpdateResponse = { FaqUpdate: FaqUpdateOutputDto };
export type FaqSoftDeleteResponse = { FaqSoftDelete: FaqSoftDeleteOutputDto };
export type FaqDeleteResponse = { FaqDelete: FaqDeleteOutputDto };
export type FaqRestoreResponse = { FaqRestore: FaqRestoreOutputDto };
export type FaqUpsertResponse = { FaqUpsert: FaqUpsertOutputDto[] };
export type FaqSoftRemoveResponse = { FaqSoftRemove: FaqSoftRemoveOutputDto };
export type FaqRemoveResponse = { FaqRemove: FaqRemoveOutputDto };
export type FaqRecoverResponse = { FaqRecover: FaqRecoverOutputDto };
