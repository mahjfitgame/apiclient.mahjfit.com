import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  FaqCreateOutputSelectionSchema,
  FaqDeleteOutputSelectionSchema,
  FaqFindOutputSelectionSchema,
  FaqRecoverOutputSelectionSchema,
  FaqRemoveOutputSelectionSchema,
  FaqRestoreOutputSelectionSchema,
  FaqSoftDeleteOutputSelectionSchema,
  FaqSoftRemoveOutputSelectionSchema,
  FaqUpdateOutputSelectionSchema,
  FaqUpsertOutputSelectionSchema,
} from './dto';
import {
  FaqCreateResponse,
  FaqDeleteResponse,
  FaqFindOneByIdResponse,
  FaqFindResponse,
  FaqRecoverResponse,
  FaqRemoveResponse,
  FaqRestoreResponse,
  FaqSoftDeleteResponse,
  FaqSoftRemoveResponse,
  FaqUpdateResponse,
  FaqUpsertResponse,
} from './dto';
import {
  FaqCreateDto,
  FaqCreateInputDto,
  FaqCreateOutputDto,
  FaqDeleteDto,
  FaqDeleteInputDto,
  FaqDeleteOutputDto,
  FaqFindDto,
  FaqFindInputDto,
  FaqFindOneByIdDto,
  FaqFindOneByIdInputDto,
  FaqFindOutputDto,
  FaqRecoverDto,
  FaqRecoverInputDto,
  FaqRecoverOutputDto,
  FaqRemoveDto,
  FaqRemoveInputDto,
  FaqRemoveOutputDto,
  FaqRestoreDto,
  FaqRestoreInputDto,
  FaqRestoreOutputDto,
  FaqSoftDeleteDto,
  FaqSoftDeleteInputDto,
  FaqSoftDeleteOutputDto,
  FaqSoftRemoveDto,
  FaqSoftRemoveInputDto,
  FaqSoftRemoveOutputDto,
  FaqUpdateDto,
  FaqUpdateInputDto,
  FaqUpdateOutputDto,
  FaqUpsertDto,
  FaqUpsertInputDto,
  FaqUpsertOutputDto,
} from './dto';
import { FaqEntity, FaqSelectionSchema } from './entity';

export class FaqService extends GraphqlBase {
  public async find(args: {
    filter: FaqFindInputDto;
    selection: FaqFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqFindOutputDto> {
    const opName = FaqFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${FaqFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<FaqFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqFind);
  }

  public async findOneById(args: {
    input: FaqFindOneByIdInputDto;
    selection: FaqSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqEntity> {
    const opName = FaqFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqSelectionSchema);

    const query = `query ${opName}($input: ${FaqFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqFindOneById);
  }

  public async create(args: {
    input: FaqCreateInputDto[];
    selection: FaqCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCreateOutputDto[]> {
    const opName = FaqCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${FaqCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCreate);
  }

  public async update(args: {
    input: FaqUpdateInputDto;
    selection: FaqUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqUpdateOutputDto> {
    const opName = FaqUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqUpdate);
  }

  public async softDelete(args: {
    input: FaqSoftDeleteInputDto;
    selection: FaqSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqSoftDeleteOutputDto> {
    const opName = FaqSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqSoftDelete);
  }

  public async delete(args: {
    input: FaqDeleteInputDto;
    selection: FaqDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqDeleteOutputDto> {
    const opName = FaqDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqDelete);
  }

  public async restore(args: {
    input: FaqRestoreInputDto;
    selection: FaqRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqRestoreOutputDto> {
    const opName = FaqRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqRestore);
  }

  public async upsert(args: {
    input: FaqUpsertInputDto[];
    selection: FaqUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqUpsertOutputDto[]> {
    const opName = FaqUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${FaqUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqUpsert);
  }

  public async softRemove(args: {
    input: FaqSoftRemoveInputDto;
    selection: FaqSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqSoftRemoveOutputDto> {
    const opName = FaqSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqSoftRemove);
  }

  public async remove(args: {
    input: FaqRemoveInputDto;
    selection: FaqRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqRemoveOutputDto> {
    const opName = FaqRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqRemove);
  }

  public async recover(args: {
    input: FaqRecoverInputDto;
    selection: FaqRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqRecoverOutputDto> {
    const opName = FaqRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqRecover);
  }
}
