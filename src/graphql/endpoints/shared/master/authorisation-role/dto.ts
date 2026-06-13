import { CreateArtefact, CrudAffectedDto, CrudAffectedSelectionSchema, DeleteArtefact, FindArtefact, FindInputPaginationOptionsDto, FindInputPaginationOptionsDtoWithWithDeletedInputDto, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationOptionsDto, FindOutputPaginationOptionsSelectionSchema, IdInputDto, RecordSortDirectionEnum, RecoverArtefact, RemoveArtefact, RestoreArtefact, SoftDeleteArtefact, SoftRemoveArtefact, UpdateArtefact, UpsertArtefact, UpsertOutputProcessStatusDto, UpsertOutputProcessStatusSelectionSchema, UpsertStatusEnum, SchemaRef, schemaRef } from '../../../../libs';
import { UserAuthorisationFindInputWhereDto } from '../../folk/user-authorisation/dto';
import { AuthorisationRoleEntity, AuthorisationRoleSelectionSchema } from './entity';

export class AuthorisationRoleDto extends AuthorisationRoleEntity {
  /** Unique ID of the authorisation role, auto generated. */
  declare id?: any;
  /** Area ID of the authorisation role. */
  declare ararea_id?: any;
  /** Title of the authorisation role. */
  declare role_title?: any;
  /** Indicates whether the authorisation role is active or inactive. */
  declare active?: any;
  /** Record created date time. */
  declare created?: any;
  /** Record last updated date time. Update can be any. */
  declare updated?: any;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: any;
  /** Area info of the user auth roles. */
  declare fr_authorisation_area?: any;
  /** List of user authorisations for given role. */
  declare fr_user_authorisations?: any[];
  /** User authorisatoin policies associated with this role. */
  declare fr_user_authorisation_policies?: any[];
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start finding records in entity. This is easy, quick and simple way for majority of search operation. */
export class AuthorisationRoleFindDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${FindArtefact}`;
}
export class AuthorisationRoleFindSelectionSchema extends AuthorisationRoleSelectionSchema {}

// ████ FIND INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleFindInputWhereDto extends AuthorisationRoleFindDto {
  /** Unique ID of the authorisation role, auto generated. */
  declare id?: FindOperatorDto;
  /** Area ID of the authorisation role. */
  declare ararea_id?: FindOperatorDto;
  /** Title of the authorisation role. */
  declare role_title?: FindOperatorDto;
  /** Indicates whether the authorisation role is active or inactive. */
  declare active?: FindOperatorDto;
  /** Record created date time. */
  declare created?: FindOperatorDto;
  /** Record last updated date time. Update can be any. */
  declare updated?: FindOperatorDto;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: FindOperatorDto;
  /** List of user authorisations for given role. */
  declare fr_user_authorisations?: UserAuthorisationFindInputWhereDto[];
}

export class AuthorisationRoleFindInputSortOrderDto {
  /** Unique ID of the authorisation role, auto generated. */
  declare id?: RecordSortDirectionEnum;
  /** Area ID of the authorisation role. */
  declare ararea_id?: RecordSortDirectionEnum;
  /** Title of the authorisation role. */
  declare role_title?: RecordSortDirectionEnum;
  /** Indicates whether the authorisation role is active or inactive. */
  declare active?: RecordSortDirectionEnum;
  /** Record created date time. */
  declare created?: RecordSortDirectionEnum;
  /** Record last updated date time. Update can be any. */
  declare updated?: RecordSortDirectionEnum;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  declare deleted?: RecordSortDirectionEnum;
}

export class AuthorisationRoleFindInputGroupByDto {
  /** Title of the authorisation role. */
  role_title?: boolean;
  /** Indicates whether the authorisation role is active or inactive. */
  active?: boolean;
  /** Record created date time. */
  created?: boolean;
  /** Record last updated date time. Update can be any. */
  updated?: boolean;
  /**
   * When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
   */
  deleted?: boolean;
}

export class AuthorisationRoleFindInputDto extends FindInputPaginationOptionsDtoWithWithDeletedInputDto {
  /**
   * Where criteria for find operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleFindInputWhereDto[];
  /**
   * Group by criteria for find operation. Specifies how to group the rows returned by the SELECT statement. You can also use multiple group by criteria at once.
   */
  declare groupBy?: AuthorisationRoleFindInputGroupByDto;
  /**
   * Order criteria for find operation. Sort the result set by fields using ascending or descending order. You can also use multiple order criteria at once.
   */
  declare order?: AuthorisationRoleFindInputSortOrderDto;
}

// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleFindOutputRowsDto extends AuthorisationRoleFindDto {}
export class AuthorisationRoleFindOutputRowsSelectionSchema extends AuthorisationRoleFindSelectionSchema {}

export class AuthorisationRoleFindOutputDto extends FindOutputPaginationOptionsDto {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  declare rows?: AuthorisationRoleFindOutputRowsDto[];
}
export class AuthorisationRoleFindOutputSelectionSchema extends FindOutputPaginationOptionsSelectionSchema {
  /**
   * List of records found for the find query. It is an array of objects with fields and values as per entity schema.
   */
  rows?:
    | typeof AuthorisationRoleFindOutputRowsSelectionSchema
    | AuthorisationRoleFindOutputRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AuthorisationRoleFindOutputRowsSelectionSchema);
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/
/** AuthorisationRoleFindOneById */
export class AuthorisationRoleFindOneByIdDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${FindOneByIdArtefact}`;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleFindOneByIdInputDto extends IdInputDto {
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
export class AuthorisationRoleCreateDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${CreateArtefact}`;
}

// ████ CREATE INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleCreateInputDto extends AuthorisationRoleCreateDto {
  /** Area ID of the authorisation role. */
  declare ararea_id: number;
  /** Title of the authorisation role. */
  declare role_title: string;
  /** Indicates whether the authorisation role is active or inactive. */
  declare active?: any;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleCreateOutputDto extends AuthorisationRoleFindOutputRowsDto {}
export class AuthorisationRoleCreateOutputSelectionSchema extends AuthorisationRoleFindOutputRowsSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Update records, as per provided where criteria. This is easy, quick and simple way for majority of update operation. */
export class AuthorisationRoleUpdateDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${UpdateArtefact}`;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleUpdateInputWhereDto extends AuthorisationRoleFindInputWhereDto {}

export class AuthorisationRoleUpdateInputSetsDto {
  /** Area ID of the authorisation role. */
  declare ararea_id?: number;
  /** Title of the authorisation role. */
  declare role_title?: string;
  /** Indicates whether the authorisation role is active or inactive. */
  declare active?: any;
}

export class AuthorisationRoleUpdateInputDto {
  /**
   * Where criteria for update operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where: AuthorisationRoleUpdateInputWhereDto[];
  /**
   * Sets criteria for update operation. Update set which needs to be updated in database. You can also use multiple sets criteria at once.
   */
  declare sets: AuthorisationRoleUpdateInputSetsDto;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleUpdateOutputAffectedRowsDto extends AuthorisationRoleFindOutputRowsDto {}
export class AuthorisationRoleUpdateOutputAffectedRowsSelectionSchema extends AuthorisationRoleFindOutputRowsSelectionSchema {}

export class AuthorisationRoleUpdateOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AuthorisationRoleUpdateOutputAffectedRowsDto[];
}
export class AuthorisationRoleUpdateOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AuthorisationRoleUpdateOutputAffectedRowsSelectionSchema
    | AuthorisationRoleUpdateOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AuthorisationRoleUpdateOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft delete records. This is safe for mass delete and it performs very fast. Unlike soft remove softDelete do not perform data check and directly perform soft delete. This can be restored or recorved but do not return processed data in return. */
export class AuthorisationRoleSoftDeleteDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${SoftDeleteArtefact}`;
}

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████

export class AuthorisationRoleSoftDeleteInputWhereDto extends AuthorisationRoleFindInputWhereDto {}

export class AuthorisationRoleSoftDeleteInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleSoftDeleteInputWhereDto[];
}

// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleSoftDeleteOutputDto extends CrudAffectedDto {}
export class AuthorisationRoleSoftDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Delete records, which cannot be recovered or restored. Unlike remove delete do not check record in database before it perform delete operation, so its fast. Do not provide processed data in return. */
export class AuthorisationRoleDeleteDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${DeleteArtefact}`;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleDeleteInputWhereDto extends AuthorisationRoleFindInputWhereDto {}

export class AuthorisationRoleDeleteInputDto {
  /**
   * Where criteria for delete operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleDeleteInputWhereDto[];
}

// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleDeleteOutputDto extends CrudAffectedDto {}
export class AuthorisationRoleDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Restore records, which are soft deleted or removed. Unline recover restore do not check record in database before it perform restore operation, so its fast. You will affected records numbers only in return. */
export class AuthorisationRoleRestoreDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${RestoreArtefact}`;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

export class AuthorisationRoleRestoreInputWhereDto extends AuthorisationRoleFindInputWhereDto {}

export class AuthorisationRoleRestoreInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for restore operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleRestoreInputWhereDto[];
}

// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
export class AuthorisationRoleRestoreOutputDto extends CrudAffectedDto {}
export class AuthorisationRoleRestoreOutputSelectionSchema extends CrudAffectedSelectionSchema {}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Upsert new record in entity. It can insert and update at the same time. You can also upsert multiple records at once. Returns only saved data, not relation data set with other entities. */
export class AuthorisationRoleUpsertDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${UpsertArtefact}`;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████
export class AuthorisationRoleUpsertInputDto extends AuthorisationRoleCreateInputDto {
  /** Unique ID of the authorisation role, auto generated. undefined */
  declare id?: number;
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████
export class AuthorisationRoleUpsertOutputDto extends AuthorisationRoleCreateOutputDto implements UpsertOutputProcessStatusDto {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}
export class AuthorisationRoleUpsertOutputSelectionSchema extends AuthorisationRoleCreateOutputSelectionSchema implements UpsertOutputProcessStatusSelectionSchema {
  /** Action type performed during upsert process, because upsert can create or update. */
  upsert_process?: boolean = false;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Start soft remove records, which can be recovered or restored. Checked the user in database before it perform remove operation. This is safe for mass delete and accidentally data loss. First perform soft remove and after you can go for remove and delete. */
export class AuthorisationRoleSoftRemoveDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${SoftRemoveArtefact}`;
}

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class AuthorisationRoleSoftRemoveInputWhereDto extends AuthorisationRoleUpdateInputWhereDto {}

export class AuthorisationRoleSoftRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for soft remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleSoftRemoveInputWhereDto[];
}

// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class AuthorisationRoleSoftRemoveOutputAffectedRowsDto extends AuthorisationRoleFindOutputRowsDto {}
export class AuthorisationRoleSoftRemoveOutputAffectedRowsSelectionSchema extends AuthorisationRoleFindOutputRowsSelectionSchema {}

export class AuthorisationRoleSoftRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AuthorisationRoleSoftRemoveOutputAffectedRowsDto[];
}
export class AuthorisationRoleSoftRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AuthorisationRoleSoftRemoveOutputAffectedRowsSelectionSchema
    | AuthorisationRoleSoftRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AuthorisationRoleSoftRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class AuthorisationRoleRemoveDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${RemoveArtefact}`;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

export class AuthorisationRoleRemoveInputWhereDto extends AuthorisationRoleUpdateInputWhereDto {}

export class AuthorisationRoleRemoveInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for remove operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleRemoveInputWhereDto[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

export class AuthorisationRoleRemoveOutputAffectedRowsDto extends AuthorisationRoleFindOutputRowsDto {}
export class AuthorisationRoleRemoveOutputAffectedRowsSelectionSchema extends AuthorisationRoleFindOutputRowsSelectionSchema {}

export class AuthorisationRoleRemoveOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AuthorisationRoleRemoveOutputAffectedRowsDto[];
}
export class AuthorisationRoleRemoveOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AuthorisationRoleRemoveOutputAffectedRowsSelectionSchema
    | AuthorisationRoleRemoveOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AuthorisationRoleRemoveOutputAffectedRowsSelectionSchema);
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
/** Remove records, which cannot be recovered or restored. Checked the record in database before it perform remove operation. You will get removed records in return. */
export class AuthorisationRoleRecoverDto extends AuthorisationRoleDto {
  static metaname: string = `${AuthorisationRoleEntity.metaname}${RecoverArtefact}`;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

export class AuthorisationRoleRecoverInputWhereDto extends AuthorisationRoleUpdateInputWhereDto {}

export class AuthorisationRoleRecoverInputDto {
  // OnlyOneSeachOperatorAllowed
  /**
   * Where criteria for recover operation. You can only use and condition. You can also use multiple where criteria at once.
   */
  declare where?: AuthorisationRoleRecoverInputWhereDto[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

export class AuthorisationRoleRecoverOutputAffectedRowsDto extends AuthorisationRoleFindOutputRowsDto {}
export class AuthorisationRoleRecoverOutputAffectedRowsSelectionSchema extends AuthorisationRoleFindOutputRowsSelectionSchema {}

export class AuthorisationRoleRecoverOutputDto extends CrudAffectedDto {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  declare affectedRows?: AuthorisationRoleRecoverOutputAffectedRowsDto[];
}
export class AuthorisationRoleRecoverOutputSelectionSchema extends CrudAffectedSelectionSchema {
  /**
   * List of records updated for the update query. It is an array of objects with fields and values as per entity schema.
   */
  affectedRows?:
    | typeof AuthorisationRoleRecoverOutputAffectedRowsSelectionSchema
    | AuthorisationRoleRecoverOutputAffectedRowsSelectionSchema
    | SchemaRef | false = schemaRef(() => AuthorisationRoleRecoverOutputAffectedRowsSelectionSchema);
}

export type AuthorisationRoleFindResponse = { AuthorisationRoleFind: AuthorisationRoleFindOutputDto };
export type AuthorisationRoleFindOneByIdResponse = { AuthorisationRoleFindOneById: AuthorisationRoleEntity };
export type AuthorisationRoleCreateResponse = { AuthorisationRoleCreate: AuthorisationRoleCreateOutputDto[] };
export type AuthorisationRoleUpdateResponse = { AuthorisationRoleUpdate: AuthorisationRoleUpdateOutputDto };
export type AuthorisationRoleSoftDeleteResponse = { AuthorisationRoleSoftDelete: AuthorisationRoleSoftDeleteOutputDto };
export type AuthorisationRoleDeleteResponse = { AuthorisationRoleDelete: AuthorisationRoleDeleteOutputDto };
export type AuthorisationRoleRestoreResponse = { AuthorisationRoleRestore: AuthorisationRoleRestoreOutputDto };
export type AuthorisationRoleUpsertResponse = { AuthorisationRoleUpsert: AuthorisationRoleUpsertOutputDto[] };
export type AuthorisationRoleSoftRemoveResponse = { AuthorisationRoleSoftRemove: AuthorisationRoleSoftRemoveOutputDto };
export type AuthorisationRoleRemoveResponse = { AuthorisationRoleRemove: AuthorisationRoleRemoveOutputDto };
export type AuthorisationRoleRecoverResponse = { AuthorisationRoleRecover: AuthorisationRoleRecoverOutputDto };
