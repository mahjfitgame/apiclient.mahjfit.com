import { EntitySuffix, SchemaRef, schemaRef } from '../../../../libs';
import { QueueEmailEntity, QueueEmailSelectionSchema } from '../../queue/email/entity';
import { SessionEntity, SessionSelectionSchema } from '../../session/entity';
import { UserEntity, UserSelectionSchema } from '../user/entity';
import { UserAuthenticationEntity, UserAuthenticationSelectionSchema } from '../user-auth/entity';

export class UserAuthorisationEntity {
  static metaname: string = UserAuthorisationEntity.name.replace(EntitySuffix, '');

  declare id?: number;
  declare u_id?: number;
  declare uau_id?: number;
  declare arole_id?: number;
  declare active?: any;
  declare created?: any;
  declare updated?: any;
  declare deleted?: any;
  declare fr_user_auth?: UserAuthenticationEntity;
  declare fr_user?: UserEntity;
  declare fr_queue_email_from_user_authorisation?: QueueEmailEntity[];
  declare fr_queue_email_to_user_authorisation?: QueueEmailEntity[];
  declare fr_queue_email_created_user_authorisation?: QueueEmailEntity[];
  declare fr_session?: SessionEntity[];
}

export class UserAuthorisationSelectionSchema {
  id?: boolean = false;
  u_id?: boolean = false;
  uau_id?: boolean = false;
  arole_id?: boolean = false;
  active?: boolean = false;
  created?: boolean = false;
  updated?: boolean = false;
  deleted?: boolean = false;
  fr_user_auth?: typeof UserAuthenticationSelectionSchema | UserAuthenticationSelectionSchema | SchemaRef | false = schemaRef(() => UserAuthenticationSelectionSchema);
  fr_user?: typeof UserSelectionSchema | UserSelectionSchema | SchemaRef | false = schemaRef(() => UserSelectionSchema);
  fr_queue_email_from_user_authorisation?: typeof QueueEmailSelectionSchema | QueueEmailSelectionSchema | SchemaRef | false = schemaRef(() => QueueEmailSelectionSchema);
  fr_queue_email_to_user_authorisation?: typeof QueueEmailSelectionSchema | QueueEmailSelectionSchema | SchemaRef | false = schemaRef(() => QueueEmailSelectionSchema);
  fr_queue_email_created_user_authorisation?: typeof QueueEmailSelectionSchema | QueueEmailSelectionSchema | SchemaRef | false = schemaRef(() => QueueEmailSelectionSchema);
  fr_session?: typeof SessionSelectionSchema | SessionSelectionSchema | SchemaRef | false = schemaRef(() => SessionSelectionSchema);
}
