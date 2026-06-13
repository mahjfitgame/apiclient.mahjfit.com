import { DateTime, EntitySuffix, UploadFileAccessUrlDto, UploadFileAccessUrlSelectionSchema, SchemaRef, schemaRef } from '../../../../libs';
import { DeviceEntity, DeviceSelectionSchema } from '../../master/device/entity';
import { UserEntity, UserSelectionSchema } from '../user/entity';
import { IP, MAC } from './scalar';

export class UserDeviceEntity {
  static metaname: string = (UserDeviceEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the entity, auto generated. */
  id?: number;
  /** User ID. */
  u_id?: number;
  /** Device ID of the user. */
  device_id?: number;
  /** From IP Address of the entity. */
  from_ip_address?: IP;
  /** Device MAC Address of the entity. */
  mac_address?: MAC;
  /** Device System ID of the entity. */
  user_defined_id?: string;
  /** Device Name of the entity. */
  user_defined_name?: string;
  /** Record created date time. */
  created?: DateTime;
  /** Record last updated date time. Update can be any. */
  updated?: DateTime;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** Device Token of the entity. */
  dtoken?: string;
  /** Unique UUID of the device. */
  duuid?: string;
  /** Provider ID associated with the device generated or provided by the device it self. */
  dpid?: string;
  /** Device User Agent String of the entity. */
  useragent?: string;
  /** Platform of the device (e.g., Android, iOS, Web). */
  platform?: string;
  /** Language set on the device. */
  language?: string;
  /** Timezone of the device. */
  timezone?: string;
  /** Screen width of the device. */
  screen_width?: number;
  /** Screen height of the device. */
  screen_height?: number;
  /** Device pixel ratio. */
  device_pixel_ratio?: number;
  /** Number of logical processor cores available to the device. */
  hardware_concurrency?: string;
  /** Maximum number of simultaneous touch contact points supported by the device. */
  max_touch_points?: string;
  /** Approximate amount of device memory in GB. */
  device_memory?: string;
  /** Avatar image base64 string of the user. */
  avatar?: string;
  /** Avatar image file of the user. */
  file_avatar?: string;
  /** File avatar url. */
  file_avatar_url?: UploadFileAccessUrlDto;
  /** Device entity for user device */
  fr_device?: DeviceEntity;
  /** User entity for device */
  fr_user?: UserEntity;
}

export class UserDeviceSelectionSchema {
  /** Unique ID of the entity, auto generated. */
  id?: boolean = false;
  /** User ID. */
  u_id?: boolean = false;
  /** Device ID of the user. */
  device_id?: boolean = false;
  /** From IP Address of the entity. */
  from_ip_address?: boolean = false;
  /** Device MAC Address of the entity. */
  mac_address?: boolean = false;
  /** Device System ID of the entity. */
  user_defined_id?: boolean = false;
  /** Device Name of the entity. */
  user_defined_name?: boolean = false;
  /** Record created date time. */
  created?: boolean = false;
  /** Record last updated date time. Update can be any. */
  updated?: boolean = false;
  /** When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** Device Token of the entity. */
  dtoken?: boolean = false;
  /** Unique UUID of the device. */
  duuid?: boolean = false;
  /** Provider ID associated with the device generated or provided by the device it self. */
  dpid?: boolean = false;
  /** Device User Agent String of the entity. */
  useragent?: boolean = false;
  /** Platform of the device (e.g., Android, iOS, Web). */
  platform?: boolean = false;
  /** Language set on the device. */
  language?: boolean = false;
  /** Timezone of the device. */
  timezone?: boolean = false;
  /** Screen width of the device. */
  screen_width?: boolean = false;
  /** Screen height of the device. */
  screen_height?: boolean = false;
  /** Device pixel ratio. */
  device_pixel_ratio?: boolean = false;
  /** Number of logical processor cores available to the device. */
  hardware_concurrency?: boolean = false;
  /** Maximum number of simultaneous touch contact points supported by the device. */
  max_touch_points?: boolean = false;
  /** Approximate amount of device memory in GB. */
  device_memory?: boolean = false;
  /** Avatar image base64 string of the user. */
  avatar?: boolean = false;
  /** Avatar image file of the user. */
  file_avatar?: boolean = false;
  /** File avatar url. */
  file_avatar_url?: typeof UploadFileAccessUrlSelectionSchema | UploadFileAccessUrlSelectionSchema | SchemaRef | false = schemaRef(() => UploadFileAccessUrlSelectionSchema);
  /** Device entity for user device */
  fr_device?: typeof DeviceSelectionSchema | DeviceSelectionSchema | SchemaRef | false = schemaRef(() => DeviceSelectionSchema);
  /** User entity for device */
  fr_user?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
}
