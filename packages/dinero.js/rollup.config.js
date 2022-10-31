/* eslint-disable functional/no-expression-statement, functional/immutable-data, import/no-commonjs, @typescript-eslint/no-var-requires */
const { createRollupConfigs } = require('../../scripts/rollup/config.js');

const pkg = require('./package.json');

module.exports = createRollupConfigs({ pkg });
