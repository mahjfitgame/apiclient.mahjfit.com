import type { BusinessGraphqlWsModuleFactories } from './business/ws.factory';
import type { SharedGraphqlWsModuleFactories } from './shared/ws.factory';

/** All GraphQL realtime module factories registered by endpoint area. */
export type GraphqlWsModuleFactories =
  SharedGraphqlWsModuleFactories & BusinessGraphqlWsModuleFactories;

export type GraphqlWsModuleToken<K extends keyof GraphqlWsModuleFactories, T> = {
  key: K;
  _type?: T;
};

export type {
  BusinessGraphqlWsModuleFactories,
  SharedGraphqlWsModuleFactories
};
