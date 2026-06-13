import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UploadArtefact, UploadDeleteArtefact, UploadDeleteInputDto, UploadDeleteOutputDto, UploadDeleteOutputSelectionSchema, UploadInputDto, UploadOutputDto, UploadOutputSelectionSchema, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, SchemaRef, schemaRef } from '../../../../libs';
import { DeviceFindInputWhereDto } from '../../master/device/dto';
import { UserFindInputWhereDto } from '../user/dto';
import { UserDeviceEntity, UserDeviceSelectionSchema } from './entity';
import { UserDeviceUploadFileFieldEnum } from './enum';
import { IP, MAC } from './scalar';

const HandShakeArtefact = 'HandShake';

export class UserDeviceDto extends UserDeviceEntity {
  /** Unique ID of the entity, auto generated. */
  declare id?: any;
  /** User ID. */
  declare u_id?: any;
  /** Device ID of the user. */
  declare device_id?: any;
  /** From IP Address of the entity. */
  declare from_ip_address?: any;
  /** Device MAC Address of the entity. */
  declare mac_address?: any;
  /** Device System ID of the entity. */
  declare user_defined_id?: any;
  /** Device Name of the entity. */
  declare user_defined_name?: any;
  /** Record created date time. */
  declare created?: any;
  /** Record last updated date time. Update can be any. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** Device Token of the entity. */
  declare dtoken?: any;
  /** Unique UUID of the device. */
  declare duuid?: any;
  /**
   * Provider ID associated with the device generated or provided by the device it self.
   */
  declare dpid?: any;
  /** Device User Agent String of the entity. */
  declare useragent?: any;
  /** Platform of the device (e.g., Android, iOS, Web). */
  declare platform?: any;
  /** Language set on the device. */
  declare language?: any;
  /** Timezone of the device. */
  declare timezone?: any;
  /** Screen width of the device. */
  declare screen_width?: any;
  /** Screen height of the device. */
  declare screen_height?: any;
  /** Device pixel ratio. */
  declare device_pixel_ratio?: any;
  /** Number of logical processor cores available to the device. */
  declare hardware_concurrency?: any;
  /**
   * Maximum number of simultaneous touch contact points supported by the device.
   */
  declare max_touch_points?: any;
  /** Approximate amount of device memory in GB. */
  declare device_memory?: any;
  /** Avatar image base64 string of the user. */
  declare avatar?: any;
  /** Avatar image file of the user. */
  declare file_avatar?: any;
  /** File avatar url. */
  declare file_avatar_url?: any;
  /** Device entity for user device */
  declare fr_device?: any;
  /** User entity for device */
  declare fr_user?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class UserDeviceFindDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${FindArtefact}`;
}
export class UserDeviceFindSelectionSchema extends UserDeviceSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████

export class UserDeviceFindInputWhereDto extends UserDeviceFindDto {
  /** Unique ID of the entity, auto generated. */
  declare id?: FindOperatorDto;
  /** User ID. */
  declare u_id?: FindOperatorDto;
  /** Device ID of the user. */
  declare device_id?: FindOperatorDto;
  /** From IP Address of the entity. */
  declare from_ip_address?: FindOperatorDto;
  /** Device MAC Address of the entity. */
  declare mac_address?: FindOperatorDto;
  /** Device System ID of the entity. */
  declare user_defined_id?: FindOperatorDto;
  /** Device Name of the entity. */
  declare user_defined_name?: FindOperatorDto;
  /** Device Token of the entity. */
  declare dtoken?: FindOperatorDto;
  /** Device User Agent String of the entity. */
  declare useragent?: FindOperatorDto;
  /** Suspended status of the entity. */
  declare suspended?: FindOperatorDto;
  /** Record created date time. */
  declare created?: FindOperatorDto;
  /** Record last updated date time. Update can be any. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** Device entity for user device */
  declare fr_device?: DeviceFindInputWhereDto[];
  /** User entity for device */
  declare fr_user?: UserFindInputWhereDto[];
}

export class UserDeviceFindInputSortOrderDto {
  declare id?: RecordSortDirectionEnum;
  declare u_id?: RecordSortDirectionEnum;
  declare device_id?: RecordSortDirectionEnum;
  declare from_ip_address?: RecordSortDirectionEnum;
  declare mac_address?: RecordSortDirectionEnum;
  declare user_defined_id?: RecordSortDirectionEnum;
  declare user_defined_name?: RecordSortDirectionEnum;
  declare dtoken?: RecordSortDirectionEnum;
  declare useragent?: RecordSortDirectionEnum;
  declare suspended?: RecordSortDirectionEnum;
  declare created?: RecordSortDirectionEnum;
  declare updated?: RecordSortDirectionEnum;
  declare deleted?: RecordSortDirectionEnum;
}

export class UserDeviceFindInputGroupByDto {
  declare u_id?: boolean;
  declare device_id?: boolean;
  declare from_ip_address?: boolean;
  declare mac_address?: boolean;
  declare user_defined_id?: boolean;
  declare user_defined_name?: boolean;
  declare useragent?: boolean;
  declare suspended?: boolean;
  declare created?: boolean;
  declare updated?: boolean;
  declare deleted?: boolean;
}

export class UserDeviceFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /** Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once. */
  declare where?: UserDeviceFindInputWhereDto[];
  /** Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once. */
  declare groupBy?: UserDeviceFindInputGroupByDto;
  /** Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once. */
  declare order?: UserDeviceFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceFindOutputRowsDto extends UserDeviceFindDto {}
export class UserDeviceFindOutputRowsSelectionSchema extends UserDeviceFindSelectionSchema {}

export class UserDeviceFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: UserDeviceFindOutputRowsDto[];
}
export class UserDeviceFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?: typeof UserDeviceFindOutputRowsSelectionSchema | UserDeviceFindOutputRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████
 * ██████████████████████████████████████████████████████
**/
/** Find one record by id. This operation returns a single entity shape based on the provided selection set. */
export class UserDeviceFindOneByIdDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

export class UserDeviceFindOneByIdInputDto extends IdInputDto {}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create new record in entity. You can also create multiple records at once. Returns only saved data, not relation data set with other entities. */
export class UserDeviceCreateDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceCreateInputDto {
  /** User ID. */
  declare u_id?: number;
  /** Device ID of the user. */
  declare device_id?: number;
  /** From IP Address of the entity. */
  declare from_ip_address?: IP;
  /** Device MAC Address of the entity. */
  declare mac_address?: MAC;
  /** Device System ID of the entity. */
  declare user_defined_id?: string;
  /** Device Name of the entity. */
  declare user_defined_name?: string;
  /** Device Token of the entity. */
  declare dtoken: string;
  /** Unique UUID of the device. */
  declare duuid: string;
  /**
   * Provider ID associated with the device generated or provided by the device it self.
   */
  declare dpid: string;
  /** Avatar image base64 string of the user. */
  declare avatar?: string;
  /** Device User Agent String of the entity. */
  declare useragent?: string;
  /** Platform of the device (e.g., Android, iOS, Web). */
  declare platform?: string;
  /** Language set on the device. */
  declare language?: string;
  /** Timezone of the device. */
  declare timezone?: string;
  /** Screen width of the device. */
  declare screen_width?: number;
  /** Screen height of the device. */
  declare screen_height?: number;
  /** Device pixel ratio. */
  declare device_pixel_ratio?: number;
  /** Number of logical processor cores available to the device. */
  declare hardware_concurrency?: string;
  /**
   * Maximum number of simultaneous touch contact points supported by the device.
   */
  declare max_touch_points?: string;
  /** Approximate amount of device memory in GB. */
  declare device_memory?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceCreateOutputDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceCreateOutputSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ HAND SHAKE DTO ████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserDeviceHandShakeDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${HandShakeArtefact}`;
}

// ████ HAND SHAKE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceHandShakeInputDto extends UserDeviceCreateInputDto {}

// ████ HAND SHAKE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceHandShakeOutputDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceHandShakeOutputSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class UserDeviceUpdateDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceUpdateInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceUpdateInputSetsDto extends UserDeviceCreateInputDto {}

export class UserDeviceUpdateInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceUpdateInputWhereDto[];
  /** Set values for update operation. */
  declare sets: UserDeviceUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceUpdateOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceUpdateOutputAffectedRowsSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

export class UserDeviceUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: UserDeviceUpdateOutputAffectedRowsDto[];
}
export class UserDeviceUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof UserDeviceUpdateOutputAffectedRowsSelectionSchema | UserDeviceUpdateOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Soft delete records, as per provided where criteria. You can restore this deleted records. */
export class UserDeviceSoftDeleteDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceSoftDeleteInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceSoftDeleteOutputDto extends CrudAffectedDto {}
export class UserDeviceSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, as per provided where criteria. This will delete records from database permanently. */
export class UserDeviceDeleteDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceDeleteInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceDeleteOutputDto extends CrudAffectedDto {}
export class UserDeviceDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, as per provided where criteria. This will restore soft deleted records. */
export class UserDeviceRestoreDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceRestoreInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceRestoreOutputDto extends CrudAffectedDto {}
export class UserDeviceRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Create or update records in entity. */
export class UserDeviceUpsertDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ████████████████████████████████████████████████

export class UserDeviceUpsertInputDto extends UserDeviceCreateInputDto {
  /** Unique ID of the entity, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceUpsertOutputDto extends UserDeviceFindOutputRowsDto implements UpsertOutputProcessStatusDto {
  declare upsert_process?: any;
}
export class UserDeviceUpsertOutputSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Soft remove records, as per provided where criteria. You can recover this removed records. */
export class UserDeviceSoftRemoveDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceSoftRemoveInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceSoftRemoveOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceSoftRemoveOutputAffectedRowsSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

export class UserDeviceSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records soft removed for the soft remove query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: UserDeviceSoftRemoveOutputAffectedRowsDto[];
}
export class UserDeviceSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records soft removed for the soft remove query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof UserDeviceSoftRemoveOutputAffectedRowsSelectionSchema | UserDeviceSoftRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class UserDeviceRemoveDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceRemoveInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class UserDeviceRemoveOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceRemoveOutputAffectedRowsSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

export class UserDeviceRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records removed for the remove query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: UserDeviceRemoveOutputAffectedRowsDto[];
}
export class UserDeviceRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records removed for the remove query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof UserDeviceRemoveOutputAffectedRowsSelectionSchema | UserDeviceRemoveOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Recover records, as per provided where criteria. This will recover soft removed records. */
export class UserDeviceRecoverDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class UserDeviceRecoverInputWhereDto extends UserDeviceFindInputWhereDto {}

export class UserDeviceRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: UserDeviceRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class UserDeviceRecoverOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto {}
export class UserDeviceRecoverOutputAffectedRowsSelectionSchema extends UserDeviceFindOutputRowsSelectionSchema {}

export class UserDeviceRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records recovered for the recover query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: UserDeviceRecoverOutputAffectedRowsDto[];
}
export class UserDeviceRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records recovered for the recover query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?: typeof UserDeviceRecoverOutputAffectedRowsSelectionSchema | UserDeviceRecoverOutputAffectedRowsSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceRecoverOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserDeviceUploadDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${UploadArtefact}`;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████

export class UserDeviceUploadInputDto extends UploadInputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field: UserDeviceUploadFileFieldEnum;
  /** Please enter record reference id for uploaded file. */
  declare ref_id: string;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████

export class UserDeviceUploadOutputDto extends UploadOutputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field?: UserDeviceUploadFileFieldEnum;
}
export class UserDeviceUploadOutputSelectionSchema extends UploadOutputSelectionSchema {
  file_field?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DELETE DTO █████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
export class UserDeviceUploadDeleteDto extends UserDeviceDto {
  static metaname: string = `${UserDeviceEntity.metaname}${UploadDeleteArtefact}`;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████

export class UserDeviceUploadDeleteInputDto extends UploadDeleteInputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field: UserDeviceUploadFileFieldEnum;
  /** Please enter record reference id for uploaded file. */
  declare ref_id: string;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████

export class UserDeviceUploadDeleteOutputDto extends UploadDeleteOutputDto {
  /**
   * Upload type/field as there can be various purpose for upload and uploaded content. This is kind of category to identify which type of uploaded file it is and process accordingly.
   */
  declare file_field?: UserDeviceUploadFileFieldEnum;
}
export class UserDeviceUploadDeleteOutputSelectionSchema extends UploadDeleteOutputSelectionSchema {
  file_field?: boolean = false;
}

/**
 * █████████████████████
 * █ TYPE: Response ████
 * █████████████████████
**/

export type UserDeviceFindResponse = { UserDeviceFind: UserDeviceFindOutputDto };
export type UserDeviceFindOneByIdResponse = { UserDeviceFindOneById: UserDeviceEntity };
export type UserDeviceCreateResponse = { UserDeviceCreate: UserDeviceCreateOutputDto[] };
export type UserDeviceHandShakeResponse = { UserDeviceHandShake: UserDeviceHandShakeOutputDto[] };
export type UserDeviceUpdateResponse = { UserDeviceUpdate: UserDeviceUpdateOutputDto };
export type UserDeviceSoftDeleteResponse = { UserDeviceSoftDelete: UserDeviceSoftDeleteOutputDto };
export type UserDeviceDeleteResponse = { UserDeviceDelete: UserDeviceDeleteOutputDto };
export type UserDeviceRestoreResponse = { UserDeviceRestore: UserDeviceRestoreOutputDto };
export type UserDeviceUpsertResponse = { UserDeviceUpsert: UserDeviceUpsertOutputDto[] };
export type UserDeviceSoftRemoveResponse = { UserDeviceSoftRemove: UserDeviceSoftRemoveOutputDto };
export type UserDeviceRemoveResponse = { UserDeviceRemove: UserDeviceRemoveOutputDto };
export type UserDeviceRecoverResponse = { UserDeviceRecover: UserDeviceRecoverOutputDto };
export type UserDeviceUploadResponse = { UserDeviceUpload: UserDeviceUploadOutputDto[] };
export type UserDeviceUploadDeleteResponse = { UserDeviceUploadDelete: UserDeviceUploadDeleteOutputDto[] };
