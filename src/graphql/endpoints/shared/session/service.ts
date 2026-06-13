import { buildSelectionSetFromSchema } from '../../../libs/selection';
import { GraphqlBase } from '../../../libs/base';
import { SessionEntity, SessionSelectionSchema } from './entity';
import {
  SessionFindDto, SessionFindInputDto, SessionFindOutputDto,
  SessionFindOneByIdDto, SessionFindOneByIdInputDto,
  SessionCreateDto, SessionCreateInputDto, SessionCreateOutputDto,
  SessionUpdateDto, SessionUpdateInputDto, SessionUpdateOutputDto,
  SessionSoftDeleteDto, SessionSoftDeleteInputDto, SessionSoftDeleteOutputDto,
  SessionDeleteDto, SessionDeleteInputDto, SessionDeleteOutputDto,
  SessionRestoreDto, SessionRestoreInputDto, SessionRestoreOutputDto,
  SessionUpsertDto, SessionUpsertInputDto, SessionUpsertOutputDto,
  SessionSoftRemoveDto, SessionSoftRemoveInputDto, SessionSoftRemoveOutputDto,
  SessionRemoveDto, SessionRemoveInputDto, SessionRemoveOutputDto,
  SessionRecoverDto, SessionRecoverInputDto, SessionRecoverOutputDto,
} from './dto';
import {
  SessionFindOutputSelectionSchema,
  SessionCreateOutputSelectionSchema,
  SessionUpdateOutputSelectionSchema,
  SessionSoftDeleteOutputSelectionSchema,
  SessionDeleteOutputSelectionSchema,
  SessionRestoreOutputSelectionSchema,
  SessionUpsertOutputSelectionSchema,
  SessionSoftRemoveOutputSelectionSchema,
  SessionRemoveOutputSelectionSchema,
  SessionRecoverOutputSelectionSchema,
} from './dto';
import {
  SessionFindResponse,
  SessionFindOneByIdResponse,
  SessionCreateResponse,
  SessionUpdateResponse,
  SessionSoftDeleteResponse,
  SessionDeleteResponse,
  SessionRestoreResponse,
  SessionUpsertResponse,
  SessionSoftRemoveResponse,
  SessionRemoveResponse,
  SessionRecoverResponse,
} from './dto';

export class SessionService extends GraphqlBase {
  public async find(args: { filter: SessionFindInputDto; selection: SessionFindOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionFindOutputDto> {
    const opName = SessionFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${SessionFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;
    return await this.exec<SessionFindResponse>({ query, operationName: opName, variables: { filter: args.filter }, headers: args.headers, signal: args.signal }).then(r => r.SessionFind);
  }

  public async findOneById(args: { input: SessionFindOneByIdInputDto; selection: SessionSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionEntity> {
    const opName = SessionFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionSelectionSchema);
    const query = `query ${opName}($input: ${SessionFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionFindOneByIdResponse>({ query, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionFindOneById);
  }

  public async create(args: { input: SessionCreateInputDto[]; selection: SessionCreateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionCreateOutputDto[]> {
    const opName = SessionCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${SessionCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionCreateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionCreate);
  }

  public async update(args: { input: SessionUpdateInputDto; selection: SessionUpdateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionUpdateOutputDto> {
    const opName = SessionUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionUpdateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionUpdate);
  }

  public async softDelete(args: { input: SessionSoftDeleteInputDto; selection: SessionSoftDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionSoftDeleteOutputDto> {
    const opName = SessionSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionSoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionSoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionSoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionSoftDelete);
  }

  public async delete(args: { input: SessionDeleteInputDto; selection: SessionDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionDeleteOutputDto> {
    const opName = SessionDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionDelete);
  }

  public async restore(args: { input: SessionRestoreInputDto; selection: SessionRestoreOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionRestoreOutputDto> {
    const opName = SessionRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionRestore);
  }

  public async upsert(args: { input: SessionUpsertInputDto[]; selection: SessionUpsertOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionUpsertOutputDto[]> {
    const opName = SessionUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${SessionUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionUpsert);
  }

  public async softRemove(args: { input: SessionSoftRemoveInputDto; selection: SessionSoftRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionSoftRemoveOutputDto> {
    const opName = SessionSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionSoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionSoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionSoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionSoftRemove);
  }

  public async remove(args: { input: SessionRemoveInputDto; selection: SessionRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionRemoveOutputDto> {
    const opName = SessionRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionRemove);
  }

  public async recover(args: { input: SessionRecoverInputDto; selection: SessionRecoverOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<SessionRecoverOutputDto> {
    const opName = SessionRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, SessionRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${SessionRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<SessionRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.SessionRecover);
  }
}
