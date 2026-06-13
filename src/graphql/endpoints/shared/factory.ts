import type { DIFactory } from "../../../sdk/lazy";
import type { GraphqlModuleToken } from "../factory";
import type { ApiEndpointAuthService } from "./api-endpoint-auth/service";
import type { AlertDurationService } from "./master/alert-duration/service";
import type { DeviceService } from "./master/device/service";
import type { ThirdPartyPlatformService } from "./master/third-party-platform/service";
import type { WorkStatusService } from "./master/work-status/service";
import type { AuthorisationRoleService } from "./master/authorisation-role/service";
import { QueueEmailService } from './queue/email/service';
import { UserService } from './folk/user/service';
import { UserDeviceService } from './folk/user-device/service';
import { UserAuthenticationService } from './folk/user-auth/service';
import { FaqService } from './faqs/faq/service';
import { FaqCategoryService } from './faqs/faq-category/service';
import { UserAuthorisationService } from './folk/user-authorisation/service';
import { CountryService } from './geo/country/service';
import { CountryPhoneCodeService } from './geo/country-phone-code/service';
import type { SessionService } from "./session/service";
import type { LeadService } from "./lead/service";

export type SharedGraphModuleFactories = {
  apiEndpointAuth: DIFactory<ApiEndpointAuthService>;
  alertDuration: DIFactory<AlertDurationService>;
  device: DIFactory<DeviceService>;
  thirdPartyPlatform: DIFactory<ThirdPartyPlatformService>;
  workStatus: DIFactory<WorkStatusService>;
  authorisationRole: DIFactory<AuthorisationRoleService>;
  queueEmail: DIFactory<QueueEmailService>;
  user: DIFactory<UserService>;
  userDevice: DIFactory<UserDeviceService>;
  userAuthentication: DIFactory<UserAuthenticationService>;
  faq: DIFactory<FaqService>;
  faqCategory: DIFactory<FaqCategoryService>;
  userAuthorisation: DIFactory<UserAuthorisationService>;
  country: DIFactory<CountryService>;
  countryPhoneCode: DIFactory<CountryPhoneCodeService>;
  session: DIFactory<SessionService>;
  lead: DIFactory<LeadService>;
};


export const ApiEndpointAuth = { key: "apiEndpointAuth" } as GraphqlModuleToken<
  "apiEndpointAuth",
  ApiEndpointAuthService
>;

export const AlertDuration = { key: "alertDuration" } as GraphqlModuleToken<
  "alertDuration",
  AlertDurationService
>;

export const Device = { key: "device" } as GraphqlModuleToken<
  "device",
  DeviceService
>;


export const ThirdPartyPlatform = {
  key: "thirdPartyPlatform",
} as GraphqlModuleToken<"thirdPartyPlatform", ThirdPartyPlatformService>;


export const WorkStatus = { key: "workStatus" } as GraphqlModuleToken<
  "workStatus",
  WorkStatusService
>;

export const AuthorisationRole = {
  key: "authorisationRole",
} as GraphqlModuleToken<"authorisationRole", AuthorisationRoleService>;

export const QueueEmail = { key: "queueEmail" } as GraphqlModuleToken<
  "queueEmail",
  QueueEmailService
>;


export const User = { key: "user" } as GraphqlModuleToken<"user", UserService>;

export const UserDevice = { key: "userDevice" } as GraphqlModuleToken<
  "userDevice",
  UserDeviceService
>;

export const UserAuthentication = {
  key: "userAuthentication",
} as GraphqlModuleToken<"userAuthentication", UserAuthenticationService>;

export const Faq = { key: "faq" } as GraphqlModuleToken<"faq", FaqService>;

export const FaqCategory = { key: "faqCategory" } as GraphqlModuleToken<
  "faqCategory",
  FaqCategoryService
>;

export const UserAuthorisation = {
  key: "userAuthorisation",
} as GraphqlModuleToken<"userAuthorisation", UserAuthorisationService>;

export const Country = { key: "country" } as GraphqlModuleToken<
  "country",
  CountryService
>;

export const CountryPhoneCode = {
  key: "countryPhoneCode",
} as GraphqlModuleToken<"countryPhoneCode", CountryPhoneCodeService>;

export const Session = { key: "session" } as GraphqlModuleToken<
  "session",
  SessionService
>;


export const Lead = {
  key: "lead",
} as GraphqlModuleToken<"lead", LeadService>;