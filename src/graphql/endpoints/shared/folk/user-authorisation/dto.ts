import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecoverArtefact, RecordSortDirectionEnum, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { QueueEmailFindInputWhereDto } from '../../queue/email/dto';
import { SessionFindInputWhereDto } from '../../session/dto';
import { UserFindInputWhereDto } from '../user/dto';
import { UserAuthenticationFindInputWhereDto } from '../user-auth/dto';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from './entity';

export class UserAuthorisationDto extends UserAuthorisationEntity {
  declare id?: any;
  declare u_id?: any;
  declare uau_id?: any;
  declare arole_id?: any;
  declare active?: any;
  declare created?: any;
  declare updated?: any;
  declare deleted?: any;
  declare fr_user_auth?: any;
  declare fr_user?: any;
  declare fr_authorisation_role?: any;
  declare fr_from_user_authorisation_leads?: any[];
  declare fr_to_user_authorisation_leads?: any[];
  declare fr_user_authorisation_lead_followup?: any[];
  declare fr_user_authorisation_newsletter?: any[];
  declare fr_nl_user_authorisation?: any[];
  declare fr_queue_email_from_user_authorisation?: any[];
  declare fr_queue_email_to_user_authorisation?: any[];
  declare fr_queue_email_created_user_authorisation?: any[];
  declare fr_queue_sms_from_user_authorisation?: any[];
  declare fr_queue_sms_to_user_authorisation?: any[];
  declare fr_queue_whatsapp_from_user_authorisation?: any[];
  declare fr_queue_whatsapp_to_user_authorisation?: any[];
  declare fr_parent_user_hierarchies?: any[];
  declare fr_child_user_hirarchies?: any[];
  declare fr_user_newsletters_subscription?: any[];
  declare fr_user_favourites?: any[];
  declare fr_session?: any[];
  declare fr_user_authorisation_policies?: any[];
  declare fr_business_user?: any[];
  declare fr_business_parent_user?: any[];
  declare fr_job_batch?: any[];
  declare fr_queue_facebook_dm_from_user_authorisation?: any[];
  declare fr_queue_facebook_dm_to_user_authorisation?: any[];
  declare fr_business_review?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationFindDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${FindArtefact}`;
}
export class UserAuthorisationFindSelectionSchema extends UserAuthorisationSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationFindInputWhereDto extends UserAuthorisationFindDto {
  declare id?: FindOperatorDto;
  declare u_id?: FindOperatorDto;
  declare uau_id?: FindOperatorDto;
  declare arole_id?: FindOperatorDto;
  declare active?: FindOperatorDto;
  declare created?: FindOperatorDto;
  declare updated?: FindOperatorDto;
  declare deleted?: FindOperatorDto;
  declare fr_user_auth?: UserAuthenticationFindInputWhereDto[];
  declare fr_user?: UserFindInputWhereDto[];
  
  declare fr_queue_email_from_user_authorisation?: QueueEmailFindInputWhereDto[];
  declare fr_queue_email_to_user_authorisation?: QueueEmailFindInputWhereDto[];
  declare fr_queue_email_created_user_authorisation?: QueueEmailFindInputWhereDto[];
  declare fr_session?: SessionFindInputWhereDto[];
}

export class UserAuthorisationFindInputSortOrderDto {
  declare id?: RecordSortDirectionEnum;
  declare uau_id?: RecordSortDirectionEnum;
  declare u_id?: RecordSortDirectionEnum;
  declare arole_id?: RecordSortDirectionEnum;
  declare active?: RecordSortDirectionEnum;
  declare created?: RecordSortDirectionEnum;
  declare updated?: RecordSortDirectionEnum;
  declare deleted?: RecordSortDirectionEnum;
}

export class UserAuthorisationFindInputGroupByDto {
  declare u_id?: boolean;
  declare uau_id?: boolean;
  declare arole_id?: boolean;
  declare active?: boolean;
  declare created?: boolean;
  declare updated?: boolean;
  declare deleted?: boolean;
}

export class UserAuthorisationFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  declare where?: UserAuthorisationFindInputWhereDto[];
  declare groupBy?: UserAuthorisationFindInputGroupByDto;
  declare order?: UserAuthorisationFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ███████████████████████████████████████████████
export class UserAuthorisationFindOutputRowsDto extends UserAuthorisationFindDto {}
export class UserAuthorisationFindOutputRowsSelectionSchema extends UserAuthorisationFindSelectionSchema {}

export class UserAuthorisationFindOutputDto extends FindOutputPaginationOptionsDto {
  declare rows?: UserAuthorisationFindOutputRowsDto[];
}
export class UserAuthorisationFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  rows?: typeof UserAuthorisationFindOutputRowsSelectionSchema | UserAuthorisationFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
 **/
export class UserAuthorisationFindOneByIdDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ██████████████████████████████████████
export class UserAuthorisationFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationCreateDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationCreateInputDto {
  declare u_id: number;
  declare uau_id?: number;
  declare arole_id: number;
  declare active?: Date;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationCreateOutputDto extends UserAuthorisationFindOutputRowsDto {}
export class UserAuthorisationCreateOutputSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationUpdateDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationUpdateInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationUpdateInputSetsDto {
  declare u_id?: number;
  declare uau_id?: number;
  declare arole_id?: number;
  declare active?: Date;
}

export class UserAuthorisationUpdateInputDto {
  declare where: UserAuthorisationUpdateInputWhereDto[];
  declare sets: UserAuthorisationUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationUpdateOutputAffectedRowsDto extends UserAuthorisationFindOutputRowsDto {}
export class UserAuthorisationUpdateOutputAffectedRowsSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {}

export class UserAuthorisationUpdateOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthorisationUpdateOutputAffectedRowsDto[];
}
export class UserAuthorisationUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthorisationUpdateOutputAffectedRowsSelectionSchema | UserAuthorisationUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationSoftDeleteDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationSoftDeleteInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationSoftDeleteOutputDto extends CrudAffectedDto {}
export class UserAuthorisationSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationDeleteDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationDeleteInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationDeleteOutputDto extends CrudAffectedDto {}
export class UserAuthorisationDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationRestoreDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRestoreInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRestoreOutputDto extends CrudAffectedDto {}
export class UserAuthorisationRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationUpsertDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationUpsertInputDto extends UserAuthorisationCreateInputDto {
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationUpsertOutputDto extends UserAuthorisationFindOutputRowsDto {
  declare upsert_process?: UpsertStatusEnum;
}
export class UserAuthorisationUpsertOutputSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {
  upsert_process?: typeof UpsertOutputProcessStatusSelectionSchema | UpsertOutputProcessStatusSelectionSchema | SchemaRef | false = schemaRef(() => UpsertOutputProcessStatusSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationSoftRemoveDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationSoftRemoveInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationSoftRemoveOutputAffectedRowsDto extends UserAuthorisationFindOutputRowsDto {}
export class UserAuthorisationSoftRemoveOutputAffectedRowsSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {}
export class UserAuthorisationSoftRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthorisationFindOutputRowsDto[];
}
export class UserAuthorisationSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthorisationFindOutputRowsSelectionSchema | UserAuthorisationFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationRemoveDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRemoveInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRemoveOutputAffectedRowsDto extends UserAuthorisationFindOutputRowsDto {}
export class UserAuthorisationRemoveOutputAffectedRowsSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {}
export class UserAuthorisationRemoveOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthorisationFindOutputRowsDto[];
}
export class UserAuthorisationRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthorisationFindOutputRowsSelectionSchema | UserAuthorisationFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export class UserAuthorisationRecoverDto extends UserAuthorisationDto {
  static metaname: string = `${UserAuthorisationEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRecoverInputWhereDto extends UserAuthorisationFindInputWhereDto {}

export class UserAuthorisationRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  declare where?: UserAuthorisationRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ████████████████████████████████████████████████
export class UserAuthorisationRecoverOutputAffectedRowsDto extends UserAuthorisationFindOutputRowsDto {}
export class UserAuthorisationRecoverOutputAffectedRowsSelectionSchema extends UserAuthorisationFindOutputRowsSelectionSchema {}
export class UserAuthorisationRecoverOutputDto extends CrudAffectedDto {
  declare affectedRows?: UserAuthorisationFindOutputRowsDto[];
}
export class UserAuthorisationRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  affectedRows?: typeof UserAuthorisationFindOutputRowsSelectionSchema | UserAuthorisationFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthorisationFindOutputRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESPONSE DTO ██████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
export type UserAuthorisationFindResponse = { UserAuthorisationFind: UserAuthorisationFindOutputDto };
export type UserAuthorisationFindOneByIdResponse = { UserAuthorisationFindOneById: UserAuthorisationEntity };
export type UserAuthorisationCreateResponse = { UserAuthorisationCreate: UserAuthorisationCreateOutputDto[] };
export type UserAuthorisationUpdateResponse = { UserAuthorisationUpdate: UserAuthorisationUpdateOutputDto };
export type UserAuthorisationSoftDeleteResponse = { UserAuthorisationSoftDelete: UserAuthorisationSoftDeleteOutputDto };
export type UserAuthorisationDeleteResponse = { UserAuthorisationDelete: UserAuthorisationDeleteOutputDto };
export type UserAuthorisationRestoreResponse = { UserAuthorisationRestore: UserAuthorisationRestoreOutputDto };
export type UserAuthorisationUpsertResponse = { UserAuthorisationUpsert: UserAuthorisationUpsertOutputDto[] };
export type UserAuthorisationSoftRemoveResponse = { UserAuthorisationSoftRemove: UserAuthorisationSoftRemoveOutputDto };
export type UserAuthorisationRemoveResponse = { UserAuthorisationRemove: UserAuthorisationRemoveOutputDto };
export type UserAuthorisationRecoverResponse = { UserAuthorisationRecover: UserAuthorisationRecoverOutputDto };
