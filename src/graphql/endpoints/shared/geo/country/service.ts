import { GraphqlBase } from '../../../../libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import {
  CountryCreateOutputSelectionSchema,
  CountryDeleteOutputSelectionSchema,
  CountryFindOutputSelectionSchema,
  CountryRecoverOutputSelectionSchema,
  CountryRemoveOutputSelectionSchema,
  CountryRestoreOutputSelectionSchema,
  CountrySoftDeleteOutputSelectionSchema,
  CountrySoftRemoveOutputSelectionSchema,
  CountryUpdateOutputSelectionSchema,
  CountryUpsertOutputSelectionSchema,
} from './dto';
import {
  CountryCreateResponse,
  CountryDeleteResponse,
  CountryFindOneByIdResponse,
  CountryFindResponse,
  CountryRecoverResponse,
  CountryRemoveResponse,
  CountryRestoreResponse,
  CountrySoftDeleteResponse,
  CountrySoftRemoveResponse,
  CountryUpdateResponse,
  CountryUpsertResponse,
} from './dto';
import {
  CountryCreateDto,
  CountryCreateInputDto,
  CountryCreateOutputDto,
  CountryDeleteDto,
  CountryDeleteInputDto,
  CountryDeleteOutputDto,
  CountryFindDto,
  CountryFindInputDto,
  CountryFindOneByIdDto,
  CountryFindOneByIdInputDto,
  CountryFindOutputDto,
  CountryRecoverDto,
  CountryRecoverInputDto,
  CountryRecoverOutputDto,
  CountryRemoveDto,
  CountryRemoveInputDto,
  CountryRemoveOutputDto,
  CountryRestoreDto,
  CountryRestoreInputDto,
  CountryRestoreOutputDto,
  CountrySoftDeleteDto,
  CountrySoftDeleteInputDto,
  CountrySoftDeleteOutputDto,
  CountrySoftRemoveDto,
  CountrySoftRemoveInputDto,
  CountrySoftRemoveOutputDto,
  CountryUpdateDto,
  CountryUpdateInputDto,
  CountryUpdateOutputDto,
  CountryUpsertDto,
  CountryUpsertInputDto,
  CountryUpsertOutputDto,
} from './dto';
import { CountryEntity, CountrySelectionSchema } from './entity';

export class CountryService extends GraphqlBase {
  public async find(args: { filter: CountryFindInputDto; selection: CountryFindOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryFindOutputDto> {
    const opName = CountryFindDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryFindOutputSelectionSchema);
    const query = `query ${opName}($filter: ${CountryFindInputDto.name}!) { ${opName}(filter: $filter) { ${selection} } }`;
    return await this.exec<CountryFindResponse>({ query, operationName: opName, variables: { filter: args.filter }, headers: args.headers, signal: args.signal }).then(r => r.CountryFind);
  }

  public async findOneById(args: { input: CountryFindOneByIdInputDto; selection: CountrySelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryEntity> {
    const opName = CountryFindOneByIdDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountrySelectionSchema);
    const query = `query ${opName}($input: ${CountryFindOneByIdInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryFindOneByIdResponse>({ query, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryFindOneById);
  }

  public async create(args: { input: CountryCreateInputDto[]; selection: CountryCreateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryCreateOutputDto[]> {
    const opName = CountryCreateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${CountryCreateInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryCreateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryCreate);
  }

  public async update(args: { input: CountryUpdateInputDto; selection: CountryUpdateOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryUpdateOutputDto> {
    const opName = CountryUpdateDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryUpdateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryUpdateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryUpdateResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryUpdate);
  }

  public async softDelete(args: { input: CountrySoftDeleteInputDto; selection: CountrySoftDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountrySoftDeleteOutputDto> {
    const opName = CountrySoftDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountrySoftDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountrySoftDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountrySoftDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountrySoftDelete);
  }

  public async delete(args: { input: CountryDeleteInputDto; selection: CountryDeleteOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryDeleteOutputDto> {
    const opName = CountryDeleteDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryDeleteOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryDeleteInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryDeleteResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryDelete);
  }

  public async restore(args: { input: CountryRestoreInputDto; selection: CountryRestoreOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryRestoreOutputDto> {
    const opName = CountryRestoreDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryRestoreOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryRestoreInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryRestoreResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryRestore);
  }

  public async upsert(args: { input: CountryUpsertInputDto[]; selection: CountryUpsertOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryUpsertOutputDto[]> {
    const opName = CountryUpsertDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryUpsertOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: [${CountryUpsertInputDto.name}!]!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryUpsertResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryUpsert);
  }

  public async softRemove(args: { input: CountrySoftRemoveInputDto; selection: CountrySoftRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountrySoftRemoveOutputDto> {
    const opName = CountrySoftRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountrySoftRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountrySoftRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountrySoftRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountrySoftRemove);
  }

  public async remove(args: { input: CountryRemoveInputDto; selection: CountryRemoveOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryRemoveOutputDto> {
    const opName = CountryRemoveDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryRemoveOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryRemoveInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryRemoveResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryRemove);
  }

  public async recover(args: { input: CountryRecoverInputDto; selection: CountryRecoverOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<CountryRecoverOutputDto> {
    const opName = CountryRecoverDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, CountryRecoverOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${CountryRecoverInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;
    return await this.exec<CountryRecoverResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.CountryRecover);
  }
}
