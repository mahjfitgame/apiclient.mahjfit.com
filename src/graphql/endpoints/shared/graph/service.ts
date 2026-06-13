import { buildSelectionSetFromSchema } from '../../../libs/selection';
import { GraphqlBase } from '../../../libs/base';
import {
  GraphHelloDto,
  GraphLoginInputDto,
  GraphLoginOutputDto,
  GraphRefreshJWTDto,
  GraphResetPasswordDto,
  GraphResetPasswordInputDto,
  GraphResetPasswordOutputDto,
  GraphSigninDto,
  GraphSignoutDto,
  GraphSignupDto,
  GraphSignupInputDto,
  GraphSignupOutputDto,
  GraphWhoAmIDto,
} from './dto';

import {
  GraphLoginOutputSelectionSchema,
  GraphRefreshJWTInputDto,
  GraphResetPasswordOutputSelectionSchema,
  GraphSignupOutputSelectionSchema,
} from './dto';

import {
  GraphHelloResponse,
  GraphRefreshJWTResponse,
  GraphResetPasswordResponse,
  GraphSigninResponse,
  GraphSignoutResponse,
  GraphSignupResponse,
  GraphWhoAmIResponse,
} from './dto';

export class GraphService extends GraphqlBase {
  public async hello(args?: { headers?: Record<string, string>; signal?: AbortSignal; }): Promise<string> {
    const opName = GraphHelloDto.metaname;

    const query = `query ${opName} { ${opName} }`;

    return await this.execPublic<GraphHelloResponse>({
      query,
      operationName: opName,
      headers: args?.headers, signal: args?.signal,
    }).then(r => r.GraphHello);
  }

  public async signup(args: {
    input: GraphSignupInputDto;
    selection: GraphSignupOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<GraphSignupOutputDto> {
    const opName = GraphSignupDto.metaname;

    const selection = buildSelectionSetFromSchema(args.selection, GraphSignupOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${GraphSignupInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.execPublic<GraphSignupResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.GraphSignup);
  }

  public async signin(args: {
    input: GraphLoginInputDto;
    selection: GraphLoginOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<GraphLoginOutputDto> {
    const opName = GraphSigninDto.metaname;

    const selection = buildSelectionSetFromSchema(args.selection, GraphLoginOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${GraphLoginInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.execPublic<GraphSigninResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.GraphSignin);
  }

  public async refreshJWT(args: {
    input: GraphRefreshJWTInputDto;
    selection: GraphLoginOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<GraphLoginOutputDto> {
    const opName = GraphRefreshJWTDto.metaname;

    const selection = buildSelectionSetFromSchema(args.selection, GraphLoginOutputSelectionSchema);

    const mutation = `mutation ${opName}($jwtRefreshToken: String!) {
      ${opName}(jwtRefreshToken: $jwtRefreshToken) {
        ${selection}
      }
    }`;
    
    return await this.execPublic<GraphRefreshJWTResponse>({
      query: mutation,
      operationName: opName,
      variables: { jwtRefreshToken: args.input.jwtRefreshToken },
      headers: args.headers, signal: args.signal,
    }).then(r => r.GraphRefreshJWT);
  }

  public async resetPassword(args: {
    input: GraphResetPasswordInputDto;
    selection: GraphResetPasswordOutputSelectionSchema;
    headers?: Record<string, string>; signal?: AbortSignal;
  }): Promise<GraphResetPasswordOutputDto> {
    const opName = GraphResetPasswordDto.metaname;

    const selection = buildSelectionSetFromSchema(args.selection, GraphResetPasswordOutputSelectionSchema);

    const mutation = `mutation ${opName}($input: ${GraphResetPasswordInputDto.name}!) {
      ${opName}(input: $input) {
        ${selection}
      }
    }`;

    return await this.execPublic<GraphResetPasswordResponse>({
      query: mutation,
      operationName: opName,
      variables: { input: args.input },
      headers: args.headers, signal: args.signal,
    }).then(r => r.GraphResetPassword);
  }

  public async whoAmI(args: { selection: GraphSignupOutputSelectionSchema; headers?: Record<string, string>; signal?: AbortSignal; }): Promise<GraphSignupOutputDto> {
    const opName = GraphWhoAmIDto.metaname;

    const selection = buildSelectionSetFromSchema(args.selection, GraphSignupOutputSelectionSchema);

    const query = `query ${opName} {
      ${opName} {
        ${selection}
      }
    }`;

    return await this.exec<GraphWhoAmIResponse>({
      query,
      operationName: opName,
      headers: args.headers, signal: args.signal,
    }).then(r => r.GraphWhoAmI);
  }

  public async signout(args?: { headers?: Record<string, string>; signal?: AbortSignal; }): Promise<boolean> {
    const opName = GraphSignoutDto.metaname;

    const mutation = `mutation ${opName} { ${opName} }`;

    return await this.exec<GraphSignoutResponse>({
      query: mutation,
      operationName: opName,
      headers: args?.headers, signal: args?.signal,
    }).then(r => r.GraphSignout);
  }
}
