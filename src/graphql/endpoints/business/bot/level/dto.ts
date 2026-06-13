import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef, DateTime } from '../../../../libs';
import { BotProfileFindInputWhereDto } from '../profile';
import { BotLevelEntity, BotLevelSelectionSchema } from "./entity";
import { BotLevelModeEnum } from './enum';

export class BotLevelDto extends BotLevelEntity {
    /** Unique ID of the pagemaster, auto generated. */
    declare id?: any;

    /** Title of the bot level. */
    declare title?: any;

    /** Description of the bot level. */
    declare desc?: any;

    /** Mode of the bot level. */
    declare mode?: any;

    /** When record is created, date-time will be saved. */
    declare created?: any;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    declare updated?: any;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    declare deleted?: any;

    /** List of bot profiles for this bot level. */
    declare fr_bot_profiles?: any;

    /** List of games for this bot level. */
    declare fr_game?: any;
}


/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class BotLevelFindDto extends BotLevelEntity {
    static metaname: string = `${BotLevelEntity?.metaname}${FindArtefact}`;
}

export class BotLevelFindSelectionSchema extends BotLevelSelectionSchema {}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


export class BotLevelFindInputWhereDto extends BotLevelDto{
    /** Unique ID of the pagemaster, auto generated. */
    declare id?: FindOperatorDto;

    /** Title of the bot level. */
    declare title?: FindOperatorDto;

    /** Mode of the bot level. */
    declare mode?: FindOperatorDto;

    /** When record is created, date-time will be saved. */
    declare created?: FindOperatorDto;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    declare updated?: FindOperatorDto;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    declare deleted?: FindOperatorDto;


    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████

    declare fr_bot_profiles?: BotProfileFindInputWhereDto[];

    //declare fr_game?: GameFindInputWhereDto[]; 
}

export class BotLevelFindInputSortOrderDto{
    id?: RecordSortDirectionEnum;
    
    /** Title of the bot level. */
    title?: RecordSortDirectionEnum;

    /** Mode of the bot level. */
    mode?: RecordSortDirectionEnum;

    /** When record is created, date-time will be saved. */
    created?: RecordSortDirectionEnum;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    updated?: RecordSortDirectionEnum;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    deleted?: RecordSortDirectionEnum;
}


export class BotLevelFindInputGroupByDto{
    /** Title of the bot level. */
    title?: boolean;

    /** Mode of the bot level. */
    mode?: boolean;

    /** When record is created, date-time will be saved. */
    created?: boolean;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    updated?: boolean;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    deleted?: boolean;
}

export class BotLevelFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto{
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    declare where?: BotLevelFindInputWhereDto[];
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    declare groupBy?: BotLevelFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    declare order?: BotLevelFindInputSortOrderDto;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelFindOutputRowsDto extends BotLevelFindDto{}
export class BotLevelFindOutputRowsSelectionSchema extends BotLevelFindSelectionSchema {}

export class BotLevelFindOutputDto extends FindOutputPaginationOptionsDto{
    /**
     * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
     */
    declare rows?: BotLevelEntity | BotLevelEntity[] | any;
}

export class BotLevelFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof BotLevelFindOutputRowsSelectionSchema | BotLevelFindOutputRowsSelectionSchema | SchemaRef | false =
  schemaRef(() => BotLevelFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class BotLevelFindOneByIdDto extends BotLevelDto{
    static metaname: string = `${BotLevelEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class BotLevelFindOneByIdInputDto extends IdInputDto{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class BotLevelCreateDto extends BotLevelDto {
    static metaname: string = `${BotLevelEntity.metaname}${CreateArtefact}`;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class BotLevelCreateInputDto extends  BotLevelCreateDto{

    /** Title of the bot level. */
    declare title?: string;

    /** Description of the bot level. */
    declare desc?: string;

    /** Mode of the bot level. */
    declare mode?: BotLevelModeEnum;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelCreateOutputDto extends BotLevelFindOutputRowsDto {}
export class BotLevelCreateOutputSelectionSchema extends BotLevelFindOutputRowsSelectionSchema {}
/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/


export class BotLevelUpdateDto extends BotLevelDto{
    static metaname: string = `${BotLevelEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

export class BotLevelUpdateInputWhereDto extends BotLevelFindInputWhereDto{}

export class BotLevelUpdateInputSetsDto{}

export class BotLevelUpdateInputDto{
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    where!: BotLevelUpdateInputWhereDto[];

    /**
     * What to set for update
     * basically fields list of update
     */
    sets!: BotLevelUpdateInputSetsDto
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelUpdateOutputAffectedRowsDto extends BotLevelFindOutputRowsDto{}
export class BotLevelUpdateOutputAffectedRowsSelectionSchema extends BotLevelFindOutputRowsSelectionSchema {}

export class BotLevelUpdateOutputDto{
    /**
     * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
    */
    declare affectedRows?: BotLevelEntity[] | any; 
}


export class BotLevelUpdateOutputSelectionSchema{
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof BotLevelUpdateOutputAffectedRowsSelectionSchema
    | BotLevelUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => BotLevelUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class BotLevelSoftDeleteDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class BotLevelSoftDeleteInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelSoftDeleteOutputDto extends CrudAffectedDto {}
export class BotLevelSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class BotLevelDeleteDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class BotLevelDeleteInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelDeleteOutputDto extends CrudAffectedDto {}
export class BotLevelDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class BotLevelRestoreDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class BotLevelRestoreInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelRestoreOutputDto extends CrudAffectedDto {}
export class BotLevelRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class BotLevelUpsertDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class BotLevelUpsertInputDto extends BotLevelUpsertDto {
  
    /** Unique ID of the bot level, auto generated. */
    declare id?: number

    /** Title of the bot level. */
    declare title?: string

    /** Description of the bot level. */
    declare desc?: string

    /** Mode of the bot level. */
    declare mode?: BotLevelModeEnum

    /** When record is created, date-time will be saved. */
    declare created?: DateTime

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    declare updated?: DateTime

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    declare deleted?: DateTime
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelUpsertOutputDto extends BotLevelFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class BotLevelUpsertOutputSelectionSchema
  extends BotLevelFindOutputRowsSelectionSchema
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
export class BotLevelSoftRemoveDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class BotLevelSoftRemoveInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelSoftRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the soft remove query. */
  declare affectedRows?: BotLevelFindOutputRowsDto[];
}
export class BotLevelSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the soft remove query. */
  affectedRows?: typeof BotLevelFindOutputRowsSelectionSchema | BotLevelFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotLevelFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class BotLevelRemoveDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class BotLevelRemoveInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the remove query. */
  declare affectedRows?: BotLevelFindOutputRowsDto[];
}
export class BotLevelRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the remove query. */
  affectedRows?: typeof BotLevelFindOutputRowsSelectionSchema | BotLevelFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotLevelFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class BotLevelRecoverDto extends BotLevelDto {
  static metaname: string = `${BotLevelEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class BotLevelRecoverInputWhereDto extends BotLevelFindInputWhereDto {}

export class BotLevelRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotLevelRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class BotLevelRecoverOutputDto extends CrudAffectedDto {
  /** List of records affected by the recover query. */
  declare affectedRows?: BotLevelFindOutputRowsDto[];
}
export class BotLevelRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the recover query. */
  affectedRows?: typeof BotLevelFindOutputRowsSelectionSchema | BotLevelFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotLevelFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESPONSE DTO ██████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export type BotLevelFindResponse = { BotLevelFind: BotLevelFindOutputDto };
export type BotLevelFindOneByIdResponse = { BotLevelFindOneById: BotLevelEntity };
export type BotLevelCreateResponse = { BotLevelCreate: BotLevelCreateOutputDto[] };
export type BotLevelUpdateResponse = { BotLevelUpdate: BotLevelUpdateOutputDto };
export type BotLevelSoftDeleteResponse = { BotLevelSoftDelete: BotLevelSoftDeleteOutputDto };
export type BotLevelDeleteResponse = { BotLevelDelete: BotLevelDeleteOutputDto };
export type BotLevelRestoreResponse = { BotLevelRestore: BotLevelRestoreOutputDto };
export type BotLevelUpsertResponse = { BotLevelUpsert: BotLevelUpsertOutputDto[] };
export type BotLevelSoftRemoveResponse = { BotLevelSoftRemove: BotLevelSoftRemoveOutputDto };
export type BotLevelRemoveResponse = { BotLevelRemove: BotLevelRemoveOutputDto };
export type BotLevelRecoverResponse = { BotLevelRecover: BotLevelRecoverOutputDto };
