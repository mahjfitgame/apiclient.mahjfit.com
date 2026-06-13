export type UrlParams = Record<string, string | number | boolean | null | undefined>;

export class Libs {
  public static expandUrlPattern(pattern: string, params: UrlParams = {}): string {
    const getParam = (rawKey: string) => {
      const key = rawKey.replace(/^[:*]/, '');
      return params[rawKey] ?? params[`:${key}`] ?? params[`*${key}`] ?? params[key];
    };

    const encodeSegment = (v: unknown) => encodeURIComponent(String(v));

    const encodeSplat = (v: unknown) => {
      const value = String(v);
      return value
        .split('/')
        .filter((segment) => segment.length > 0)
        .map(encodeURIComponent)
        .join('/');
    };

    return pattern.replace(/([:*])([A-Za-z0-9_]+)/g, (_match, sigil: ':' | '*', name: string) => {
      const val = getParam(`${sigil}${name}`);

      if (val === undefined || val === null || String(val) === '') {
        throw new Error(`Missing URL param "${sigil}${name}" for pattern "${pattern}"`);
      }

      if (sigil === ':') {
        const value = String(val);
        if (value.includes('/')) {
          throw new Error(`Param ":${name}" must not contain "/" (got "${value}")`);
        }
        return encodeSegment(value);
      }

      return encodeSplat(val);
    });
  }

  public static composeUrl(base: string, ...parts: string[]): string {
    const trimmedBase = String(base ?? '').replace(/\/+$/, '');
    const segments = parts
      .filter((part) => part !== undefined && part !== null && String(part) !== '')
      .map((part) => String(part).replace(/^\/+|\/+$/g, ''))
      .filter((part) => part.length > 0);

    if (!trimmedBase) {
      return segments.join('/');
    }

    if (segments.length === 0) {
      return trimmedBase;
    }

    return `${trimmedBase}/${segments.join('/')}`;
  }

  public static composePatternUrl(base: string, pattern: string, params?: UrlParams, ...extraParts: string[]): string {
    const expanded = this.expandUrlPattern(pattern, params ?? {});
    return this.composeUrl(base, expanded, ...extraParts);
  }
}
