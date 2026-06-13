export type DIFactory<T> = () => T;

export class LazyRegistry {
  private readonly cache = new Map<string, unknown>();

  public require(key: string, factory: DIFactory<unknown>): unknown {
    const existing = this.cache.get(key);
    if (existing) {
      return existing;
    }

    const created = factory();
    this.cache.set(key, created);
    return created;
  }

  public get<T>(key: string): T {
    return this.cache.get(key) as T;
  }
}