import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  ConnectionSourceCreateDto,
  ConnectionSourceCreateInputDto,
  ConnectionSourceCreateOutputDto,
  ConnectionSourceDeleteDto,
  ConnectionSourceDeleteInputDto,
  ConnectionSourceDeleteOutputDto,
  ConnectionSourceFindDto,
  ConnectionSourceFindInputDto,
  ConnectionSourceFindOneByIdDto,
  ConnectionSourceFindOneByIdInputDto,
  ConnectionSourceFindOutputDto,
  ConnectionSourceRecoverDto,
  ConnectionSourceRecoverInputDto,
  ConnectionSourceRecoverOutputDto,
  ConnectionSourceRemoveDto,
  ConnectionSourceRemoveInputDto,
  ConnectionSourceRemoveOutputDto,
  ConnectionSourceRestoreDto,
  ConnectionSourceRestoreInputDto,
  ConnectionSourceRestoreOutputDto,
  ConnectionSourceSoftDeleteDto,
  ConnectionSourceSoftDeleteInputDto,
  ConnectionSourceSoftDeleteOutputDto,
  ConnectionSourceSoftRemoveDto,
  ConnectionSourceSoftRemoveInputDto,
  ConnectionSourceSoftRemoveOutputDto,
  ConnectionSourceUpdateDto,
  ConnectionSourceUpdateInputDto,
  ConnectionSourceUpdateOutputDto,
  ConnectionSourceUpsertDto,
  ConnectionSourceUpsertInputDto,
  ConnectionSourceUpsertOutputDto,
} from './dto';

import {
  ConnectionSourceCreateOutputSelectionSchema,
  ConnectionSourceDeleteOutputSelectionSchema,
  ConnectionSourceFindOutputSelectionSchema,
  ConnectionSourceRecoverOutputSelectionSchema,
  ConnectionSourceRemoveOutputSelectionSchema,
  ConnectionSourceRestoreOutputSelectionSchema,
  ConnectionSourceSoftDeleteOutputSelectionSchema,
  ConnectionSourceSoftRemoveOutputSelectionSchema,
  ConnectionSourceUpdateOutputSelectionSchema,
  ConnectionSourceUpsertOutputSelectionSchema,
  ConnectionSourceFindSelectionSchema,
} from './dto';

import {
  ConnectionSourceCreateResponse,
  ConnectionSourceDeleteResponse,
  ConnectionSourceFindOneByIdResponse,
  ConnectionSourceFindResponse,
  ConnectionSourceRecoverResponse,
  ConnectionSourceRemoveResponse,
  ConnectionSourceRestoreResponse,
  ConnectionSourceSoftDeleteResponse,
  ConnectionSourceSoftRemoveResponse,
  ConnectionSourceUpdateResponse,
  ConnectionSourceUpsertResponse,
} from './dto';

import { ConnectionSourceEntity } from './entity';

export class ConnectionSourceService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: ConnectionSourceFindInputDto;
    selection: ConnectionSourceFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceFindOutputDto> {
    const opName = ConnectionSourceFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${ConnectionSourceFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: ConnectionSourceFindOneByIdInputDto;
    selection: ConnectionSourceFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceEntity> {
    const opName = ConnectionSourceFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceFindSelectionSchema);

    const query = `query ${opName}($input: ${ConnectionSourceFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: ConnectionSourceCreateInputDto[];
    selection: ConnectionSourceCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceCreateOutputDto[]> {
    const opName = ConnectionSourceCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ConnectionSourceCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: ConnectionSourceUpdateInputDto;
    selection: ConnectionSourceUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceUpdateOutputDto> {
    const opName = ConnectionSourceUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: ConnectionSourceSoftDeleteInputDto;
    selection: ConnectionSourceSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceSoftDeleteOutputDto> {
    const opName = ConnectionSourceSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: ConnectionSourceDeleteInputDto;
    selection: ConnectionSourceDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceDeleteOutputDto> {
    const opName = ConnectionSourceDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: ConnectionSourceRestoreInputDto;
    selection: ConnectionSourceRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceRestoreOutputDto> {
    const opName = ConnectionSourceRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: ConnectionSourceUpsertInputDto[];
    selection: ConnectionSourceUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceUpsertOutputDto[]> {
    const opName = ConnectionSourceUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ConnectionSourceUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: ConnectionSourceSoftRemoveInputDto;
    selection: ConnectionSourceSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceSoftRemoveOutputDto> {
    const opName = ConnectionSourceSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: ConnectionSourceRemoveInputDto;
    selection: ConnectionSourceRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceRemoveOutputDto> {
    const opName = ConnectionSourceRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: ConnectionSourceRecoverInputDto;
    selection: ConnectionSourceRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ConnectionSourceRecoverOutputDto> {
    const opName = ConnectionSourceRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ConnectionSourceRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ConnectionSourceRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ConnectionSourceRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ConnectionSourceRecover);
  }
}
