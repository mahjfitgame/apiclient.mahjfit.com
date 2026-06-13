import type { DIFactory } from '../../../sdk/lazy';
import type { GraphqlModuleToken } from '../factory';
import { BotLevelService } from './bot/level';
import { BotProfileService } from './bot/profile';

export type BusinessGraphModuleFactories = {
    botLevel: DIFactory<BotLevelService>;
    botProfile: DIFactory<BotProfileService>;
};

export const BotLevel = { key: "botLevel" } as GraphqlModuleToken<"botLevel", BotLevelService>;
export const BotProfile = { key: "botProfile" } as GraphqlModuleToken<"botProfile", BotProfileService>;