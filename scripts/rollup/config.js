/* eslint-disable functional/no-expression-statement, functional/immutable-data, functional/no-throw-statement, import/no-commonjs, @typescript-eslint/no-var-requires */
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const filesize = require('rollup-plugin-filesize');
const { terser } = require('rollup-plugin-terser');

const { getBundleBanner } = require('../getBundleBanner');

const BUILD_MODES = ['development', 'production'];
const extensions = ['.js', '.ts', '.json'];

function createRollupConfig({ mode, format, input, pkg, config }) {
  if (!BUILD_MODES.includes(mode)) {
    throw new Error(
      `The Rollup configuration ${JSON.stringify(mode)} mode is not supported.`
    );
  }

  const bundles = [];

  if (format === 'cjs') {
    bundles.push({
      ...config,
      input: '../../scripts/rollup/cjs.js',
      output: {
        file: `dist/cjs/${input}.js`,
        format,
        sourcemap: false,
        ...config.output,
      },
      plugins: [
        replace({
          preventAssignment: false,
          delimiters: ['', ''],
          values: {
            __BUNDLE__: input,
          },
        }),
        json(),
        resolve({
          extensions,
        }),
        filesize({
          showMinifiedSize: false,
          showGzippedSize: true,
        }),
        ...(config.plugins || []),
      ].filter(Boolean),
    });
  }

  bundles.push({
    ...config,
    input: `dist/esm/${input}.js`,
    output: {
      file: `dist/${format}/${input}.${mode}.js`,
      format,
      sourcemap: true,
      name: /dinero\.js$/.test(pkg.name) ? pkg.name : pkg.name.replace('.', ''),
      banner: getBundleBanner(pkg),
      ...config.output,
    },
    plugins: [
      replace({
        preventAssignment: false,
        delimiters: ['', ''],
        values: {
          'process.env.NODE_ENV': JSON.stringify(mode),
          '@dinerojs': '@dinero.js',
        },
      }),
      json(),
      resolve({
        extensions,
      }),
      mode === 'production' && terser(),
      filesize({
        showMinifiedSize: false,
        showGzippedSize: true,
      }),
      ...(config.plugins || []),
    ].filter(Boolean),
  });

  return bundles;
}

exports.createRollupConfigs = function createRollupConfigs({
  pkg,
  inputs = ['index'],
  config = {},
}) {
  return inputs
    .map((input) => {
      return [
        createRollupConfig({
          mode: 'development',
          format: 'umd',
          input,
          pkg,
          config,
        }),
        createRollupConfig({
          mode: 'production',
          format: 'umd',
          input,
          pkg,
          config,
        }),
        createRollupConfig({
          mode: 'development',
          format: 'cjs',
          input,
          pkg,
          config,
        }),
        createRollupConfig({
          mode: 'production',
          format: 'cjs',
          input,
          pkg,
          config,
        }),
      ];
    })
    .flat(2);
};
