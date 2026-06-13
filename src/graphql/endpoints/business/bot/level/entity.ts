import { DateTime, EntitySuffix, schemaRef, SchemaRef } from "../../../../libs";
import { BotProfileEntity, BotProfileSelectionSchema } from "../profile";
import { BotLevelModeEnum } from "./enum";

export class BotLevelEntity {
    static metaname: string = (BotLevelEntity.name).replace(EntitySuffix, '');
    /** Unique ID of the bot level, auto generated. */
    id?: number

    /** Title of the bot level. */
    title?: string

    /** Description of the bot level. */
    desc?: string

    /** Mode of the bot level. */
    mode?: BotLevelModeEnum

    /** When record is created, date-time will be saved. */
    created?: DateTime

    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
     updated?: DateTime

    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
     deleted?: DateTime

    /** List of bot profiles for this bot level. */
    fr_bot_profiles?: BotProfileEntity

    /** List of games for this bot level. */
    //fr_game?: GameEntity
}


export class  BotLevelSelectionSchema{
    /** Unique ID of the pagemaster, auto generated. */
    id?:boolean = false

    /** Title of the bot level. */
    title?:boolean = false

    /** Description of the bot level. */
    desc?:boolean = false

    /** Mode of the bot level. */
    mode?:boolean = false

    /** When record is created, date-time will be saved. */
    created?:boolean = false
    
    /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated.*/
    updated?:boolean = false
    
    /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted */
    deleted?:boolean = false
    
    /** List of bot profiles for this bot level. */
    fr_bot_profiles?: typeof BotProfileSelectionSchema | BotProfileSelectionSchema | SchemaRef | false = schemaRef(() => BotProfileSelectionSchema)

    /** List of games for this bot level. */
    //fr_game?: typeof GameSelectionSchema | GameSelectionSchema | SchemaRef | false = schemaRef(() => GameSelectionSchema)
}