import { RestTransport } from "../transports/rest.transport";
import { GraphqlApiAuth } from "./graphql.api.auth";
import { AuthApiLike, AuthApiLikeObj } from "./type";

export class RestApiAuth implements AuthApiLike {
    constructor(transport: RestTransport) {
        
    }

    public async refresh(jwtRefreshToken: string): Promise<AuthApiLikeObj> {
    return {} as AuthApiLikeObj;
  }
    
}