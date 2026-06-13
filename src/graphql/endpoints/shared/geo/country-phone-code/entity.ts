import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { UserEntity, UserSelectionSchema } from '../../folk/user/entity';
import { CountryEntity, CountrySelectionSchema } from '../country/entity';

export class CountryPhoneCodeEntity {
  static metaname: string = (CountryPhoneCodeEntity.name).replace(EntitySuffix, '');

  /** Unique ID of the country language, auto generated. */
  id?: number;
  /** Country of the language. */
  country_id?: number;
  /** Phone code of the country. */
  phone_code?: string;
  /** When record is created, date-time will be saved. */
  created?: DateTime;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: DateTime;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  deleted?: DateTime;
  /** Country for country phone code. */
  fr_country?: CountryEntity;
  /** User primary mobile code for country phone code. */
  fr_primary_users?: UserEntity[];
  /** User recovery mobile code for country phone code. */
  fr_recovery_users?: UserEntity[];
  /** User whatsapp code for country phone code. */
  fr_whatsapp_users?: UserEntity[];
}

export class CountryPhoneCodeSelectionSchema {
  /** Unique ID of the country language, auto generated. */
  id?: boolean = false;
  /** Country of the language. */
  country_id?: boolean = false;
  /** Phone code of the country. */
  phone_code?: boolean = false;
  /** When record is created, date-time will be saved. */
  created?: boolean = false;
  /** If record is updated, then date time value will be saved otherwise null to indicate record is not updated. */
  updated?: boolean = false;
  /** If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted. */
  deleted?: boolean = false;
  /** Country for country phone code. */
  fr_country?: typeof CountrySelectionSchema | CountrySelectionSchema | SchemaRef | false = schemaRef(() => CountrySelectionSchema);
  /** User primary mobile code for country phone code. */
  fr_primary_users?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
  /** User recovery mobile code for country phone code. */
  fr_recovery_users?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
  /** User whatsapp code for country phone code. */
  fr_whatsapp_users?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
}
