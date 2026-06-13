import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { GraphqlBase } from '../../../../libs/base';
import { UserAuthenticationEntity, UserAuthenticationSelectionSchema } from './entity';
// IMP: keep 3 different import from same file to mantain code structure
import {
  UserAuthenticationFindDto,
  UserAuthenticationFindInputDto,
  UserAuthenticationFindOutputDto,
  UserAuthenticationFindOneByIdDto,
  UserAuthenticationFindOneByIdInputDto,
  UserAuthenticationCreateDto,
  UserAuthenticationCreateInputDto,
  UserAuthenticationCreateOutputDto,
  UserAuthenticationUpdateDto,
  UserAuthenticationUpdateInputDto,
  UserAuthenticationUpdateOutputDto,
  UserAuthenticationSoftDeleteDto,
  UserAuthenticationSoftDeleteInputDto,
  UserAuthenticationSoftDeleteOutputDto,
  UserAuthenticationDeleteDto,
  UserAuthenticationDeleteInputDto,
  UserAuthenticationDeleteOutputDto,
  UserAuthenticationRestoreDto,
  UserAuthenticationRestoreInputDto,
  UserAuthenticationRestoreOutputDto,
  UserAuthenticationUpsertDto,
  UserAuthenticationUpsertInputDto,
  UserAuthenticationUpsertOutputDto,
  UserAuthenticationSoftRemoveDto,
  UserAuthenticationSoftRemoveInputDto,
  UserAuthenticationSoftRemoveOutputDto,
  UserAuthenticationRemoveDto,
  UserAuthenticationRemoveInputDto,
  UserAuthenticationRemoveOutputDto,
  UserAuthenticationRecoverDto,
  UserAuthenticationRecoverInputDto,
  UserAuthenticationRecoverOutputDto,
} from './dto';

import {
  UserAuthenticationFindOutputSelectionSchema,
  UserAuthenticationCreateOutputSelectionSchema,
  UserAuthenticationUpdateOutputSelectionSchema,
  UserAuthenticationSoftDeleteOutputSelectionSchema,
  UserAuthenticationDeleteOutputSelectionSchema,
  UserAuthenticationRestoreOutputSelectionSchema,
  UserAuthenticationUpsertOutputSelectionSchema,
  UserAuthenticationSoftRemoveOutputSelectionSchema,
  UserAuthenticationRemoveOutputSelectionSchema,
  UserAuthenticationRecoverOutputSelectionSchema,
} from './dto';

import {
  UserAuthenticationFindResponse,
  UserAuthenticationFindOneByIdResponse,
  UserAuthenticationCreateResponse,
  UserAuthenticationUpdateResponse,
  UserAuthenticationSoftDeleteResponse,
  UserAuthenticationDeleteResponse,
  UserAuthenticationRestoreResponse,
  UserAuthenticationUpsertResponse,
  UserAuthenticationSoftRemoveResponse,
  UserAuthenticationRemoveResponse,
  UserAuthenticationRecoverResponse,
} from './dto';

import {
  AppForgotPasswordDto,
  AppForgotPasswordInputDto,
  AppForgotPasswordOutputDto,
  AppForgotPasswordOutputSelectionSchema,
  AppForgotPasswordResponse,
  AppGenerateTwoFAQrDto,
  AppGenerateTwoFAQrInputDto,
  AppGenerateTwoFAQrOutputDto,
  AppGenerateTwoFAQrOutputSelectionSchema,
  AppGenerateTwoFAQrResponse,
  AppGrantSignupDto,
  AppGrantSignupInputDto,
  AppGrantSignupOutputDto,
  AppGrantSignupOutputSelectionSchema,
  AppGrantSignupResponse,
  AppOtpSigninDto,
  AppOtpSigninInputDto,
  AppOtpSigninOutputDto,
  AppOtpSigninOutputSelectionSchema,
  AppOtpSigninResponse,
  AppRecoverForgotPasswordDto,
  AppRecoverForgotPasswordInputDto,
  AppRecoverForgotPasswordOutputDto,
  AppRecoverForgotPasswordOutputSelectionSchema,
  AppRecoverForgotPasswordResponse,
  AppRegenerateTwoFARecoveryCodeDto,
  AppRegenerateTwoFARecoveryCodeInputDto,
  AppRegenerateTwoFARecoveryCodeOutputDto,
  AppRegenerateTwoFARecoveryCodeOutputSelectionSchema,
  AppRegenerateTwoFARecoveryCodeResponse,
  AppResetPasswordDto,
  AppResetPasswordInputDto,
  AppResetPasswordOutputDto,
  AppResetPasswordOutputSelectionSchema,
  AppResetPasswordResponse,
  AppSigninDto,
  AppSigninInputDto,
  AppSigninOutputDto,
  AppSigninOutputSelectionSchema,
  AppSigninResponse,
  AppSignoutDto,
  AppSignoutResponse,
  AppSignupDto,
  AppSignupInputDto,
  AppSignupOutputDto,
  AppSignupOutputSelectionSchema,
  AppSignupResponse,
  AppStepSigninMultiFAOptionDto,
  AppStepSigninMultiFAOptionInputDto,
  AppStepSigninMultiFAOptionOutputDto,
  AppStepSigninMultiFAOptionOutputSelectionSchema,
  AppStepSigninMultiFAOptionResponse,
  AppStepSigninMultiFAVerifyDto,
  AppStepSigninMultiFAVerifyInputDto,
  AppStepSigninMultiFAVerifyOutputDto,
  AppStepSigninMultiFAVerifyOutputSelectionSchema,
  AppStepSigninMultiFAVerifyResponse,
  AppStepSigninPasswordDto,
  AppStepSigninPasswordInputDto,
  AppStepSigninPasswordOutputDto,
  AppStepSigninPasswordOutputSelectionSchema,
  AppStepSigninPasswordResponse,
  AppStepSigninUserDto,
  AppStepSigninUserInputDto,
  AppStepSigninUserOutputDto,
  AppStepSigninUserOutputSelectionSchema,
  AppStepSigninUserResponse,
  AppVerifyTwoFAQrDto,
  AppVerifyTwoFAQrInputDto,
  AppVerifyTwoFAQrOutputDto,
  AppVerifyTwoFAQrOutputSelectionSchema,
  AppVerifyTwoFAQrResponse,
  AppVerifyTwoFARecoveryCodeDto,
  AppVerifyTwoFARecoveryCodeInputDto,
  AppVerifyTwoFARecoveryCodeOutputDto,
  AppVerifyTwoFARecoveryCodeOutputSelectionSchema,
  AppVerifyTwoFARecoveryCodeResponse,
  AppWhoAmIDto,
  AppWhoAmIResponse,
  AppGrantRoleResponse,
} from './dto';

import { UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto, UserAuthorisationCreateOutputSelectionSchema } from '../user-authorisation/dto';

export class UserAuthenticationService extends GraphqlBase {
  /**
   * Start finding records in entity.
   * This is easy, quick and simple way for majority of search operation.
   */
  public async find(args: {
      filter: UserAuthenticationFindInputDto;
      selection: UserAuthenticationFindOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationFindOutputDto> {
      const opName = UserAuthenticationFindDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationFindOutputSelectionSchema);

      const query = `query ${opName}($filter: ${UserAuthenticationFindInputDto.name}!) {
        ${opName}(filter: $filter) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationFindResponse>({
        query,
        operationName: opName,
        variables: { filter: args.filter },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationFind);
  }

  /**
   * Find one record by id.
   * This operation returns a single entity shape based on the provided selection set.
   */
  public async findOneById(args: {
      input: UserAuthenticationFindOneByIdInputDto;
      selection: UserAuthenticationSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationEntity> {
      const opName = UserAuthenticationFindOneByIdDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection,UserAuthenticationSelectionSchema);

      const query = `query ${opName}($input: ${UserAuthenticationFindOneByIdInputDto.name}!) {
        ${opName}(input: $input) {
            ${selection}
          }
        }`;

      return await this.exec<UserAuthenticationFindOneByIdResponse>({
        query,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationFindOneById);
  }

  /**
   * Create new record in entity.
   * You can also create multiple records at once.
   * Returns only saved data, not relation data set with other entities.
   */
  public async create(args: {
      input: UserAuthenticationCreateInputDto[];
      selection: UserAuthenticationCreateOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationCreateOutputDto[]> {
      const opName = UserAuthenticationCreateDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationCreateOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${UserAuthenticationCreateInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationCreateResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationCreate);
  }

  /**
   * Update records, as per provided where criteria.
   * This is easy, quick and simple way for majority of update operation.
   */
  public async update(args: {
      input: UserAuthenticationUpdateInputDto;
      selection: UserAuthenticationUpdateOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationUpdateOutputDto> {
      const opName = UserAuthenticationUpdateDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationUpdateOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationUpdateInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationUpdateResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationUpdate);
  }

  /**
   * Start soft delete records.
   * This is safe for mass delete and performs very fast.
   * Unlike softRemove, softDelete does not perform data checks and directly performs soft delete.
   */
  public async softDelete(args: {
      input: UserAuthenticationSoftDeleteInputDto;
      selection: UserAuthenticationSoftDeleteOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationSoftDeleteOutputDto> {
      const opName = UserAuthenticationSoftDeleteDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationSoftDeleteOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationSoftDeleteInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationSoftDeleteResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationSoftDelete);
  }

  /**
   * Delete records permanently.
   * This cannot be restored or recovered.
   */
  public async delete(args: {
      input: UserAuthenticationDeleteInputDto;
      selection: UserAuthenticationDeleteOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationDeleteOutputDto> {
      const opName = UserAuthenticationDeleteDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationDeleteOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationDeleteInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationDeleteResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationDelete);
  }

  /**
   * Restore soft-deleted records.
   */
  public async restore(args: {
      input: UserAuthenticationRestoreInputDto;
      selection: UserAuthenticationRestoreOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationRestoreOutputDto> {
      const opName = UserAuthenticationRestoreDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationRestoreOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationRestoreInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationRestoreResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationRestore);
  }

  /**
   * Create or update records depending on whether they already exist.
   */
  public async upsert(args: {
      input: UserAuthenticationUpsertInputDto[];
      selection: UserAuthenticationUpsertOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationUpsertOutputDto[]> {
      const opName = UserAuthenticationUpsertDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationUpsertOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: [${UserAuthenticationUpsertInputDto.name}!]!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationUpsertResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationUpsert);
  }

  /**
   * Start soft remove records.
   * This is safer than softDelete because it checks records before deletion and returns processed data.
   */
  public async softRemove(args: {
      input: UserAuthenticationSoftRemoveInputDto;
      selection: UserAuthenticationSoftRemoveOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationSoftRemoveOutputDto> {
      const opName = UserAuthenticationSoftRemoveDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationSoftRemoveOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationSoftRemoveInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationSoftRemoveResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationSoftRemove);
  }

  /**
   * Remove records permanently after checking the records.
   */
  public async remove(args: {
      input: UserAuthenticationRemoveInputDto;
      selection: UserAuthenticationRemoveOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationRemoveOutputDto> {
      const opName = UserAuthenticationRemoveDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationRemoveOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationRemoveInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationRemoveResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationRemove);
  }

  /**
   * Recover soft-deleted records after checking the records.
   */
  public async recover(args: {
      input: UserAuthenticationRecoverInputDto;
      selection: UserAuthenticationRecoverOutputSelectionSchema;
      headers?: Record<string, string>; signal?: AbortSignal;
    }): Promise<UserAuthenticationRecoverOutputDto> {
      const opName = UserAuthenticationRecoverDto.metaname;

      const selection = buildSelectionSetFromSchema(args.selection, UserAuthenticationRecoverOutputSelectionSchema);

      const mutation = `mutation ${opName}($input: ${UserAuthenticationRecoverInputDto.name}!) {
        ${opName}(input: $input) {
          ${selection}
        }
      }`;

      return await this.exec<UserAuthenticationRecoverResponse>({
        query: mutation,
        operationName: opName,
        variables: { input: args.input },
        headers: args.headers, signal: args.signal,
      }).then(r => r.UserAuthenticationRecover);
  }

  public async signUp(args: {
    input: AppSignupInputDto;
    selection: AppSignupOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppSignupOutputDto> {
    const opName = AppSignupDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppSignupOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppSignupInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppSignupResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppSignup);
  }

  public async grantSignUp(args: {
    input: AppGrantSignupInputDto;
    selection: AppGrantSignupOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppGrantSignupOutputDto> {
    const opName = AppGrantSignupDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppGrantSignupOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppGrantSignupInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppGrantSignupResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppGrantSignup);
  }

  public async grantRole(args: {
    input: UserAuthorisationCreateInputDto;
    selection: UserAuthorisationCreateOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<UserAuthorisationCreateOutputDto[]> {
    const opName = 'AppGrantRole';
    const selection = buildSelectionSetFromSchema(args.selection, UserAuthorisationCreateOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${UserAuthorisationCreateInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppGrantRoleResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppGrantRole);
  }

  public async signIn(args: {
    input: AppSigninInputDto;
    selection: AppSigninOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppSigninOutputDto> {
    const opName = AppSigninDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppSigninOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppSigninInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppSigninResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppSignin);
  }

  public async otpSignIn(args: {
    input: AppOtpSigninInputDto;
    selection: AppOtpSigninOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppOtpSigninOutputDto> {
    const opName = AppOtpSigninDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppOtpSigninOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppOtpSigninInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppOtpSigninResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppOtpSignin);
  }

  public async resetPassword(args: {
    input: AppResetPasswordInputDto;
    selection: AppResetPasswordOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppResetPasswordOutputDto> {
    const opName = AppResetPasswordDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppResetPasswordOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppResetPasswordInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppResetPasswordResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppResetPassword);
  }

  public async forgotPassword(args: {
    input: AppForgotPasswordInputDto;
    selection: AppForgotPasswordOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppForgotPasswordOutputDto> {
    const opName = AppForgotPasswordDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppForgotPasswordOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppForgotPasswordInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppForgotPasswordResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppForgotPassword);
  }

  public async recoverForgotPassword(args: {
    input: AppRecoverForgotPasswordInputDto;
    selection: AppRecoverForgotPasswordOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppRecoverForgotPasswordOutputDto> {
    const opName = AppRecoverForgotPasswordDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppRecoverForgotPasswordOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppRecoverForgotPasswordInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.execPublic<AppRecoverForgotPasswordResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppRecoverForgotPassword);
  }

  public async signOut(args?: { headers?: Record<string, string>; signal?: AbortSignal; }): Promise<boolean> {
    const opName = AppSignoutDto.metaname;
    const mutation = `mutation ${opName} { ${opName} }`;

    return await this.exec<AppSignoutResponse>({
      query: mutation,
      operationName: opName,
      headers: args?.headers, signal: args?.signal,
    }).then(r => r.AppSignout);
  }

  public async whoAmI(args: {
    selection: AppSigninOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppSigninOutputDto> {
    const opName = AppWhoAmIDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppSigninOutputSelectionSchema);
    const query = `query ${opName} { ${opName} { ${selection} } }`;

    return await this.exec<AppWhoAmIResponse>({
      query,
      operationName: opName,
      headers: args.headers, signal: args.signal,
    }).then(r => r.AppWhoAmI);
  }

  public async stepSigninUser(args: {
    input: AppStepSigninUserInputDto;
    selection: AppStepSigninUserOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppStepSigninUserOutputDto> {
    const opName = AppStepSigninUserDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppStepSigninUserOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppStepSigninUserInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppStepSigninUserResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppStepSigninUser);
  }

  public async stepSigninPassword(args: {
    input: AppStepSigninPasswordInputDto;
    selection: AppStepSigninPasswordOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppStepSigninPasswordOutputDto> {
    const opName = AppStepSigninPasswordDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppStepSigninPasswordOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppStepSigninPasswordInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppStepSigninPasswordResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppStepSigninPassword);
  }

  public async stepSigninMultiFAOption(args: {
    input: AppStepSigninMultiFAOptionInputDto;
    selection: AppStepSigninMultiFAOptionOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppStepSigninMultiFAOptionOutputDto> {
    const opName = AppStepSigninMultiFAOptionDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppStepSigninMultiFAOptionOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppStepSigninMultiFAOptionInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppStepSigninMultiFAOptionResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppStepSigninMultiFAOption);
  }

  public async stepSigninVerify(args: {
    input: AppStepSigninMultiFAVerifyInputDto;
    selection: AppStepSigninMultiFAVerifyOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppStepSigninMultiFAVerifyOutputDto> {
    const opName = AppStepSigninMultiFAVerifyDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppStepSigninMultiFAVerifyOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppStepSigninMultiFAVerifyInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppStepSigninMultiFAVerifyResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppStepSigninMultiFAVerify);
  }

  public async generateTwoFAQrCode(args: {
    input: AppGenerateTwoFAQrInputDto;
    selection: AppGenerateTwoFAQrOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppGenerateTwoFAQrOutputDto> {
    const opName = AppGenerateTwoFAQrDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppGenerateTwoFAQrOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppGenerateTwoFAQrInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppGenerateTwoFAQrResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppGenerateTwoFAQR);
  }

  public async verifyTwoFAQrCode(args: {
    input: AppVerifyTwoFAQrInputDto;
    selection: AppVerifyTwoFAQrOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppVerifyTwoFAQrOutputDto> {
    const opName = AppVerifyTwoFAQrDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppVerifyTwoFAQrOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppVerifyTwoFAQrInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppVerifyTwoFAQrResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppVerifyTwoFAQR);
  }

  public async regenrateTwoFARecoveryCode(args: {
    input: AppRegenerateTwoFARecoveryCodeInputDto;
    selection: AppRegenerateTwoFARecoveryCodeOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppRegenerateTwoFARecoveryCodeOutputDto> {
    const opName = AppRegenerateTwoFARecoveryCodeDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppRegenerateTwoFARecoveryCodeOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppRegenerateTwoFARecoveryCodeInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppRegenerateTwoFARecoveryCodeResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppRegenerateTwoFARecoveryCode);
  }

  public async verifyTwoFARecoveryCode(args: {
    input: AppVerifyTwoFARecoveryCodeInputDto;
    selection: AppVerifyTwoFARecoveryCodeOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<AppVerifyTwoFARecoveryCodeOutputDto> {
    const opName = AppVerifyTwoFARecoveryCodeDto.metaname;
    const selection = buildSelectionSetFromSchema(args.selection, AppVerifyTwoFARecoveryCodeOutputSelectionSchema);
    const mutation = `mutation ${opName}($input: ${AppVerifyTwoFARecoveryCodeInputDto.name}!) { ${opName}(input: $input) { ${selection} } }`;

    return await this.exec<AppVerifyTwoFARecoveryCodeResponse>({ query: mutation, operationName: opName, variables: { input: args.input }, headers: args.headers, signal: args.signal }).then(r => r.AppVerifyTwoFARecoveryCode);
  }

}
