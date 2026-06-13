import type { AuthSession } from "../../../auth/auth.session";
import type { StatefulAuthSession } from "../../../auth/stateful.auth.session";
import type { GraphqlTransport } from "../../../transports/graphql.transport";
import type { SharedGraphModuleFactories } from "../factory";
import { BusinessGraphqlDomainAccessors } from "../business/domain";
import { ApiEndpointAuthService } from './api-endpoint-auth/service';
import { AlertDurationService } from "./master";
import { DeviceService } from "./master";
import { ThirdPartyPlatformService } from "./master";
import { WorkStatusService } from "./master";
import { AuthorisationRoleService } from "./master";
import { QueueEmailService } from './queue/email/service';
import { UserService } from './folk/user/service';
import { UserDeviceService } from './folk/user-device/service';
import { UserAuthenticationService } from './folk/user-auth/service';
import { FaqService } from './faqs/faq/service';
import { UserAuthorisationService } from './folk/user-authorisation/service';
import { FaqCategoryService } from './faqs/faq-category/service';
import { CountryService } from './geo/country/service';
import { CountryPhoneCodeService } from './geo/country-phone-code/service';
import { SessionService } from './session/service';
import { LeadService } from './lead/service';



export function createSharedGraphqlFactories(
  transport: GraphqlTransport,
  authSession: AuthSession,
  statefulAuthSession?: StatefulAuthSession,
): SharedGraphModuleFactories {
  return {
    apiEndpointAuth: () =>
      new ApiEndpointAuthService(transport, authSession, statefulAuthSession),
    
    alertDuration: () =>
      new AlertDurationService(transport, authSession, statefulAuthSession),
       device: () =>
      new DeviceService(transport, authSession, statefulAuthSession),
       thirdPartyPlatform: () =>
      new ThirdPartyPlatformService(
        transport,
        authSession,
        statefulAuthSession,
      ),
   
    workStatus: () =>
      new WorkStatusService(transport, authSession, statefulAuthSession),
   
    authorisationRole: () =>
      new AuthorisationRoleService(transport, authSession, statefulAuthSession),
   
    queueEmail: () =>
      new QueueEmailService(transport, authSession, statefulAuthSession),


    user: () =>
      new UserService(transport, authSession, statefulAuthSession),
    
    userDevice: () =>
      new UserDeviceService(transport, authSession, statefulAuthSession),
    
    userAuthentication: () =>
      new UserAuthenticationService(
        transport,
        authSession,
        statefulAuthSession,
      ),
    faq: () => new FaqService(transport, authSession, statefulAuthSession),
    faqCategory: () =>
      new FaqCategoryService(transport, authSession, statefulAuthSession),
    
    userAuthorisation: () =>
      new UserAuthorisationService(transport, authSession, statefulAuthSession),
    
    country: () =>
      new CountryService(transport, authSession, statefulAuthSession),
    countryPhoneCode: () =>
      new CountryPhoneCodeService(transport, authSession, statefulAuthSession),
    
    session: () =>
      new SessionService(transport, authSession, statefulAuthSession),
    
    lead: () => new LeadService(transport, authSession, statefulAuthSession),
    
  };
}

export abstract class SharedGraphqlDomainAccessors extends BusinessGraphqlDomainAccessors {
  
  /** Module: ApiEndpointAuth - API endpoint authentication insert, update, delete, restore, recover etc */
  public get apiEndpointAuth(): ApiEndpointAuthService {
    return this.reg.get<ApiEndpointAuthService>("apiEndpointAuth");
  }
  /** Module: User Authentication - User authentication insert, update, delete, restore, recover etc */
  public get userAuthentication(): UserAuthenticationService {
    return this.reg.get<UserAuthenticationService>("userAuthentication");
  }
  /** Module: Alert Duration - Master data of alert duration such as, daily, weekly, monthly etc. */
  public get alertDuration(): AlertDurationService {
    return this.reg.get<AlertDurationService>("alertDuration");
  }
  
  /** Module: Device - Master data of devices such as, mobile, tablet, desktop etc. */
  public get device(): DeviceService {
    return this.reg.get<DeviceService>("device");
  }
  /** Module: ThirdPartyPlatform - Master data of third party platforms such as, facebook, google etc. */
  public get thirdPartyPlatform(): ThirdPartyPlatformService {
    return this.reg.get<ThirdPartyPlatformService>("thirdPartyPlatform");
  }
  /** Module: Work Status - Master data of work status such as, full-time, part-time, freelancer etc. */
  public get workStatus(): WorkStatusService {
    return this.reg.get<WorkStatusService>("workStatus");
  }
  /** Module: Authorisation Role - Master data of authorisation roles. */
  public get authorisationRole(): AuthorisationRoleService {
    return this.reg.get<AuthorisationRoleService>("authorisationRole");
  }
  
  /** Module: Queue Email - Queue of email delivery records with find and CRUD operations. */
  public get queueEmail(): QueueEmailService {
    return this.reg.get<QueueEmailService>("queueEmail");
  }
  /** Module: User - User management such as, create user, update user, delete user, restore user, recover user etc. */
  public get user(): UserService {
    return this.reg.get<UserService>("user");
  }
  /** Module: UserDevice - User device management with find and CRUD operations. */
  public get userDevice(): UserDeviceService {
    return this.reg.get<UserDeviceService>("userDevice");
  }
  /** Module: Faq - Master data of faq. */
  public get faq(): FaqService {
    return this.reg.get<FaqService>("faq");
  }
  /** Module: Faq Category - Master data of faq categories. */
  public get faqCategory(): FaqCategoryService {
    return this.reg.get<FaqCategoryService>("faqCategory");
  }
  
  public get userAuthorisation(): UserAuthorisationService {
    return this.reg.get<UserAuthorisationService>("userAuthorisation");
  }
  /** Module: Country - Country management with find and CRUD operations. */
  public get country(): CountryService {
    return this.reg.get<CountryService>("country");
  }
  /** Module: CountryPhoneCode - Country phone code management with find and CRUD operations. */
  public get countryPhoneCode(): CountryPhoneCodeService {
    return this.reg.get<CountryPhoneCodeService>("countryPhoneCode");
  }
  
  /** Module: Session - User session management operations. */
  public get session(): SessionService {
    return this.reg.get<SessionService>("session");
  }

  /** Module: Lead - Lead management with find and CRUD operations. */
  public get lead(): LeadService {
    return this.reg.get<LeadService>("lead");
  }
}
