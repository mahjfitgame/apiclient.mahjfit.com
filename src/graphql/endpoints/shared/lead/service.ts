import { buildSelectionSetFromSchema } from '../../../libs/selection';
import { GraphqlBase } from '../../../libs/base';
import {
  LeadCreateDto,
  LeadCreateInputDto,
  LeadCreateOutputDto,
  LeadDeleteDto,
  LeadDeleteInputDto,
  LeadDeleteOutputDto,
  LeadFindDto,
  LeadFindInputDto,
  LeadFindOneByIdDto,
  LeadFindOneByIdInputDto,
  LeadFindOutputDto,
  LeadRecoverDto,
  LeadRecoverInputDto,
  LeadRecoverOutputDto,
  LeadRemoveDto,
  LeadRemoveInputDto,
  LeadRemoveOutputDto,
  LeadRestoreDto,
  LeadRestoreInputDto,
  LeadRestoreOutputDto,
  LeadSoftDeleteDto,
  LeadSoftDeleteInputDto,
  LeadSoftDeleteOutputDto,
  LeadSoftRemoveDto,
  LeadSoftRemoveInputDto,
  LeadSoftRemoveOutputDto,
  LeadUpdateDto,
  LeadUpdateInputDto,
  LeadUpdateOutputDto,
  LeadUpsertDto,
  LeadUpsertInputDto,
  LeadUpsertOutputDto,
} from './dto';

import {
  LeadCreateOutputSelectionSchema,
  LeadDeleteOutputSelectionSchema,
  LeadFindOutputSelectionSchema,
  LeadRecoverOutputSelectionSchema,
  LeadRemoveOutputSelectionSchema,
  LeadRestoreOutputSelectionSchema,
  LeadSoftDeleteOutputSelectionSchema,
  LeadSoftRemoveOutputSelectionSchema,
  LeadUpdateOutputSelectionSchema,
  LeadUpsertOutputSelectionSchema,
  LeadFindSelectionSchema,
} from './dto';

import {
  LeadCreateResponse,
  LeadDeleteResponse,
  LeadFindOneByIdResponse,
  LeadFindResponse,
  LeadRecoverResponse,
  LeadRemoveResponse,
  LeadRestoreResponse,
  LeadSoftDeleteResponse,
  LeadSoftRemoveResponse,
  LeadUpdateResponse,
  LeadUpsertResponse,
} from './dto';

import { LeadEntity } from './entity';

export class LeadService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: LeadFindInputDto;
    selection: LeadFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadFindOutputDto> {
    const opName = LeadFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${LeadFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<LeadFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: LeadFindOneByIdInputDto;
    selection: LeadFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadEntity> {
    const opName = LeadFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadFindSelectionSchema);

    const query = `query ${opName}($input: ${LeadFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: LeadCreateInputDto[];
    selection: LeadCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadCreateOutputDto[]> {
    const opName = LeadCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${LeadCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: LeadUpdateInputDto;
    selection: LeadUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadUpdateOutputDto> {
    const opName = LeadUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: LeadSoftDeleteInputDto;
    selection: LeadSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadSoftDeleteOutputDto> {
    const opName = LeadSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: LeadDeleteInputDto;
    selection: LeadDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadDeleteOutputDto> {
    const opName = LeadDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: LeadRestoreInputDto;
    selection: LeadRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadRestoreOutputDto> {
    const opName = LeadRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: LeadUpsertInputDto[];
    selection: LeadUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadUpsertOutputDto[]> {
    const opName = LeadUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${LeadUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: LeadSoftRemoveInputDto;
    selection: LeadSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadSoftRemoveOutputDto> {
    const opName = LeadSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: LeadRemoveInputDto;
    selection: LeadRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadRemoveOutputDto> {
    const opName = LeadRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: LeadRecoverInputDto;
    selection: LeadRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<LeadRecoverOutputDto> {
    const opName = LeadRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, LeadRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${LeadRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<LeadRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.LeadRecover);
  }
}
