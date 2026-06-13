import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  ConnectionSourceCategoriesCreateDto,
  ConnectionSourceCategoriesCreateInputDto,
  ConnectionSourceCategoriesCreateOutputDto,
  ConnectionSourceCategoriesDeleteDto,
  ConnectionSourceCategoriesDeleteInputDto,
  ConnectionSourceCategoriesDeleteOutputDto,
  ConnectionSourceCategoriesFindDto,
  ConnectionSourceCategoriesFindInputDto,
  ConnectionSourceCategoriesFindOneByIdDto,
  ConnectionSourceCategoriesFindOneByIdInputDto,
  ConnectionSourceCategoriesFindOutputDto,
  ConnectionSourceCategoriesRecoverDto,
  ConnectionSourceCategoriesRecoverInputDto,
  ConnectionSourceCategoriesRecoverOutputDto,
  ConnectionSourceCategoriesRemoveDto,
  ConnectionSourceCategoriesRemoveInputDto,
  ConnectionSourceCategoriesRemoveOutputDto,
  ConnectionSourceCategoriesRestoreDto,
  ConnectionSourceCategoriesRestoreInputDto,
  ConnectionSourceCategoriesRestoreOutputDto,
  ConnectionSourceCategoriesSoftDeleteDto,
  ConnectionSourceCategoriesSoftDeleteInputDto,
  ConnectionSourceCategoriesSoftDeleteOutputDto,
  ConnectionSourceCategoriesSoftRemoveDto,
  ConnectionSourceCategoriesSoftRemoveInputDto,
  ConnectionSourceCategoriesSoftRemoveOutputDto,
  ConnectionSourceCategoriesUpdateDto,
  ConnectionSourceCategoriesUpdateInputDto,
  ConnectionSourceCategoriesUpdateOutputDto,
  ConnectionSourceCategoriesUpsertDto,
  ConnectionSourceCategoriesUpsertInputDto,
  ConnectionSourceCategoriesUpsertOutputDto,
} from './dto';

import {
  ConnectionSourceCategoriesCreateOutputSelectionSchema,
  ConnectionSourceCategoriesDeleteOutputSelectionSchema,
  ConnectionSourceCategoriesFindOutputSelectionSchema,
  ConnectionSourceCategoriesRecoverOutputSelectionSchema,
  ConnectionSourceCategoriesRemoveOutputSelectionSchema,
  ConnectionSourceCategoriesRestoreOutputSelectionSchema,
  ConnectionSourceCategoriesSoftDeleteOutputSelectionSchema,
  ConnectionSourceCategoriesSoftRemoveOutputSelectionSchema,
  ConnectionSourceCategoriesUpdateOutputSelectionSchema,
  ConnectionSourceCategoriesUpsertOutputSelectionSchema,
  ConnectionSourceCategoriesFindSelectionSchema,
} from './dto';

import {
  ConnectionSourceCategoriesCreateResponse,
  ConnectionSourceCategoriesDeleteResponse,
  ConnectionSourceCategoriesFindOneByIdResponse,
  ConnectionSourceCategoriesFindResponse,
  ConnectionSourceCategoriesRecoverResponse,
  ConnectionSourceCategoriesRemoveResponse,
  ConnectionSourceCategoriesRestoreResponse,
  ConnectionSourceCategoriesSoftDeleteResponse,
  ConnectionSourceCategoriesSoftRemoveResponse,
  ConnectionSourceCategoriesUpdateResponse,
  ConnectionSourceCategoriesUpsertResponse,
} from './dto';

import { ConnectionSourceCategoriesEntity } from './entity';

export class ConnectionSourceCategoriesService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: ConnectionSourceCategoriesFindInputDto;
    selection: ConnectionSourceCategoriesFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesFindOutputDto> {
    const opName = ConnectionSourceCategoriesFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${ConnectionSourceCategoriesFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: ConnectionSourceCategoriesFindOneByIdInputDto;
    selection: ConnectionSourceCategoriesFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesEntity> {
    const opName = ConnectionSourceCategoriesFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesFindSelectionSchema);

    const query = `query ${opName}($input: ${ConnectionSourceCategoriesFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: ConnectionSourceCategoriesCreateInputDto[];
    selection: ConnectionSourceCategoriesCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesCreateOutputDto[]> {
    const opName = ConnectionSourceCategoriesCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ConnectionSourceCategoriesCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: ConnectionSourceCategoriesUpdateInputDto;
    selection: ConnectionSourceCategoriesUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesUpdateOutputDto> {
    const opName = ConnectionSourceCategoriesUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: ConnectionSourceCategoriesSoftDeleteInputDto;
    selection: ConnectionSourceCategoriesSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesSoftDeleteOutputDto> {
    const opName = ConnectionSourceCategoriesSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: ConnectionSourceCategoriesDeleteInputDto;
    selection: ConnectionSourceCategoriesDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesDeleteOutputDto> {
    const opName = ConnectionSourceCategoriesDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: ConnectionSourceCategoriesRestoreInputDto;
    selection: ConnectionSourceCategoriesRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesRestoreOutputDto> {
    const opName = ConnectionSourceCategoriesRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: ConnectionSourceCategoriesUpsertInputDto[];
    selection: ConnectionSourceCategoriesUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesUpsertOutputDto[]> {
    const opName = ConnectionSourceCategoriesUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ConnectionSourceCategoriesUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: ConnectionSourceCategoriesSoftRemoveInputDto;
    selection: ConnectionSourceCategoriesSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesSoftRemoveOutputDto> {
    const opName = ConnectionSourceCategoriesSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: ConnectionSourceCategoriesRemoveInputDto;
    selection: ConnectionSourceCategoriesRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesRemoveOutputDto> {
    const opName = ConnectionSourceCategoriesRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: ConnectionSourceCategoriesRecoverInputDto;
    selection: ConnectionSourceCategoriesRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCategoriesRecoverOutputDto> {
    const opName = ConnectionSourceCategoriesRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCategoriesRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceCategoriesRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCategoriesRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCategoriesRecover);
  }
}
