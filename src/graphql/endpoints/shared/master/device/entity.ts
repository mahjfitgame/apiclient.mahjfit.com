import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { UserDeviceEntity, UserDeviceSelectionSchema } from '../../folk/user-device/entity';
import { SessionEntity, SessionSelectionSchema } from '../../session/entity';

export class DeviceEntity {
  static metaname: string = (DeviceEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the entity, auto generated. */
  id?: number;
  /** Raw agent string of the entity. */
  user_agent?: string;
  /** Name of the entity. */
  name?: string;
  /** Operating system platform. */
  os?: string;
  /** Interface of the entity. */
  interface?: string;
  /** Approved status of the entity. */
  approved?: DateTime;
  /** Record created date time. */
  created?: DateTime;
  /** Record last updated date time. Update can be any. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** List of users who has access to given device. */
  fr_device_users?: UserDeviceEntity[];
  /** List of sessions who has access to given device. */
  fr_sessions?: SessionEntity[];
}

export class DeviceSelectionSchema {
  /** Unique ID of the entity, auto generated. */
  id?: boolean = false;
  /** Raw agent string of the entity. */
  user_agent?: boolean = false;
  /** Name of the entity. */
  name?: boolean = false;
  /** Operating system platform. */
  os?: boolean = false;
  /** Interface of the entity. */
  interface?: boolean = false;
  /** Approved status of the entity. */
  approved?: boolean = false;
  /** Record created date time. */
  created?: boolean = false;
  /** Record last updated date time. Update can be any. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** List of users who has access to given device. */
  fr_device_users?: typeof UserDeviceSelectionSchema | UserDeviceSelectionSchema | SchemaRef | false = schemaRef(() => UserDeviceSelectionSchema);
  /** List of sessions who has access to given device. */
  fr_sessions?: typeof SessionSelectionSchema | SessionSelectionSchema | SchemaRef | false = schemaRef(() => SessionSelectionSchema);
}
