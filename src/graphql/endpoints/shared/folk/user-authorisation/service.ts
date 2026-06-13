import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { UserAuthorisationEntity, UserAuthorisationSelectionSchema } from './entity';
// IMP: keep 3 different import from same file to mantain code structure
import {
  UserAuthorisationCreateDto,
  UserAuthorisationCreateInputDto,
  UserAuthorisationCreateOutputDto,
  UserAuthorisationDeleteDto,
  UserAuthorisationDeleteInputDto,
  UserAuthorisationDeleteOutputDto,
  UserAuthorisationFindDto,
  UserAuthorisationFindInputDto,
  UserAuthorisationFindOneByIdDto,
  UserAuthorisationFindOneByIdInputDto,
  UserAuthorisationFindOutputDto,
  UserAuthorisationRecoverDto,
  UserAuthorisationRecoverInputDto,
  UserAuthorisationRecoverOutputDto,
  UserAuthorisationRemoveDto,
  UserAuthorisationRemoveInputDto,
  UserAuthorisationRemoveOutputDto,
  UserAuthorisationRestoreDto,
  UserAuthorisationRestoreInputDto,
  UserAuthorisationRestoreOutputDto,
  UserAuthorisationSoftDeleteDto,
  UserAuthorisationSoftDeleteInputDto,
  UserAuthorisationSoftDeleteOutputDto,
  UserAuthorisationSoftRemoveDto,
  UserAuthorisationSoftRemoveInputDto,
  UserAuthorisationSoftRemoveOutputDto,
  UserAuthorisationUpdateDto,
  UserAuthorisationUpdateInputDto,
  UserAuthorisationUpdateOutputDto,
  UserAuthorisationUpsertDto,
  UserAuthorisationUpsertInputDto,
  UserAuthorisationUpsertOutputDto,
} from './dto';
import {
  UserAuthorisationCreateOutputSelectionSchema,
  UserAuthorisationDeleteOutputSelectionSchema,
  UserAuthorisationFindOutputSelectionSchema,
  UserAuthorisationRecoverOutputSelectionSchema,
  UserAuthorisationRemoveOutputSelectionSchema,
  UserAuthorisationRestoreOutputSelectionSchema,
  UserAuthorisationSoftDeleteOutputSelectionSchema,
  UserAuthorisationSoftRemoveOutputSelectionSchema,
  UserAuthorisationUpdateOutputSelectionSchema,
  UserAuthorisationUpsertOutputSelectionSchema,
} from './dto';
import {
  UserAuthorisationCreateResponse,
  UserAuthorisationDeleteResponse,
  UserAuthorisationFindOneByIdResponse,
  UserAuthorisationFindResponse,
  UserAuthorisationRecoverResponse,
  UserAuthorisationRemoveResponse,
  UserAuthorisationRestoreResponse,
  UserAuthorisationSoftDeleteResponse,
  UserAuthorisationSoftRemoveResponse,
  UserAuthorisationUpdateResponse,
  UserAuthorisationUpsertResponse,
} from './dto';

export class UserAuthorisationService extends GraphqlBase {
  public async find(args: {
    filter: UserAuthorisationFindInputDto;
    selection: UserAuthorisationFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationFindOutputDto> {
    const opName = UserAuthorisationFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${UserAuthorisationFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;

    return await this.exec<UserAuthorisationFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then((r) => r.UserAuthorisationFind);
  }

  public async findOneById(args: {
    input: UserAuthorisationFindOneByIdInputDto;
    selection: UserAuthorisationSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationEntity> {
    const opName = UserAuthorisationFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationSelectionSchema);
    const query = `query ${opName}($input: ${UserAuthorisationFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then((r) => r.UserAuthorisationFindOneById);
  }

  public async create(args: {
    input: UserAuthorisationCreateInputDto[];
    selection: UserAuthorisationCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationCreateOutputDto[]> {
    const opName = UserAuthorisationCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserAuthorisationCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then((r) => r.UserAuthorisationCreate);
  }

  public async update(args: {
    input: UserAuthorisationUpdateInputDto;
    selection: UserAuthorisationUpdateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationUpdateOutputDto> {
    const opName = UserAuthorisationUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationUpdateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then((r) => r.UserAuthorisationUpdate);
  }

  public async softDelete(args: {
    input: UserAuthorisationSoftDeleteInputDto;
    selection: UserAuthorisationSoftDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationSoftDeleteOutputDto> {
    const opName = UserAuthorisationSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationSoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationSoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationSoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationSoftDelete);
  }

  public async delete(args: {
    input: UserAuthorisationDeleteInputDto;
    selection: UserAuthorisationDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationDeleteOutputDto> {
    const opName = UserAuthorisationDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationDelete);
  }

  public async restore(args: {
    input: UserAuthorisationRestoreInputDto;
    selection: UserAuthorisationRestoreOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationRestoreOutputDto> {
    const opName = UserAuthorisationRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationRestore);
  }

  public async upsert(args: {
    input: UserAuthorisationUpsertInputDto[];
    selection: UserAuthorisationUpsertOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationUpsertOutputDto[]> {
    const opName = UserAuthorisationUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserAuthorisationUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationUpsert);
  }

  public async softRemove(args: {
    input: UserAuthorisationSoftRemoveInputDto;
    selection: UserAuthorisationSoftRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationSoftRemoveOutputDto> {
    const opName = UserAuthorisationSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationSoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationSoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationSoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationSoftRemove);
  }

  public async remove(args: {
    input: UserAuthorisationRemoveInputDto;
    selection: UserAuthorisationRemoveOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationRemoveOutputDto> {
    const opName = UserAuthorisationRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationRemove);
  }

  public async recover(args: {
    input: UserAuthorisationRecoverInputDto;
    selection: UserAuthorisationRecoverOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationRecoverOutputDto> {
    const opName = UserAuthorisationRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserAuthorisationRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then((r) => r.UserAuthorisationRecover);
  }
}
