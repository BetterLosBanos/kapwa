import { defineConfig, PluginOption } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';
import { ALLOWED_SUBDIRECTORIES } from './src/constants.js';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copyKapwaCssPlugin = (): PluginOption => ({
  name: 'copy-kapwa-css',
  apply: 'build',
  closeBundle() {
    const sourcePath = path.resolve(__dirname, './src/styles/kapwa.css');
    const destinationDir = path.resolve(__dirname, './dist');
    const destinationPath = path.resolve(destinationDir, 'kapwa.css');

    if (!fs.existsSync(sourcePath)) {
      console.warn(`Kapwa CSS source not found at ${sourcePath}`);
      return;
    }

    fs.mkdirSync(destinationDir, { recursive: true });
    fs.copyFileSync(sourcePath, destinationPath);

    console.log('✅ kapwa.css successfully copied');
  },
});

// Script for entry points
const entryPoints = glob
  .sync('./src/kapwa/**/index.ts?(x)')
  .reduce((acc, filePath) => {
    const pathParts = filePath.split('/');
    const relevantParts = pathParts.slice(2, -1);

    let isValidEntry = false;

    if (relevantParts.length === 1) {
      isValidEntry = true;
    }

    if (
      relevantParts.length === 2 &&
      ALLOWED_SUBDIRECTORIES.includes(relevantParts[1])
    ) {
      isValidEntry = true;
    }

    if (!isValidEntry) {
      return acc;
    }

    const outPath = filePath.replace(/^src\/kapwa\//, 'kapwa/');
    acc[outPath] = filePath;
    return acc;
  }, {});

const finalEntryPoints = {
  ...entryPoints,
  index: path.resolve(__dirname, './src/index.ts'),
  'lib/utils': path.resolve(__dirname, './src/lib/utils.ts'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.lib.json',
      entryRoot: './src',
    }),
    copyKapwaCssPlugin(),
  ],
  build: {
    minify: true,
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: finalEntryPoints,
      formats: ['es', 'cjs'],
      name: 'Kapwa',
    },
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true,
      // list packages that consumer has to install themselves
      external: [
        'react',
        'react-dom',
        'tailwindcss',
        'tw-animate-css',
        '@tailwindcss/postcss',
        'postcss',
      ],
    },
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@kapwa': path.resolve(__dirname, './src/kapwa'),
    },
  },
});
