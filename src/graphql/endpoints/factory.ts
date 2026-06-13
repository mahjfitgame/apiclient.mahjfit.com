import type { DIFactory } from '../../sdk/lazy';
import type { BusinessGraphModuleFactories } from './business/factory';
import type { SharedGraphModuleFactories } from './shared/factory';

export type GraphqlModuleToken<K extends keyof GraphModuleFactories, T> = {
  key: K;
  _type?: T;
};

export type GraphModuleFactories = SharedGraphModuleFactories & BusinessGraphModuleFactories;

export type { SharedGraphModuleFactories, BusinessGraphModuleFactories, DIFactory };
