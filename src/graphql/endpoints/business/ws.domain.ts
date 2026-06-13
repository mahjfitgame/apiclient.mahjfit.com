import type { LazyRegistry } from '../../../sdk/lazy';
import type { WsTransport } from '../../../transports/ws.transport';
import type { BusinessGraphqlWsModuleFactories } from './ws.factory';

/** Bind business GraphQL realtime modules to the owning GraphQL WsTransport. */
export function createBusinessGraphqlWsFactories(
  _transport: WsTransport,
): BusinessGraphqlWsModuleFactories {
  return {};
}

/** Typed accessors for business GraphQL realtime modules. */
export abstract class BusinessGraphqlWsDomainAccessors {
  protected abstract readonly reg: LazyRegistry;

  // Add typed business realtime getters here when modules are registered.
}
