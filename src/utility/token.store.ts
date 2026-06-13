import type { JwtTokenPair, TokenStoreConfig } from './types';

const DEFAULT_CONF_FILE_NAME = 'bfw.api.sdk.conf.json';
const DEFAULT_COOKIE_NAME = 'bfw.api.sdk.conf';
const DEFAULT_BROWSER_SESSION_STORAGE_KEY = 'bfw.api.sdk.conf';
const DEFAULT_BROWSER_LOCAL_STORAGE_KEY = 'bfw.api.sdk.conf';

export interface TokenStore {
  get(): JwtTokenPair | null;
  set(v: JwtTokenPair | null): void;
  clear(): void;
}

export class MemoryTokenStore implements TokenStore {
  private v: JwtTokenPair | null = null;

  public get(): JwtTokenPair | null {
    return this.v;
  }

  public set(v: JwtTokenPair | null): void {
    this.v = v;
  }

  public clear(): void {
    this.v = null;
  }
}

type FsLike = {
  existsSync(path: string): boolean;
  readFileSync(path: string, encoding: string): string;
  writeFileSync(path: string, data: string, encoding: string): void;
  unlinkSync(path: string): void;
};

type NodeBufferLike = {
  from(value: string, encoding: 'utf-8' | 'base64'): {
    toString(encoding: 'utf-8' | 'base64'): string;
  };
};

export class FileTokenStore implements TokenStore {
  constructor(
    private readonly fs: FsLike,
    private readonly filePath: string,
  ) {}

  public get(): JwtTokenPair | null {
    if (!this.fs.existsSync(this.filePath)) return null;

    try {
      const text = this.fs.readFileSync(this.filePath, 'utf-8');
      return deserializeToken(text);
    } catch {
      return null;
    }
  }

  public set(v: JwtTokenPair | null): void {
    if (!v) {
      this.clear();
      return;
    }

    this.fs.writeFileSync(this.filePath, `${serializeToken(v)}\n`, 'utf-8');
  }

  public clear(): void {
    if (this.fs.existsSync(this.filePath)) {
      this.fs.unlinkSync(this.filePath);
    }
  }
}

type BrowserStorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export class BrowserStorageTokenStore implements TokenStore {
  constructor(
    private readonly storage: BrowserStorageLike,
    private readonly storageKey: string,
  ) {}

  public get(): JwtTokenPair | null {
    try {
      return deserializeToken(this.storage.getItem(this.storageKey));
    } catch {
      return null;
    }
  }

  public set(v: JwtTokenPair | null): void {
    if (!v) {
      this.storage.removeItem(this.storageKey);
      return;
    }

    this.storage.setItem(this.storageKey, serializeToken(v));
  }

  public clear(): void {
    this.storage.removeItem(this.storageKey);
  }
}

type CookieOptions = {
  name: string;
  path: string;
  maxAgeSeconds?: number;
  secure: boolean;
  sameSite: 'Strict' | 'Lax' | 'None';
};

export class CookieTokenStore implements TokenStore {
  constructor(
    private readonly doc: Document,
    private readonly options: CookieOptions,
  ) {}

  public get(): JwtTokenPair | null {
    return deserializeToken(readCookie(this.doc, this.options.name));
  }

  public set(v: JwtTokenPair | null): void {
    if (!v) {
      this.clear();
      return;
    }

    const encoded = encodeURIComponent(serializeToken(v));
    this.doc.cookie = this.buildCookieString(encoded);
  }

  public clear(): void {
    this.doc.cookie = `${this.options.name}=; Path=${this.options.path}; Max-Age=0; SameSite=${this.options.sameSite}${this.options.secure ? '; Secure' : ''}`;
  }

  private buildCookieString(value: string): string {
    const maxAge = typeof this.options.maxAgeSeconds === 'number' ? `; Max-Age=${this.options.maxAgeSeconds}` : '';
    const secure = this.options.secure ? '; Secure' : '';
    return `${this.options.name}=${value}; Path=${this.options.path}; SameSite=${this.options.sameSite}${maxAge}${secure}`;
  }
}

class CachedTokenStore implements TokenStore {
  private readonly memory = new MemoryTokenStore();

  constructor(private readonly persistent: TokenStore) {
    this.memory.set(this.persistent.get());
  }

  public get(): JwtTokenPair | null {
    return this.memory.get();
  }

  public set(v: JwtTokenPair | null): void {
    this.memory.set(v);
    this.persistent.set(v);
  }

  public clear(): void {
    this.memory.clear();
    this.persistent.clear();
  }
}

export function createDefaultTokenStore(config?: TokenStoreConfig): TokenStore {
  const strategy = config?.persistentStorageStrategy ?? 'inmemory';

  if (strategy === 'inmemory') {
    return new MemoryTokenStore();
  }

  if (strategy === 'file') {
    return createCachedStore(createFileTokenStore(config));
  }

  if (strategy === 'cookie') {
    return createCachedStore(createCookieTokenStore(config));
  }

  if (strategy === 'browserSessionStorage') {
    return createCachedStore(createSessionStorageTokenStore(config));
  }

  if (strategy === 'browserLocalStorage') {
    return createCachedStore(createLocalStorageTokenStore(config));
  }

  // IndexedDB requires an async token-store API. Preserve this future-facing
  // strategy while using the existing synchronous browser stores for now.
  if (strategy === 'browserIndexedDb') {
    return createCachedStore(createSessionStorageTokenStore(config) ?? createLocalStorageTokenStore(config));
  }

  return createCachedStore(
    createFileTokenStore(config) ??
      createSessionStorageTokenStore(config) ??
      createLocalStorageTokenStore(config) ??
      createCookieTokenStore(config),
  );
}

function createCachedStore(store: TokenStore | null): TokenStore {
  if (!store) return new MemoryTokenStore();
  return new CachedTokenStore(store);
}

function createFileTokenStore(config?: TokenStoreConfig): TokenStore | null {
  const fs = getNodeFs();
  if (!fs) return null;

  const cwd = safeGetCwd();
  const selectedPath = resolveConfiguredPath(cwd, config) ?? selectDefaultTokenPath(cwd);

  try {
    return new FileTokenStore(fs, selectedPath);
  } catch {
    return null;
  }
}

function createSessionStorageTokenStore(config?: TokenStoreConfig): TokenStore | null {
  const storage = getSessionStorage();
  if (!storage) return null;
  return new BrowserStorageTokenStore(storage, resolveSessionStorageKey(config));
}

function createLocalStorageTokenStore(config?: TokenStoreConfig): TokenStore | null {
  const storage = getLocalStorage();
  if (!storage) return null;
  return new BrowserStorageTokenStore(storage, resolveLocalStorageKey(config));
}

function createCookieTokenStore(config?: TokenStoreConfig): TokenStore | null {
  const doc = getDocument();
  if (!doc) return null;

  return new CookieTokenStore(doc, {
    name: config?.cookieName?.trim() || DEFAULT_COOKIE_NAME,
    path: config?.cookiePath?.trim() || '/',
    maxAgeSeconds: config?.cookieMaxAgeSeconds,
    secure: config?.cookieSecure ?? true,
    sameSite: config?.cookieSameSite ?? 'Strict',
  });
}

function resolveConfiguredPath(cwd: string, config?: TokenStoreConfig): string | null {
  if (config?.filePath?.trim()) {
    return config.filePath;
  }

  if (config?.fileName?.trim()) {
    return `${cwd}/${config.fileName}`;
  }

  return null;
}

function resolveSessionStorageKey(config?: TokenStoreConfig): string {
  return config?.browserSessionStorageKey?.trim() || DEFAULT_BROWSER_SESSION_STORAGE_KEY;
}

function resolveLocalStorageKey(config?: TokenStoreConfig): string {
  return config?.browserLocalStorageKey?.trim() || DEFAULT_BROWSER_LOCAL_STORAGE_KEY;
}

function selectDefaultTokenPath(cwd: string): string {
  return `${cwd}/${DEFAULT_CONF_FILE_NAME}`;
}

function serializeToken(v: JwtTokenPair): string {
  const payload = JSON.stringify(v);
  return JSON.stringify({
    token: toBase64(payload),
  });
}

function deserializeToken(raw: string | null | undefined): JwtTokenPair | null {
  if (!raw?.trim()) return null;

  try {
    const parsed = JSON.parse(raw) as { token?: unknown };
    if (typeof parsed.token !== 'string') return null;

    const decoded = fromBase64(parsed.token);
    const token = JSON.parse(decoded) as Partial<JwtTokenPair>;

    if (typeof token.jwt_access_token !== 'string' || typeof token.jwt_refresh_token !== 'string') {
      return null;
    }

    return {
      jwt_access_token: token.jwt_access_token,
      jwt_refresh_token: token.jwt_refresh_token,
    };
  } catch {
    return null;
  }
}

function toBase64(value: string): string {
  const encoder = getTextEncoder();
  if (encoder && typeof btoa === 'function') {
    const bytes = encoder.encode(value);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  const nodeBuffer = getNodeBuffer();
  if (nodeBuffer) {
    return nodeBuffer.from(value, 'utf-8').toString('base64');
  }

  throw new Error('Base64 encoding is not available in this environment');
}

function fromBase64(value: string): string {
  if (typeof atob === 'function') {
    const binary = atob(value);
    const decoder = getTextDecoder();

    if (decoder) {
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
      }
      return decoder.decode(bytes);
    }

    return binary;
  }

  const nodeBuffer = getNodeBuffer();
  if (nodeBuffer) {
    return nodeBuffer.from(value, 'base64').toString('utf-8');
  }

  throw new Error('Base64 decoding is not available in this environment');
}

function readCookie(doc: Document, name: string): string | null {
  const prefix = `${name}=`;
  const parts = doc.cookie.split(';');

  for (const part of parts) {
    const item = part.trim();
    if (!item.startsWith(prefix)) continue;
    return decodeURIComponent(item.slice(prefix.length));
  }

  return null;
}

function safeGetCwd(): string {
  try {
    const nodeProcess = (globalThis as { process?: { cwd?: () => string } }).process;
    if (typeof nodeProcess?.cwd === 'function') return nodeProcess.cwd();
  } catch {
    // ignore
  }

  return '.';
}

function getNodeFs(): FsLike | null {
  try {
    const nodeProcess = (globalThis as { process?: { getBuiltinModule?: (name: string) => unknown } }).process;
    const builtinFs = nodeProcess?.getBuiltinModule?.('fs') as FsLike | undefined;
    if (builtinFs) return builtinFs;
  } catch {
    // ignore
  }

  try {
    const req = (globalThis as { require?: (id: string) => unknown }).require;
    if (typeof req === 'function') {
      return req('node:fs') as FsLike;
    }
  } catch {
    // ignore
  }

  try {
    const dynamicRequire = Function('return typeof require !== "undefined" ? require : undefined')() as
      | ((id: string) => unknown)
      | undefined;

    if (typeof dynamicRequire === 'function') {
      return dynamicRequire('node:fs') as FsLike;
    }
  } catch {
    // ignore
  }

  return null;
}

function getNodeBuffer(): NodeBufferLike | null {
  try {
    const maybeBuffer = (globalThis as { Buffer?: NodeBufferLike }).Buffer;
    if (maybeBuffer) return maybeBuffer;
  } catch {
    // ignore
  }

  return null;
}

function getDocument(): Document | null {
  try {
    const maybeDocument = (globalThis as { document?: Document }).document;
    if (maybeDocument) return maybeDocument;
  } catch {
    // ignore
  }

  return null;
}

function getSessionStorage(): BrowserStorageLike | null {
  try {
    const maybeWindow = (globalThis as { window?: { sessionStorage?: BrowserStorageLike } }).window;
    if (maybeWindow?.sessionStorage) return maybeWindow.sessionStorage;
  } catch {
    // ignore
  }

  return null;
}

function getLocalStorage(): BrowserStorageLike | null {
  try {
    const maybeWindow = (globalThis as { window?: { localStorage?: BrowserStorageLike } }).window;
    if (maybeWindow?.localStorage) return maybeWindow.localStorage;
  } catch {
    // ignore
  }

  return null;
}

function getTextEncoder(): TextEncoder | null {
  try {
    const textEncoder = (globalThis as { TextEncoder?: typeof TextEncoder }).TextEncoder;
    if (!textEncoder) return null;
    return new textEncoder();
  } catch {
    return null;
  }
}

function getTextDecoder(): TextDecoder | null {
  try {
    const textDecoder = (globalThis as { TextDecoder?: typeof TextDecoder }).TextDecoder;
    if (!textDecoder) return null;
    return new textDecoder();
  } catch {
    return null;
  }
}
