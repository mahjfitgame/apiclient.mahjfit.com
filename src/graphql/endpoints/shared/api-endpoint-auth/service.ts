import { buildSelectionSetFromSchema } from '../../../libs/selection';
import { GraphqlBase } from '../../../libs/base';
import { ApiEndpointAuthEntity, ApiEndpointAuthSelectionSchema } from './entity';
// IMP: keep 3 different import from same file to mantain code structure
import { 
  ApiEndpointAuthFindDto,
  ApiEndpointAuthFindInputDto, 
  ApiEndpointAuthFindOutputDto,
  ApiEndpointAuthFindOneByIdDto,
  ApiEndpointAuthFindOneByIdInputDto,
  ApiEndpointAuthCreateDto,
  ApiEndpointAuthCreateInputDto,
  ApiEndpointAuthCreateOutputDto,
  ApiEndpointAuthUpdateDto,
  ApiEndpointAuthUpdateInputDto,
  ApiEndpointAuthUpdateOutputDto,
  ApiEndpointAuthSoftDeleteDto,
  ApiEndpointAuthSoftDeleteInputDto,
  ApiEndpointAuthSoftDeleteOutputDto,
  ApiEndpointAuthDeleteDto,
  ApiEndpointAuthDeleteInputDto,
  ApiEndpointAuthDeleteOutputDto,
  ApiEndpointAuthRestoreDto,
  ApiEndpointAuthRestoreInputDto,
  ApiEndpointAuthRestoreOutputDto,
  ApiEndpointAuthUpsertDto,
  ApiEndpointAuthUpsertInputDto,
  ApiEndpointAuthUpsertOutputDto,
  ApiEndpointAuthSoftRemoveDto,
  ApiEndpointAuthSoftRemoveInputDto,
  ApiEndpointAuthSoftRemoveOutputDto,
  ApiEndpointAuthRemoveDto,
  ApiEndpointAuthRemoveInputDto,
  ApiEndpointAuthRemoveOutputDto,
  ApiEndpointAuthRecoverDto,
  ApiEndpointAuthRecoverInputDto,
  ApiEndpointAuthRecoverOutputDto,
  ApiEndpointAuthUploadDto,
  ApiEndpointAuthUploadInputDto,
  ApiEndpointAuthUploadOutputDto,
  ApiEndpointAuthUploadDeleteDto,
  ApiEndpointAuthUploadDeleteInputDto,
  ApiEndpointAuthUploadDeleteOutputDto,
  ApiEndpointAuthRecordPositionDto,
  ApiEndpointAuthRecordPositionInputDto,
  ApiEndpointAuthRecordPositionOutputDto,
  ApiEndpointAuthMarkAsMainDto,
  ApiEndpointAuthMarkAsMainInputDto,
  ApiEndpointAuthMarkAsMainOutputDto,
} from './dto';

import {
  ApiEndpointAuthFindOutputSelectionSchema,
  ApiEndpointAuthCreateOutputSelectionSchema,
  ApiEndpointAuthUpdateOutputSelectionSchema,
  ApiEndpointAuthSoftDeleteOutputSelectionSchema,
  ApiEndpointAuthDeleteOutputSelectionSchema,
  ApiEndpointAuthRestoreOutputSelectionSchema,
  ApiEndpointAuthUpsertOutputSelectionSchema,
  ApiEndpointAuthSoftRemoveOutputSelectionSchema,
  ApiEndpointAuthRemoveOutputSelectionSchema,
  ApiEndpointAuthRecoverOutputSelectionSchema,
  ApiEndpointAuthUploadOutputSelectionSchema,
  ApiEndpointAuthUploadDeleteOutputSelectionSchema,
  ApiEndpointAuthRecordPositionOutputSelectionSchema,
  ApiEndpointAuthMarkAsMainOutputSelectionSchema
} from './dto';

import { 
  ApiEndpointAuthFindResponse,
  ApiEndpointAuthFindOneByIdResponse,
  ApiEndpointAuthCreateResponse,
  ApiEndpointAuthUpdateResponse,
  ApiEndpointAuthSoftDeleteResponse,
  ApiEndpointAuthDeleteResponse,
  ApiEndpointAuthRestoreResponse,
  ApiEndpointAuthUpsertResponse,
  ApiEndpointAuthSoftRemoveResponse,
  ApiEndpointAuthRemoveResponse,
  ApiEndpointAuthRecoverResponse,
  ApiEndpointAuthUploadResponse,
  ApiEndpointAuthUploadDeleteResponse,
  ApiEndpointAuthRecordPositionResponse,
  ApiEndpointAuthMarkAsMainResponse
} from './dto';

export class ApiEndpointAuthService extends GraphqlBase {
  /**
   * Upload files for the provided record id and file field.
   * You can upload one or more files in a single request.
   */
  public async upload(args: {
      attachment: File[];
      input: ApiEndpointAuthUploadInputDto;
      headers?: Record<string, string>; signal?: AbortSignal;
      selection: ApiEndpointAuthUploadOutputSelectionSchema;
    }): Promise<ApiEndpointAuthUploadOutputDto[]> {
      const opName = ApiEndpointAuthUploadDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthUploadOutputSelectionSchema);

      const mutation = `mutation ${opName}($attachment: [Upload!]!, $input: ${ApiEndpointAuthUploadInputDto.name}!) {
        ${opName}(attachment: $attachment, input: $input) {
          ${selection}
        }
      }`;

      return await this.execUpload<ApiEndpointAuthUploadResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        files: args.attachment,
        fileVarName: 'attachment',
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthUpload);
  }

  /**
   * Delete uploaded files for the provided record id and file field.
   * This operation removes selected uploaded file references.
   */
  public async uploadDelete(args: {
      input: ApiEndpointAuthUploadDeleteInputDto[];
      selection: ApiEndpointAuthUploadDeleteOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthUploadDeleteOutputDto[]> {
      const opName = ApiEndpointAuthUploadDeleteDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthUploadDeleteOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${ApiEndpointAuthUploadDeleteInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthUploadDeleteResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthUploadDelete);
  }

  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
      filter: ApiEndpointAuthFindInputDto;
      selection: ApiEndpointAuthFindOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthFindOutputDto> {
      const opName = ApiEndpointAuthFindDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthFindOutputSelectionSchema);

      const query = `query ${opName}($filter: ${ApiEndpointAuthFindInputDto.name}!) {
        ${opName}(filter: $filter) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthFindResponse>({
        query,
        operationName: opName,
        variables: { filter: args.filter },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
      input: ApiEndpointAuthFindOneByIdInputDto;
      selection: ApiEndpointAuthSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthEntity> {
      const opName = ApiEndpointAuthFindOneByIdDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection,ApiEndpointAuthSelectionSchema);

      const query = `query ${opName}($input: ${ApiEndpointAuthFindOneByIdInputDto.name}!) { 
        ${opName}(input: $input) { 
            ${selection} 
          } 
        }`;

      return await this.exec<ApiEndpointAuthFindOneByIdResponse>({
        query,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
      input: ApiEndpointAuthCreateInputDto[];
      selection: ApiEndpointAuthCreateOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthCreateOutputDto[]> {
      const opName = ApiEndpointAuthCreateDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthCreateOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${ApiEndpointAuthCreateInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthCreateResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
      input: ApiEndpointAuthUpdateInputDto;
      selection: ApiEndpointAuthUpdateOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthUpdateOutputDto> {
      const opName = ApiEndpointAuthUpdateDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthUpdateOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthUpdateInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthUpdateResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
      input: ApiEndpointAuthSoftDeleteInputDto;
      selection: ApiEndpointAuthSoftDeleteOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthSoftDeleteOutputDto> {
      const opName = ApiEndpointAuthSoftDeleteDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthSoftDeleteOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthSoftDeleteInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthSoftDeleteResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthSoftDelete);
  }

  /**
   * Delete records that cannot be recovered or restored.
   * Unlike remove, delete does not check records in database before performing delete operation, so it is fast.
   */
  public async delete(args: {
      input: ApiEndpointAuthDeleteInputDto;
      selection: ApiEndpointAuthDeleteOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthDeleteOutputDto> {
      const opName = ApiEndpointAuthDeleteDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthDeleteOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthDeleteInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthDeleteResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthDelete);
  }

  /**
   * Restore records that are soft deleted or soft removed.
   * Unlike recover, restore does not check records in database before performing restore operation, so it is fast.
   */
  public async restore(args: {
      input: ApiEndpointAuthRestoreInputDto;
      selection: ApiEndpointAuthRestoreOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthRestoreOutputDto> {
      const opName = ApiEndpointAuthRestoreDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthRestoreOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthRestoreInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthRestoreResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthRestore);
  }

  /**
   * Upsert new records in entity.
   * It can insert and update at the same time.
   * You can also upsert multiple records at once and it returns only saved data.
   */
  public async upsert(args: {
      input: ApiEndpointAuthUpsertInputDto[];
      selection: ApiEndpointAuthUpsertOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthUpsertOutputDto[]> {
      const opName = ApiEndpointAuthUpsertDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthUpsertOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${ApiEndpointAuthUpsertInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthUpsertResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthUpsert);
  }

  /**
   * Start soft remove records that can be recovered or restored later.
   * Soft remove checks existing records in database before applying the operation.
   */
  public async softRemove(args: {
      input: ApiEndpointAuthSoftRemoveInputDto;
      selection: ApiEndpointAuthSoftRemoveOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthSoftRemoveOutputDto> {
      const opName = ApiEndpointAuthSoftRemoveDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthSoftRemoveOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthSoftRemoveInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthSoftRemoveResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthSoftRemove);
  }

  /**
   * Remove records permanently from database.
   * Unlike delete, remove checks records in database before performing remove operation.
   */
  public async remove(args: {
      input: ApiEndpointAuthRemoveInputDto;
      selection: ApiEndpointAuthRemoveOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthRemoveOutputDto> {
      const opName = ApiEndpointAuthRemoveDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthRemoveOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthRemoveInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthRemoveResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthRemove);
  }

  /**
   * Recover records that were soft deleted or soft removed.
   * Unlike restore, recover checks records in database before performing recover operation.
   */
  public async recover(args: {
      input: ApiEndpointAuthRecoverInputDto;
      selection: ApiEndpointAuthRecoverOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthRecoverOutputDto> {
      const opName = ApiEndpointAuthRecoverDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthRecoverOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthRecoverInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthRecoverResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthRecover);
  }

  /**
   * Update position of records for sortable lists.
   * This operation helps reorder records using provided id positions.
   */
  public async recordPosition(args: {
      input: ApiEndpointAuthRecordPositionInputDto;
      selection: ApiEndpointAuthRecordPositionOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthRecordPositionOutputDto> {
      const opName = ApiEndpointAuthRecordPositionDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthRecordPositionOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${ApiEndpointAuthRecordPositionInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthRecordPositionResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthRecordPosition);
  }

  /**
   * Mark a specific field as main/default for a record.
   * Use this operation when multiple field values exist and one must be primary.
   */
  public async markAsMain(args: {
      input: ApiEndpointAuthMarkAsMainInputDto[];
      selection: ApiEndpointAuthMarkAsMainOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<ApiEndpointAuthMarkAsMainOutputDto[]> {
      const opName = ApiEndpointAuthMarkAsMainDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, ApiEndpointAuthMarkAsMainOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${ApiEndpointAuthMarkAsMainInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<ApiEndpointAuthMarkAsMainResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.ApiEndpointAuthMarkAsMain);
  }
}
