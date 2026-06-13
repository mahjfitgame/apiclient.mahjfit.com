import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  ThirdPartyPlatformCreateDto,
  ThirdPartyPlatformCreateInputDto,
  ThirdPartyPlatformCreateOutputDto,
  ThirdPartyPlatformDeleteDto,
  ThirdPartyPlatformDeleteInputDto,
  ThirdPartyPlatformDeleteOutputDto,
  ThirdPartyPlatformFindDto,
  ThirdPartyPlatformFindInputDto,
  ThirdPartyPlatformFindOneByIdDto,
  ThirdPartyPlatformFindOneByIdInputDto,
  ThirdPartyPlatformFindOutputDto,
  ThirdPartyPlatformRecoverDto,
  ThirdPartyPlatformRecoverInputDto,
  ThirdPartyPlatformRecoverOutputDto,
  ThirdPartyPlatformRemoveDto,
  ThirdPartyPlatformRemoveInputDto,
  ThirdPartyPlatformRemoveOutputDto,
  ThirdPartyPlatformRestoreDto,
  ThirdPartyPlatformRestoreInputDto,
  ThirdPartyPlatformRestoreOutputDto,
  ThirdPartyPlatformSoftDeleteDto,
  ThirdPartyPlatformSoftDeleteInputDto,
  ThirdPartyPlatformSoftDeleteOutputDto,
  ThirdPartyPlatformSoftRemoveDto,
  ThirdPartyPlatformSoftRemoveInputDto,
  ThirdPartyPlatformSoftRemoveOutputDto,
  ThirdPartyPlatformUpdateDto,
  ThirdPartyPlatformUpdateInputDto,
  ThirdPartyPlatformUpdateOutputDto,
  ThirdPartyPlatformUpsertDto,
  ThirdPartyPlatformUpsertInputDto,
  ThirdPartyPlatformUpsertOutputDto,
} from './dto';

import {
  ThirdPartyPlatformCreateOutputSelectionSchema,
  ThirdPartyPlatformDeleteOutputSelectionSchema,
  ThirdPartyPlatformFindOutputSelectionSchema,
  ThirdPartyPlatformRecoverOutputSelectionSchema,
  ThirdPartyPlatformRemoveOutputSelectionSchema,
  ThirdPartyPlatformRestoreOutputSelectionSchema,
  ThirdPartyPlatformSoftDeleteOutputSelectionSchema,
  ThirdPartyPlatformSoftRemoveOutputSelectionSchema,
  ThirdPartyPlatformUpdateOutputSelectionSchema,
  ThirdPartyPlatformUpsertOutputSelectionSchema,
  ThirdPartyPlatformFindSelectionSchema,
} from './dto';

import {
  ThirdPartyPlatformCreateResponse,
  ThirdPartyPlatformDeleteResponse,
  ThirdPartyPlatformFindOneByIdResponse,
  ThirdPartyPlatformFindResponse,
  ThirdPartyPlatformRecoverResponse,
  ThirdPartyPlatformRemoveResponse,
  ThirdPartyPlatformRestoreResponse,
  ThirdPartyPlatformSoftDeleteResponse,
  ThirdPartyPlatformSoftRemoveResponse,
  ThirdPartyPlatformUpdateResponse,
  ThirdPartyPlatformUpsertResponse,
} from './dto';

import { ThirdPartyPlatformEntity } from './entity';

export class ThirdPartyPlatformService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: ThirdPartyPlatformFindInputDto;
    selection: ThirdPartyPlatformFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformFindOutputDto> {
    const opName = ThirdPartyPlatformFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${ThirdPartyPlatformFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: ThirdPartyPlatformFindOneByIdInputDto;
    selection: ThirdPartyPlatformFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformEntity> {
    const opName = ThirdPartyPlatformFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformFindSelectionSchema);

    const query = `query ${opName}($input: ${ThirdPartyPlatformFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: ThirdPartyPlatformCreateInputDto[];
    selection: ThirdPartyPlatformCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformCreateOutputDto[]> {
    const opName = ThirdPartyPlatformCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ThirdPartyPlatformCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: ThirdPartyPlatformUpdateInputDto;
    selection: ThirdPartyPlatformUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformUpdateOutputDto> {
    const opName = ThirdPartyPlatformUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: ThirdPartyPlatformSoftDeleteInputDto;
    selection: ThirdPartyPlatformSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformSoftDeleteOutputDto> {
    const opName = ThirdPartyPlatformSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: ThirdPartyPlatformDeleteInputDto;
    selection: ThirdPartyPlatformDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformDeleteOutputDto> {
    const opName = ThirdPartyPlatformDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: ThirdPartyPlatformRestoreInputDto;
    selection: ThirdPartyPlatformRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformRestoreOutputDto> {
    const opName = ThirdPartyPlatformRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: ThirdPartyPlatformUpsertInputDto[];
    selection: ThirdPartyPlatformUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformUpsertOutputDto[]> {
    const opName = ThirdPartyPlatformUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${ThirdPartyPlatformUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: ThirdPartyPlatformSoftRemoveInputDto;
    selection: ThirdPartyPlatformSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformSoftRemoveOutputDto> {
    const opName = ThirdPartyPlatformSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: ThirdPartyPlatformRemoveInputDto;
    selection: ThirdPartyPlatformRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformRemoveOutputDto> {
    const opName = ThirdPartyPlatformRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: ThirdPartyPlatformRecoverInputDto;
    selection: ThirdPartyPlatformRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<ThirdPartyPlatformRecoverOutputDto> {
    const opName = ThirdPartyPlatformRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, ThirdPartyPlatformRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${ThirdPartyPlatformRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<ThirdPartyPlatformRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.ThirdPartyPlatformRecover);
  }
}
