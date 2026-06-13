// file: apps/shared-app/src/folk/user-auth/public/resolver.ts

import { DataValidationPipe, GraphQLBodyContext } from "@libs/library-app";
import { CurrentStatefulAuthUser, UserAuthenticationService } from "../service";
import { UserAuthenticationEntity } from "../entity";
import { Query, Args, Context, Mutation, Resolver, Info } from "@nestjs/graphql";
import { AppForgotPasswordInputDto, AppForgotPasswordOutputDto, AppGrantSignupInputDto, AppGrantSignupOutputDto, AppOtpSigninInputDto, AppOtpSigninOutputDto, AppRecoverForgotPasswordInputDto, AppRecoverForgotPasswordOutputDto, AppResetPasswordInputDto, AppResetPasswordOutputDto, AppSigninInputDto, AppSigninOutputDto, AppSignupInputDto, AppSignupOutputDto, AppStepSigninMultiFAOptionInputDto, AppStepSigninMultiFAOptionOutputDto, AppStepSigninPasswordInputDto, AppStepSigninPasswordOutputDto, AppStepSigninUserDto, AppStepSigninUserInputDto, AppStepSigninUserOutputDto, AppStepSigninMultiFAVerifyInputDto, AppStepSigninMultiFAVerifyOutputDto, AppGenerateTwoFAQrOutputDto, AppGenerateTwoFAQrInputDto, AppVerifyTwoFAQrOutputDto, AppVerifyTwoFAQrInputDto, AppRegenerateTwoFARecoveryCodeOutputDto, AppRegenerateTwoFARecoveryCodeInputDto, AppVerifyTwoFARecoveryCodeOutputDto, AppVerifyTwoFARecoveryCodeInputDto } from "../public/dto";
import { GraphQLResolveInfo } from "graphql";
import { UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto } from "../../user-authorisation/dto";
import { JWTTokenUserDataType } from "../type";

@Resolver(() => UserAuthenticationEntity)
export class UserAuthenticationPublicResolver{

constructor(
    private readonly service: UserAuthenticationService,
    private readonly validation: DataValidationPipe,
) {}

  @Mutation(() => AppSignupOutputDto, {
    name: 'AppSignup', 
    description: 'Signup to get access restricted area. Required any one username or primary_email or primary_mobile.'
  })
  async signUp(
    @Context() ctx: any,

    @Args('input') 
    input: AppSignupInputDto,

    @GraphQLBodyContext() selection: AppSignupOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppSignupOutputDto> {
    const resp =  this.service.signUp(input, selection, info, ctx) as any as AppSignupOutputDto;
    
    return resp;
  }

  @Mutation(() => AppGrantSignupOutputDto, {
    name: 'AppGrantSignup', 
    description: 'Grant Signup to get access restricted area. Required any one username or primary_email or primary_mobile.'
  })
  async grantSignUp(
    @Context() ctx: any,

    @Args('input') 
    input: AppGrantSignupInputDto,

    @GraphQLBodyContext() selection: AppGrantSignupOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppGrantSignupOutputDto> {
    const resp =  this.service.grantSignUp(input, selection, info, ctx) as any as AppGrantSignupOutputDto;
    
    return resp;
  }

  // ████ GrantRole() ██████████████████████████████████████
  
  @Mutation(() => [UserAuthorisationCreateOutputDto], {
    name:  `AppGrantRole`, 
    description: `Grants a new role to an existing user.`
  })
  async create(
    @Context() ctx: any,

    @Args('input')
    input: UserAuthorisationCreateInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthorisationCreateOutputDto[]> {
    
    return this.service.grantRole(input, selection, info, ctx);
  }

  @Mutation(() => AppSigninOutputDto, {
    name: 'AppSignin', 
    description: 'Signin to get your account access.'
  })
  async signIn(
    @Context() ctx: any,

    @Args('input') 
    input: AppSigninInputDto,

    @GraphQLBodyContext() selection: AppSigninOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppSigninOutputDto> {
    return await this.service.signIn(input, selection, info, ctx);
  }

  @Mutation(() => AppOtpSigninOutputDto, {
    name: 'AppOtpSignin', 
    description: 'Signin using OTP to get your account access.'
  })
  async otpSignIn(
    @Context() ctx: any,

    @Args('input') 
    input: AppOtpSigninInputDto,

    @GraphQLBodyContext() selection: AppOtpSigninOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppOtpSigninOutputDto> {
    return await this.service.otpSignIn(input, selection, info, ctx);
  }

  @Mutation(() => AppResetPasswordOutputDto, {
    name: 'AppResetPassword', 
    description: 'Reset your password.'
  })
  async resetPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppResetPasswordInputDto,

    @GraphQLBodyContext() selection: AppResetPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppResetPasswordOutputDto> {
    return await this.service.resetPassword(input, selection, info, ctx);
  }

  @Mutation(() => AppForgotPasswordOutputDto, {
    name: 'AppForgotPassword', 
    description: 'Forgot password.'
  })
  async forgotPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppForgotPasswordInputDto,

    @GraphQLBodyContext() selection: AppForgotPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppForgotPasswordOutputDto> {
    return await this.service.forgotPassword(input, selection, info, ctx);
  }

  @Mutation(() => AppRecoverForgotPasswordOutputDto, {
    name: 'AppRecoverForgotPassword', 
    description: 'Recover Forgot password.'
  })
  async recoverForgotPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppRecoverForgotPasswordInputDto,

    @GraphQLBodyContext() selection: AppRecoverForgotPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppRecoverForgotPasswordOutputDto> {
    return await this.service.recoverForgotPassword(input, selection, info, ctx);
  }

  @Mutation(() => Boolean, {
    name: 'AppSignout', 
    description: 'Signout and remove session for the current state. Next time login to regain access.'
  })
  signOut(
    @Context() ctx: any,
    
    // stateful session user info
    @CurrentStatefulAuthUser() csauser: JWTTokenUserDataType,

    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<boolean> {
    return this.service.signOut(csauser, selection, info, ctx);
  }

  @Query(() => AppSigninOutputDto, {
    name: 'AppWhoAmI', 
    description: 'Get the current user info fron session.'
  })
  async whoAmI(
    @Context() ctx: any,
    
    // stateful session user info
    @CurrentStatefulAuthUser() csauser: JWTTokenUserDataType,
    
    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<AppSigninOutputDto> {
    return await this.service.whoAmI(csauser, selection, info, ctx);
  }

// # // # // # // # // # // # // # // # // # // # // # // # // #
// # // # // # // # // # // # // # // # // # // # // # // # // #
// # // # // # // # // # // # // # // # // # // # // # // # // #

/**
 * █████████████████████████████████████████████████████████████
 * █ APP STEP SIGNIN ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

  @Mutation(() => AppStepSigninUserOutputDto, {
    name: 'AppStepSigninUser', 
    description: 'Step user signin to get your account access.'
  })
  async stepSigninUser(
    @Context() ctx: any,

    @Args('input') 
    input: AppStepSigninUserInputDto,

    @GraphQLBodyContext() selection: AppStepSigninUserOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppStepSigninUserOutputDto> {
    return await this.service.stepSigninUser(input, selection, info, ctx);
  }

  @Mutation(() => AppStepSigninPasswordOutputDto, {
    name: 'AppStepSigninPassword', 
    description: 'Step password signin to get your account access.'
  })
  async stepSigninPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppStepSigninPasswordInputDto,

    @GraphQLBodyContext() selection: AppStepSigninPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppStepSigninPasswordOutputDto> {
    return await this.service.stepSigninPassword(input, selection, info, ctx);
  }
  
  @Mutation(() => AppStepSigninMultiFAOptionOutputDto, {
    name: 'AppStepSigninMultiFAOption', 
    description: 'Step Multifao signin to get your account access.'
  })
  async stepSigninMultiFAOption(
    @Context() ctx: any,

    @Args('input') 
    input: AppStepSigninMultiFAOptionInputDto,

    @GraphQLBodyContext() selection: AppStepSigninMultiFAOptionOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppStepSigninMultiFAOptionOutputDto> {
    return await this.service.stepSigninMultiFAOption(input, selection, info, ctx);
  }
  
  @Mutation(() => AppStepSigninMultiFAVerifyOutputDto, {
    name: 'AppStepSigninMultiFAVerify', 
    description: 'Step password signin to get your account access.'
  })
  async stepSigninVerify(
    @Context() ctx: any,

    @Args('input') 
    input: AppStepSigninMultiFAVerifyInputDto,

    @GraphQLBodyContext() selection: AppStepSigninMultiFAVerifyOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppSigninOutputDto> {
    return await this.service.stepSigninVerify(input, selection, info, ctx);
  }

/**
 * █████████████████████████████████████████████████████████████
 * █ TwoFA RESOLVER ████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

  @Mutation(() => AppGenerateTwoFAQrOutputDto, {
    name: 'AppGenerateTwoFAQR', 
    description: 'Generate TwoFA QR code for app signin step.'
  })
  async generateTwoFAQrCode(
    @Context() ctx: any,

    @Args('input') 
    input: AppGenerateTwoFAQrInputDto,

    @GraphQLBodyContext() selection: AppGenerateTwoFAQrOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppGenerateTwoFAQrOutputDto> {
    return await this.service.generateTwoFAQrCode(input, selection, info, ctx);
  }

  @Mutation(() => AppVerifyTwoFAQrOutputDto, {
    name: 'AppVerifyTwoFAQR', 
    description: 'Verify Twofa QR code for app signin step.'
  })
  async verifyTwoFAQrCode(
    @Context() ctx: any,

    @Args('input') 
    input: AppVerifyTwoFAQrInputDto,

    @GraphQLBodyContext() selection: AppVerifyTwoFAQrOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppVerifyTwoFAQrOutputDto> {
    return await this.service.verifyTwoFAQrCode(input, selection, info, ctx);
  }

  @Mutation(() => AppRegenerateTwoFARecoveryCodeOutputDto, {
    name: 'AppRegenerateTwoFARecoveryCode', 
    description: 'Regenerate Twofa recovery code for app signin step.'
  })
  async regenrateTwoFARecoveryCode(
    @Context() ctx: any,

    @Args('input') 
    input: AppRegenerateTwoFARecoveryCodeInputDto,

    @GraphQLBodyContext() selection: AppRegenerateTwoFARecoveryCodeOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppRegenerateTwoFARecoveryCodeOutputDto> {
    return await this.service.regenrateTwoFARecoveryCode(input, selection, info, ctx);
  }

  @Mutation(() => AppVerifyTwoFARecoveryCodeOutputDto, {
    name: 'AppVerifyTwoFARecoveryCode', 
    description: 'Verify TwoFA recovery code for app signin step.'
  })
  async verifyTwoFARecoveryCode(
    @Context() ctx: any,

    @Args('input') 
    input: AppVerifyTwoFARecoveryCodeInputDto,

    @GraphQLBodyContext() selection: AppVerifyTwoFARecoveryCodeOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppVerifyTwoFARecoveryCodeOutputDto> {
    return await this.service.verifyTwoFARecoveryCode(input, selection, info, ctx);
  }

}



