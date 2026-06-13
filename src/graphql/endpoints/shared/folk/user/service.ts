import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import { UserEntity, UserSelectionSchema } from './entity';
import {
  UserCreateDto,
  UserCreateInputDto,
  UserCreateOutputDto,
  UserCreateOutputSelectionSchema,
  UserDeleteDto,
  UserDeleteInputDto,
  UserDeleteOutputDto,
  UserDeleteOutputSelectionSchema,
  UserFindDto,
  UserFindInputDto,
  UserFindOneByIdDto,
  UserFindOneByIdInputDto,
  UserFindOutputDto,
  UserFindOutputSelectionSchema,
  UserRecoverDto,
  UserRecoverInputDto,
  UserRecoverOutputDto,
  UserRecoverOutputSelectionSchema,
  UserRemoveDto,
  UserRemoveInputDto,
  UserRemoveOutputDto,
  UserRemoveOutputSelectionSchema,
  UserRestoreDto,
  UserRestoreInputDto,
  UserRestoreOutputDto,
  UserRestoreOutputSelectionSchema,
  UserSoftDeleteDto,
  UserSoftDeleteInputDto,
  UserSoftDeleteOutputDto,
  UserSoftDeleteOutputSelectionSchema,
  UserSoftRemoveDto,
  UserSoftRemoveInputDto,
  UserSoftRemoveOutputDto,
  UserSoftRemoveOutputSelectionSchema,
  UserUpdateDto,
  UserUpdateInputDto,
  UserUpdateOutputDto,
  UserUpdateOutputSelectionSchema,
  UserUploadDeleteDto,
  UserUploadDeleteInputDto,
  UserUploadDeleteOutputDto,
  UserUploadDeleteOutputSelectionSchema,
  UserUploadDto,
  UserUploadInputDto,
  UserUploadOutputDto,
  UserUploadOutputSelectionSchema,
  UserUpsertDto,
  UserUpsertInputDto,
  UserUpsertOutputDto,
  UserUpsertOutputSelectionSchema,
  UserCreateResponse,
  UserDeleteResponse,
  UserFindOneByIdResponse,
  UserFindResponse,
  UserRecoverResponse,
  UserRemoveResponse,
  UserRestoreResponse,
  UserSoftDeleteResponse,
  UserSoftRemoveResponse,
  UserUpdateResponse,
  UserUploadDeleteResponse,
  UserUploadResponse,
  UserUpsertResponse,
} from './dto';

export class UserService extends GraphqlBase {
  public async upload(args: {
    attachment: File[];
    input: UserUploadInputDto;
    selection: UserUploadOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserUploadOutputDto[]> {
    const opName = UserUploadDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserUploadOutputSelectionSchema);

    const mutation = `mutation ${opName}($attachment: [Upload!]!, $input: ${UserUploadInputDto.name}!) {
      ${opName}(attachment: $attachment, input: $input) { ${selection} }
    }`;

    return await this.execUpload<UserUploadResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      files: args.attachment,
      fileVarName: 'attachment',
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserUpload);
  }

  public async uploadDelete(args: {
    input: UserUploadDeleteInputDto[];
    selection: UserUploadDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserUploadDeleteOutputDto[]> {
    const opName = UserUploadDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserUploadDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserUploadDeleteInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserUploadDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserUploadDelete);
  }

  public async find(args: {
    filter: UserFindInputDto;
    selection: UserFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserFindOutputDto> {
    const opName = UserFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${UserFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;

    return await this.exec<UserFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserFind);
  }

  public async findOneById(args: {
    input: UserFindOneByIdInputDto;
    selection: UserSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserEntity> {
    const opName = UserFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserSelectionSchema);
    const query = `query ${opName}($input: ${UserFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserFindOneById);
  }

  public async create(args: {
    input: UserCreateInputDto[];
    selection: UserCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserCreateOutputDto[]> {
    const opName = UserCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserCreate);
  }

  public async update(args: { input: UserUpdateInputDto; selection: UserUpdateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserUpdateOutputDto> {
    const opName = UserUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserUpdateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserUpdate);
  }

  public async softDelete(args: { input: UserSoftDeleteInputDto; selection: UserSoftDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserSoftDeleteOutputDto> {
    const opName = UserSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserSoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserSoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserSoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserSoftDelete);
  }

  public async delete(args: { input: UserDeleteInputDto; selection: UserDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeleteOutputDto> {
    const opName = UserDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDelete);
  }

  public async restore(args: { input: UserRestoreInputDto; selection: UserRestoreOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserRestoreOutputDto> {
    const opName = UserRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserRestore);
  }

  public async upsert(args: { input: UserUpsertInputDto[]; selection: UserUpsertOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserUpsertOutputDto[]> {
    const opName = UserUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserUpsert);
  }

  public async softRemove(args: { input: UserSoftRemoveInputDto; selection: UserSoftRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserSoftRemoveOutputDto> {
    const opName = UserSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserSoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserSoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserSoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserSoftRemove);
  }

  public async remove(args: { input: UserRemoveInputDto; selection: UserRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserRemoveOutputDto> {
    const opName = UserRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserRemove);
  }

  public async recover(args: { input: UserRecoverInputDto; selection: UserRecoverOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserRecoverOutputDto> {
    const opName = UserRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserRecover);
  }
}
