import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'core/index': 'src/core/index.ts',
    'graphql/endpoints/shared/index': 'src/graphql/endpoints/shared/index.ts',
    'graphql/endpoints/business/index': 'src/graphql/endpoints/business/index.ts',
    'graphql/libs/index': 'src/graphql/libs/index.ts',
    'rest/endpoints/index': 'src/rest/endpoints/index.ts',
    'rest/libs/index': 'src/rest/libs/index.ts',
    'ws/index': 'src/ws/index.ts',
  },
  format: ['esm'], // removing ['cjs'] due as we targate modern development, cjs is for CommonJS compatibility
  dts: true,
  sourcemap: false, // making false to reduce package size
  minify: true,
  // We use class/function `.name` to build GraphQL operation names (metaname).
  // Minification can mangle these names unless we preserve them.
  keepNames: true,
  clean: true,
  target: 'es2020',
  treeshake: true,
  splitting: false,
});
