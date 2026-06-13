import type { AuthSession } from '../../auth/auth.session';
import type { StatefulAuthSession } from '../../auth/stateful.auth.session';
import { GraphqlTransport } from '../../transports/graphql.transport';

type GraphqlExecArgs = {
  query: string;
  operationName: string;
  variables?: Record<string, any>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

export class GraphqlBase {
  constructor(
    protected readonly gql: GraphqlTransport,
    protected readonly session?: AuthSession,
    protected readonly statefulSession?: StatefulAuthSession,
  ) {}

  private async withStatefulHeaders(headers?: Record<string, string>): Promise<Record<string, string> | undefined> {
    if (!this.statefulSession) return headers;
    const stateful = await this.statefulSession.getAuthHeader();
    if (!Object.keys(stateful).length) return headers;
    return { ...stateful, ...(headers ?? {}) };
  }

  protected async exec<T>(args: {
    query: string;
    variables?: Record<string, unknown>;
    operationName?: string;
    headers?: Record<string, string>;
    signal?: AbortSignal;
  }): Promise<T> {
    if (!this.session) throw new Error('AuthSession is required for authenticated GraphQL operations.');

    return await this.gql.executeWithAuth<T>({
      session: this.session,
      query: args.query,
      variables: args.variables,
      operationName: args.operationName,
      headers: await this.withStatefulHeaders(args.headers),
      signal: args.signal,
    });
  }

  protected async execPublic<T>(args: {
    query: string;
    variables?: Record<string, unknown>;
    operationName?: string;
    headers?: Record<string, string>;
    signal?: AbortSignal;
  }): Promise<T> {
    return await this.gql.execute<T>({
      query: args.query,
      variables: args.variables,
      operationName: args.operationName,
      headers: await this.withStatefulHeaders(args.headers),
      signal: args.signal,
    });
  }

  // Auth upload
  protected async execUpload<T>(args: GraphqlExecArgs & {
    files: File[];
    fileVarName?: string; // default "attachment"
  }): Promise<T> {
    if (!this.session) throw new Error('AuthSession is required for authenticated GraphQL upload operations.');

    // If no files, fall back to normal GraphQL JSON call (optional)
    if (!args.files?.length) {
      return this.exec<T>({
        query: args.query,
        variables: args.variables,
        operationName: args.operationName,
        headers: args.headers,
        signal: args.signal,
      });
    }

    return await this.gql.executeUploadWithAuth<T>({
      session: this.session,
      query: args.query,
      variables: args.variables,
      operationName: args.operationName,
      headers: await this.withStatefulHeaders(args.headers),
      signal: args.signal,
      files: args.files,
      fileVarName: args.fileVarName,
    });
  }

  // Public upload
  protected async execUploadPublic<T>(args: GraphqlExecArgs & {
    files: File[];
    fileVarName?: string;
  }): Promise<T> {
    if (!args.files?.length) {
      return this.execPublic<T>({
        query: args.query,
        variables: args.variables,
        operationName: args.operationName,
        headers: args.headers,
        signal: args.signal,
      });
    }

    return await this.gql.executeUpload<T>({
      query: args.query,
      variables: args.variables,
      operationName: args.operationName,
      headers: await this.withStatefulHeaders(args.headers),
      signal: args.signal,
      files: args.files,
      fileVarName: args.fileVarName,
    });
  }
}
