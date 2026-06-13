import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { DeviceEntity, DeviceSelectionSchema } from './entity';
import { UserDeviceFindInputWhereDto } from '../../folk/user-device/dto';
import { LeadFindInputWhereDto } from '../../lead/dto';
import { SessionFindInputWhereDto } from '../../session/dto';

export class DeviceDto extends DeviceEntity {
  /** Unique ID of the entity, auto generated. */
  declare id?: any;
  /** Raw agent string of the entity. */
  declare user_agent?: any;
  /** Name of the entity. */
  declare name?: any;
  /** Operating system platform. */
  declare os?: any;
  /** Interface of the entity. */
  declare interface?: any;
  /** Approved status of the entity. */
  declare approved?: any;
  /** Record created date time. */
  declare created?: any;
  /** Record last updated date time. Update can be any. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** List of users who has access to given device. */
  declare fr_device_users?: any[];
  /** List of sessions who has access to given device. */
  declare fr_sessions?: any[];
  /** Setting of who has access to given device. */
  declare fr_setting?: any[];
  /** Newsletter tracking log with a specific device. */
  declare fr_newsletter_tracking_logs_info?: any[];
  /** User authorisatoin policies associated with this device. */
  declare fr_user_authorisation_policies?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class DeviceFindDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${FindArtefact}`;
}
export class DeviceFindSelectionSchema extends DeviceSelectionSchema {}

export class DeviceFindInputWhereDto extends DeviceFindDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: FindOperatorDto;
  /** Name of the entity. */
  declare name?: FindOperatorDto;
  /** Operating system platform. */
  declare os?: FindOperatorDto;
  /** Interface of the entity. */
  declare interface?: FindOperatorDto;
  /** Approved status of the entity. */
  declare approved?: FindOperatorDto;
  /** Record created date time. */
  declare created?: FindOperatorDto;
  /** Record last updated date time. Update can be any. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** List of users who has access to given device. */
  declare fr_device_users?: UserDeviceFindInputWhereDto[];
  /** List of sessions who has access to given device. */
  declare fr_sessions?: SessionFindInputWhereDto[];
  /** Setting of who has access to given device. */
  declare fr_leads?: LeadFindInputWhereDto[];
}

export class DeviceFindInputSortOrderDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Name of the entity. */
  declare name?: RecordSortDirectionEnum;
  /** Operating system platform. */
  declare os?: RecordSortDirectionEnum;
  /** Interface of the entity. */
  declare interface?: RecordSortDirectionEnum;
  /** Approved status of the entity. */
  declare approved?: RecordSortDirectionEnum;
  /** Record created date time. */
  declare created?: RecordSortDirectionEnum;
  /** Record last updated date time. Update can be any. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class DeviceFindInputGroupByDto {
  /** Operating system platform. */
  os?: boolean;
  /** Interface of the entity. */
  interface?: boolean;
  /** Approved status of the entity. */
  approved?: boolean;
  /** Record created date time. */
  created?: boolean;
  /** Record last updated date time. Update can be any. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class DeviceFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: DeviceFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: DeviceFindInputSortOrderDto;
}

export class DeviceFindOutputRowsDto extends DeviceFindDto {}
export class DeviceFindOutputRowsSelectionSchema extends DeviceFindSelectionSchema {}

export class DeviceFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: DeviceFindOutputRowsDto[];
}
export class DeviceFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof DeviceFindOutputRowsSelectionSchema | DeviceFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => DeviceFindOutputRowsSelectionSchema);
}

/** DeviceFindOneById */
export class DeviceFindOneByIdDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${FindOneByIdArtefact}`;
}

export class DeviceFindOneByIdInputDto extends IdInputDto {}

/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class DeviceCreateDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${CreateArtefact}`;
}

export class DeviceCreateInputDto {
  /** Name of the entity. */
  declare name: string;
  /** Operating system platform. */
  declare os: string;
  /** Interface of the entity. */
  declare interface: string;
  /** Raw agent string of the entity. */
  declare user_agent: string;
}

export class DeviceCreateOutputDto extends DeviceFindOutputRowsDto {}
export class DeviceCreateOutputSelectionSchema extends DeviceFindOutputRowsSelectionSchema {}

/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class DeviceUpdateDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${UpdateArtefact}`;
}

export class DeviceUpdateInputWhereDto extends DeviceFindInputWhereDto {}

export class DeviceUpdateInputSetsDto {
  /** Name of the entity. */
  declare name?: string;
  /** Operating system platform. */
  declare os?: string;
  /** Interface of the entity. */
  declare interface?: string;
  /** Raw agent string of the entity. */
  declare user_agent?: string;
}

export class DeviceUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: DeviceUpdateInputWhereDto[];
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare sets: DeviceUpdateInputSetsDto;
}

export class DeviceUpdateOutputAffectedRowsDto extends DeviceFindOutputRowsDto {}
export class DeviceUpdateOutputAffectedRowsSelectionSchema extends DeviceFindOutputRowsSelectionSchema {}

export class DeviceUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: DeviceUpdateOutputAffectedRowsDto[];
}
export class DeviceUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof DeviceUpdateOutputAffectedRowsSelectionSchema | DeviceUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => DeviceUpdateOutputAffectedRowsSelectionSchema);
}

/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class DeviceSoftDeleteDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${SoftDeleteArtefact}`;
}

export class DeviceSoftDeleteInputWhereDto extends DeviceFindInputWhereDto {}

export class DeviceSoftDeleteInputDto {
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceSoftDeleteInputWhereDto[];
}

export class DeviceSoftDeleteOutputDto extends CrudAffectedDto {}
export class DeviceSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class DeviceDeleteDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${DeleteArtefact}`;
}

export class DeviceDeleteInputWhereDto extends DeviceFindInputWhereDto {}

export class DeviceDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceDeleteInputWhereDto[];
}

export class DeviceDeleteOutputDto extends CrudAffectedDto {}
export class DeviceDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class DeviceRestoreDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${RestoreArtefact}`;
}

export class DeviceRestoreInputWhereDto extends DeviceFindInputWhereDto {}

export class DeviceRestoreInputDto {
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceRestoreInputWhereDto[];
}

export class DeviceRestoreOutputDto extends CrudAffectedDto {}
export class DeviceRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class DeviceUpsertDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${UpsertArtefact}`;
}

export class DeviceUpsertInputDto extends DeviceCreateInputDto {
  /** Unique ID of the entity, auto generated. undefined */
  declare id?: number;
}

export class DeviceUpsertOutputDto extends DeviceCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class DeviceUpsertOutputSelectionSchema extends DeviceCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class DeviceSoftRemoveDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${SoftRemoveArtefact}`;
}

export class DeviceSoftRemoveInputWhereDto extends DeviceUpdateInputWhereDto {}

export class DeviceSoftRemoveInputDto {
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceSoftRemoveInputWhereDto[];
}

export class DeviceSoftRemoveOutputAffectedRowsDto extends DeviceFindOutputRowsDto {}
export class DeviceSoftRemoveOutputAffectedRowsSelectionSchema extends DeviceFindOutputRowsSelectionSchema {}

export class DeviceSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: DeviceSoftRemoveOutputAffectedRowsDto[];
}
export class DeviceSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof DeviceSoftRemoveOutputAffectedRowsSelectionSchema | DeviceSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => DeviceSoftRemoveOutputAffectedRowsSelectionSchema);
}

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class DeviceRemoveDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${RemoveArtefact}`;
}

export class DeviceRemoveInputWhereDto extends DeviceUpdateInputWhereDto {}

export class DeviceRemoveInputDto {
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceRemoveInputWhereDto[];
}

export class DeviceRemoveOutputAffectedRowsDto extends DeviceFindOutputRowsDto {}
export class DeviceRemoveOutputAffectedRowsSelectionSchema extends DeviceFindOutputRowsSelectionSchema {}

export class DeviceRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: DeviceRemoveOutputAffectedRowsDto[];
}
export class DeviceRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof DeviceRemoveOutputAffectedRowsSelectionSchema | DeviceRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => DeviceRemoveOutputAffectedRowsSelectionSchema);
}

/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class DeviceRecoverDto extends DeviceDto {
  static metaname: string = `${DeviceEntity.metaname}${RecoverArtefact}`;
}

export class DeviceRecoverInputWhereDto extends DeviceUpdateInputWhereDto {}

export class DeviceRecoverInputDto {
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: DeviceRecoverInputWhereDto[];
}

export class DeviceRecoverOutputAffectedRowsDto extends DeviceFindOutputRowsDto {}
export class DeviceRecoverOutputAffectedRowsSelectionSchema extends DeviceFindOutputRowsSelectionSchema {}

export class DeviceRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: DeviceRecoverOutputAffectedRowsDto[];
}
export class DeviceRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof DeviceRecoverOutputAffectedRowsSelectionSchema | DeviceRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => DeviceRecoverOutputAffectedRowsSelectionSchema);
}

export interface DeviceFindResponse {
  DeviceFind: DeviceFindOutputDto;
}
export interface DeviceFindOneByIdResponse {
  DeviceFindOneById: DeviceEntity;
}
export interface DeviceCreateResponse {
  DeviceCreate: DeviceCreateOutputDto[];
}
export interface DeviceUpdateResponse {
  DeviceUpdate: DeviceUpdateOutputDto;
}
export interface DeviceSoftDeleteResponse {
  DeviceSoftDelete: DeviceSoftDeleteOutputDto;
}
export interface DeviceDeleteResponse {
  DeviceDelete: DeviceDeleteOutputDto;
}
export interface DeviceRestoreResponse {
  DeviceRestore: DeviceRestoreOutputDto;
}
export interface DeviceUpsertResponse {
  DeviceUpsert: DeviceUpsertOutputDto[];
}
export interface DeviceSoftRemoveResponse {
  DeviceSoftRemove: DeviceSoftRemoveOutputDto;
}
export interface DeviceRemoveResponse {
  DeviceRemove: DeviceRemoveOutputDto;
}
export interface DeviceRecoverResponse {
  DeviceRecover: DeviceRecoverOutputDto;
}
