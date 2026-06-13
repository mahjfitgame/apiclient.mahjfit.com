import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { ConnectionSourceCategoriesEntity, ConnectionSourceCategoriesSelectionSchema } from '../source-categories/entity';
import { UserEntity, UserSelectionSchema } from '../../folk/user/entity';

export class ConnectionSourceEntity {
  static metaname: string = (ConnectionSourceEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the connection source, auto generated. */
  id?: number;
  /** Connection source category of the connection source. */
  connsrccat_id?: number;
  /** Title of the connection source. */
  title?: string;
  /** Description of the connection source. */
  desc?: string;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** When record is updated, date-time will be saved. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** Connection source of the connection source category. */
  fr_connection_source_category?: ConnectionSourceCategoriesEntity;
  /** User of the connection source category. */
  fr_users?: UserEntity[];
}

export class ConnectionSourceSelectionSchema {
  /** Unique ID of the connection source, auto generated. */
  id?: boolean = false;
  /** Connection source category of the connection source. */
  connsrccat_id?: boolean = false;
  /** Title of the connection source. */
  title?: boolean = false;
  /** Description of the connection source. */
  desc?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** Connection source of the connection source category. */
  fr_connection_source_category?: typeof ConnectionSourceCategoriesSelectionSchema | ConnectionSourceCategoriesSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceCategoriesSelectionSchema);
  /** User of the connection source category. */
  fr_users?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
}
