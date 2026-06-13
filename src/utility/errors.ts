export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly status?: number,
    public readonly url?: string,
    public readonly body?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  public toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      url: this.url,
      body: this.body,
    };
  }

  public override toString(): string {
    const parts: string[] = [this.name + ': ' + this.message];
    if (this.status !== undefined) parts.push(`status=${this.status}`);
    if (this.url) parts.push(`url=${this.url}`);
    if (this.body !== undefined) {
      try {
        parts.push(`body=${typeof this.body === 'string' ? this.body : JSON.stringify(this.body)}`);
      } catch {
        parts.push('body=[unserializable]');
      }
    }
    return parts.join(' ');
  }

  // Better console output in Node (without importing 'util').
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public [(Symbol.for('nodejs.util.inspect.custom') as any)]() {
    return this.toJSON();
  }
  public errors(){
    if(Array.isArray(this.body)){
      const len = this.body.length;
      let i = 0;
      let msg: string[] = [];
      while(i < len){
        const e = this.body[i];
        if(e.message){
          msg.push(e.message);
        }
        i++;
      }
      return msg;
    }
  }
}

export class AuthError extends Error {
  constructor(message: string, public readonly details?: unknown) {
    super(message);
    this.name = 'AuthError';
  }
}
