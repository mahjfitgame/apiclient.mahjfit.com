import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  BotLevelCreateOutputSelectionSchema,
  BotLevelDeleteOutputSelectionSchema,
  BotLevelFindOutputSelectionSchema,
  BotLevelRecoverOutputSelectionSchema,
  BotLevelRemoveOutputSelectionSchema,
  BotLevelRestoreOutputSelectionSchema,
  BotLevelSoftDeleteOutputSelectionSchema,
  BotLevelSoftRemoveOutputSelectionSchema,
  BotLevelUpdateOutputSelectionSchema,
  BotLevelUpsertOutputSelectionSchema,
} from './dto';
import {
  BotLevelCreateResponse,
  BotLevelDeleteResponse,
  BotLevelFindOneByIdResponse,
  BotLevelFindResponse,
  BotLevelRecoverResponse,
  BotLevelRemoveResponse,
  BotLevelRestoreResponse,
  BotLevelSoftDeleteResponse,
  BotLevelSoftRemoveResponse,
  BotLevelUpdateResponse,
  BotLevelUpsertResponse,
} from './dto';
import {
  BotLevelCreateDto,
  BotLevelCreateInputDto,
  BotLevelCreateOutputDto,
  BotLevelDeleteDto,
  BotLevelDeleteInputDto,
  BotLevelDeleteOutputDto,
  BotLevelFindDto,
  BotLevelFindInputDto,
  BotLevelFindOneByIdDto,
  BotLevelFindOneByIdInputDto,
  BotLevelFindOutputDto,
  BotLevelRecoverDto,
  BotLevelRecoverInputDto,
  BotLevelRecoverOutputDto,
  BotLevelRemoveDto,
  BotLevelRemoveInputDto,
  BotLevelRemoveOutputDto,
  BotLevelRestoreDto,
  BotLevelRestoreInputDto,
  BotLevelRestoreOutputDto,
  BotLevelSoftDeleteDto,
  BotLevelSoftDeleteInputDto,
  BotLevelSoftDeleteOutputDto,
  BotLevelSoftRemoveDto,
  BotLevelSoftRemoveInputDto,
  BotLevelSoftRemoveOutputDto,
  BotLevelUpdateDto,
  BotLevelUpdateInputDto,
  BotLevelUpdateOutputDto,
  BotLevelUpsertDto,
  BotLevelUpsertInputDto,
  BotLevelUpsertOutputDto,
} from './dto';
import { BotLevelEntity, BotLevelSelectionSchema } from './entity';

export class BotLevelService extends GraphqlBase {
  public async find(args: {
    filter: BotLevelFindInputDto;
    selection: BotLevelFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelFindOutputDto> {
    const opName = BotLevelFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${BotLevelFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelFind);
  }

  public async findOneById(args: {
    input: BotLevelFindOneByIdInputDto;
    selection: BotLevelSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelEntity> {
    const opName = BotLevelFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelSelectionSchema);

    const query = `query ${opName}($input: ${BotLevelFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelFindOneById);
  }

  public async create(args: {
    input: BotLevelCreateInputDto[];
    selection: BotLevelCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelCreateOutputDto[]> {
    const opName = BotLevelCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${BotLevelCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelCreate);
  }

  public async update(args: {
    input: BotLevelUpdateInputDto;
    selection: BotLevelUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelUpdateOutputDto> {
    const opName = BotLevelUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelUpdate);
  }

  public async softDelete(args: {
    input: BotLevelSoftDeleteInputDto;
    selection: BotLevelSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelSoftDeleteOutputDto> {
    const opName = BotLevelSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelSoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelSoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelSoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelSoftDelete);
  }

  public async delete(args: {
    input: BotLevelDeleteInputDto;
    selection: BotLevelDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelDeleteOutputDto> {
    const opName = BotLevelDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelDelete);
  }

  public async restore(args: {
    input: BotLevelRestoreInputDto;
    selection: BotLevelRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelRestoreOutputDto> {
    const opName = BotLevelRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelRestore);
  }

  public async upsert(args: {
    input: BotLevelUpsertInputDto[];
    selection: BotLevelUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelUpsertOutputDto[]> {
    const opName = BotLevelUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${BotLevelUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelUpsert);
  }

  public async softRemove(args: {
    input: BotLevelSoftRemoveInputDto;
    selection: BotLevelSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelSoftRemoveOutputDto> {
    const opName = BotLevelSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelSoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelSoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelSoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelSoftRemove);
  }

  public async remove(args: {
    input: BotLevelRemoveInputDto;
    selection: BotLevelRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelRemoveOutputDto> {
    const opName = BotLevelRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelRemove);
  }

  public async recover(args: {
    input: BotLevelRecoverInputDto;
    selection: BotLevelRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<BotLevelRecoverOutputDto> {
    const opName = BotLevelRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, BotLevelRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${BotLevelRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<BotLevelRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.BotLevelRecover);
  }
}
