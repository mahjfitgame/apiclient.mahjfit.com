import type { DIFactory } from '../../../sdk/lazy';
import type { GraphqlWsModuleToken } from '../ws.factory';
import type { UserWs } from './folk/user/ws';

/** Factories for realtime modules implemented by shared GraphQL resources. */
export type SharedGraphqlWsModuleFactories = {
  user: DIFactory<UserWs>;
};

export const UserWsToken = { key: 'user' } as GraphqlWsModuleToken<'user', UserWs>;
