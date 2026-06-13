import { AuthSession } from '../auth/auth.session';
import type {
  ApiOptions,
  JwtTokenPair,
  WsConnectOptions,
  WsConnectionState,
  WsSocket,
  WsSocketFactoryCreateArgs,
  WsSocketOptions,
  WsOptions,
} from '../utility/types';
import { WsEventHandler, WsEventListener, WsUnsubscribeType } from '../utility/types';

type WsClientOptions = Omit<WsOptions, 'baseUrl'>;
type WsDomain = 'graphql' | 'rest';

export class WsClient {
  private readonly stateListeners = new Set<(state: WsConnectionState) => void>();
  private readonly bufferedListeners: WsEventListener[] = [];

  private socket: WsSocket | null = null;
  private state: WsConnectionState = 'idle';

  constructor(
    private readonly domain: WsDomain,
    private readonly baseUrl: string,
    private readonly wsOptions: WsClientOptions | undefined,
    private readonly authSession: AuthSession,
    private readonly config?: ApiOptions['config'],
  ) {}

  public get connectionState(): WsConnectionState {
    return this.state;
  }

  /** Allow clients to check the ws state connecting, connectedm idele, disconneced, reconnecting etc.. */
  public onStateChange(handler: (state: WsConnectionState) => void): () => void {
    this.stateListeners.add(handler);
    return () => {
      this.stateListeners.delete(handler);
    };
  }

  /** Connect to the websocket */
  public async connect(_options?: WsConnectOptions): Promise<void> {
    if (!this.baseUrl?.trim()) throw new Error('[BfwApiSdk:WS] Ws baseUrl is not configured.');
    if (!this.wsOptions) throw new Error('[BfwApiSdk:WS] Ws options are not configured.');

    if (this.socket?.connected) return;

    this.setState('connecting');

    try {
      await this.connectOnce();
    } catch (err) {
      // Log the error for debugging
      // eslint-disable-next-line no-console
      console.error('[BfwApiSdk:WS] connect error:', err);

      if (!this.canRefreshAfterConnectError(err)) {
        // If error is not recoverable, throw a more descriptive error if possible
        if (err && typeof err === 'object' && 'message' in err && err.message) {
          throw new Error(`[BfwApiSdk:WS] Authentication error: ${err.message}`);
        }
        throw err;
      }

      await this.authSession.refresh();
      await this.connectOnce();
    }
  }

  private async connectOnce(): Promise<void> {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    const socket = await this.createSocket();

    socket.on('connect', () => {
      this.setState('connected');
    });

    socket.on('disconnect', () => {
      this.setState('disconnected');
    });

    socket.on('connect_error', () => {
      this.setState('reconnecting');
    });

    this.socket = socket;

    this.flushBufferedListeners();

    socket.connect();

    await new Promise<void>((resolve, reject) => {
      const onConnect = () => {
        socket.off('connect', onConnect);
        socket.off('connect_error', onError);
        resolve();
      };

      const onError = (err: unknown) => {
        socket.off('connect', onConnect);
        socket.off('connect_error', onError);
        reject(err instanceof Error ? err : new Error('[BfwApiSdk:WS] Failed to connect web socket.'));
      };

      socket.on('connect', onConnect);
      socket.on('connect_error', onError);
    });
  }

  /** Disconnect from the websocket */
  public disconnect(): void {
    if (!this.socket) {
      this.setState('disconnected');
      return;
    }

    this.socket.disconnect();
    this.socket = null;
    this.setState('disconnected');
  }

  /** emit an event */
  public emit(event: string, payload?: unknown): void {
    if (!this.socket) {
      throw new Error('[BfwApiSdk:WS] Socket is not connected. Connect the owning GraphQL or REST ws domain first.');
    }

    if (this.config?.logRequest) {
      console.log(`[WS PUBLISH] [BfwApiSdk:${this.domain}:ws] ${event} @ ${Date.now()}`);
      console.dir(
        {
          event,
          payload,
        },
        { depth: null, colors: true },
      );
    }

    this.socket.emit(event, payload);
  }

  /** subscribe to an event */
  public subscribe(event: string, handler: WsEventHandler): WsUnsubscribeType {
    const loggedHandler: WsEventHandler = (payload) => {
      if (this.config?.logResponse) {
        console.log(`[WS SUBSCRIBE] [BfwApiSdk:${this.domain}:ws] ${event} @ ${Date.now()}`);
        console.dir(
          {
            event,
            response: payload,
          },
          { depth: null, colors: true },
        );
      }

      handler(payload);
    };

    if (this.socket) {
      this.socket.on(event, loggedHandler);
    } else {
      this.bufferedListeners.push({ event, handler: loggedHandler });
    }

    return () => {
      if (this.socket) {
        this.socket.off(event, loggedHandler);
      }

      const index = this.bufferedListeners.findIndex((x) => x.event === event && x.handler === loggedHandler);
      if (index >= 0) this.bufferedListeners.splice(index, 1);
    };
  }

  public resolveEventName(suffix: string): string {
    if (!this.wsOptions?.eventPrefix?.trim()) return suffix;
    return `${this.wsOptions.eventPrefix}.${suffix}`;
  }

  private flushBufferedListeners(): void {
    if (!this.socket) return;
    this.bufferedListeners.forEach(({ event, handler }) => {
      this.socket?.on(event, handler);
    });
    this.bufferedListeners.length = 0;
  }

  private async createSocket(): Promise<WsSocket> {
    if (!this.baseUrl?.trim()) {
      throw new Error('[BfwApiSdk:WS] WS baseUrl is not configured.');
    }

    if (!this.wsOptions) {
      throw new Error('[BfwApiSdk:WS] WS options are not configured.');
    }

    const factory = this.wsOptions.socketFactory;
    if (!factory) {
      throw new Error('[BfwApiSdk:WS] WS.socketFactory is required (e.g. wrap socket.io-client io()).');
    }

    const socketArgs: WsSocketFactoryCreateArgs = {
      url: this.baseUrl,
      options: await this.buildSocketOptions(),
    };

    return factory(socketArgs);
  }

  private async buildSocketOptions(): Promise<WsSocketOptions> {
    if (!this.wsOptions) return {};

    const token = await this.getAccessToken();
    const tokenPrefix = this.wsOptions.auth?.socketAuthTokenPrefix?.trim() || 'Bearer';

    return {
      path: this.wsOptions.socket?.path || "/socket.io",
      transports: this.wsOptions.socket?.transports || ["polling", "websocket"],
      withCredentials: this.wsOptions.socket?.withCredentials ?? true,
      auth: {
        ...(this.wsOptions.socket?.auth ?? {}),
        ...(token ? { token: `${tokenPrefix} ${token}` } : {}),
      },
    };
  }

  private async getAccessToken(): Promise<string | null> {
    const sessionToken = this.authSession?.getTokens()?.jwt_access_token?.trim();
    if (sessionToken) return sessionToken;
    return null;
  }

  private canRefreshAfterConnectError(err: unknown): boolean {
    if (!this.authSession)
      return false;

    const refreshToken = this.authSession.getTokens()?.jwt_refresh_token?.trim();
    if (!refreshToken) return false;

    // Defensive: handle null/undefined or non-object errors
    let message = '';
    if (err && typeof err === 'object' && 'message' in err && typeof (err as any).message === 'string') {
      message = (err as any).message.toLowerCase();
    } else if (typeof err === 'string') {
      message = err.toLowerCase();
    } else {
      message = String(err ?? '').toLowerCase();
    }

    // If error is null/undefined or message is empty, do not attempt refresh
    if (!message) return false;

    return (
      message.includes('jwt') ||
      message.includes('token') ||
      message.includes('auth') ||
      message.includes('unauthorized') ||
      message.includes('expired')
    );
  }

  private setState(next: WsConnectionState): void {
    this.state = next;
    this.stateListeners.forEach((listener) => listener(next));
  }
}
