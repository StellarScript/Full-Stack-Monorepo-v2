import { defineConfig } from 'vitest/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
   root: __dirname,
   cacheDir: '../../node_modules/.vite/libs/utils',

   plugins: [nxViteTsPaths()],

   test: {
      globals: true,
      cache: { dir: '../../node_modules/.vitest' },
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: { reportsDirectory: '../../coverage/libs/utils', provider: 'v8' },
   },
});
