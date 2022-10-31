import path from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: '.',
    alias: {
      '@bitmachina/dinero-core': path.resolve(
        __dirname,
        './packages/core/src/index.ts'
      ),
      '@bitmachina/dinero-calculator-bigint': path.resolve(
        __dirname,
        './packages/calculator-bigint/src/index.ts'
      ),
      '@bitmachina/dinero-calculator-number': path.resolve(
        __dirname,
        './packages/calculator-number/src/index.ts'
      ),
      '@bitmachina/dinero-currencies': path.resolve(
        __dirname,
        './packages/currencies/src/index.ts'
      ),
      '@bitmachina/dinero.js': path.resolve(
        __dirname,
        './packages/dinero.js/src/index.ts'
      ),
      '@bitmachina/dinero-test': path.resolve(
        __dirname,
        './test/utils/index.ts'
      ),
    },
  },
});
