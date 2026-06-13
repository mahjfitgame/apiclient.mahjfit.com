import { DateTime, EntitySuffix, schemaRef, SchemaRef } from "../../../../libs";
import { BotLevelEntity, BotLevelModeEnum, BotLevelSelectionSchema } from "../level";


export class  BotProfileEntity {
   static metaname: string = (BotProfileEntity.name).replace(EntitySuffix, '');
  /** Unique ID of the bot level, auto generated.*/
  id?: number

  /** Reference ID of the bot level associated with this profile.*/
  botlvl_id?: BotLevelModeEnum

  /** Title of the bot level.*/
  title?: string

  /** Minimum thinking time of the bot in milliseconds.*/
  think_time_min_ms?: number

  /** Maximum thinking time of the bot in milliseconds.*/
  think_time_max_ms?: number

  /** Claim aggression of this profile.*/
  claim_aggression?: number

  /** Defense weight of this profile.*/
  defense_weight?: number

  /** How well the bot reads opponent hands.*/
  hand_reading_weight?: number

  /** How safely the bot discards cards.*/
  discard_safety_weight?: number

  /** How effectively the bot uses jokers.*/
  joker_usage_weight?: number

  /** Bot preference for exposing melds.*/
  exposure_preference?: number

  /** Chance of the bot making mistakes.*/
  error_rate?: number

  /** Level of randomness in bot decisions.*/
  randomness?: number

  /** How the bot reacts to risky situations.*/
  react_to_danger?: number

  /** Quality of bot decisions in Charleston.*/
  charleston_quality?: number

  /** Indicates when the bot profile becomes active.*/
  active?: DateTime

  /** When record is created, date-time will be saved.*/
  created?: DateTime

  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: DateTime

  /** 
  When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
  */
  deleted?: DateTime

  /** Bot level of the bot profile.*/
  fr_bot_level?: BotLevelEntity
}


export class  BotProfileSelectionSchema{
    /** Unique ID of the bot level, auto generated.*/
  id?: boolean = false

  /** Reference ID of the bot level associated with this profile.*/
  botlvl_id?: boolean = false

  /** Title of the bot level.*/
  title?: boolean = false

  /** Minimum thinking time of the bot in milliseconds.*/
  think_time_min_ms?: boolean = false

  /** Maximum thinking time of the bot in milliseconds.*/
  think_time_max_ms?: boolean = false

  /** Claim aggression of this profile.*/
  claim_aggression?: boolean = false

  /** Defense weight of this profile.*/
  defense_weight?: boolean = false

  /** How well the bot reads opponent hands.*/
  hand_reading_weight?: boolean = false

  /** How safely the bot discards cards.*/
  discard_safety_weight?: boolean = false

  /** How effectively the bot uses jokers.*/
  joker_usage_weight?: boolean = false

  /** Bot preference for exposing melds.*/
  exposure_preference?: boolean = false

  /** Chance of the bot making mistakes.*/
  error_rate?: boolean = false

  /** Level of randomness in bot decisions.*/
  randomness?: boolean = false

  /** How the bot reacts to risky situations.*/
  react_to_danger?: boolean = false

  /** Quality of bot decisions in Charleston.*/
  charleston_quality?: boolean = false

  /** Indicates when the bot profile becomes active.*/
  active?: boolean = false

  /** When record is created, date-time will be saved.*/
  created?: boolean = false

  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: boolean = false

  /** 
  When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.
  */
  deleted?: boolean = false

  /** Bot level of the bot profile.*/
  fr_bot_level?: typeof BotLevelSelectionSchema | BotLevelSelectionSchema | SchemaRef | false = schemaRef(() => BotLevelSelectionSchema)
}
