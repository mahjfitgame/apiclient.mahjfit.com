import type {
  WsConnectOptions,
  WsConnectionState,
  WsEventHandler,
  WsUnsubscribeType,
} from '../utility/types';
import { WsClient } from './ws.client';

/** Transport facade for one API domain's realtime connection. */
export class WsTransport {
  constructor(
    private readonly client: WsClient,
  ) {}

  public get connectionState(): WsConnectionState {
    return this.client.connectionState;
  }

  public onStateChange(
    handler: (state: WsConnectionState) => void,
  ): WsUnsubscribeType {
    return this.client.onStateChange(handler);
  }

  public connect(options?: WsConnectOptions): Promise<void> {
    return this.client.connect(options);
  }

  public disconnect(): void {
    this.client.disconnect();
  }

  public emit(event: string, payload?: unknown): void {
    this.client.emit(event, payload);
  }

  public subscribe(
    event: string,
    handler: WsEventHandler,
  ): WsUnsubscribeType {
    return this.client.subscribe(event, handler);
  }

  public resolveEventName(suffix: string): string {
    return this.client.resolveEventName(suffix);
  }
}
