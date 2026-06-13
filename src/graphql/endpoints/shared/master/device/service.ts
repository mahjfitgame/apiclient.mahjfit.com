import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  DeviceCreateDto,
  DeviceCreateInputDto,
  DeviceCreateOutputDto,
  DeviceDeleteDto,
  DeviceDeleteInputDto,
  DeviceDeleteOutputDto,
  DeviceFindDto,
  DeviceFindInputDto,
  DeviceFindOneByIdDto,
  DeviceFindOneByIdInputDto,
  DeviceFindOutputDto,
  DeviceRecoverDto,
  DeviceRecoverInputDto,
  DeviceRecoverOutputDto,
  DeviceRemoveDto,
  DeviceRemoveInputDto,
  DeviceRemoveOutputDto,
  DeviceRestoreDto,
  DeviceRestoreInputDto,
  DeviceRestoreOutputDto,
  DeviceSoftDeleteDto,
  DeviceSoftDeleteInputDto,
  DeviceSoftDeleteOutputDto,
  DeviceSoftRemoveDto,
  DeviceSoftRemoveInputDto,
  DeviceSoftRemoveOutputDto,
  DeviceUpdateDto,
  DeviceUpdateInputDto,
  DeviceUpdateOutputDto,
  DeviceUpsertDto,
  DeviceUpsertInputDto,
  DeviceUpsertOutputDto,
} from './dto';

import {
  DeviceCreateOutputSelectionSchema,
  DeviceDeleteOutputSelectionSchema,
  DeviceFindOutputSelectionSchema,
  DeviceRecoverOutputSelectionSchema,
  DeviceRemoveOutputSelectionSchema,
  DeviceRestoreOutputSelectionSchema,
  DeviceSoftDeleteOutputSelectionSchema,
  DeviceSoftRemoveOutputSelectionSchema,
  DeviceUpdateOutputSelectionSchema,
  DeviceUpsertOutputSelectionSchema,
  DeviceFindSelectionSchema,
} from './dto';

import {
  DeviceCreateResponse,
  DeviceDeleteResponse,
  DeviceFindOneByIdResponse,
  DeviceFindResponse,
  DeviceRecoverResponse,
  DeviceRemoveResponse,
  DeviceRestoreResponse,
  DeviceSoftDeleteResponse,
  DeviceSoftRemoveResponse,
  DeviceUpdateResponse,
  DeviceUpsertResponse,
} from './dto';

import { DeviceEntity } from './entity';

export class DeviceService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: DeviceFindInputDto;
    selection: DeviceFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceFindOutputDto> {
    const opName = DeviceFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${DeviceFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: DeviceFindOneByIdInputDto;
    selection: DeviceFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceEntity> {
    const opName = DeviceFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceFindSelectionSchema);

    const query = `query ${opName}($input: ${DeviceFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: DeviceCreateInputDto[];
    selection: DeviceCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceCreateOutputDto[]> {
    const opName = DeviceCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${DeviceCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: DeviceUpdateInputDto;
    selection: DeviceUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceUpdateOutputDto> {
    const opName = DeviceUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: DeviceSoftDeleteInputDto;
    selection: DeviceSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceSoftDeleteOutputDto> {
    const opName = DeviceSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: DeviceDeleteInputDto;
    selection: DeviceDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceDeleteOutputDto> {
    const opName = DeviceDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: DeviceRestoreInputDto;
    selection: DeviceRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceRestoreOutputDto> {
    const opName = DeviceRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: DeviceUpsertInputDto[];
    selection: DeviceUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceUpsertOutputDto[]> {
    const opName = DeviceUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${DeviceUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: DeviceSoftRemoveInputDto;
    selection: DeviceSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceSoftRemoveOutputDto> {
    const opName = DeviceSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: DeviceRemoveInputDto;
    selection: DeviceRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceRemoveOutputDto> {
    const opName = DeviceRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: DeviceRecoverInputDto;
    selection: DeviceRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<DeviceRecoverOutputDto> {
    const opName = DeviceRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, DeviceRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${DeviceRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<DeviceRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.DeviceRecover);
  }
}
