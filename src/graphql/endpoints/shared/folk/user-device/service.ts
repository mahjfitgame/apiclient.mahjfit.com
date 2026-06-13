import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import { UserDeviceEntity, UserDeviceSelectionSchema } from './entity';
import {
  UserDeviceCreateDto,
  UserDeviceCreateInputDto,
  UserDeviceCreateOutputDto,
  UserDeviceCreateOutputSelectionSchema,
  UserDeviceHandShakeDto,
  UserDeviceHandShakeInputDto,
  UserDeviceHandShakeOutputDto,
  UserDeviceHandShakeOutputSelectionSchema,
  UserDeviceDeleteDto,
  UserDeviceDeleteInputDto,
  UserDeviceDeleteOutputDto,
  UserDeviceDeleteOutputSelectionSchema,
  UserDeviceFindDto,
  UserDeviceFindInputDto,
  UserDeviceFindOneByIdDto,
  UserDeviceFindOneByIdInputDto,
  UserDeviceFindOutputDto,
  UserDeviceFindOutputSelectionSchema,
  UserDeviceRecoverDto,
  UserDeviceRecoverInputDto,
  UserDeviceRecoverOutputDto,
  UserDeviceRecoverOutputSelectionSchema,
  UserDeviceRemoveDto,
  UserDeviceRemoveInputDto,
  UserDeviceRemoveOutputDto,
  UserDeviceRemoveOutputSelectionSchema,
  UserDeviceRestoreDto,
  UserDeviceRestoreInputDto,
  UserDeviceRestoreOutputDto,
  UserDeviceRestoreOutputSelectionSchema,
  UserDeviceSoftDeleteDto,
  UserDeviceSoftDeleteInputDto,
  UserDeviceSoftDeleteOutputDto,
  UserDeviceSoftDeleteOutputSelectionSchema,
  UserDeviceSoftRemoveDto,
  UserDeviceSoftRemoveInputDto,
  UserDeviceSoftRemoveOutputDto,
  UserDeviceSoftRemoveOutputSelectionSchema,
  UserDeviceUpdateDto,
  UserDeviceUpdateInputDto,
  UserDeviceUpdateOutputDto,
  UserDeviceUpdateOutputSelectionSchema,
  UserDeviceUploadDeleteDto,
  UserDeviceUploadDeleteInputDto,
  UserDeviceUploadDeleteOutputDto,
  UserDeviceUploadDeleteOutputSelectionSchema,
  UserDeviceUploadDto,
  UserDeviceUploadInputDto,
  UserDeviceUploadOutputDto,
  UserDeviceUploadOutputSelectionSchema,
  UserDeviceUpsertDto,
  UserDeviceUpsertInputDto,
  UserDeviceUpsertOutputDto,
  UserDeviceUpsertOutputSelectionSchema,
  UserDeviceCreateResponse,
  UserDeviceHandShakeResponse,
  UserDeviceDeleteResponse,
  UserDeviceFindOneByIdResponse,
  UserDeviceFindResponse,
  UserDeviceRecoverResponse,
  UserDeviceRemoveResponse,
  UserDeviceRestoreResponse,
  UserDeviceSoftDeleteResponse,
  UserDeviceSoftRemoveResponse,
  UserDeviceUpdateResponse,
  UserDeviceUploadDeleteResponse,
  UserDeviceUploadResponse,
  UserDeviceUpsertResponse,
} from './dto';

export class UserDeviceService extends GraphqlBase {
  public async upload(args: {
    attachment: File[];
    input: UserDeviceUploadInputDto;
    selection: UserDeviceUploadOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceUploadOutputDto[]> {
    const opName = UserDeviceUploadDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceUploadOutputSelectionSchema);

    const mutation = `mutation ${opName}($attachment: [Upload!]!, $input: ${UserDeviceUploadInputDto.name}!) {
      ${opName}(attachment: $attachment, input: $input) { ${selection} }
    }`;

    return await this.execUpload<UserDeviceUploadResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      files: args.attachment,
      fileVarName: 'attachment',
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceUpload);
  }

  public async uploadDelete(args: {
    input: UserDeviceUploadDeleteInputDto[];
    selection: UserDeviceUploadDeleteOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceUploadDeleteOutputDto[]> {
    const opName = UserDeviceUploadDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceUploadDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserDeviceUploadDeleteInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserDeviceUploadDeleteResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceUploadDelete);
  }

  public async find(args: {
    filter: UserDeviceFindInputDto;
    selection: UserDeviceFindOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceFindOutputDto> {
    const opName = UserDeviceFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${UserDeviceFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;

    return await this.exec<UserDeviceFindResponse>({
      query,
      operationName: opName,
      variables: { filter: args.filter },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceFind);
  }

  public async findOneById(args: {
    input: UserDeviceFindOneByIdInputDto;
    selection: UserDeviceSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceEntity> {
    const opName = UserDeviceFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceSelectionSchema);
    const query = `query ${opName}($input: ${UserDeviceFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserDeviceFindOneByIdResponse>({
      query,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceFindOneById);
  }

  public async create(args: {
    input: UserDeviceCreateInputDto[];
    selection: UserDeviceCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceCreateOutputDto[]> {
    const opName = UserDeviceCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserDeviceCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserDeviceCreateResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceCreate);
  }

  public async handShake(args: {
    input: UserDeviceHandShakeInputDto | UserDeviceHandShakeInputDto[];
    selection: UserDeviceHandShakeOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserDeviceHandShakeOutputDto[]> {
    const opName = UserDeviceHandShakeDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceHandShakeOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserDeviceHandShakeInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserDeviceHandShakeResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.UserDeviceHandShake);
  }

  public async update(args: { input: UserDeviceUpdateInputDto; selection: UserDeviceUpdateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceUpdateOutputDto> {
    const opName = UserDeviceUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<UserDeviceUpdateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceUpdate);
  }

  public async softDelete(args: { input: UserDeviceSoftDeleteInputDto; selection: UserDeviceSoftDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceSoftDeleteOutputDto> {
    const opName = UserDeviceSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceSoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceSoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceSoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceSoftDelete);
  }

  public async delete(args: { input: UserDeviceDeleteInputDto; selection: UserDeviceDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceDeleteOutputDto> {
    const opName = UserDeviceDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceDelete);
  }

  public async restore(args: { input: UserDeviceRestoreInputDto; selection: UserDeviceRestoreOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceRestoreOutputDto> {
    const opName = UserDeviceRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceRestore);
  }

  public async upsert(args: { input: UserDeviceUpsertInputDto[]; selection: UserDeviceUpsertOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceUpsertOutputDto[]> {
    const opName = UserDeviceUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${UserDeviceUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceUpsert);
  }

  public async softRemove(args: { input: UserDeviceSoftRemoveInputDto; selection: UserDeviceSoftRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceSoftRemoveOutputDto> {
    const opName = UserDeviceSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceSoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceSoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceSoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceSoftRemove);
  }

  public async remove(args: { input: UserDeviceRemoveInputDto; selection: UserDeviceRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceRemoveOutputDto> {
    const opName = UserDeviceRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceRemove);
  }

  public async recover(args: { input: UserDeviceRecoverInputDto; selection: UserDeviceRecoverOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<UserDeviceRecoverOutputDto> {
    const opName = UserDeviceRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, UserDeviceRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserDeviceRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<UserDeviceRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.UserDeviceRecover);
  }
}
