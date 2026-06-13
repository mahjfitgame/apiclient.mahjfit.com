import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  AuthorisationRoleCreateDto,
  AuthorisationRoleCreateInputDto,
  AuthorisationRoleCreateOutputDto,
  AuthorisationRoleDeleteDto,
  AuthorisationRoleDeleteInputDto,
  AuthorisationRoleDeleteOutputDto,
  AuthorisationRoleFindDto,
  AuthorisationRoleFindInputDto,
  AuthorisationRoleFindOneByIdDto,
  AuthorisationRoleFindOneByIdInputDto,
  AuthorisationRoleFindOutputDto,
  AuthorisationRoleRecoverDto,
  AuthorisationRoleRecoverInputDto,
  AuthorisationRoleRecoverOutputDto,
  AuthorisationRoleRemoveDto,
  AuthorisationRoleRemoveInputDto,
  AuthorisationRoleRemoveOutputDto,
  AuthorisationRoleRestoreDto,
  AuthorisationRoleRestoreInputDto,
  AuthorisationRoleRestoreOutputDto,
  AuthorisationRoleSoftDeleteDto,
  AuthorisationRoleSoftDeleteInputDto,
  AuthorisationRoleSoftDeleteOutputDto,
  AuthorisationRoleSoftRemoveDto,
  AuthorisationRoleSoftRemoveInputDto,
  AuthorisationRoleSoftRemoveOutputDto,
  AuthorisationRoleUpdateDto,
  AuthorisationRoleUpdateInputDto,
  AuthorisationRoleUpdateOutputDto,
  AuthorisationRoleUpsertDto,
  AuthorisationRoleUpsertInputDto,
  AuthorisationRoleUpsertOutputDto,
} from './dto';

import {
  AuthorisationRoleCreateOutputSelectionSchema,
  AuthorisationRoleDeleteOutputSelectionSchema,
  AuthorisationRoleFindOutputSelectionSchema,
  AuthorisationRoleRecoverOutputSelectionSchema,
  AuthorisationRoleRemoveOutputSelectionSchema,
  AuthorisationRoleRestoreOutputSelectionSchema,
  AuthorisationRoleSoftDeleteOutputSelectionSchema,
  AuthorisationRoleSoftRemoveOutputSelectionSchema,
  AuthorisationRoleUpdateOutputSelectionSchema,
  AuthorisationRoleUpsertOutputSelectionSchema,
  AuthorisationRoleFindSelectionSchema,
} from './dto';

import {
  AuthorisationRoleCreateResponse,
  AuthorisationRoleDeleteResponse,
  AuthorisationRoleFindOneByIdResponse,
  AuthorisationRoleFindResponse,
  AuthorisationRoleRecoverResponse,
  AuthorisationRoleRemoveResponse,
  AuthorisationRoleRestoreResponse,
  AuthorisationRoleSoftDeleteResponse,
  AuthorisationRoleSoftRemoveResponse,
  AuthorisationRoleUpdateResponse,
  AuthorisationRoleUpsertResponse,
} from './dto';

import { AuthorisationRoleEntity } from './entity';

export class AuthorisationRoleService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: AuthorisationRoleFindInputDto;
    selection: AuthorisationRoleFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleFindOutputDto> {
    const opName = AuthorisationRoleFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${AuthorisationRoleFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: AuthorisationRoleFindOneByIdInputDto;
    selection: AuthorisationRoleFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleEntity> {
    const opName = AuthorisationRoleFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleFindSelectionSchema);

    const query = `query ${opName}($input: ${AuthorisationRoleFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: AuthorisationRoleCreateInputDto[];
    selection: AuthorisationRoleCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleCreateOutputDto[]> {
    const opName = AuthorisationRoleCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${AuthorisationRoleCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: AuthorisationRoleUpdateInputDto;
    selection: AuthorisationRoleUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleUpdateOutputDto> {
    const opName = AuthorisationRoleUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: AuthorisationRoleSoftDeleteInputDto;
    selection: AuthorisationRoleSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleSoftDeleteOutputDto> {
    const opName = AuthorisationRoleSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: AuthorisationRoleDeleteInputDto;
    selection: AuthorisationRoleDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleDeleteOutputDto> {
    const opName = AuthorisationRoleDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: AuthorisationRoleRestoreInputDto;
    selection: AuthorisationRoleRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleRestoreOutputDto> {
    const opName = AuthorisationRoleRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: AuthorisationRoleUpsertInputDto[];
    selection: AuthorisationRoleUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleUpsertOutputDto[]> {
    const opName = AuthorisationRoleUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${AuthorisationRoleUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: AuthorisationRoleSoftRemoveInputDto;
    selection: AuthorisationRoleSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleSoftRemoveOutputDto> {
    const opName = AuthorisationRoleSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: AuthorisationRoleRemoveInputDto;
    selection: AuthorisationRoleRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleRemoveOutputDto> {
    const opName = AuthorisationRoleRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: AuthorisationRoleRecoverInputDto;
    selection: AuthorisationRoleRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AuthorisationRoleRecoverOutputDto> {
    const opName = AuthorisationRoleRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AuthorisationRoleRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AuthorisationRoleRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AuthorisationRoleRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AuthorisationRoleRecover);
  }
}
