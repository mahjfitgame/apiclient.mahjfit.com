import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDto, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, MarkAsMainArtefact, MarkAsMainInputDto, MarkAsMainOutputDto, MarkAsMainOutputSelectionSchema, RecordPositionArtefact, RecordPositionInputDto, RecordPositionOutputDto, RecordPositionOutputSelectionSchema, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UploadArtefact, UploadDeleteArtefact, UploadDeleteInputDto, UploadDeleteOutputDto, UploadDeleteOutputSelectionSchema, UploadInputDto, UploadOutputDto, UploadOutputSelectionSchema, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../libs';
import { ApiEndpointAuthEntity, ApiEndpointAuthSelectionSchema } from './entity';
import { ApiEndpointAuthMarkAsMainFieldEnum, ApiEndpointAuthUploadFileFieldEnum } from './enum';
import type { ApiUserRoleEnum } from './enum';

export class ApiEndpointAuthDto extends ApiEndpointAuthEntity {
    /** Unique ID of the user, auto generated. */
    declare id?: any;
    /** Required to gain access to API endpoint. */
    declare username?: any;
    /** Email is required for varification and communication. */
    declare email?: any;
    /** Required to gain access permission to restricted data. */
    declare role_id?: any;
    /** Used for authentication using jwt bearer token. Life span is shorter. */
    declare jwt_access_token?: any;
    /** Required to refresh jwt access token. Life span is bit longer. */
    declare jwt_refresh_token?: any;
    /**
     * If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended.
     */
    declare suspended?: any;
    /** Profile photo file. */
    declare file_profile_photo?: any;
    /** User profile photo url. */
    declare file_profile_photo_url?: any;
    /** Record is main record or not */
    declare is_main?: any;
    /** Record position for ordering purpose. */
    declare record_position?: any
    /**
     * Url slug of the api endpoint auth . Set as empty string (\"\") to generate automatically as per set data and to remove set to null.
     */
    declare url_slug?: any;
    /** Record created date time. */
    declare created?: any;
    /** Record last updated date time. Update can be any. */
    declare updated?: any;
    /**
     * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
     */
    declare deleted?: any;
    /** Api endpoint auth files. */
    declare fr_api_endpoint_auth_files?: any[]
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class ApiEndpointAuthFindDto extends ApiEndpointAuthDto {
    static metaname: string = `${ApiEndpointAuthEntity?.metaname}${FindArtefact}`;
}
export class ApiEndpointAuthFindSelectionSchema extends ApiEndpointAuthSelectionSchema {
}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthFindInputWhereDto extends ApiEndpointAuthFindDto {
  /** Unique ID of the user, auto generated. */
  declare id?: FindOperatorDto; 
  /** Required to gain access to API endpoint. */
  declare username?: FindOperatorDto; 
  /** Email is required for varification and communication. */
  declare email?: FindOperatorDto; 
  /** Required to gain access permission to restricted data. */
  declare role_id?: FindOperatorDto;
  /** Used for authentication using jwt bearer token. Life span is shorter. */
  declare jwt_access_token?: FindOperatorDto; 
  /** Required to refresh jwt access token. Life span is bit longer. */
  declare jwt_refresh_token?: FindOperatorDto; 
  /**
   * If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended.
   */
  declare suspended?: FindOperatorDto;
  /**
   * Url slug of the api endpoint auth . Set as empty string (\"\") to generate automatically as per set data and to remove set to null.
   */
  declare url_slug?: FindOperatorDto; 
  /** Record created date time. */
  declare created?: FindOperatorDto; 
  /** Record last updated date time. Update can be any. */
  declare updated?: FindOperatorDto; 
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
}

export class ApiEndpointAuthFindInputSortOrderDto {
  /** Unique ID of the user, auto generated. */
  declare  id?: RecordSortDirectionEnum; 
  /** Required to gain access to API endpoint. */
  declare username?: RecordSortDirectionEnum; 
  /**
   * If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended.
   */
  declare suspended?: RecordSortDirectionEnum;
  /** Record created date time. */
  declare created?: RecordSortDirectionEnum; 
  /** Record last updated date time. Update can be any. */
  declare updated?: RecordSortDirectionEnum; 
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class ApiEndpointAuthFindInputGroupByDto { 
  /** Required to gain access permission to restricted data. */
  declare role_id?: boolean; 
  /**
   * If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended.
   */
  declare suspended?: boolean; 
  /** Record created date time. */
  declare created?: boolean; 
  /** Record last updated date time. Update can be any. */
  declare updated?: boolean; 
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: boolean; 
}

export class ApiEndpointAuthFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: ApiEndpointAuthFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: ApiEndpointAuthFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthFindOutputRowsDto extends ApiEndpointAuthFindDto {
}
export class ApiEndpointAuthFindOutputRowsSelectionSchema extends ApiEndpointAuthFindSelectionSchema {
}

export class ApiEndpointAuthFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: ApiEndpointAuthFindOutputRowsDto[];
}
export class ApiEndpointAuthFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof ApiEndpointAuthFindOutputRowsSelectionSchema | ApiEndpointAuthFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => ApiEndpointAuthFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** ApiEndpointAuthFindOneById */
export class ApiEndpointAuthFindOneByIdDto extends ApiEndpointAuthDto {
    static metaname: string = `${ApiEndpointAuthEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthFindOneByIdInputDto extends IdInputDto{ 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ApiEndpointAuthCreateDto extends ApiEndpointAuthDto {
    static metaname: string = `${ApiEndpointAuthEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthCreateInputDto extends ApiEndpointAuthCreateDto {
  /** Required to gain access to API endpoint. */
  declare username: string;
  /** Email is required for varification and communication. */
  declare email: string;
  /** Required to gain access to API endpoint using JWT token. */
  declare identify: string;
  /** Required to gain access permission to restricted data. */
  declare role_id: ApiUserRoleEnum;
  /**
   * Url slug of the api endpoint auth . Set as empty string (\"\") to generate automatically as per set data and to remove set to null.
   */
  declare url_slug?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthCreateOutputDto extends ApiEndpointAuthFindOutputRowsDto {
}
export class ApiEndpointAuthCreateOutputSelectionSchema extends ApiEndpointAuthFindOutputRowsSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class ApiEndpointAuthUpdateDto extends ApiEndpointAuthDto {
    static metaname: string = `${ApiEndpointAuthEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthUpdateInputWhereDto extends ApiEndpointAuthFindInputWhereDto {
}

export class ApiEndpointAuthUpdateInputSetsDto {
  /** Required to gain access to API endpoint. */
  declare username?: string;
  /** Email is required for varification and communication. */
  declare email?: string;
  /** Required to gain access to API endpoint using JWT token. */
  declare identify?: string;
  /** Required to gain access permission to restricted data. */
  declare role_id?: ApiUserRoleEnum;
  /**
   * Url slug of the api endpoint auth . Set as empty string (\"\") to generate automatically as per set data and to remove set to null.
   */
  declare url_slug?: string;
}

export class ApiEndpointAuthUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: ApiEndpointAuthUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: ApiEndpointAuthUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthUpdateOutputAffectedRowsDto extends ApiEndpointAuthFindOutputRowsDto {
}
export class ApiEndpointAuthUpdateOutputAffectedRowsSelectionSchema extends ApiEndpointAuthFindOutputRowsSelectionSchema {
}

export class ApiEndpointAuthUpdateOutputDto extends CrudAffectedDto { 
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ApiEndpointAuthUpdateOutputAffectedRowsDto[]; 
}
export class ApiEndpointAuthUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ApiEndpointAuthUpdateOutputAffectedRowsSelectionSchema | ApiEndpointAuthUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ApiEndpointAuthUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class ApiEndpointAuthSoftDeleteDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthSoftDeleteInputWhereDto extends ApiEndpointAuthFindInputWhereDto {

}

export class ApiEndpointAuthSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthSoftDeleteInputWhereDto[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthSoftDeleteOutputDto extends CrudAffectedDto {
}
export class ApiEndpointAuthSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class ApiEndpointAuthDeleteDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthDeleteInputWhereDto extends ApiEndpointAuthFindInputWhereDto {
  
}

export class ApiEndpointAuthDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthDeleteOutputDto extends CrudAffectedDto {
}
export class ApiEndpointAuthDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class ApiEndpointAuthRestoreDto extends ApiEndpointAuthDto {
    static metaname: string = `${ApiEndpointAuthEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthRestoreInputWhereDto extends ApiEndpointAuthFindInputWhereDto {
  
}

export class ApiEndpointAuthRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthRestoreOutputDto extends CrudAffectedDto {
}
export class ApiEndpointAuthRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class ApiEndpointAuthUpsertDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthUpsertInputDto extends ApiEndpointAuthCreateInputDto {
    /** Unique ID of the user, auto generated. Can be empty or provide id to update existing record. */
    declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthUpsertOutputDto extends ApiEndpointAuthCreateOutputDto implements UpsertOutputProcessStatusDto { 
    /** Action type performed during upsert process, because upsert can create or update. */
    upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class ApiEndpointAuthUpsertOutputSelectionSchema extends ApiEndpointAuthCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class ApiEndpointAuthSoftRemoveDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthSoftRemoveInputWhereDto extends ApiEndpointAuthFindInputWhereDto {
}

export class ApiEndpointAuthSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthSoftRemoveOutputAffectedRowsDto extends ApiEndpointAuthFindOutputRowsDto {
}
export class ApiEndpointAuthSoftRemoveOutputAffectedRowsSelectionSchema extends ApiEndpointAuthFindOutputRowsSelectionSchema {  
}
export class ApiEndpointAuthSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ApiEndpointAuthSoftRemoveOutputAffectedRowsDto[]
}
export class ApiEndpointAuthSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ApiEndpointAuthSoftRemoveOutputAffectedRowsSelectionSchema | ApiEndpointAuthSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ApiEndpointAuthSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ApiEndpointAuthRemoveDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthRemoveInputWhereDto extends ApiEndpointAuthFindInputWhereDto {
}

export class ApiEndpointAuthRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class ApiEndpointAuthRemoveOutputAffectedRowsDto extends ApiEndpointAuthFindOutputRowsDto {
}
export class ApiEndpointAuthRemoveOutputAffectedRowsSelectionSchema extends ApiEndpointAuthFindOutputRowsSelectionSchema {  
}
export class ApiEndpointAuthRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ApiEndpointAuthRemoveOutputAffectedRowsDto[] | any;
}
export class ApiEndpointAuthRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ApiEndpointAuthRemoveOutputAffectedRowsSelectionSchema | ApiEndpointAuthRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ApiEndpointAuthRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class ApiEndpointAuthRecoverDto extends ApiEndpointAuthDto{
  static metaname: string = `${ApiEndpointAuthEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthRecoverInputWhereDto extends ApiEndpointAuthFindInputWhereDto {

}

export class ApiEndpointAuthRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: ApiEndpointAuthRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class ApiEndpointAuthRecoverOutputAffectedRowsDto extends ApiEndpointAuthFindOutputRowsDto {
}
export class ApiEndpointAuthRecoverOutputAffectedRowsSelectionSchema extends ApiEndpointAuthFindOutputRowsSelectionSchema {  
}

export class ApiEndpointAuthRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: ApiEndpointAuthRecoverOutputAffectedRowsDto[] | any;
}

export class ApiEndpointAuthRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof ApiEndpointAuthRecoverOutputAffectedRowsSelectionSchema | ApiEndpointAuthRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => ApiEndpointAuthRecoverOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** Upload files for given single record id. You can also upload multiple files for same record at once but cannot upload multiple fields files for same record. Each upload field needs to be provided in request body. Simple rule is must be one record one field with single or multiple files at a time. Returns saved file(s) info. */
export class ApiEndpointAuthUploadDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity?.metaname}${UploadArtefact}`;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthUploadInputDto extends UploadInputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field: ApiEndpointAuthUploadFileFieldEnum;

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
export class ApiEndpointAuthUploadOutputDto extends UploadOutputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field?: ApiEndpointAuthUploadFileFieldEnum;
}
export class ApiEndpointAuthUploadOutputSelectionSchema extends UploadOutputSelectionSchema {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  file_field?: boolean = false;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

/** Delete uploaded files for given single record id. You can also delete multiple files for same record at once. This is as per set criteria in entity. Returns deleted file(s) info. */
export class ApiEndpointAuthUploadDeleteDto extends ApiEndpointAuthDto {
  static metaname: string = `${ApiEndpointAuthEntity?.metaname}${UploadDeleteArtefact}`;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthUploadDeleteInputDto extends UploadDeleteInputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field: ApiEndpointAuthUploadFileFieldEnum;

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
export class ApiEndpointAuthUploadDeleteOutputDto extends UploadDeleteOutputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field?: ApiEndpointAuthUploadFileFieldEnum;
}
export class ApiEndpointAuthUploadDeleteOutputSelectionSchema extends UploadDeleteOutputSelectionSchema {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  file_field?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ Record Position DTO ███████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** change record position */
export class ApiEndpointAuthRecordPositionDto extends ApiEndpointAuthEntity {
  static metaname: string = `${ApiEndpointAuthEntity?.metaname}${RecordPositionArtefact}`;
}

// ████ RECORD POSITION INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthRecordPositionInputDto extends RecordPositionInputDto {
}

// ████ RECORD POSITION OUTPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthRecordPositionOutputDto extends RecordPositionOutputDto {
}
export class ApiEndpointAuthRecordPositionOutputSelectionSchema extends RecordPositionOutputSelectionSchema {
}

/**
 * █████████████████████████████████████████████████████████████
 * █ MARK AS MAIN DTO ██████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/** set criteria to update the mark as main as per the ref id and primary key */
export class ApiEndpointAuthMarkAsMainDto extends ApiEndpointAuthEntity {
  static metaname: string = `${ApiEndpointAuthEntity?.metaname}${MarkAsMainArtefact}`;
}

// ████ MARK AS MAIN INPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthMarkAsMainInputDto extends MarkAsMainInputDto {
  /** Please select referece type field to make that field as main. */
  declare mark_as_main_field: ApiEndpointAuthMarkAsMainFieldEnum;
}

// ████ MARK AS MAIN OUTPUT DTO ████████████████████████████████████████████████
export class ApiEndpointAuthMarkAsMainOutputDto extends MarkAsMainOutputDto {
  /** Please select referece type field to make that field as main. */
  declare mark_as_main_field?: ApiEndpointAuthMarkAsMainFieldEnum;
}
export class ApiEndpointAuthMarkAsMainOutputSelectionSchema extends MarkAsMainOutputSelectionSchema {
  /** Please select referece type field to make that field as main. */
  mark_as_main_field?: boolean = false;
}



/**
 * █████████████████████
 * █ TYPE: Response ████
 * █████████████████████ 
**/

export type ApiEndpointAuthFindResponse = { ApiEndpointAuthFind: ApiEndpointAuthFindOutputDto };
export type ApiEndpointAuthFindOneByIdResponse = { ApiEndpointAuthFindOneById: ApiEndpointAuthEntity };
export type ApiEndpointAuthCreateResponse = { ApiEndpointAuthCreate: ApiEndpointAuthCreateOutputDto[] };
export type ApiEndpointAuthUpdateResponse = { ApiEndpointAuthUpdate: ApiEndpointAuthUpdateOutputDto };
export type ApiEndpointAuthSoftDeleteResponse = { ApiEndpointAuthSoftDelete: ApiEndpointAuthSoftDeleteOutputDto };
export type ApiEndpointAuthDeleteResponse = { ApiEndpointAuthDelete: ApiEndpointAuthDeleteOutputDto };
export type ApiEndpointAuthRestoreResponse = { ApiEndpointAuthRestore: ApiEndpointAuthRestoreOutputDto };
export type ApiEndpointAuthUpsertResponse = { ApiEndpointAuthUpsert: ApiEndpointAuthUpsertOutputDto[] };
export type ApiEndpointAuthSoftRemoveResponse = { ApiEndpointAuthSoftRemove: ApiEndpointAuthSoftRemoveOutputDto };
export type ApiEndpointAuthRemoveResponse = { ApiEndpointAuthRemove: ApiEndpointAuthRemoveOutputDto };
export type ApiEndpointAuthRecoverResponse = { ApiEndpointAuthRecover: ApiEndpointAuthRecoverOutputDto };
export type ApiEndpointAuthUploadResponse = { ApiEndpointAuthUpload: ApiEndpointAuthUploadOutputDto[] };
export type ApiEndpointAuthUploadDeleteResponse = { ApiEndpointAuthUploadDelete: ApiEndpointAuthUploadDeleteOutputDto[] };
export type ApiEndpointAuthRecordPositionResponse = { ApiEndpointAuthRecordPosition: ApiEndpointAuthRecordPositionOutputDto };
export type ApiEndpointAuthMarkAsMainResponse = { ApiEndpointAuthMarkAsMain: ApiEndpointAuthMarkAsMainOutputDto[] };
