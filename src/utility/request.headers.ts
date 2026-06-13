import type { RequestHeaderValueSource } from './types';

export const DefaultHeaders = Object.freeze({
  REQUEST_ID: 'bfwapisdkrequestid',
  ACCEPT_LANGUAGE: 'accept-language',
  CURRENT_BIDI: 'bidi',
  DTOKEN: 'dtoken',
  APOLLO_REQUIRE_PREFLIGHT: 'apollo-require-preflight',
  APP_CLIENT_INSTANCE_ID: 'aciid',
  SESSION: 'session',
} as const);

export type DefaultHeaders = (typeof DefaultHeaders)[keyof typeof DefaultHeaders];

export type DefaultHeaderNameOverrides = Partial<Record<DefaultHeaders, string>>;

export type AuthconfRequestHeaderKey = DefaultHeaders;

export type AuthconfRequestHeaders = Partial<Record<DefaultHeaders, RequestHeaderValueSource>>;

export function resolveRequestHeaderName(
  overrides: DefaultHeaderNameOverrides | undefined,
  header: DefaultHeaders,
): string {
  const configuredName = overrides?.[header]?.trim();
  return configuredName || header;
}

export function findDefaultHeader(name: string): DefaultHeaders | undefined {
  switch (name.trim().toLowerCase()) {
    case DefaultHeaders.REQUEST_ID:
      return DefaultHeaders.REQUEST_ID;
    case DefaultHeaders.ACCEPT_LANGUAGE:
      return DefaultHeaders.ACCEPT_LANGUAGE;
    case DefaultHeaders.CURRENT_BIDI:
      return DefaultHeaders.CURRENT_BIDI;
    case DefaultHeaders.DTOKEN:
      return DefaultHeaders.DTOKEN;
    case DefaultHeaders.APOLLO_REQUIRE_PREFLIGHT:
      return DefaultHeaders.APOLLO_REQUIRE_PREFLIGHT;
    case DefaultHeaders.APP_CLIENT_INSTANCE_ID:
      return DefaultHeaders.APP_CLIENT_INSTANCE_ID;
    case DefaultHeaders.SESSION:
      return DefaultHeaders.SESSION;
    default:
      return undefined;
  }
}
