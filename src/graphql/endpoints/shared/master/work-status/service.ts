import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  WorkStatusCreateDto,
  WorkStatusCreateInputDto,
  WorkStatusCreateOutputDto,
  WorkStatusDeleteDto,
  WorkStatusDeleteInputDto,
  WorkStatusDeleteOutputDto,
  WorkStatusFindDto,
  WorkStatusFindInputDto,
  WorkStatusFindOneByIdDto,
  WorkStatusFindOneByIdInputDto,
  WorkStatusFindOutputDto,
  WorkStatusRecoverDto,
  WorkStatusRecoverInputDto,
  WorkStatusRecoverOutputDto,
  WorkStatusRemoveDto,
  WorkStatusRemoveInputDto,
  WorkStatusRemoveOutputDto,
  WorkStatusRestoreDto,
  WorkStatusRestoreInputDto,
  WorkStatusRestoreOutputDto,
  WorkStatusSoftDeleteDto,
  WorkStatusSoftDeleteInputDto,
  WorkStatusSoftDeleteOutputDto,
  WorkStatusSoftRemoveDto,
  WorkStatusSoftRemoveInputDto,
  WorkStatusSoftRemoveOutputDto,
  WorkStatusUpdateDto,
  WorkStatusUpdateInputDto,
  WorkStatusUpdateOutputDto,
  WorkStatusUpsertDto,
  WorkStatusUpsertInputDto,
  WorkStatusUpsertOutputDto,
} from './dto';

import {
  WorkStatusCreateOutputSelectionSchema,
  WorkStatusDeleteOutputSelectionSchema,
  WorkStatusFindOutputSelectionSchema,
  WorkStatusRecoverOutputSelectionSchema,
  WorkStatusRemoveOutputSelectionSchema,
  WorkStatusRestoreOutputSelectionSchema,
  WorkStatusSoftDeleteOutputSelectionSchema,
  WorkStatusSoftRemoveOutputSelectionSchema,
  WorkStatusUpdateOutputSelectionSchema,
  WorkStatusUpsertOutputSelectionSchema,
  WorkStatusFindSelectionSchema,
} from './dto';

import {
  WorkStatusCreateResponse,
  WorkStatusDeleteResponse,
  WorkStatusFindOneByIdResponse,
  WorkStatusFindResponse,
  WorkStatusRecoverResponse,
  WorkStatusRemoveResponse,
  WorkStatusRestoreResponse,
  WorkStatusSoftDeleteResponse,
  WorkStatusSoftRemoveResponse,
  WorkStatusUpdateResponse,
  WorkStatusUpsertResponse,
} from './dto';

import { WorkStatusEntity } from './entity';

export class WorkStatusService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: WorkStatusFindInputDto;
    selection: WorkStatusFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusFindOutputDto> {
    const opName = WorkStatusFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${WorkStatusFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: WorkStatusFindOneByIdInputDto;
    selection: WorkStatusFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusEntity> {
    const opName = WorkStatusFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusFindSelectionSchema);

    const query = `query ${opName}($input: ${WorkStatusFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: WorkStatusCreateInputDto[];
    selection: WorkStatusCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusCreateOutputDto[]> {
    const opName = WorkStatusCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${WorkStatusCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: WorkStatusUpdateInputDto;
    selection: WorkStatusUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusUpdateOutputDto> {
    const opName = WorkStatusUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: WorkStatusSoftDeleteInputDto;
    selection: WorkStatusSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusSoftDeleteOutputDto> {
    const opName = WorkStatusSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: WorkStatusDeleteInputDto;
    selection: WorkStatusDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusDeleteOutputDto> {
    const opName = WorkStatusDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: WorkStatusRestoreInputDto;
    selection: WorkStatusRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusRestoreOutputDto> {
    const opName = WorkStatusRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: WorkStatusUpsertInputDto[];
    selection: WorkStatusUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusUpsertOutputDto[]> {
    const opName = WorkStatusUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${WorkStatusUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: WorkStatusSoftRemoveInputDto;
    selection: WorkStatusSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusSoftRemoveOutputDto> {
    const opName = WorkStatusSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: WorkStatusRemoveInputDto;
    selection: WorkStatusRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusRemoveOutputDto> {
    const opName = WorkStatusRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: WorkStatusRecoverInputDto;
    selection: WorkStatusRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<WorkStatusRecoverOutputDto> {
    const opName = WorkStatusRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, WorkStatusRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${WorkStatusRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<WorkStatusRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.WorkStatusRecover);
  }
}
