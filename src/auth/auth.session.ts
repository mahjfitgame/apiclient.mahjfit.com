import type { JwtTokenPair } from '../utility/types';
import { AuthError } from '../utility/errors';
import type { TokenStore } from '../utility/token.store';
import { AuthApiLike, InitializeTokensType } from './type';

/**
 * One AuthSession instance per domain (Graph OR Rest).
 * This guarantees:
 * - token storage isolation (no clashes)
 * - single-flight refresh (no stampede)
 */
export class AuthSession {
  private refreshPromise: Promise<string> | null = null;

  constructor(private readonly store: TokenStore, private readonly api: AuthApiLike) {}

  /**
   * Explicit overwrite (existing behavior).
   * Use when user just signed in and you intentionally want latest tokens to replace everything.
   */
  public setTokens(tokens: JwtTokenPair) {
    this.store.set(tokens);
  }

  private scoreTokenPair(t: JwtTokenPair | null): number {
    if (!t) return -1;

    const access = (t.jwt_access_token ?? '').trim();
    const refresh = (t.jwt_refresh_token ?? '').trim();

    const hasAccess = !!access;
    const hasRefresh = !!refresh;
    const accessAlive = hasAccess && !this.isTokenExpired(access);
    const refreshAlive = hasRefresh && !this.isTokenExpired(refresh);

    // Higher is better.
    if (accessAlive) return 4;   // best
    if (refreshAlive) return 3;  // can refresh
    if (hasAccess) return 2;     // maybe usable if non-jwt/opaque but weak
    if (hasRefresh) return 1;    // weak
    return 0;
  }

  private chooseBestTokens(
    persisted: JwtTokenPair | null,
    bootstrap: JwtTokenPair | null,
  ): InitializeTokensType | null {
    const p = persisted ? this.sanitizeTokenPair(persisted) : null;
    const b = bootstrap ? this.sanitizeTokenPair(bootstrap) : null;

    const ps = this.scoreTokenPair(p);
    const bs = this.scoreTokenPair(b);

    if (ps < 0 && bs < 0) return null;
    if (ps >= bs && p) return { source: 'persistent', tokens: p };
    if (b) return { source: 'bootstrap', tokens: b };
    return p ? { source: 'persistent', tokens: p } : null;
  }

  /**
   * Smart startup initializer:
   * - If persisted/store tokens already exist, keep them (default).
   * - If store is empty, use provided bootstrap tokens.
   * - If force=true, always overwrite with bootstrap tokens.
   *
   * Returns which source is active after initialization.
   */
  public initializeTokens(
    bootstrapTokens: JwtTokenPair,
    opts?: { force?: boolean },
  ): InitializeTokensType {
    const force = opts?.force ?? false;
    const bootstrap = this.sanitizeTokenPair(bootstrapTokens);

    if (!this.hasAnyToken(bootstrap)) {
      throw new AuthError('Invalid bootstrap tokens. Provide access or refresh token.');
    }

    if (force) {
      this.store.set(bootstrap);
      return { source: 'bootstrap', tokens: bootstrap };
    }

    const persisted = this.sanitizeTokenPair(this.store.get());
    const picked = this.chooseBestTokens(persisted, bootstrap);

    if (!picked) {
      // fallback: bootstrap already validated
      this.store.set(bootstrap);
      return { source: 'bootstrap', tokens: bootstrap };
    }

    // Ensure chosen tokens are what session uses going forward
    this.store.set(picked.tokens);
    return picked;
  }

  public clear() {
    this.store.clear();
  }

  public getTokens(): JwtTokenPair | null {
    return this.resolveTokensOrNull();
  }

  public async getAccessToken(): Promise<string> {
    const t = this.resolveTokensOrNull();
    const access = t?.jwt_access_token?.trim();
    if (!access) throw new AuthError('No access token. Sign in first.');
    return access;
  }

  /**
   * Single-flight refresh: if multiple requests hit 401 together,
   * only ONE refresh call runs; others await it.
   */
  public async refresh(): Promise<string> {
    if (this.refreshPromise) return this.refreshPromise;

    this.refreshPromise = (async () => {
      const t = this.resolveTokensOrNull();
      const refreshToken = t?.jwt_refresh_token?.trim();
      if (!refreshToken) throw new AuthError('No refresh token available.');

      const fresh = await this.api.refresh(refreshToken);

      const access = (fresh.jwt_access_token ?? '').trim();
      const refresh = (fresh.jwt_refresh_token ?? '').trim();

      if (!access) {
        throw new AuthError('Refresh succeeded but no access token was returned.');
      }

      // if backend ever omits refresh token, keep previous refresh token
      const nextTokens: JwtTokenPair = {
        jwt_access_token: access,
        jwt_refresh_token: refresh || refreshToken,
      };

      this.store.set(nextTokens);
      return nextTokens.jwt_access_token;
    })();

    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  public async getAuthHeader(): Promise<Record<string, string>> {
    const token = await this.getAccessToken();
    return { authorization: `Bearer ${token}` };
  }

  /**
   * Backward-compatible helper (kept, now powered by shared resolver).
   */
  public getJwtFromPersistentStorage(fallbackTokens?: JwtTokenPair): JwtTokenPair | null {
    const stored = this.resolveTokensOrNull();
    if (stored) return stored;

    const fallback = fallbackTokens ? this.sanitizeTokenPair(fallbackTokens) : null;
    if (fallback && this.hasAnyToken(fallback)) return fallback;

    return null;
  }

  // ---------------------------
  // Internal helpers
  // ---------------------------

  private resolveTokensOrNull(): JwtTokenPair | null {
    const first = this.sanitizeTokenPair(this.store.get());
    if (first && this.hasAnyToken(first)) return first;

    // Extra recovery read attempt (cheap, safe, improves resilience).
    const second = this.sanitizeTokenPair(this.store.get());
    if (second && this.hasAnyToken(second)) return second;

    return null;
  }

  private hasAnyToken(t: JwtTokenPair | null | undefined): t is JwtTokenPair {
    return Boolean(t?.jwt_access_token?.trim() || t?.jwt_refresh_token?.trim());
  }

  private sanitizeTokenPair(t: JwtTokenPair | null | undefined): JwtTokenPair | null {
    if (!t) return null;

    const access = (t.jwt_access_token ?? '').trim();
    const refresh = (t.jwt_refresh_token ?? '').trim();

    // Return normalized strings; caller decides required field by context.
    return {
      jwt_access_token: access,
      jwt_refresh_token: refresh,
    };
  }

  private decodeBase64UrlToUtf8(input: string): string | null {
    try {
      const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);

      // Browser path
      if (typeof globalThis.atob === 'function') {
        // atob gives binary string; decode UTF-8 safely
        const binary = globalThis.atob(padded);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        return new TextDecoder().decode(bytes);
      }

      // Node path without Buffer typing dependency
      const maybeBuffer = (globalThis as any).Buffer;
      if (maybeBuffer?.from) {
        return maybeBuffer.from(padded, 'base64').toString('utf-8');
      }

      return null;
    } catch {
      return null;
    }
  }

  private decodeJwtExp(token: string): number | null {
    try {
      const raw = String(token ?? '').trim();
      if (!raw) return null;

      const parts = raw.split('.');
      if (parts.length < 2) return null;

      const payloadJson = this.decodeBase64UrlToUtf8(parts[1]);
      if (!payloadJson) return null;

      const payload = JSON.parse(payloadJson) as { exp?: unknown };
      return typeof payload.exp === 'number' ? payload.exp : null;
    } catch {
      return null;
    }
  }

  private isTokenExpired(token: string, clockSkewSec = 30): boolean {
    const exp = this.decodeJwtExp(token);
    if (typeof exp !== 'number') return true; // safe default
    const nowSec = Math.floor(Date.now() / 1000);
    return nowSec >= exp - clockSkewSec;
  }
}

/**
 * One AuthSession instance per domain (Graph OR Rest).
 * This guarantees:
 * - token storage isolation (no clashes)
 * - single-flight refresh (no stampede)
 */
class AuthSessionOld {
  private refreshPromise: Promise<string> | null = null;

  constructor(private readonly store: TokenStore, private readonly api: AuthApiLike) {}

  public setTokens(tokens: JwtTokenPair) {
    this.store.set(tokens);
  }

  public clear() {
    this.store.clear();
  }

  public getTokens(): JwtTokenPair | null {
    return this.store.get();
  }

  public async getAccessToken(): Promise<string> {
    const t = this.store.get();
    if (!t?.jwt_access_token) throw new AuthError('No access token. Sign in first.');
    return t.jwt_access_token;
  }

  /**
   * Single-flight refresh: if multiple requests hit 401 together,
   * only ONE refresh call runs; others await it.
   */
  public async refresh(): Promise<string> {
    if (this.refreshPromise) return this.refreshPromise;

    this.refreshPromise = (async () => {
      const t = this.store.get();
      if (!t?.jwt_refresh_token) throw new AuthError('No refresh token available.');

      const fresh = await this.api.refresh(t.jwt_refresh_token);

      this.store.set({
        jwt_access_token: fresh.jwt_access_token,
        jwt_refresh_token: fresh.jwt_refresh_token,
      });

      return fresh.jwt_access_token;
    })();

    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  public async getAuthHeader(): Promise<Record<string, string>> {
    const token = await this.getAccessToken();
    return { authorization: `Bearer ${token}` };
  }
  public getJwtFromPersistentStorage(fallbackTokens?: JwtTokenPair): JwtTokenPair | null {
    const persistedTokens = this.store.get();
    if (persistedTokens?.jwt_access_token?.trim() || persistedTokens?.jwt_refresh_token?.trim()) {
      return persistedTokens;
    }

    if (fallbackTokens?.jwt_access_token?.trim() || fallbackTokens?.jwt_refresh_token?.trim()) {
      return fallbackTokens;
    }

    return null;
  }
}