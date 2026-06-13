import { DateTime, EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { CountryPhoneCodeEntity, CountryPhoneCodeSelectionSchema } from '../country-phone-code/entity';

export class CountryEntity {
  static metaname: string = (CountryEntity.name).replace(EntitySuffix, '');

  id?: number;
  name?: string;
  numeric_code?: string;
  iso_iii?: string;
  iso_ii?: string;
  capital?: string;
  currency?: string;
  currency_name?: string;
  currency_symbol?: string;
  emoji?: string;
  created?: DateTime;
  updated?: DateTime;
  deleted?: DateTime;
  fr_country_phone_codes?: CountryPhoneCodeEntity[];
}

export class CountrySelectionSchema {
  id?: boolean = false;
  name?: boolean = false;
  numeric_code?: boolean = false;
  iso_iii?: boolean = false;
  iso_ii?: boolean = false;
  capital?: boolean = false;
  currency?: boolean = false;
  currency_name?: boolean = false;
  currency_symbol?: boolean = false;
  emoji?: boolean = false;
  created?: boolean = false;
  updated?: boolean = false;
  deleted?: boolean = false;
  fr_country_phone_codes?: typeof CountryPhoneCodeSelectionSchema | CountryPhoneCodeSelectionSchema | SchemaRef | false = schemaRef(() => CountryPhoneCodeSelectionSchema);
}
