import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  QueueEmailCreateOutputSelectionSchema,
  QueueEmailDeleteOutputSelectionSchema,
  QueueEmailFindOutputSelectionSchema,
  QueueEmailRecoverOutputSelectionSchema,
  QueueEmailRemoveOutputSelectionSchema,
  QueueEmailRestoreOutputSelectionSchema,
  QueueEmailSoftDeleteOutputSelectionSchema,
  QueueEmailSoftRemoveOutputSelectionSchema,
  QueueEmailUpdateOutputSelectionSchema,
  QueueEmailUpsertOutputSelectionSchema,
} from './dto';
import {
  QueueEmailCreateResponse,
  QueueEmailDeleteResponse,
  QueueEmailFindOneByIdResponse,
  QueueEmailFindResponse,
  QueueEmailRecoverResponse,
  QueueEmailRemoveResponse,
  QueueEmailRestoreResponse,
  QueueEmailSoftDeleteResponse,
  QueueEmailSoftRemoveResponse,
  QueueEmailUpdateResponse,
  QueueEmailUpsertResponse,
} from './dto';
import {
  QueueEmailCreateDto,
  QueueEmailCreateInputDto,
  QueueEmailCreateOutputDto,
  QueueEmailDeleteDto,
  QueueEmailDeleteInputDto,
  QueueEmailDeleteOutputDto,
  QueueEmailFindDto,
  QueueEmailFindInputDto,
  QueueEmailFindOneByIdDto,
  QueueEmailFindOneByIdInputDto,
  QueueEmailFindOutputDto,
  QueueEmailRecoverDto,
  QueueEmailRecoverInputDto,
  QueueEmailRecoverOutputDto,
  QueueEmailRemoveDto,
  QueueEmailRemoveInputDto,
  QueueEmailRemoveOutputDto,
  QueueEmailRestoreDto,
  QueueEmailRestoreInputDto,
  QueueEmailRestoreOutputDto,
  QueueEmailSoftDeleteDto,
  QueueEmailSoftDeleteInputDto,
  QueueEmailSoftDeleteOutputDto,
  QueueEmailSoftRemoveDto,
  QueueEmailSoftRemoveInputDto,
  QueueEmailSoftRemoveOutputDto,
  QueueEmailUpdateDto,
  QueueEmailUpdateInputDto,
  QueueEmailUpdateOutputDto,
  QueueEmailUpsertDto,
  QueueEmailUpsertInputDto,
  QueueEmailUpsertOutputDto,
} from './dto';
import { QueueEmailEntity, QueueEmailSelectionSchema } from './entity';

/**
 * Service wrapper for QueueEmail GraphQL operations.
 * Each method maps to a QueueEmail query or mutation and returns typed SDK DTOs.
 */
export class QueueEmailService extends GraphqlBase {
  public async find(args: {
    filter: QueueEmailFindInputDto;
    selection: QueueEmailFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailFindOutputDto> {
    const opName = QueueEmailFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${QueueEmailFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailFind);
  }

  public async findOneById(args: {
    input: QueueEmailFindOneByIdInputDto;
    selection: QueueEmailSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailEntity> {
    const opName = QueueEmailFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailSelectionSchema);

    const query = `query ${opName}($input: ${QueueEmailFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailFindOneById);
  }

  public async create(args: {
    input: QueueEmailCreateInputDto[];
    selection: QueueEmailCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailCreateOutputDto[]> {
    const opName = QueueEmailCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${QueueEmailCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailCreate);
  }

  public async update(args: {
    input: QueueEmailUpdateInputDto;
    selection: QueueEmailUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailUpdateOutputDto> {
    const opName = QueueEmailUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailUpdate);
  }

  public async softDelete(args: {
    input: QueueEmailSoftDeleteInputDto;
    selection: QueueEmailSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailSoftDeleteOutputDto> {
    const opName = QueueEmailSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailSoftDelete);
  }

  public async delete(args: {
    input: QueueEmailDeleteInputDto;
    selection: QueueEmailDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailDeleteOutputDto> {
    const opName = QueueEmailDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailDelete);
  }

  public async restore(args: {
    input: QueueEmailRestoreInputDto;
    selection: QueueEmailRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailRestoreOutputDto> {
    const opName = QueueEmailRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailRestore);
  }

  public async upsert(args: {
    input: QueueEmailUpsertInputDto[];
    selection: QueueEmailUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailUpsertOutputDto[]> {
    const opName = QueueEmailUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${QueueEmailUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailUpsert);
  }

  public async softRemove(args: {
    input: QueueEmailSoftRemoveInputDto;
    selection: QueueEmailSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailSoftRemoveOutputDto> {
    const opName = QueueEmailSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailSoftRemove);
  }

  public async remove(args: {
    input: QueueEmailRemoveInputDto;
    selection: QueueEmailRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailRemoveOutputDto> {
    const opName = QueueEmailRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailRemove);
  }

  public async recover(args: {
    input: QueueEmailRecoverInputDto;
    selection: QueueEmailRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<QueueEmailRecoverOutputDto> {
    const opName = QueueEmailRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, QueueEmailRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${QueueEmailRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<QueueEmailRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.QueueEmailRecover);
  }
}
