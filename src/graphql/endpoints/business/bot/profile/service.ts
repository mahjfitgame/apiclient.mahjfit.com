import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  BotProfileCreateOutputSelectionSchema,
  BotProfileDeleteOutputSelectionSchema,
  BotProfileFindOutputSelectionSchema,
  BotProfileRecoverOutputSelectionSchema,
  BotProfileRemoveOutputSelectionSchema,
  BotProfileRestoreOutputSelectionSchema,
  BotProfileSoftDeleteOutputSelectionSchema,
  BotProfileSoftRemoveOutputSelectionSchema,
  BotProfileUpdateOutputSelectionSchema,
  BotProfileUpsertOutputSelectionSchema,
} from './dto';
import {
  BotProfileCreateResponse,
  BotProfileDeleteResponse,
  BotProfileFindOneByIdResponse,
  BotProfileFindResponse,
  BotProfileRecoverResponse, 
  BotProfileRemoveResponse,
  BotProfileRestoreResponse,
  BotProfileSoftDeleteResponse,
  BotProfileSoftRemoveResponse,
  BotProfileUpdateResponse,
  BotProfileUpsertResponse,
} from './dto';
import {
  BotProfileCreateDto,
  BotProfileCreateInputDto,
  BotProfileCreateOutputDto,
  BotProfileDeleteDto,
  BotProfileDeleteInputDto,
  BotProfileDeleteOutputDto,
  BotProfileFindDto,
  BotProfileFindInputDto,
  BotProfileFindOneByIdDto,
  BotProfileFindOneByIdInputDto,
  BotProfileFindOutputDto,
  BotProfileRecoverDto,
  BotProfileRecoverInputDto,
  BotProfileRecoverOutputDto,
  BotProfileRemoveDto,
  BotProfileRemoveInputDto,
  BotProfileRemoveOutputDto,
  BotProfileRestoreDto,
  BotProfileRestoreInputDto,
  BotProfileRestoreOutputDto,
  BotProfileSoftDeleteDto,
  BotProfileSoftDeleteInputDto,
  BotProfileSoftDeleteOutputDto,
  BotProfileSoftRemoveDto,
  BotProfileSoftRemoveInputDto,
  BotProfileSoftRemoveOutputDto,
  BotProfileUpdateDto,
  BotProfileUpdateInputDto,
  BotProfileUpdateOutputDto,
  BotProfileUpsertDto,
  BotProfileUpsertInputDto,
  BotProfileUpsertOutputDto,
} from './dto';
import { BotProfileEntity, BotProfileSelectionSchema } from './entity';

export class BotProfileService extends GraphqlBase {
  public async find(args: {
    filter: BotProfileFindInputDto;
    selection: BotProfileFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileFindOutputDto> {
    const opName = BotProfileFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${BotProfileFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileFind);
  }

  public async findOneById(args: {
    input: BotProfileFindOneByIdInputDto;
    selection: BotProfileSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileEntity> {
    const opName = BotProfileFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileSelectionSchema);

    const query = `query ${opName}($input: ${BotProfileFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileFindOneById);
  }

  public async create(args: {
    input: BotProfileCreateInputDto[];
    selection: BotProfileCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileCreateOutputDto[]> {
    const opName = BotProfileCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${BotProfileCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileCreate);
  }

  public async update(args: {
    input: BotProfileUpdateInputDto;
    selection: BotProfileUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileUpdateOutputDto> {
    const opName = BotProfileUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileUpdate);
  }

  public async softDelete(args: {
    input: BotProfileSoftDeleteInputDto;
    selection: BotProfileSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileSoftDeleteOutputDto> {
    const opName = BotProfileSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileSoftDelete);
  }

  public async delete(args: {
    input: BotProfileDeleteInputDto;
    selection: BotProfileDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileDeleteOutputDto> {
    const opName = BotProfileDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileDelete);
  }

  public async restore(args: {
    input: BotProfileRestoreInputDto;
    selection: BotProfileRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileRestoreOutputDto> {
    const opName = BotProfileRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileRestore);
  }

  public async upsert(args: {
    input: BotProfileUpsertInputDto[];
    selection: BotProfileUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileUpsertOutputDto[]> {
    const opName = BotProfileUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${BotProfileUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileUpsert);
  }

  public async softRemove(args: {
    input: BotProfileSoftRemoveInputDto;
    selection: BotProfileSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileSoftRemoveOutputDto> {
    const opName = BotProfileSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileSoftRemove);
  }

  public async remove(args: {
    input: BotProfileRemoveInputDto;
    selection: BotProfileRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileRemoveOutputDto> {
    const opName = BotProfileRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileRemove);
  }

  public async recover(args: {
    input: BotProfileRecoverInputDto;
    selection: BotProfileRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotProfileRecoverOutputDto> {
    const opName = BotProfileRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotProfileRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotProfileRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotProfileRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotProfileRecover);
  }
}
