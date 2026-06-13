import { WsUnsubscribeType } from '../../utility';
import { WsTransport } from '../../transports/ws.transport';
import { WS_EVENT_JOIN_ROOM, WS_EVENT_LEAVE_ROOM, WS_ROOM_KEY_GROUP, WS_ROOM_KEY_SUBGROUP, WS_ROOM_KEY_SUBJECT } from './constant';

/**
 * Reusable base class for typed websocket event modules.
 *
 * Why this exists:
 * - keeps event names private to each module
 * - centralizes payload normalization
 * - makes new modules easy to add with consistent patterns
 *
 * Event modules share their owning API domain's transport and do not own
 * connection state themselves.
 */
export abstract class WsBase {
  constructor(public readonly transport: WsTransport) {}

  protected abstract MODULE_MAIN_SLUG: string;

  protected getRoom(roomType: string, roomId: number | string): string {
      const room = `${this.MODULE_MAIN_SLUG}:${roomType}:${roomId}`;
      return room;  
  }

  /** subscribe to an event */
  protected subscribeRaw(
    event: string,
    handler: (payload: unknown) => void,
  ): WsUnsubscribeType {
    return this.transport.subscribe(
      this.transport.resolveEventName(event),
      handler,
    );
  }

  /** subscribe to an event with DTO transformation */
  protected subscribe<T extends object>(
    event: string,
    dtoClass: new () => T,
    handler: (data: T) => void,
  ): WsUnsubscribeType {
    return this.subscribeRaw(event, (payload) => {
      handler(this.toDto(dtoClass, payload));
    });
  }

  /** subscribe event once */
  protected async subscribeOnce<T extends object>(
    event: string,
    dtoClass: new () => T,
    handler: (data: T) => void,
  ): Promise<void> {
    const unsubscribe = await this.subscribe(event, dtoClass, (data) => {
      handler(data);
      unsubscribe();
    });
  }

  /** publish an event */
  protected publish<T extends object>(event: string, payload: T): void {
    this.transport.emit(this.transport.resolveEventName(event), payload);
  }

  /** transform dto to payload */
  protected toDto<T extends object>(
    dtoClass: new () => T,
    payload: unknown,
  ): T {
    const instance = new dtoClass();

    if (payload && typeof payload === 'object') {
      Object.assign(instance, payload);
    }

    return instance;
  }

  public async joinRoom(roomType: string, roomId: number | string): Promise<void> {
    const room =  this.getRoom(roomType, roomId);
    this.publish(WS_EVENT_JOIN_ROOM, { room: room });
  }
  public async leaveRoom(roomType: string, roomId: number | string): Promise<void> {
    const room =  this.getRoom(roomType, roomId);
    this.publish(WS_EVENT_LEAVE_ROOM, { room: room });
  }
  public async joinSubject(id: number | string): Promise<void> {
     this.joinRoom(WS_ROOM_KEY_SUBJECT, id);
  }
  public async joinGroup(id: number | string): Promise<void> {
    this.joinRoom(WS_ROOM_KEY_GROUP, id);
  }
  public async joinSubgroup(id: number | string): Promise<void> {
    this.joinRoom(WS_ROOM_KEY_SUBGROUP, id);
  }
  public async leaveSubject(id: number | string): Promise<void> {
    this.leaveRoom(WS_ROOM_KEY_SUBJECT, id);
  }
  public async leaveGroup(id: number | string): Promise<void> {
    this.leaveRoom(WS_ROOM_KEY_GROUP, id);
  }
  public async leaveSubgroup(id: number | string): Promise<void> {
    this.leaveRoom(WS_ROOM_KEY_SUBGROUP, id);
  }
}
