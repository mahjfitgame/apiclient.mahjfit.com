import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { ConnectionSourceEntity, ConnectionSourceSelectionSchema } from '../source/entity';

export class ConnectionSourceCategoriesEntity {
  static metaname: string = (ConnectionSourceCategoriesEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the connection source categories, auto generated. */
  id?: number;
  /** Title of the connection source categories. */
  title?: string;
  /** Description of the connection source categories. */
  desc?: string;
  /** Indicates whether the connection source is currently active or inactive. */
  active?: DateTime;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** When record is updated, date-time will be saved. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** Categories of the connection source. */
  fr_connection_sources?: ConnectionSourceEntity[];
}

export class ConnectionSourceCategoriesSelectionSchema {
  /** Unique ID of the connection source categories, auto generated. */
  id?: boolean = false;
  /** Title of the connection source categories. */
  title?: boolean = false;
  /** Description of the connection source categories. */
  desc?: boolean = false;
  /** Indicates whether the connection source is currently active or inactive. */
  active?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** Categories of the connection source. */
  fr_connection_sources?: typeof ConnectionSourceSelectionSchema | ConnectionSourceSelectionSchema | SchemaRef | false = schemaRef(() => ConnectionSourceSelectionSchema);
}
