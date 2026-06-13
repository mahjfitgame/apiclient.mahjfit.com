import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { UserAuthorisationFindInputWhereDto } from '../../folk/user-authorisation/dto';
import { WorkStatusFindInputWhereDto } from '../../master/work-status/dto';
import { QueueEmailEntity, QueueEmailSelectionSchema } from './entity';
import type { WorkStatusEnum } from '../../master/work-status/enum';

export class QueueEmailDto extends QueueEmailEntity {
  /** Unique ID of the queue email, auto generated. */
  declare id?: any;
  /** Work status ID of the queue email. */
  declare wrkstatus_id?: any;
  /** From user ID of the queue email. */
  declare from_uar_id?: any;
  /** To user ID of the queue email. */
  declare to_uar_id?: any;
  /** Queue type ID of the queue email. */
  declare quetype_id?: any;
  /** Marketing campaign ID of the queue email. */
  declare mktcmpin_id?: any;
  /** Who response ID of the queue email. */
  declare whresp_id?: any;
  /** Reference ID of the queue email. */
  declare ref_id?: any;
  /** Reference type of the queue email. */
  declare ref_type?: any;
  /** Authorisation role id of the user. */
  declare created_uar_id?: any;
  /** From email of the queue email. */
  declare from_email?: any;
  /** To email of the queue email. */
  declare to_email?: any;
  /** CC email of the queue email. */
  declare cc?: any;
  /** CC Other email of the queue email. */
  declare ccother?: any;
  /** BCC email of the queue email. */
  declare bcc?: any;
  /** Subject of the queue email. */
  declare subject?: any;
  /** Body of the queue email. */
  declare body?: any;
  /** Raw json data of the queue process. */
  declare raw_data?: any;
  /** Whether the queue email is sent or not. */
  declare sent?: any;
  /** When record is created, date-time will be saved. */
  declare created?: any;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: any;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: any;
  /** From user authorisation of the queue email */
  declare fr_from_user_authorisation?: any;
  /** To user authorisation of the queue email */
  declare fr_to_user_authorisation?: any;
  /** Queue type of the queue email */
  declare fr_queue_type?: any;
  /** Created User authorisation of the queue email added by */
  declare fr_created_user_authorisation?: any;
  /** Work status of the queue email */
  declare fr_work_status?: any;
  /** Marketing campaign of the queue email */
  declare fr_marketing_campaign?: any;
  /** Webhook response of the queue email */
  declare fr_webhook_response?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class QueueEmailFindDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${FindArtefact}`;
}
export class QueueEmailFindSelectionSchema extends QueueEmailSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class QueueEmailFindInputWhereDto extends QueueEmailFindDto {
  /** Unique ID of the queue email, auto generated. */
  declare id?: FindOperatorDto;
  /** Work status ID of the queue email. */
  declare wrkstatus_id?: FindOperatorDto;
  /** From user ID of the queue email. */
  declare from_uar_id?: FindOperatorDto;
  /** To user ID of the queue email. */
  declare to_uar_id?: FindOperatorDto;
  /** Queue type ID of the queue email. */
  declare quetype_id?: FindOperatorDto;
  /** Marketing campaign ID of the queue email. */
  declare mktcmpin_id?: FindOperatorDto;
  /** Who response ID of the queue email. */
  declare whresp_id?: FindOperatorDto;
  /** Reference ID of the queue email. */
  declare ref_id?: FindOperatorDto;
  /** Reference type of the queue email. */
  declare ref_type?: FindOperatorDto;
  /** Authorisation role id of the user. */
  declare created_uar_id?: FindOperatorDto;
  /** From email of the queue email. */
  declare from_email?: FindOperatorDto;
  /** To email of the queue email. */
  declare to_email?: FindOperatorDto;
  /** Subject of the queue email. */
  declare subject?: FindOperatorDto;
  /** Whether the queue email is sent or not. */
  declare sent?: FindOperatorDto;
  /** When record is created, date-time will be saved. */
  declare created?: FindOperatorDto;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: FindOperatorDto;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: FindOperatorDto;
  /** Work status of the queue email */
  declare fr_work_status?: WorkStatusFindInputWhereDto[];
  /** From user authorisation of the queue email */
  declare fr_from_user_authorisation?: UserAuthorisationFindInputWhereDto[];
  /** To user authorisation of the queue email */
  declare fr_to_user_authorisation?: UserAuthorisationFindInputWhereDto[];
  /** Created User authorisation of the queue email added by */
  declare fr_created_user_authorisation?: UserAuthorisationFindInputWhereDto[];
}

export class QueueEmailFindInputSortOrderDto {
  /** Unique ID of the queue email, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Work status ID of the queue email. */
  declare wrkstatus_id?: RecordSortDirectionEnum;
  /** From user ID of the queue email. */
  declare from_uar_id?: RecordSortDirectionEnum;
  /** To user ID of the queue email. */
  declare to_uar_id?: RecordSortDirectionEnum;
  /** Authorisation role id of the user. */
  declare created_uar_id?: RecordSortDirectionEnum;
  /** From email of the queue email. */
  declare from_email?: RecordSortDirectionEnum;
  /** To email of the queue email. */
  declare to_email?: RecordSortDirectionEnum;
  /** Subject of the queue email. */
  declare subject?: RecordSortDirectionEnum;
  /** Whether the queue email is sent or not. */
  declare sent?: RecordSortDirectionEnum;
  /** When record is created, date-time will be saved. */
  declare created?: RecordSortDirectionEnum;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: RecordSortDirectionEnum;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: RecordSortDirectionEnum;
}

export class QueueEmailFindInputGroupByDto {
  /** Work status ID of the queue email. */
  declare wrkstatus_id?: boolean;
  /** From user ID of the queue email. */
  declare from_uar_id?: boolean;
  /** To user ID of the queue email. */
  declare to_uar_id?: boolean;
  /** Reference ID of the queue email. */
  declare ref_id?: boolean;
  /** Reference type of the queue email. */
  declare ref_type?: boolean;
  /** From email of the queue email. */
  declare from_email?: boolean;
  /** To email of the queue email. */
  declare to_email?: boolean;
  /** Authorisation role id of the user. */
  declare created_uar_id?: boolean;
  /** Whether the queue email is sent or not. */
  declare sent?: boolean;
  /** When record is created, date-time will be saved. */
  declare created?: boolean;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  declare updated?: boolean;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  declare deleted?: boolean;
}

export class QueueEmailFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailFindInputWhereDto[];

  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: QueueEmailFindInputGroupByDto;

  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: QueueEmailFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class QueueEmailFindOutputRowsDto extends QueueEmailFindDto {}
export class QueueEmailFindOutputRowsSelectionSchema extends QueueEmailFindSelectionSchema {}

export class QueueEmailFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: QueueEmailFindOutputRowsDto[];
}
export class QueueEmailFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof QueueEmailFindOutputRowsSelectionSchema | QueueEmailFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => QueueEmailFindOutputRowsSelectionSchema);
}

/** QueueEmailFindOneById */
export class QueueEmailFindOneByIdDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${FindOneByIdArtefact}`;
}

export class QueueEmailFindOneByIdInputDto extends IdInputDto {
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
/** Create new record in entity. */
export class QueueEmailCreateDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${CreateArtefact}`;
}

export class QueueEmailCreateInputDto extends QueueEmailCreateDto {
  /** Work status ID of the queue email. */
  declare wrkstatus_id: WorkStatusEnum;
  /** From user ID of the queue email. */
  declare from_uar_id: number;
  /** To user ID of the queue email. */
  declare to_uar_id?: number;
  /** Reference ID of the queue email. */
  declare ref_id?: string;
  /** Reference type of the queue email. */
  declare ref_type?: string;
  /** Authorisation role id of the user. */
  declare created_uar_id?: number;
  /** From email of the queue email. */
  declare from_email: string;
  /** To email of the queue email. */
  declare to_email?: string;
  /** CC email of the queue email. */
  declare cc?: string;
  /** CC Other email of the queue email. */
  declare ccother?: string;
  /** BCC email of the queue email. */
  declare bcc?: string;
  /** Subject of the queue email. */
  declare subject?: string;
  /** Body of the queue email. */
  declare body: string;
  /** Whether the queue email is sent or not. */
  declare sent?: string;
  /** Raw json data of the queue process. */
  declare raw_data?: any;
}

/** QueueEmailCreate response row schema. */
export class QueueEmailCreateOutputDto extends QueueEmailFindOutputRowsDto {}
/** QueueEmailCreate response selection schema. */
export class QueueEmailCreateOutputSelectionSchema extends QueueEmailFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. */
export class QueueEmailUpdateDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${UpdateArtefact}`;
}

export class QueueEmailUpdateInputWhereDto extends QueueEmailFindInputWhereDto {}

export class QueueEmailUpdateInputSetsDto {
  /** Work status ID of the queue email. */
  declare wrkstatus_id?: WorkStatusEnum;
  /** From user ID of the queue email. */
  declare from_uar_id?: number;
  /** To user ID of the queue email. */
  declare to_uar_id?: number;
  /** Reference ID of the queue email. */
  declare ref_id?: string;
  /** Reference type of the queue email. */
  declare ref_type?: string;
  /** Authorisation role id of the user. */
  declare created_uar_id?: number;
  /** From email of the queue email. */
  declare from_email?: string;
  /** To email of the queue email. */
  declare to_email?: string;
  /** CC email of the queue email. */
  declare cc?: string;
  /** CC Other email of the queue email. */
  declare ccother?: string;
  /** BCC email of the queue email. */
  declare bcc?: string;
  /** Subject of the queue email. */
  declare subject?: string;
  /** Body of the queue email. */
  declare body?: string;
  /** Whether the queue email is sent or not. */
  declare sent?: string;
  /** Raw json data of the queue process. */
  declare raw_data?: any;
}

export class QueueEmailUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: QueueEmailUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: QueueEmailUpdateInputSetsDto;
}

export class QueueEmailUpdateOutputAffectedRowsDto extends QueueEmailFindOutputRowsDto {}
export class QueueEmailUpdateOutputAffectedRowsSelectionSchema extends QueueEmailFindOutputRowsSelectionSchema {}

export class QueueEmailUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: QueueEmailUpdateOutputAffectedRowsDto[];
}
export class QueueEmailUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof QueueEmailUpdateOutputAffectedRowsSelectionSchema
    | QueueEmailUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => QueueEmailUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailSoftDeleteDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${SoftDeleteArtefact}`;
}
export class QueueEmailSoftDeleteInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailSoftDeleteInputWhereDto[];
}
export class QueueEmailSoftDeleteOutputDto extends CrudAffectedDto {}
export class QueueEmailSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailDeleteDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${DeleteArtefact}`;
}
export class QueueEmailDeleteInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailDeleteInputWhereDto[];
}
export class QueueEmailDeleteOutputDto extends CrudAffectedDto {}
export class QueueEmailDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailRestoreDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${RestoreArtefact}`;
}
export class QueueEmailRestoreInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailRestoreInputWhereDto[];
}
export class QueueEmailRestoreOutputDto extends CrudAffectedDto {}
export class QueueEmailRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailUpsertDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${UpsertArtefact}`;
}

export class QueueEmailUpsertInputDto extends QueueEmailUpsertDto {
  /** Work status ID of the queue email. */
  declare wrkstatus_id: WorkStatusEnum;
  /** From user ID of the queue email. */
  declare from_uar_id: number;
  /** To user ID of the queue email. */
  declare to_uar_id?: number;
  /** Reference ID of the queue email. */
  declare ref_id?: string;
  /** Reference type of the queue email. */
  declare ref_type?: string;
  /** Authorisation role id of the user. */
  declare created_uar_id?: number;
  /** From email of the queue email. */
  declare from_email: string;
  /** To email of the queue email. */
  declare to_email?: string;
  /** CC email of the queue email. */
  declare cc?: string;
  /** CC Other email of the queue email. */
  declare ccother?: string;
  /** BCC email of the queue email. */
  declare bcc?: string;
  /** Subject of the queue email. */
  declare subject?: string;
  /** Body of the queue email. */
  declare body: string;
  /** Whether the queue email is sent or not. */
  declare sent?: string;
  /** Raw json data of the queue process. */
  declare raw_data?: any;
  /** Unique ID of the queue email, auto generated. undefined */
  declare id?: number;
}

export class QueueEmailUpsertOutputDto extends QueueEmailFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  declare upsert_process?: UpsertStatusEnum;
}
export class QueueEmailUpsertOutputSelectionSchema
  extends QueueEmailFindOutputRowsSelectionSchema
  implements UpsertOutputProcessStatusSelectionSchema
{
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailSoftRemoveDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${SoftRemoveArtefact}`;
}
export class QueueEmailSoftRemoveInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailSoftRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailSoftRemoveInputWhereDto[];
}
export class QueueEmailSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: QueueEmailFindOutputRowsDto[];
}
export class QueueEmailSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof QueueEmailFindOutputRowsSelectionSchema | QueueEmailFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => QueueEmailFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailRemoveDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${RemoveArtefact}`;
}
export class QueueEmailRemoveInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailRemoveInputWhereDto[];
}
export class QueueEmailRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: QueueEmailFindOutputRowsDto[];
}
export class QueueEmailRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof QueueEmailFindOutputRowsSelectionSchema | QueueEmailFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => QueueEmailFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class QueueEmailRecoverDto extends QueueEmailDto {
  static metaname: string = `${QueueEmailEntity.metaname}${RecoverArtefact}`;
}
export class QueueEmailRecoverInputWhereDto extends QueueEmailFindInputWhereDto {}
export class QueueEmailRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: QueueEmailRecoverInputWhereDto[];
}
export class QueueEmailRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: QueueEmailFindOutputRowsDto[];
}
export class QueueEmailRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records affected during process. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof QueueEmailFindOutputRowsSelectionSchema | QueueEmailFindOutputRowsSelectionSchema | SchemaRef | false =
    schemaRef(() => QueueEmailFindOutputRowsSelectionSchema);
}

export type QueueEmailFindResponse = { QueueEmailFind: QueueEmailFindOutputDto };
export type QueueEmailFindOneByIdResponse = { QueueEmailFindOneById: QueueEmailEntity };
export type QueueEmailCreateResponse = { QueueEmailCreate: QueueEmailCreateOutputDto[] };
export type QueueEmailUpdateResponse = { QueueEmailUpdate: QueueEmailUpdateOutputDto };
export type QueueEmailSoftDeleteResponse = { QueueEmailSoftDelete: QueueEmailSoftDeleteOutputDto };
export type QueueEmailDeleteResponse = { QueueEmailDelete: QueueEmailDeleteOutputDto };
export type QueueEmailRestoreResponse = { QueueEmailRestore: QueueEmailRestoreOutputDto };
export type QueueEmailUpsertResponse = { QueueEmailUpsert: QueueEmailUpsertOutputDto[] };
export type QueueEmailSoftRemoveResponse = { QueueEmailSoftRemove: QueueEmailSoftRemoveOutputDto };
export type QueueEmailRemoveResponse = { QueueEmailRemove: QueueEmailRemoveOutputDto };
export type QueueEmailRecoverResponse = { QueueEmailRecover: QueueEmailRecoverOutputDto };
