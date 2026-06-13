import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, YesNoEnum, SchemaRef, schemaRef } from '../../../libs';
import { DeviceFindInputWhereDto } from '../master/device/dto';
import { ApiEndpointAuthFindInputWhereDto } from '../api-endpoint-auth/dto';
import { UserAuthorisationFindInputWhereDto } from '../folk/user-authorisation/dto';
import { SessionEntity, SessionSelectionSchema } from './entity';

export class SessionDto extends SessionEntity {
  /** Unique ID of the entity, auto generated. */
  declare id?: any;
  /** Authentication id of the user. */
  declare auth_id?: any;
  /** User Authorisation id of the user. */
  declare uar_id?: any;
  /** Registered device id used by user. */
  declare device_id?: any;
  /** Is user logged in or not flag. */
  declare logged_in?: any;
  /** Keep user logged in or not flag. */
  declare keep_logged?: any;
  /** JWT token of the user session. */
  declare jwt?: any;
  /** Session data storage in JSON format for the user. */
  declare data?: any;
  /** Created datetime of the user auth. */
  declare created?: any;
  /** Updated datetime of the user auth. */
  declare updated?: any;
  /** Deleted datetime of the user auth. */
  declare deleted?: any;
  /** Master device info of the session user. */
  declare fr_device?: any;
  /** Authentication info of the session user. */
  declare fr_user_auth?: any;
  /** Session meta info of the session user. */
  declare fr_session_metas?: any[];
  /** User Authorisation info of the session user. */
  declare fr_user_authorisation?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class SessionFindDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${FindArtefact}`;
}
export class SessionFindSelectionSchema extends SessionSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class SessionFindInputWhereDto extends SessionFindDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: FindOperatorDto;
  /** Authentication id of the user. */
  declare auth_id?: FindOperatorDto;
  /** Registered device id used by user. */
  declare device_id?: FindOperatorDto;
  /** Is user logged in or not flag. */
  declare logged_in?: FindOperatorDto;
  /** Keep user logged in or not flag. */
  declare keep_logged?: FindOperatorDto;
  /** Created datetime of the user auth. */
  declare created?: FindOperatorDto;
  /** Updated datetime of the user auth. */
  declare updated?: FindOperatorDto;
  /** Deleted datetime of the user auth. */
  declare deleted?: FindOperatorDto;
  /** Master device info of the session user. */
  declare fr_device?: DeviceFindInputWhereDto[];
  /** Authentication info of the session user. */
  declare fr_user_auth?: ApiEndpointAuthFindInputWhereDto[];
  /** User Authorisation info of the session user. */
  declare fr_user_authorisation?: UserAuthorisationFindInputWhereDto[];
}

export class SessionFindInputSortOrderDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Authentication id of the user. */
  declare auth_id?: RecordSortDirectionEnum;
  /** User Authorisation id of the user. */
  declare uar_id?: RecordSortDirectionEnum;
  /** Registered device id used by user. */
  declare device_id?: RecordSortDirectionEnum;
  /** Is user logged in or not flag. */
  declare logged_in?: RecordSortDirectionEnum;
  /** Keep user logged in or not flag. */
  declare keep_logged?: RecordSortDirectionEnum;
  /** Created datetime of the user auth. */
  declare created?: RecordSortDirectionEnum;
  /** Updated datetime of the user auth. */
  declare updated?: RecordSortDirectionEnum;
  /** Deleted datetime of the user auth. */
  declare deleted?: RecordSortDirectionEnum;
}

export class SessionFindInputGroupByDto {
  /** Authentication id of the user. */
  declare auth_id?: boolean;
  /** User Authorisation id of the user. */
  declare uar_id?: boolean;
  /** Registered device id used by user. */
  declare device_id?: boolean;
  /** Is user logged in or not flag. */
  declare logged_in?: boolean;
  /** Keep user logged in or not flag. */
  declare keep_logged?: boolean;
  /** Created datetime of the user auth. */
  declare created?: boolean;
  /** Updated datetime of the user auth. */
  declare updated?: boolean;
  /** Deleted datetime of the user auth. */
  declare deleted?: boolean;
}

export class SessionFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: SessionFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: SessionFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class SessionFindOutputRowsDto extends SessionFindDto {}
export class SessionFindOutputRowsSelectionSchema extends SessionFindSelectionSchema {}

export class SessionFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: SessionFindOutputRowsDto[];
}
export class SessionFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof SessionFindOutputRowsSelectionSchema | SessionFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => SessionFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** SessionFindOneById */
export class SessionFindOneByIdDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${FindOneByIdArtefact}`;
}
export class SessionFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class SessionCreateDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${CreateArtefact}`;
}

export class SessionCreateInputDto {
  /** Authentication id of the user. */
  declare auth_id: number;
  /** User Authorisation id of the user. */
  declare uar_id?: number;
  /** Registered device id used by user. */
  declare device_id: number;
  /** Is user logged in or not flag. */
  declare logged_in: YesNoEnum;
  /** Keep user logged in or not flag. */
  declare keep_logged: YesNoEnum;
  /** JWT token of the user session. */
  declare jwt?: string;
  /** Session data storage in JSON format for the user. */
  declare data?: string;
}

export class SessionCreateOutputDto extends SessionFindOutputRowsDto {}
export class SessionCreateOutputSelectionSchema extends SessionFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class SessionUpdateDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${UpdateArtefact}`;
}

export class SessionUpdateInputWhereDto extends SessionFindInputWhereDto {}

export class SessionUpdateInputSetsDto {
  /** Authentication id of the user. */
  declare auth_id?: number;
  /** User Authorisation id of the user. */
  declare uar_id?: number;
  /** Registered device id used by user. */
  declare device_id?: number;
  /** Is user logged in or not flag. */
  declare logged_in?: YesNoEnum;
  /** Keep user logged in or not flag. */
  declare keep_logged?: YesNoEnum;
  /** JWT token of the user session. */
  declare jwt?: string;
  /** Session data storage in JSON format for the user. */
  declare data?: string;
}

export class SessionUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: SessionUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: SessionUpdateInputSetsDto;
}

export class SessionUpdateOutputAffectedRowsDto extends SessionFindOutputRowsDto {}
export class SessionUpdateOutputAffectedRowsSelectionSchema extends SessionFindOutputRowsSelectionSchema {}

export class SessionUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: SessionUpdateOutputAffectedRowsDto[];
}
export class SessionUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof SessionUpdateOutputAffectedRowsSelectionSchema | SessionUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => SessionUpdateOutputAffectedRowsSelectionSchema);
}

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class SessionSoftDeleteDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${SoftDeleteArtefact}`;
}

export class SessionSoftDeleteInputWhereDto extends SessionFindInputWhereDto {}
export class SessionSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionSoftDeleteInputWhereDto[];
}
export class SessionSoftDeleteOutputDto extends CrudAffectedDto {}
export class SessionSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class SessionDeleteDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${DeleteArtefact}`;
}

export class SessionDeleteInputWhereDto extends SessionFindInputWhereDto {}
export class SessionDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionDeleteInputWhereDto[];
}
export class SessionDeleteOutputDto extends CrudAffectedDto {}
export class SessionDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Restore soft deleted or soft removed records. Unlike recover restore do not check record in database before it perform restore operation, so its fast. Do not provide processed data in return. */
export class SessionRestoreDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${RestoreArtefact}`;
}

export class SessionRestoreInputWhereDto extends SessionFindInputWhereDto {}
export class SessionRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionRestoreInputWhereDto[];
}
export class SessionRestoreOutputDto extends CrudAffectedDto {}
export class SessionRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Create or update records. When id is provided and matched, record updates otherwise it creates new record. */
export class SessionUpsertDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${UpsertArtefact}`;
}

export class SessionUpsertInputDto extends SessionCreateInputDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: number;
}

export class SessionUpsertOutputDto extends SessionFindOutputRowsDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  declare upsert_process?: UpsertStatusEnum;
}
export class SessionUpsertOutputSelectionSchema extends SessionFindOutputRowsSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: typeof UpsertOutputProcessStatusSelectionSchema | UpsertOutputProcessStatusSelectionSchema | SchemaRef | false = schemaRef(() => UpsertOutputProcessStatusSelectionSchema);
}

/** Soft remove records after data checks. Soft removed records can be recovered or restored. */
export class SessionSoftRemoveDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${SoftRemoveArtefact}`;
}

export class SessionSoftRemoveInputWhereDto extends SessionFindInputWhereDto {}
export class SessionSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionSoftRemoveInputWhereDto[];
}

export class SessionSoftRemoveOutputAffectedRowsDto extends SessionFindOutputRowsDto {}
export class SessionSoftRemoveOutputAffectedRowsSelectionSchema extends SessionFindOutputRowsSelectionSchema {}

export class SessionSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records soft removed for the query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: SessionSoftRemoveOutputAffectedRowsDto[];
}
export class SessionSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records soft removed for the query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof SessionSoftRemoveOutputAffectedRowsSelectionSchema | SessionSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => SessionSoftRemoveOutputAffectedRowsSelectionSchema);
}

/** Remove records after data checks. This operation permanently removes the data and returns affected rows. */
export class SessionRemoveDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${RemoveArtefact}`;
}

export class SessionRemoveInputWhereDto extends SessionFindInputWhereDto {}
export class SessionRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionRemoveInputWhereDto[];
}

export class SessionRemoveOutputAffectedRowsDto extends SessionFindOutputRowsDto {}
export class SessionRemoveOutputAffectedRowsSelectionSchema extends SessionFindOutputRowsSelectionSchema {}

export class SessionRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records removed for the query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: SessionRemoveOutputAffectedRowsDto[];
}
export class SessionRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records removed for the query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof SessionRemoveOutputAffectedRowsSelectionSchema | SessionRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => SessionRemoveOutputAffectedRowsSelectionSchema);
}

/** Recover records and return processed data. This checks data and relations before recovering records. */
export class SessionRecoverDto extends SessionDto {
  static metaname: string = `${SessionEntity.metaname}${RecoverArtefact}`;
}

export class SessionRecoverInputWhereDto extends SessionFindInputWhereDto {}
export class SessionRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: SessionRecoverInputWhereDto[];
}

export class SessionRecoverOutputAffectedRowsDto extends SessionFindOutputRowsDto {}
export class SessionRecoverOutputAffectedRowsSelectionSchema extends SessionFindOutputRowsSelectionSchema {}

export class SessionRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records recovered for the query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: SessionRecoverOutputAffectedRowsDto[];
}
export class SessionRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof SessionRecoverOutputAffectedRowsSelectionSchema | SessionRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => SessionRecoverOutputAffectedRowsSelectionSchema);
}

export type SessionFindResponse = { SessionFind: SessionFindOutputDto };
export type SessionFindOneByIdResponse = { SessionFindOneById: SessionEntity };
export type SessionCreateResponse = { SessionCreate: SessionCreateOutputDto[] };
export type SessionUpdateResponse = { SessionUpdate: SessionUpdateOutputDto };
export type SessionSoftDeleteResponse = { SessionSoftDelete: SessionSoftDeleteOutputDto };
export type SessionDeleteResponse = { SessionDelete: SessionDeleteOutputDto };
export type SessionRestoreResponse = { SessionRestore: SessionRestoreOutputDto };
export type SessionUpsertResponse = { SessionUpsert: SessionUpsertOutputDto[] };
export type SessionSoftRemoveResponse = { SessionSoftRemove: SessionSoftRemoveOutputDto };
export type SessionRemoveResponse = { SessionRemove: SessionRemoveOutputDto };
export type SessionRecoverResponse = { SessionRecover: SessionRecoverOutputDto };

export type SessionUpsertOutputProcessStatusDto = UpsertOutputProcessStatusDto;
