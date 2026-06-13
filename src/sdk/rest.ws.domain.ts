import type { AuthSession } from '../auth/auth.session';
import type {
  RestWsModuleFactories,
  RestWsModuleToken,
} from '../rest/endpoints/ws.factory';
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

/** Realtime connection and typed modules owned by the REST SDK domain. */
export class RestWsDomain {
  /** Low-level websocket transport for advanced/raw socket control. */
  public readonly transport: WsTransport;
  private readonly reg = new LazyRegistry();
  private readonly factories: RestWsModuleFactories = {};

  constructor(
    opts: WsOptions | undefined,
    config: ApiOptions['config'] | undefined,
    public readonly authSession: AuthSession,
  ) {
    const baseUrl = opts?.baseUrl ?? '';
    const client = new WsClient('rest', baseUrl, opts, authSession, config);
    this.transport = new WsTransport(client);
  }

  /** Latest websocket connection state for the REST domain. */
  public get connectionState(): WsConnectionState {
    return this.transport.connectionState;
  }

  /** Listen for realtime connection state changes such as connected, disconnected, or reconnecting. */
  public onStateChange(
    handler: (state: WsConnectionState) => void,
  ): WsUnsubscribeType {
    return this.transport.onStateChange(handler);
  }

  /** Open the REST websocket connection for this domain. */
  public connect(options?: WsConnectOptions): Promise<void> {
    return this.transport.connect(options);
  }

  /** Close the REST websocket connection for this domain. */
  public disconnect(): void {
    this.transport.disconnect();
  }

  /** Send a raw REST websocket event through the active socket connection. */
  public emit(event: string, payload?: unknown): void {
    this.transport.emit(event, payload);
  }

  /** Subscribe to a raw REST websocket event and receive payload updates. */
  public subscribe(
    event: string,
    handler: WsEventHandler,
  ): WsUnsubscribeType {
    return this.transport.subscribe(event, handler);
  }

  /** Resolve a typed REST websocket event name using the configured prefix, if any. */
  public resolveEventName(suffix: string): string {
    return this.transport.resolveEventName(suffix);
  }

  /** Lazily create and cache a registered REST realtime module. */
  public use<K extends keyof RestWsModuleFactories>(
    token: RestWsModuleToken<
      K,
      ReturnType<RestWsModuleFactories[K]>
    >,
  ): ReturnType<RestWsModuleFactories[K]> {
    return this.reg.require(
      String(token.key),
      this.factories[token.key],
    ) as ReturnType<RestWsModuleFactories[K]>;
  }

  // Add typed getters here when REST websocket modules are registered.
}
