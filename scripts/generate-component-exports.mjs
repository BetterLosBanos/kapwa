import { promises as fs, existsSync } from 'fs';
import { join, resolve } from 'path';
import { ALLOWED_SUBDIRECTORIES } from '../src/constants.js';

// Helper function to find the correct extension (.ts or .tsx) for an entry point
function getEntryPointExtension(dirPath) {
  if (existsSync(join(dirPath, 'index.tsx'))) {
    return '.tsx';
  }
  if (existsSync(join(dirPath, 'index.ts'))) {
    return '.ts';
  }
  return null; // No entry point found
}

const buildExportEntry = ({ types, esmPath, cjsPath }) => ({
  types,
  import: esmPath,
  require: cjsPath,
  default: esmPath,
});

async function generateComponentExports() {
  console.log('🔧 Generating component exports and updating package.json...\n');

  const projectRoot = process.cwd();
  const packageJsonPath = join(projectRoot, 'package.json');
  const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonData);

  const exportsMap = {};
  const typesVersionsMap = {};
  const componentExports = [];

  // Add main entry point
  console.log('📦 Adding main entry points:');
  exportsMap['.'] = buildExportEntry({
    types: './dist/index.d.ts',
    esmPath: './dist/index.js',
    cjsPath: './dist/index.cjs',
  });
  typesVersionsMap['.'] = ['./dist/index.d.ts'];
  console.log('  ✓ . (main)');

  // Add utils entry point
  exportsMap['./lib/utils'] = buildExportEntry({
    types: './dist/lib/utils.d.ts',
    esmPath: './dist/lib/utils.js',
    cjsPath: './dist/lib/utils.cjs',
  });
  typesVersionsMap['lib/utils'] = ['./dist/lib/utils.d.ts'];
  console.log('  ✓ ./lib/utils\n');

  // Legacy utils alias
  exportsMap['./utils'] = buildExportEntry({
    types: './dist/lib/utils.d.ts',
    esmPath: './dist/lib/utils.js',
    cjsPath: './dist/lib/utils.cjs',
  });
  typesVersionsMap['utils'] = ['./dist/lib/utils.d.ts'];

  // Scan components
  console.log('🔍 Scanning components in src/kapwa/...');
  const componentsSrcDir = resolve('src', 'kapwa');

  if (existsSync(componentsSrcDir)) {
    const componentFolders = await fs.readdir(componentsSrcDir);

    for (const componentName of componentFolders) {
      const componentPath = join(componentsSrcDir, componentName);
      const stat = await fs.stat(componentPath);

      if (stat.isDirectory()) {
        // 1. Find the extension for the main component entry point
        const mainExt = getEntryPointExtension(componentPath);
        if (!mainExt) {
          console.log(`  ⚠️  Skipping ${componentName} (no index file)`);
          continue;
        }

        console.log(`  ✓ ${componentName}`);

        // Main component export
        const mainSubpathKey = `./${componentName}`;
        exportsMap[mainSubpathKey] = buildExportEntry({
          types: `./dist/kapwa/${componentName}/index.d.ts`,
          esmPath: `./dist/kapwa/${componentName}/index${mainExt}.js`,
          cjsPath: `./dist/kapwa/${componentName}/index${mainExt}.cjs`,
        });
        componentExports.push(`export * from './kapwa/${componentName}';`);
        typesVersionsMap[componentName] = [
          `./dist/kapwa/${componentName}/index.d.ts`,
        ];

        // 2. Scan for sub-directory entry points (hooks, types, utils)
        for (const subDir of ALLOWED_SUBDIRECTORIES) {
          const subDirPath = join(componentPath, subDir);
          const subDirExt = getEntryPointExtension(subDirPath);

          if (subDirExt) {
            console.log(`    └─ ${componentName}/${subDir}`);
            const subpathKey = `./${componentName}/${subDir}`;
            exportsMap[subpathKey] = buildExportEntry({
              types: `./dist/kapwa/${componentName}/${subDir}/index.d.ts`,
              esmPath: `./dist/kapwa/${componentName}/${subDir}/index${subDirExt}.js`,
              cjsPath: `./dist/kapwa/${componentName}/${subDir}/index${subDirExt}.cjs`,
            });
            typesVersionsMap[`${componentName}/${subDir}`] = [
              `./dist/kapwa/${componentName}/${subDir}/index.d.ts`,
            ];
          }
        }
      }
    }
  }

  // Update package.json
  console.log('\n📝 Updating package.json...');

  // Preserve CSS exports that are manually added
  const preservedExports = {};
  if (packageJson.exports) {
    if (packageJson.exports['./kapwa.css']) {
      preservedExports['./kapwa.css'] = packageJson.exports['./kapwa.css'];
      console.log('  ✓ Preserved ./kapwa.css export');
    }
    if (packageJson.exports['./kapwa-fonts.css']) {
      preservedExports['./kapwa-fonts.css'] =
        packageJson.exports['./kapwa-fonts.css'];
      console.log('  ✓ Preserved ./kapwa-fonts.css export');
    }
  }

  packageJson.exports = { ...exportsMap, ...preservedExports };
  packageJson.typesVersions = { '*': typesVersionsMap };
  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
    'utf8'
  );
  console.log('  ✓ Added exports field');
  console.log('  ✓ Added typesVersions field');

  // Generate index.ts file
  console.log('\n📄 Generating src/index.ts...');
  const srcDir = join(projectRoot, 'src');
  try {
    await fs.mkdir(srcDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }

  let indexFileContent =
    '// This file is auto-generated - do not edit directly\n\n';
  indexFileContent += "// Utilities\nexport * from './lib/utils';\n\n";
  indexFileContent += '// Components\n';
  indexFileContent += componentExports.join('\n');
  indexFileContent += '\n';
  indexFileContent += '\n// Tailwind Plugin\n';
  indexFileContent += "export { kapwaPlugin as plugin } from './kapwa';\n";

  const indexFilePath = join(srcDir, 'index.ts');
  await fs.writeFile(indexFilePath, indexFileContent, 'utf8');
  console.log(
    `  ✓ Generated with ${componentExports.length} component exports`
  );

  console.log('\n✅ Done!\n');
}

(async () => {
  try {
    await generateComponentExports();
  } catch (error) {
    console.error('❌ An error occurred:', error);
    process.exit(1);
  }
})();
