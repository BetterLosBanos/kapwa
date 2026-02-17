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
  .sync('./src/lib/kapwa/**/index.ts?(x)')
  .reduce((acc, filePath) => {
    const pathParts = filePath.split('/');
    const relevantParts = pathParts.slice(3, -1);

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

    const outPath = filePath.replace(/^src\/lib\/kapwa\//, 'kapwa/');
    acc[outPath] = filePath;
    return acc;
  }, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.lib.json',
      entryRoot: './src',
      beforeWriteFile: (filePath, content) => {
        // Remap dist/lib/kapwa/* to dist/kapwa/*
        const newPath = filePath.replace(/\/lib\/kapwa\//, '/kapwa/');
        return {
          filePath: newPath,
          content,
        };
      },
    }),
    copyKapwaCssPlugin(),
  ],
  build: {
    minify: true,
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: entryPoints,
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
      '@kapwa': path.resolve(__dirname, './src/lib/kapwa'),
    },
  },
});
