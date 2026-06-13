import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import {
  AlertDurationCreateDto,
  AlertDurationCreateInputDto,
  AlertDurationCreateOutputDto,
  AlertDurationDeleteDto,
  AlertDurationDeleteInputDto,
  AlertDurationDeleteOutputDto,
  AlertDurationFindDto,
  AlertDurationFindInputDto,
  AlertDurationFindOneByIdDto,
  AlertDurationFindOneByIdInputDto,
  AlertDurationFindOutputDto,
  AlertDurationRecoverDto,
  AlertDurationRecoverInputDto,
  AlertDurationRecoverOutputDto,
  AlertDurationRemoveDto,
  AlertDurationRemoveInputDto,
  AlertDurationRemoveOutputDto,
  AlertDurationRestoreDto,
  AlertDurationRestoreInputDto,
  AlertDurationRestoreOutputDto,
  AlertDurationSoftDeleteDto,
  AlertDurationSoftDeleteInputDto,
  AlertDurationSoftDeleteOutputDto,
  AlertDurationSoftRemoveDto,
  AlertDurationSoftRemoveInputDto,
  AlertDurationSoftRemoveOutputDto,
  AlertDurationUpdateDto,
  AlertDurationUpdateInputDto,
  AlertDurationUpdateOutputDto,
  AlertDurationUpsertDto,
  AlertDurationUpsertInputDto,
  AlertDurationUpsertOutputDto,
} from './dto';

import {
  AlertDurationCreateOutputSelectionSchema,
  AlertDurationDeleteOutputSelectionSchema,
  AlertDurationFindOutputSelectionSchema,
  AlertDurationRecoverOutputSelectionSchema,
  AlertDurationRemoveOutputSelectionSchema,
  AlertDurationRestoreOutputSelectionSchema,
  AlertDurationSoftDeleteOutputSelectionSchema,
  AlertDurationSoftRemoveOutputSelectionSchema,
  AlertDurationUpdateOutputSelectionSchema,
  AlertDurationUpsertOutputSelectionSchema,
  AlertDurationFindSelectionSchema,
} from './dto';

import {
  AlertDurationCreateResponse,
  AlertDurationDeleteResponse,
  AlertDurationFindOneByIdResponse,
  AlertDurationFindResponse,
  AlertDurationRecoverResponse,
  AlertDurationRemoveResponse,
  AlertDurationRestoreResponse,
  AlertDurationSoftDeleteResponse,
  AlertDurationSoftRemoveResponse,
  AlertDurationUpdateResponse,
  AlertDurationUpsertResponse,
} from './dto';

import { AlertDurationEntity } from './entity';

export class AlertDurationService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
    filter: AlertDurationFindInputDto;
    selection: AlertDurationFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationFindOutputDto> {
    const opName = AlertDurationFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${AlertDurationFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
    input: AlertDurationFindOneByIdInputDto;
    selection: AlertDurationFindSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationEntity> {
    const opName = AlertDurationFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationFindSelectionSchema);

    const query = `query ${opName}($input: ${AlertDurationFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
    input: AlertDurationCreateInputDto[];
    selection: AlertDurationCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationCreateOutputDto[]> {
    const opName = AlertDurationCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${AlertDurationCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
    input: AlertDurationUpdateInputDto;
    selection: AlertDurationUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationUpdateOutputDto> {
    const opName = AlertDurationUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
    input: AlertDurationSoftDeleteInputDto;
    selection: AlertDurationSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationSoftDeleteOutputDto> {
    const opName = AlertDurationSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
    input: AlertDurationDeleteInputDto;
    selection: AlertDurationDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationDeleteOutputDto> {
    const opName = AlertDurationDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
    input: AlertDurationRestoreInputDto;
    selection: AlertDurationRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationRestoreOutputDto> {
    const opName = AlertDurationRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
    input: AlertDurationUpsertInputDto[];
    selection: AlertDurationUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationUpsertOutputDto[]> {
    const opName = AlertDurationUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${AlertDurationUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
    input: AlertDurationSoftRemoveInputDto;
    selection: AlertDurationSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationSoftRemoveOutputDto> {
    const opName = AlertDurationSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
    input: AlertDurationRemoveInputDto;
    selection: AlertDurationRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationRemoveOutputDto> {
    const opName = AlertDurationRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
    input: AlertDurationRecoverInputDto;
    selection: AlertDurationRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AlertDurationRecoverOutputDto> {
    const opName = AlertDurationRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AlertDurationRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${AlertDurationRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<AlertDurationRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AlertDurationRecover);
  }
}
