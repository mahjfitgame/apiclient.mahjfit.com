import { WsBase } from '../../../../../ws/libs/base';
import { buildSelectionSetFromSchema } from '../../../../libs/selection';
import { UserCreateInputDto, UserCreateOutputDto, UserCreateOutputSelectionSchema } from './dto';
import { WS_MAIN_USER, WS_USER_PUBLISH_CREATE, WS_USER_SUBSRIBE_CREATE } from './slug';

export class UserWs extends WsBase {
  /**
   * Subscribe to user create events from the server.
   * Use this when you want to observe the `user.publish.create` realtime stream.
   */
  /*public async subscribeCreate(
    handler: (data: UserCreateOutputDto) => void,
  ): Promise<() => void> {
    return this.subscribe(WS_USER_PUBLISH_CREATE, UserCreateOutputDto, handler);
  }*/

  protected MODULE_MAIN_SLUG: string = WS_MAIN_USER;
  
  public async subscribeCreate(args: {
    response: (data: UserCreateOutputDto) => void;
  }): Promise<() => void> {

    return this.subscribe(
      WS_USER_PUBLISH_CREATE,
      UserCreateOutputDto,
      args.response,
    );
  }

  /**
   * Publish a user create event to the server.
   * Use this when the client needs to create a new user through realtime.
   */
  public async publishCreate(args: {
    input: UserCreateInputDto;
  }): Promise<void> {
    this.publish(WS_USER_SUBSRIBE_CREATE, {
      input: args.input,
    });
  }
}
