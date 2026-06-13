// file: apps/shared-app/src/folk/user/slug.ts

import { CONFPR_WS_PUBLISH_KEY, CONFPR_WS_SUBSCRIBE_KEY } from "../../../../../ws/libs/constant";

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
export const WS_MAIN_USER: string = 'user';
export const WS_USER_PUBLISH: string = `${WS_MAIN_USER}.${CONFPR_WS_PUBLISH_KEY}`;
export const WS_USER_SUBSCRIBE: string = `${WS_MAIN_USER}.${CONFPR_WS_SUBSCRIBE_KEY}`;
export const WS_USER_PUBLISH_CREATE: string = `${WS_USER_PUBLISH}.create`;
export const WS_USER_SUBSRIBE_CREATE: string = `${WS_USER_SUBSCRIBE}.create`;