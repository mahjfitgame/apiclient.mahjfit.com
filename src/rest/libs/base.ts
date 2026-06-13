import type { AuthSession } from '../../auth/auth.session';
import type { StatefulAuthSession } from '../../auth/stateful.auth.session';
import { RestTransport } from '../../transports/rest.transport';

export class RestBase {
  constructor(
    protected readonly rest: RestTransport,
    protected readonly session: AuthSession,
    protected readonly statefulSession?: StatefulAuthSession,
  ) {}

  private async withStatefulHeaders(headers?: Record<string, string>): Promise<Record<string, string> | undefined> {
    if (!this.statefulSession) return headers;
    const stateful = await this.statefulSession.getAuthHeader();
    if (!Object.keys(stateful).length) return headers;
    return { ...stateful, ...(headers ?? {}) };
  }

  protected async requestGet<T>(path: string, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.requestWithAuth<T>({
      session: this.session,
      method: 'GET',
      path,
      headers: await this.withStatefulHeaders(headers),
      signal,
    });
  }

  protected async requestPost<T>(path: string, body: unknown, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.requestWithAuth<T>({
      session: this.session,
      method: 'POST',
      path,
      body,
      headers: await this.withStatefulHeaders(headers),
      signal,
    });
  }

  protected async requestPut<T>(path: string, body: unknown, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.requestWithAuth<T>({
      session: this.session,
      method: 'PUT',
      path,
      body,
      headers: await this.withStatefulHeaders(headers),
      signal,
    });
  }

  protected async requestPatch<T>(path: string, body: unknown, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.requestWithAuth<T>({
      session: this.session,
      method: 'PATCH',
      path,
      body,
      headers: await this.withStatefulHeaders(headers),
      signal,
    });
  }

  protected async requestDelete<T>(path: string, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.requestWithAuth<T>({
      session: this.session,
      method: 'DELETE',
      path,
      headers: await this.withStatefulHeaders(headers),
      signal,
    });
  }


  protected async getPublic<T>(path: string, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.get<T>(path, await this.withStatefulHeaders(headers), signal);
  }

  protected async postPublic<T>(path: string, body: unknown, headers?: Record<string, string>, signal?: AbortSignal): Promise<T> {
    return await this.rest.post<T>(path, body, await this.withStatefulHeaders(headers), signal);
  }
}
