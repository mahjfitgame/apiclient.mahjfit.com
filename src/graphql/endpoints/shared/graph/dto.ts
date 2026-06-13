import { GraphEntity, GraphSelectionSchema } from './entity';
import { HelloArtefact, RefreshJWTArtefact, ResetPasswordArtefact, SigninArtefact, SignoutArtefact, SignupArtefact, WhoAmIArtefact } from './type';

export class GraphDto extends GraphEntity {}

export class GraphSignupDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${SignupArtefact}`;
}

export class GraphSignupInputDto implements GraphSignupDto {
  declare username: string;
  declare identify: string;
  declare email: string;
}

export class GraphSignupOutputDto {
  declare username?: string;
  declare email?: string;
  declare jwt_access_token?: string;
  declare jwt_refresh_token?: string;
  declare created?: string;
}
export class GraphSignupOutputSelectionSchema {
  username?: boolean = false;
  email?: boolean = false;
  jwt_access_token?: boolean = false;
  jwt_refresh_token?: boolean = false;
  created?: boolean = false;
}

export class GraphSigninDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${SigninArtefact}`;
}

export class GraphLoginInputDto implements GraphSigninDto {
  declare username: string;
  declare identify: string;
}

export class GraphLoginOutputDto extends GraphEntity {

  /**
   * Not allowed to search by this field
   * **/
  fr_api_endpoint_auth_files? = undefined;
}
export class GraphLoginOutputSelectionSchema extends GraphSelectionSchema {
  /**
   * Not allowed to search by this field
   * **/
  fr_api_endpoint_auth_files? = undefined;
}

export class GraphRefreshJWTDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${RefreshJWTArtefact}`;
}

export class GraphRefreshJWTInputDto {
  declare jwtRefreshToken: string;
}

export class GraphResetPasswordDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${ResetPasswordArtefact}`;
}

export class GraphResetPasswordInputDto extends GraphResetPasswordDto {
  declare username: string;
  declare identify: string;
  declare jwt_refresh_token: string;
}

export class GraphResetPasswordOutputDto extends GraphEntity {
}
export class GraphResetPasswordOutputSelectionSchema extends GraphSelectionSchema {
}

export class GraphSignoutDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${SignoutArtefact}`;
}

export class GraphHelloDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${HelloArtefact}`;
}

export class GraphHelloOutputDto {
  declare msg: string;
}

export class GraphWhoAmIDto extends GraphDto {
  static metaname: string = `${GraphEntity.metaname}${WhoAmIArtefact}`;
}

export type GraphSignupResponse = { GraphSignup: GraphSignupOutputDto };
export type GraphSigninResponse = { GraphSignin: GraphLoginOutputDto };
export type GraphRefreshJWTResponse = { GraphRefreshJWT: GraphLoginOutputDto };
export type GraphResetPasswordResponse = { GraphResetPassword: GraphResetPasswordOutputDto };
export type GraphWhoAmIResponse = { GraphWhoAmI: GraphSignupOutputDto };
export type GraphSignoutResponse = { GraphSignout: boolean };
export type GraphHelloResponse = { GraphHello: string };