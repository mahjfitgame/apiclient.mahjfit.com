import {
  GraphLoginInputDto,
  GraphLoginOutputDto,
  GraphService,
  GraphSignupInputDto,
} from '../graphql/endpoints/shared/graph';
import { GraphqlTransport } from '../transports/graphql.transport';
import { AuthApiLike, AuthApiLikeObj } from './type';

export class GraphqlApiAuth implements AuthApiLike {
  private readonly graphService: GraphService;

  constructor(transport: GraphqlTransport) {
    this.graphService = new GraphService(transport);
  }

  public async signin(input: GraphLoginInputDto): Promise<GraphLoginOutputDto> {
    return await this.graphService.signin({
      input: input as GraphLoginInputDto,
      selection: {
        id: true,
        role_id: true,
        username: true,
        email: true,
        jwt_access_token: true,
        jwt_refresh_token: true,
        suspended: true,
        created: true
      },
    });
  }

  public async signup(input: GraphSignupInputDto): Promise<GraphLoginOutputDto> {
    return this.graphService.signup({
      input: input as GraphSignupInputDto,
      selection: {
        username: true,
        email: true,
        jwt_access_token: true,
        jwt_refresh_token: true,
        created: true,
      },
    });
  }

  // must provide specific return type
  public async refresh(jwtRefreshToken: string): Promise<AuthApiLikeObj> {
    const resp = await this.graphService.refreshJWT({
      input: {
        jwtRefreshToken,
      },
      selection: {
        jwt_access_token: true,
        jwt_refresh_token: true,
      },
    });

    return {
      jwt_access_token: resp.jwt_access_token,
      jwt_refresh_token: resp.jwt_refresh_token,
    } as AuthApiLikeObj;
  }
}
