// file: libs/dynamic-app/src/api-endpoint-auth/public/slug.ws.ts

import { CONFPR_WS_PUBLISH_KEY, CONFPR_WS_SUBSCRIBE_KEY } from "../../../../ws/libs/constant";



/**
 * █████████████████████████████████████████████████████████████
 * ██ REST SLUG [RESTSLUG_] ████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

/**
 * █████████████████████████████████████████████████████████████
 * ██ WS SLUG [WS_] ████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

// ██ WS EVENT ████████████████████████████████████████████
export const WS_MAIN_GRAPH: string = 'graph'
export const WS_GRAPH_PUBLISH: string = `${WS_MAIN_GRAPH}.${CONFPR_WS_PUBLISH_KEY}`;
export const WS_GRAPH_SUBSCRIBE: string = `${WS_MAIN_GRAPH}.${CONFPR_WS_SUBSCRIBE_KEY}`;
export const WS_GRAPH_PUBLISH_HELLO: string = `${WS_GRAPH_PUBLISH}.hello`;

export const WS_MAIN_AEPU: string = 'aepu';
export const WS_AEPU_PUBLISH: string = `${WS_MAIN_AEPU}.${CONFPR_WS_PUBLISH_KEY}`;
export const WS_AEPU_SUBSCRIBE: string = `${WS_MAIN_AEPU}.${CONFPR_WS_SUBSCRIBE_KEY}`;
export const WS_AEPU_SUBSCRIBE_SIGNIN: string = `${WS_AEPU_SUBSCRIBE}.signin`;


// ██ WS ROOM ████████████████████████████████████████████

export function wsRoomApiEndpointAuth(id: number | string): string {
  return `${WS_MAIN_AEPU}:${id}`;
} 
export function wsRoomGroupApiEndpointAuth(group_id: number | string): string {
  return `${WS_MAIN_AEPU}:group:${group_id}`;
}
export function wsRoomSubGroupApiEndpointAuth(sub_group_id: number | string): string {
  return `${WS_MAIN_AEPU}:subgroup:${sub_group_id}`;
}

