/**
 * Holds a "stateful" JWT (single token string) and exposes it as a header:
 *   statefulauthorization: Bearer <token>
 *
 * This token is separate from the main AuthSession JWT access/refresh pair.
 */
export class StatefulAuthSession {
  private token: string | null = null;

  /**
   * Sets the stateful JWT.
   * Accepts a plain JWT (recommended) or a full "Bearer <token>" value.
   */
  public setToken(token: string) {
    const normalized = normalizeToken(token);
    this.token = normalized ? normalized : null;
  }

  public clear() {
    this.token = null;
  }

  public getToken(): string | null {
    return this.token;
  }

  public async getAuthHeader(): Promise<Record<string, string>> {
    if (!this.token) return {};
    return { statefulauthorization: `Bearer ${this.token}` };
  }
}

function normalizeToken(raw: string): string {
  const v = String(raw ?? '').trim();
  if (!v) return '';

  // If user accidentally passes "Bearer <token>", strip the prefix.
  const parts = v.split(/\s+/);
  if (parts.length >= 2 && parts[0].toLowerCase() === 'bearer') {
    return parts.slice(1).join(' ').trim();
  }

  return v;
}
