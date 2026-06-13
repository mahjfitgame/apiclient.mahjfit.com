import { defineConfig } from 'tsup';
import fg from 'fast-glob';
import path from 'node:path';

// Builds from generated sources in `.build/`, but keeps the same dist layout
// as the previous `build:origin` (so subpath exports like `@bfw/api-sdk/core` work).
const buildRoot = '.build';

function toEntryKey(filePath: string): string {
  const rel = path.relative(buildRoot, filePath).replace(/\\/g, '/');
  if (rel === 'index.ts') return 'index';
  return rel.replace(/\.ts$/, '');
}

const entryFiles = fg.sync(
  [
    `${buildRoot}/index.ts`,
    `${buildRoot}/core/index.ts`,
    `${buildRoot}/graphql/index.ts`,
    `${buildRoot}/graphql/libs/*.ts`,
    `${buildRoot}/graphql/endpoints/index.ts`,
    `${buildRoot}/graphql/endpoints/shared/index.ts`,
    `${buildRoot}/graphql/endpoints/business/index.ts`,
    `${buildRoot}/rest/index.ts`,
    `${buildRoot}/rest/libs/*.ts`,
    `${buildRoot}/rest/endpoints/index.ts`,
    `${buildRoot}/ws/index.ts`,
  ],
  { onlyFiles: true, unique: true },
);

const entry = Object.fromEntries(entryFiles.map((file) => [toEntryKey(file), file]));

export default defineConfig({
  entry,
  format: ['esm'],// removing ['cjs'] due as we targate modern development, cjs is for CommonJS compatibility
  dts: true,
  sourcemap: false, // making false to reduce package size
  minify: true,
  keepNames: true,
  target: 'es2020',
  treeshake: true,
  splitting: false,
  clean: true,
  outDir: 'dist',
  tsconfig: 'tsconfig.build.json',
});
