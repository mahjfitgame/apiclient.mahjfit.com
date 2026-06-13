import { EntitySuffix } from '../../../libs';
import { ApiEndpointAuthEntity, ApiEndpointAuthSelectionSchema } from '../api-endpoint-auth/entity';

export class GraphEntity extends ApiEndpointAuthEntity {
  static metaname: string = (GraphEntity.name).replace(EntitySuffix, '');
}

export class GraphSelectionSchema extends ApiEndpointAuthSelectionSchema {
}
