import { createRollupConfigs } from '../../scripts/rollup/config.js';

import pkg from './package.json';

export default createRollupConfigs({ pkg, inputs: ['index', 'latest', '168'] });
