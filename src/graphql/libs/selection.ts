export type SchemaClass<T = any> = new () => T;

export type SchemaFactory<T = any> = () => SchemaClass<T>;

export class SchemaRef<T = any> {
  constructor(public readonly factory: SchemaFactory<T>) {}
}

export function schemaRef<T = any>(factory: SchemaFactory<T>): SchemaRef<T> {
  return new SchemaRef(factory);
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  if (typeof v !== "object" || v === null) return false;
  if (Array.isArray(v)) return false;
  const proto = Object.getPrototypeOf(v);
  return proto === Object.prototype || proto === null;
}

function isNonArrayObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function isCtor(v: unknown): v is SchemaClass {
  return typeof v === "function";
}

function isSchemaRef(v: unknown): v is SchemaRef {
  return v instanceof SchemaRef;
}

// Rule: child cannot be the schema class that is 2 levels above (grandparent)
function violatesGrandparentRule(path: SchemaClass[], next: SchemaClass): boolean {
  if (path.length < 2) return false;
  return path[path.length - 2] === next;
}

function violatesAncestorRule(path: SchemaClass[], next: SchemaClass): boolean {
  return path.includes(next);
}

function schemaValueToNestedSchema(
  schemaValue: unknown,
  path: SchemaClass[],
  maxDepth: number,
): { nestedObj: Record<string, unknown>; nextPath: SchemaClass[] } | null {
  // depth safety
  if (path.length - 1 >= maxDepth) return null;

  const resolvedSchemaValue = isSchemaRef(schemaValue) ? schemaValue.factory() : schemaValue;

  if (isCtor(resolvedSchemaValue)) {
    //if (violatesGrandparentRule(path, schemaValue)) return null;
    if (violatesGrandparentRule(path, resolvedSchemaValue)) return null;
    const inst = new resolvedSchemaValue();
    if (!isNonArrayObject(inst)) return null;
    return { nestedObj: inst as Record<string, unknown>, nextPath: [...path, resolvedSchemaValue] };
  }

  if (isNonArrayObject(resolvedSchemaValue)) {
    // instance nesting allowed (no cycle typing, but works)
    return { nestedObj: resolvedSchemaValue as Record<string, unknown>, nextPath: path };
  }

  return null;
}

function buildInner(
  selection: Record<string, unknown>,
  schemaObj: Record<string, unknown>,
  path: SchemaClass[],
  maxDepth: number,
): string {
  const chunks: string[] = [];

  for (const [field, val] of Object.entries(selection)) {
    // exclude false/undefined
    if (val === false || val === undefined) continue;

    // only allow keys that exist on schema instance
    if (!(field in schemaObj)) continue;

    const schemaVal = schemaObj[field];

    // leaf field if schema says boolean
    if (typeof schemaVal === "boolean") {
      if (typeof val !== "boolean") continue;
      if (val === true) chunks.push(field);
      continue;
    }

    // nested field: schemaVal should be ctor or instance (or boolean, handled above)
    const nested = schemaValueToNestedSchema(schemaVal, path, maxDepth);
    if (!nested) continue; // pruned due to depth/cycle/invalid schema shape

    // if user says true => include all keys from nested schema (one level)
    if (val === true) {
      const all = Object.keys(nested.nestedObj).join(" ");
      if (all) chunks.push(`${field} { ${all} }`);
      continue;
    }

    // user provided object => recurse
    if (!isPlainObject(val)) continue;

    const inner = buildInner(val, nested.nestedObj, nested.nextPath, maxDepth);
    if (!inner) continue;

    chunks.push(`${field} { ${inner} }`);
  }

  return chunks.join("\n");
}

export function buildSelectionSetFromSchema<TSelection extends object, TSchema extends SchemaClass>(
  selection: TSelection,
  schemaClass: TSchema,
  opts: { maxDepth?: number } = {},
): string {
  const maxDepth = opts.maxDepth ?? 10;

  // At runtime users sometimes pass a SelectionSchema *instance* (class-based),
  // which isn't a "plain object" but is still a valid selection carrier.
  if (!isNonArrayObject(selection)) {
    throw new Error("Selection must be a non-null object.");
  }

  const rootSchema = new schemaClass();
  if (!isNonArrayObject(rootSchema)) {
    throw new Error("Schema instance must be a non-null object with initialized fields.");
  }

  const out = buildInner(
    selection as unknown as Record<string, unknown>,
    rootSchema as Record<string, unknown>,
    [schemaClass],
    maxDepth,
  );

  if (!out) throw new Error("GraphQL selection cannot be empty.");
  return out;
}
