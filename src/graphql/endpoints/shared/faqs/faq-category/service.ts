import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  FaqCategoryCreateOutputSelectionSchema,
  FaqCategoryDeleteOutputSelectionSchema,
  FaqCategoryFindOutputSelectionSchema,
  FaqCategoryRecoverOutputSelectionSchema,
  FaqCategoryRemoveOutputSelectionSchema,
  FaqCategoryRestoreOutputSelectionSchema,
  FaqCategorySoftDeleteOutputSelectionSchema,
  FaqCategorySoftRemoveOutputSelectionSchema,
  FaqCategoryUpdateOutputSelectionSchema,
  FaqCategoryUpsertOutputSelectionSchema,
} from './dto';
import {
  FaqCategoryCreateResponse,
  FaqCategoryDeleteResponse,
  FaqCategoryFindOneByIdResponse,
  FaqCategoryFindResponse,
  FaqCategoryRecoverResponse,
  FaqCategoryRemoveResponse,
  FaqCategoryRestoreResponse,
  FaqCategorySoftDeleteResponse,
  FaqCategorySoftRemoveResponse,
  FaqCategoryUpdateResponse,
  FaqCategoryUpsertResponse,
} from './dto';
import {
  FaqCategoryCreateDto,
  FaqCategoryCreateInputDto,
  FaqCategoryCreateOutputDto,
  FaqCategoryDeleteDto,
  FaqCategoryDeleteInputDto,
  FaqCategoryDeleteOutputDto,
  FaqCategoryFindDto,
  FaqCategoryFindInputDto,
  FaqCategoryFindOneByIdDto,
  FaqCategoryFindOneByIdInputDto,
  FaqCategoryFindOutputDto,
  FaqCategoryRecoverDto,
  FaqCategoryRecoverInputDto,
  FaqCategoryRecoverOutputDto,
  FaqCategoryRemoveDto,
  FaqCategoryRemoveInputDto,
  FaqCategoryRemoveOutputDto,
  FaqCategoryRestoreDto,
  FaqCategoryRestoreInputDto,
  FaqCategoryRestoreOutputDto,
  FaqCategorySoftDeleteDto,
  FaqCategorySoftDeleteInputDto,
  FaqCategorySoftDeleteOutputDto,
  FaqCategorySoftRemoveDto,
  FaqCategorySoftRemoveInputDto,
  FaqCategorySoftRemoveOutputDto,
  FaqCategoryUpdateDto,
  FaqCategoryUpdateInputDto,
  FaqCategoryUpdateOutputDto,
  FaqCategoryUpsertDto,
  FaqCategoryUpsertInputDto,
  FaqCategoryUpsertOutputDto,
} from './dto';
import { FaqCategoryEntity, FaqCategorySelectionSchema } from './entity';

export class FaqCategoryService extends GraphqlBase {
  public async find(args: {
    filter: FaqCategoryFindInputDto;
    selection: FaqCategoryFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryFindOutputDto> {
    const opName = FaqCategoryFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryFindOutputSelectionSchema);

    const query = `query ${opName}($filter: ${FaqCategoryFindInputDto.name}!) {
      ${opName}(filter: $filter) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryFind);
  }

  public async findOneById(args: {
    input: FaqCategoryFindOneByIdInputDto;
    selection: FaqCategorySelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryEntity> {
    const opName = FaqCategoryFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategorySelectionSchema);

    const query = `query ${opName}($input: ${FaqCategoryFindOneByIdInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryFindOneById);
  }

  public async create(args: {
    input: FaqCategoryCreateInputDto[];
    selection: FaqCategoryCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryCreateOutputDto[]> {
    const opName = FaqCategoryCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryCreateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${FaqCategoryCreateInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryCreate);
  }

  public async update(args: {
    input: FaqCategoryUpdateInputDto;
    selection: FaqCategoryUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryUpdateOutputDto> {
    const opName = FaqCategoryUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryUpdateOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategoryUpdateInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryUpdate);
  }

  public async softDelete(args: {
    input: FaqCategorySoftDeleteInputDto;
    selection: FaqCategorySoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategorySoftDeleteOutputDto> {
    const opName = FaqCategorySoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategorySoftDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategorySoftDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategorySoftDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategorySoftDelete);
  }

  public async delete(args: {
    input: FaqCategoryDeleteInputDto;
    selection: FaqCategoryDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryDeleteOutputDto> {
    const opName = FaqCategoryDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryDeleteOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategoryDeleteInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryDelete);
  }

  public async restore(args: {
    input: FaqCategoryRestoreInputDto;
    selection: FaqCategoryRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryRestoreOutputDto> {
    const opName = FaqCategoryRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryRestoreOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategoryRestoreInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryRestoreResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryRestore);
  }

  public async upsert(args: {
    input: FaqCategoryUpsertInputDto[];
    selection: FaqCategoryUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryUpsertOutputDto[]> {
    const opName = FaqCategoryUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryUpsertOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: [${FaqCategoryUpsertInputDto.name}!]!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryUpsertResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryUpsert);
  }

  public async softRemove(args: {
    input: FaqCategorySoftRemoveInputDto;
    selection: FaqCategorySoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategorySoftRemoveOutputDto> {
    const opName = FaqCategorySoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategorySoftRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategorySoftRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategorySoftRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategorySoftRemove);
  }

  public async remove(args: {
    input: FaqCategoryRemoveInputDto;
    selection: FaqCategoryRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryRemoveOutputDto> {
    const opName = FaqCategoryRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryRemoveOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategoryRemoveInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryRemoveResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryRemove);
  }

  public async recover(args: {
    input: FaqCategoryRecoverInputDto;
    selection: FaqCategoryRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<FaqCategoryRecoverOutputDto> {
    const opName = FaqCategoryRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, FaqCategoryRecoverOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${FaqCategoryRecoverInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.exec<FaqCategoryRecoverResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.FaqCategoryRecover);
  }
}
