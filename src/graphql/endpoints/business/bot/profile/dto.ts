import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef, DateTime } from '../../../../libs';
import { BotLevelFindInputWhereDto, BotLevelModeEnum } from '../level';
import { BotProfileEntity, BotProfileSelectionSchema } from "./entity";

export class BotProfileDto extends BotProfileEntity {
    /** Unique ID of the pagemaster, auto generated. */
    declare id?: any;
    
    /** Unique ID of the pagemaster, auto generated. */
    declare botlvl_id?: any;

    /** Title of the bot profile. */
    declare title?: any;

    /** Bot think time min. */
    declare think_time_min_ms?: any;

    /** Bot think time max. */
    declare think_time_max_ms?: any;
    
    /** Claim aggression. */
    declare claim_aggression?:any;

    /** Defense weight. */
    declare defense_weight?: any;

    /** Hand reading weight. */
    declare hand_reading_weight?: any;

    /** Discard safety weight. */
    declare discard_safety_weight?: any;

    /** Joker usage weight. */
    declare joker_usage_weight?: any;

    /** Exposure preference. */
    declare exposure_preference?: any;

    /** Error rate. */
    declare error_rate?: any;

    /** Randomness. */
    declare randomness?: any;

    /** React to danger. */
    declare react_to_danger?: any;

    /** Charleston quality. */
    declare charleston_quality?: any;

    /** Record is active. */
    declare active?: any;

    /** When record is created, date-time will be saved. */
    declare created?: any;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    declare updated?: any;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    declare deleted?: any;

    /** List of bot level for this bot level. */
    declare fr_bot_level?: any;
}


/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class BotProfileFindDto extends BotProfileEntity {
    static metaname: string = `${BotProfileEntity?.metaname}${FindArtefact}`;
}

export class BotProfileFindSelectionSchema extends BotProfileSelectionSchema {}


// ████ FIND INPUT DTO ████████████████████████████████████████████████

export class BotProfileFindInputWhereDto extends BotProfileDto{

    /** Unique ID of the pagemaster, auto generated. */
    declare id?: FindOperatorDto;

    /** Title of the bot profile. */
    declare title?: FindOperatorDto;

    /** Record is active. */
    declare active?: FindOperatorDto;


    /** Charleston quality. */
    declare charleston_quality?: FindOperatorDto;

    /** Claim aggression. */
    declare claim_aggression?: FindOperatorDto;

    /** Defense weight. */
    declare defense_weight?: FindOperatorDto;

    /** Discard safety weight. */
    declare discard_safety_weight?: FindOperatorDto;

    /** Error rate. */
    declare error_rate?: FindOperatorDto;

    /** Exposure preference. */
    declare exposure_preference?: FindOperatorDto;

    /** Hand reading weight. */
    declare hand_reading_weight?: FindOperatorDto;

    /** Joker usage weight. */
    declare joker_usage_weight?: FindOperatorDto;

    /** Randomness. */
    declare randomness?: FindOperatorDto;
    
    /** React to danger. */
    declare react_to_danger?: FindOperatorDto;

    /** Bot think time max. */
    declare think_time_max_ms?: FindOperatorDto;

    /** Bot think time min. */
    declare think_time_min_ms?: FindOperatorDto;

    /** When record is created, date-time will be saved. */
    declare created?: FindOperatorDto;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
    declare updated?: FindOperatorDto;

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    declare deleted?: FindOperatorDto;

    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████
    /** List of bot level for this bot level. */
    declare fr_bot_level?: BotLevelFindInputWhereDto[];
}


export class BotProfileFindInputSortOrderDto{
    id?: RecordSortDirectionEnum;

    /** Title of the bot profile. */
    title?: RecordSortDirectionEnum;

    active?: RecordSortDirectionEnum;

    charleston_quality?: RecordSortDirectionEnum;

    claim_aggression?: RecordSortDirectionEnum;

    defense_weight?: RecordSortDirectionEnum;

    discard_safety_weight?: RecordSortDirectionEnum;

    error_rate?: RecordSortDirectionEnum;

    exposure_preference?: RecordSortDirectionEnum;

    hand_reading_weight?: RecordSortDirectionEnum;

    joker_usage_weight?: RecordSortDirectionEnum;

    randomness?: RecordSortDirectionEnum;

    react_to_danger?: RecordSortDirectionEnum;

    think_time_max_ms?: RecordSortDirectionEnum;

    think_time_min_ms?: RecordSortDirectionEnum;

    created?: RecordSortDirectionEnum;

    updated?: RecordSortDirectionEnum;

    deleted?: RecordSortDirectionEnum;
}


export class BotProfileFindInputGroupByDto{
    /** Title of the bot profile. */
    title?: boolean;

    /** Record is active. */
    active?: boolean;

    /** Charleston quality. */
    charleston_quality?: boolean;

    /** Claim aggression. */
    claim_aggression?: boolean;

    /** Defense weight. */
    defense_weight?: boolean;

    /** Discard safety weight. */
    discard_safety_weight?: boolean;

    /** Error rate. */
    error_rate?: boolean;

    /** Exposure preference. */
    exposure_preference?: boolean;

    /** Hand reading weight. */
    hand_reading_weight?: boolean;

    /** Joker usage weight. */
    joker_usage_weight?: boolean;

    /** Randomness. */
    randomness?: boolean;

    /** React to danger. */
    react_to_danger?: boolean;

    /** Bot think time max. */
    think_time_max_ms?: boolean;

    /** Bot think time min. */
    think_time_min_ms?: boolean;

    /** When record is created, date-time will be saved. */
    created?: boolean;

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
    updated?: boolean;
    
    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    deleted?: boolean;
}

export class BotProfileFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto{
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    declare where?: BotProfileFindInputWhereDto[];
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    declare groupBy?: BotProfileFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    declare order?: BotProfileFindInputSortOrderDto;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileFindOutputRowsDto extends BotProfileFindDto{}
export class BotProfileFindOutputRowsSelectionSchema extends BotProfileFindSelectionSchema {}

export class BotProfileFindOutputDto extends FindOutputPaginationOptionsDto{
    /**
     * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
     */
    declare rows?: BotProfileEntity | BotProfileEntity[] | any;
}

export class BotProfileFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof BotProfileFindOutputRowsSelectionSchema | BotProfileFindOutputRowsSelectionSchema | SchemaRef | false =
  schemaRef(() => BotProfileFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class BotProfileFindOneByIdDto extends BotProfileDto{
    static metaname: string = `${BotProfileEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class BotProfileFindOneByIdInputDto extends IdInputDto{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class BotProfileCreateDto extends BotProfileDto {
    static metaname: string = `${BotProfileEntity.metaname}${CreateArtefact}`;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class BotProfileCreateInputDto extends  BotProfileCreateDto{

    declare botlvl_id: number;

    declare title: string;

    declare think_time_min_ms: number;

    declare think_time_max_ms: number;

    declare claim_aggression?: number;

    declare defense_weight?: number;

    declare hand_reading_weight?: number;

    declare discard_safety_weight?: number;

    declare joker_usage_weight?: number;

    declare exposure_preference?: number;

    declare error_rate?: number;

    declare randomness?: number;

    declare react_to_danger?: number;

    declare charleston_quality?: number;

    declare active?: Date;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileCreateOutputDto extends BotProfileFindOutputRowsDto {}
export class BotProfileCreateOutputSelectionSchema extends BotProfileFindOutputRowsSelectionSchema {}
/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/


export class BotProfileUpdateDto extends BotProfileDto{
    static metaname: string = `${BotProfileEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

export class BotProfileUpdateInputWhereDto extends BotProfileFindInputWhereDto{}

export class BotProfileUpdateInputSetsDto{}

export class BotProfileUpdateInputDto{
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    where!: BotProfileUpdateInputWhereDto[];

    /**
     * What to set for update
     * basically fields list of update
     */
    sets!: BotProfileUpdateInputSetsDto
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileUpdateOutputAffectedRowsDto extends BotProfileFindOutputRowsDto{}
export class BotProfileUpdateOutputAffectedRowsSelectionSchema extends BotProfileFindOutputRowsSelectionSchema {}

export class BotProfileUpdateOutputDto{
    /**
     * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
    */
    declare affectedRows?: BotProfileEntity[] | any; 
}


export class BotProfileUpdateOutputSelectionSchema{
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof BotProfileUpdateOutputAffectedRowsSelectionSchema
    | BotProfileUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => BotProfileUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class BotProfileSoftDeleteDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class BotProfileSoftDeleteInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileSoftDeleteOutputDto extends CrudAffectedDto {}
export class BotProfileSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class BotProfileDeleteDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class BotProfileDeleteInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileDeleteOutputDto extends CrudAffectedDto {}
export class BotProfileDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class BotProfileRestoreDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class BotProfileRestoreInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileRestoreOutputDto extends CrudAffectedDto {}
export class BotProfileRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class BotProfileUpsertDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class BotProfileUpsertInputDto extends BotProfileUpsertDto {
  
      /** Unique ID of the bot level, auto generated.*/
      declare id?: number
    
      /** Reference ID of the bot level associated with this profile.*/
      declare botlvl_id?: BotLevelModeEnum
    
      /** Title of the bot level.*/
      declare title?: string
    
      /** Minimum thinking time of the bot in milliseconds.*/
      declare think_time_min_ms?: number
    
      /** Maximum thinking time of the bot in milliseconds.*/
      declare think_time_max_ms?: number
    
      /** Claim aggression of this profile.*/
      declare claim_aggression?: number
    
      /** Defense weight of this profile.*/
      declare defense_weight?: number
    
      /** How well the bot reads opponent hands.*/
      declare hand_reading_weight?: number
    
      /** How safely the bot discards cards.*/
      declare discard_safety_weight?: number
    
      /** How effectively the bot uses jokers.*/
      declare joker_usage_weight?: number
    
      /** Bot preference for exposing melds.*/
      declare exposure_preference?: number
    
      /** Chance of the bot making mistakes.*/
      declare error_rate?: number
    
      /** Level of randomness in bot decisions.*/
      declare randomness?: number
    
      /** How the bot reacts to risky situations.*/
      declare react_to_danger?: number
    
      /** Quality of bot decisions in Charleston.*/
      declare charleston_quality?: number
    
      /** Indicates when the bot profile becomes active.*/
      declare active?: DateTime
    
      /** When record is created, date-time will be saved.*/
      declare created?: DateTime
    
      /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
      declare updated?: DateTime
    
      /** 
      When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
      */
      declare deleted?: DateTime
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileUpsertOutputDto extends BotProfileFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /**
   * Action type performed during upsert process, because upsert can create or update.
   */
  declare upsert_process?: UpsertStatusEnum;
}
export class BotProfileUpsertOutputSelectionSchema
  extends BotProfileFindOutputRowsSelectionSchema
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
export class BotProfileSoftRemoveDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class BotProfileSoftRemoveInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileSoftRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the soft remove query. */
  declare affectedRows?: BotProfileFindOutputRowsDto[];
}
export class BotProfileSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the soft remove query. */
  affectedRows?: typeof BotProfileFindOutputRowsSelectionSchema | BotProfileFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotProfileFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class BotProfileRemoveDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class BotProfileRemoveInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileRemoveOutputDto extends CrudAffectedDto {
  /** List of records affected by the remove query. */
  declare affectedRows?: BotProfileFindOutputRowsDto[];
}
export class BotProfileRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the remove query. */
  affectedRows?: typeof BotProfileFindOutputRowsSelectionSchema | BotProfileFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotProfileFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class BotProfileRecoverDto extends BotProfileDto {
  static metaname: string = `${BotProfileEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████

export class BotProfileRecoverInputWhereDto extends BotProfileFindInputWhereDto {}

export class BotProfileRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: BotProfileRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████

export class BotProfileRecoverOutputDto extends CrudAffectedDto {
  /** List of records affected by the recover query. */
  declare affectedRows?: BotProfileFindOutputRowsDto[];
}
export class BotProfileRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /** List of records affected by the recover query. */
  affectedRows?: typeof BotProfileFindOutputRowsSelectionSchema | BotProfileFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => BotProfileFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESPONSE DTO ██████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export type BotProfileFindResponse = { BotProfileFind: BotProfileFindOutputDto };
export type BotProfileFindOneByIdResponse = { BotProfileFindOneById: BotProfileEntity };
export type BotProfileCreateResponse = { BotProfileCreate: BotProfileCreateOutputDto[] };
export type BotProfileUpdateResponse = { BotProfileUpdate: BotProfileUpdateOutputDto };
export type BotProfileSoftDeleteResponse = { BotProfileSoftDelete: BotProfileSoftDeleteOutputDto };
export type BotProfileDeleteResponse = { BotProfileDelete: BotProfileDeleteOutputDto };
export type BotProfileRestoreResponse = { BotProfileRestore: BotProfileRestoreOutputDto };
export type BotProfileUpsertResponse = { BotProfileUpsert: BotProfileUpsertOutputDto[] };
export type BotProfileSoftRemoveResponse = { BotProfileSoftRemove: BotProfileSoftRemoveOutputDto };
export type BotProfileRemoveResponse = { BotProfileRemove: BotProfileRemoveOutputDto };
export type BotProfileRecoverResponse = { BotProfileRecover: BotProfileRecoverOutputDto };
