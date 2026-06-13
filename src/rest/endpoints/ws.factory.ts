import type { DIFactory } from '../../sdk/lazy';

export type RestWsModuleToken<
  K extends keyof RestWsModuleFactories,
  T,
> = {
  key: K;
  _type?: T;
};

/**
 * REST realtime module factories.
 *
 * When a REST resource gains a local `ws.ts` implementation:
 * 1. import its class here;
 * 2. add a `DIFactory<ModuleClass>` entry;
 * 3. export its typed module token;
 * 4. add its bound factory and getter to `RestWsDomain`.
 */
export type RestWsModuleFactories = Record<never, never>;
