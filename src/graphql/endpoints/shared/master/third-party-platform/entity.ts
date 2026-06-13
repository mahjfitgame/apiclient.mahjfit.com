import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';

export class ThirdPartyPlatformEntity {
  static metaname: string = (ThirdPartyPlatformEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the thirdparty platform, auto generated. */
  id?: number;
  /** Description of the thirdparty platform. */
  slug?: string;
  /** Name of the thirdparty platform. */
  name?: string;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** When record is updated, date-time will be saved. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
}

export class ThirdPartyPlatformSelectionSchema {
  /** Unique ID of the thirdparty platform, auto generated. */
  id?: boolean = false;
  /** Description of the thirdparty platform. */
  slug?: boolean = false;
  /** Name of the thirdparty platform. */
  name?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** When record is updated, date-time will be saved. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
}
