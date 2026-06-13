import type { WsTransport } from '../../../transports/ws.transport';
import { BusinessGraphqlWsDomainAccessors } from '../business/ws.domain';
import { UserWs } from './folk/user/ws';
import type { SharedGraphqlWsModuleFactories } from './ws.factory';


/** Bind shared GraphQL realtime modules to the owning GraphQL WsTransport. */
export function createSharedGraphqlWsFactories(
  transport: WsTransport,
): SharedGraphqlWsModuleFactories {
  return {
    user: () => new UserWs(transport),
  };
}

/** Typed accessors for shared GraphQL realtime modules. */
export abstract class SharedGraphqlWsDomainAccessors extends BusinessGraphqlWsDomainAccessors {
  /** Typed websocket module for shared user events. */
  public get user(): UserWs {
    return this.reg.get<UserWs>('user');
  }
}
