import { WsBase } from '../../../../ws/libs/base';
import { GraphHelloOutputDto } from './dto';
import { WS_GRAPH_PUBLISH_HELLO, WS_MAIN_GRAPH } from './slug';

export class GraphWs extends WsBase {

  protected MODULE_MAIN_SLUG: string = WS_MAIN_GRAPH;
  /**
   * Subscribe to Graph hello messages from the server.
   * Use this to receive realtime hello payloads from the `graph.hello` event.
   */
  public async subsrcibeHello(
    response: (data: GraphHelloOutputDto) => void,
  ): Promise<() => void> {
    return this.subscribe(
      WS_GRAPH_PUBLISH_HELLO,
      GraphHelloOutputDto,
      response,
    );
  }
}
