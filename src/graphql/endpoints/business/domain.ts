import type { AuthSession } from '../../../auth/auth.session';
import type { GraphqlTransport } from '../../../transports/graphql.transport';
import type { LazyRegistry } from '../../../sdk/lazy';
import type { BusinessGraphModuleFactories, GraphModuleFactories } from '../factory';
import { BotLevelService } from './bot/level/service';
import { BotProfileService } from './bot/profile/service';
import type { StatefulAuthSession } from "../../../auth/stateful.auth.session";

export function createBusinessGraphqlFactories(transport: GraphqlTransport, authSession: AuthSession, statefulAuthSession?: StatefulAuthSession): BusinessGraphModuleFactories {
  return {
    botLevel: () => new BotLevelService(transport, authSession, statefulAuthSession),

    botProfile: () => new BotProfileService(transport, authSession, statefulAuthSession),
  } as BusinessGraphModuleFactories;
}

export abstract class BusinessGraphqlDomainAccessors {
  protected abstract readonly reg: LazyRegistry;

  /** Module: BotLevel - Master data of bot level. */
  public get botLevel(): BotLevelService {
    return this.reg.get<BotLevelService>("botLevel");
  }

  /** Module: BotProfile - Master data of bot profile. */
  public get botProfile(): BotProfileService {
    return this.reg.get<BotProfileService>("botProfile");
  }
}
