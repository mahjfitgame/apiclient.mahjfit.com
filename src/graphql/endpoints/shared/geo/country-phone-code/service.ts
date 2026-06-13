import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  CountryPhoneCodeCreateOutputSelectionSchema,
  CountryPhoneCodeDeleteOutputSelectionSchema,
  CountryPhoneCodeFindOutputSelectionSchema,
  CountryPhoneCodeRecoverOutputSelectionSchema,
  CountryPhoneCodeRemoveOutputSelectionSchema,
  CountryPhoneCodeRestoreOutputSelectionSchema,
  CountryPhoneCodeSoftDeleteOutputSelectionSchema,
  CountryPhoneCodeSoftRemoveOutputSelectionSchema,
  CountryPhoneCodeUpdateOutputSelectionSchema,
  CountryPhoneCodeUpsertOutputSelectionSchema,
} from './dto';
import {
  CountryPhoneCodeCreateResponse,
  CountryPhoneCodeDeleteResponse,
  CountryPhoneCodeFindOneByIdResponse,
  CountryPhoneCodeFindResponse,
  CountryPhoneCodeRecoverResponse,
  CountryPhoneCodeRemoveResponse,
  CountryPhoneCodeRestoreResponse,
  CountryPhoneCodeSoftDeleteResponse,
  CountryPhoneCodeSoftRemoveResponse,
  CountryPhoneCodeUpdateResponse,
  CountryPhoneCodeUpsertResponse,
} from './dto';
import {
  CountryPhoneCodeCreateDto,
  CountryPhoneCodeCreateInputDto,
  CountryPhoneCodeCreateOutputDto,
  CountryPhoneCodeDeleteDto,
  CountryPhoneCodeDeleteInputDto,
  CountryPhoneCodeDeleteOutputDto,
  CountryPhoneCodeFindDto,
  CountryPhoneCodeFindInputDto,
  CountryPhoneCodeFindOneByIdDto,
  CountryPhoneCodeFindOneByIdInputDto,
  CountryPhoneCodeFindOutputDto,
  CountryPhoneCodeRecoverDto,
  CountryPhoneCodeRecoverInputDto,
  CountryPhoneCodeRecoverOutputDto,
  CountryPhoneCodeRemoveDto,
  CountryPhoneCodeRemoveInputDto,
  CountryPhoneCodeRemoveOutputDto,
  CountryPhoneCodeRestoreDto,
  CountryPhoneCodeRestoreInputDto,
  CountryPhoneCodeRestoreOutputDto,
  CountryPhoneCodeSoftDeleteDto,
  CountryPhoneCodeSoftDeleteInputDto,
  CountryPhoneCodeSoftDeleteOutputDto,
  CountryPhoneCodeSoftRemoveDto,
  CountryPhoneCodeSoftRemoveInputDto,
  CountryPhoneCodeSoftRemoveOutputDto,
  CountryPhoneCodeUpdateDto,
  CountryPhoneCodeUpdateInputDto,
  CountryPhoneCodeUpdateOutputDto,
  CountryPhoneCodeUpsertDto,
  CountryPhoneCodeUpsertInputDto,
  CountryPhoneCodeUpsertOutputDto,
} from './dto';
import { CountryPhoneCodeEntity, CountryPhoneCodeSelectionSchema } from './entity';

export class CountryPhoneCodeService extends GraphqlBase {
  public async find(args: { filter: CountryPhoneCodeFindInputDto; selection: CountryPhoneCodeFindOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeFindOutputDto> {
    const opName = CountryPhoneCodeFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${CountryPhoneCodeFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeFindResponse>({ query, operationName: opName, variables: { filter: args.filter }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeFind);
  }

  public async findOneById(args: { input: CountryPhoneCodeFindOneByIdInputDto; selection: CountryPhoneCodeSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeEntity> {
    const opName = CountryPhoneCodeFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeSelectionSchema);
    const query = `query ${opName}($input: ${CountryPhoneCodeFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeFindOneByIdResponse>({ query, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeFindOneById);
  }

  public async create(args: { input: CountryPhoneCodeCreateInputDto[]; selection: CountryPhoneCodeCreateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeCreateOutputDto[]> {
    const opName = CountryPhoneCodeCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${CountryPhoneCodeCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeCreateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeCreate);
  }

  public async update(args: { input: CountryPhoneCodeUpdateInputDto; selection: CountryPhoneCodeUpdateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeUpdateOutputDto> {
    const opName = CountryPhoneCodeUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeUpdateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeUpdate);
  }

  public async softDelete(args: { input: CountryPhoneCodeSoftDeleteInputDto; selection: CountryPhoneCodeSoftDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeSoftDeleteOutputDto> {
    const opName = CountryPhoneCodeSoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeSoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeSoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeSoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeSoftDelete);
  }

  public async delete(args: { input: CountryPhoneCodeDeleteInputDto; selection: CountryPhoneCodeDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeDeleteOutputDto> {
    const opName = CountryPhoneCodeDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeDelete);
  }

  public async restore(args: { input: CountryPhoneCodeRestoreInputDto; selection: CountryPhoneCodeRestoreOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeRestoreOutputDto> {
    const opName = CountryPhoneCodeRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeRestore);
  }

  public async upsert(args: { input: CountryPhoneCodeUpsertInputDto[]; selection: CountryPhoneCodeUpsertOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeUpsertOutputDto[]> {
    const opName = CountryPhoneCodeUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${CountryPhoneCodeUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeUpsert);
  }

  public async softRemove(args: { input: CountryPhoneCodeSoftRemoveInputDto; selection: CountryPhoneCodeSoftRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeSoftRemoveOutputDto> {
    const opName = CountryPhoneCodeSoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeSoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeSoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeSoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeSoftRemove);
  }

  public async remove(args: { input: CountryPhoneCodeRemoveInputDto; selection: CountryPhoneCodeRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeRemoveOutputDto> {
    const opName = CountryPhoneCodeRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeRemove);
  }

  public async recover(args: { input: CountryPhoneCodeRecoverInputDto; selection: CountryPhoneCodeRecoverOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryPhoneCodeRecoverOutputDto> {
    const opName = CountryPhoneCodeRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryPhoneCodeRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryPhoneCodeRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryPhoneCodeRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryPhoneCodeRecover);
  }
}
