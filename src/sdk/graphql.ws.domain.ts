import type { AuthSession } from '../auth/auth.session';
import { createBusinessGraphqlWsFactories } from '../graphql/endpoints/business/ws.domain';
import {
  createSharedGraphqlWsFactories,
  SharedGraphqlWsDomainAccessors,
} from '../graphql/endpoints/shared/ws.domain';
import type {
  GraphqlWsModuleFactories,
  GraphqlWsModuleToken,
} from '../graphql/endpoints/ws.factory';
import type {
  ApiOptions,
  WsConnectOptions,
  WsConnectionState,
  WsEventHandler,
  WsOptions,
  WsUnsubscribeType,
} from '../utility/types';
import { WsClient } from '../transports/ws.client';
import { WsTransport } from '../transports/ws.transport';
import { LazyRegistry } from './lazy';

/** Realtime connection and typed modules owned by the GraphQL SDK domain. */
export class GraphqlWsDomain extends SharedGraphqlWsDomainAccessors {
  /** Low-level websocket transport for advanced/raw socket control. */
  public readonly transport: WsTransport;
  protected readonly reg = new LazyRegistry();
  private readonly factories: GraphqlWsModuleFactories;

  constructor(
    opts: WsOptions | undefined,
    config: ApiOptions['config'] | undefined,
    /** Domain-scoped auth session used for websocket auth refresh logic. */
    public readonly authSession: AuthSession,
  ) {
    super();
    const baseUrl = opts?.baseUrl ?? '';
    const client = new WsClient('graphql', baseUrl, opts, authSession, config);
    this.transport = new WsTransport(client);

    this.factories = {
      ...createSharedGraphqlWsFactories(this.transport),
      ...createBusinessGraphqlWsFactories(this.transport),
    };
  }

  /** Latest websocket connection state for the GraphQL domain. */
  public get connectionState(): WsConnectionState {
    return this.transport.connectionState;
  }

  /** Listen for realtime connection state changes such as connected, disconnected, or reconnecting. */
  public onStateChange(
    handler: (state: WsConnectionState) => void,
  ): WsUnsubscribeType {
    return this.transport.onStateChange(handler);
  }

  /** Open the GraphQL websocket connection for this domain. */
  public connect(options?: WsConnectOptions): Promise<void> {
    return this.transport.connect(options);
  }

  /** Close the GraphQL websocket connection for this domain. */
  public disconnect(): void {
    this.transport.disconnect();
  }

  /** Send a raw GraphQL websocket event through the active socket connection. */
  public emit(event: string, payload?: unknown): void {
    this.transport.emit(event, payload);
  }

  /** Subscribe to a raw GraphQL websocket event and receive payload updates. */
  public subscribe(
    event: string,
    handler: WsEventHandler,
  ): WsUnsubscribeType {
    return this.transport.subscribe(event, handler);
  }

  /** Resolve a typed GraphQL websocket event name using the configured prefix, if any. */
  public resolveEventName(suffix: string): string {
    return this.transport.resolveEventName(suffix);
  }

  /**
   * Lazily create a GraphQL realtime module (if not already created) and cache it.
   * Call this before accessing the typed getter for that module.
   */
  public use<K extends keyof GraphqlWsModuleFactories>(
    token: GraphqlWsModuleToken<K, ReturnType<GraphqlWsModuleFactories[K]>>,
  ): ReturnType<GraphqlWsModuleFactories[K]> {
    return this.reg.require(
      String(token.key),
      this.factories[token.key],
    ) as ReturnType<GraphqlWsModuleFactories[K]>;
  }
}
