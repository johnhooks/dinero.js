module.exports = {
  '**/*.ts': () => 'yarn test:types',
  '!(website/)**/*.(js|cjs|mjs|ts|)': (filenames) =>
    `eslint --ext .js,.cjs,.mjs.ts --fix ${filenames.join(' ')}`,
  'website/**/*.(js|jsx|ts|tsx)': () => `yarn --cwd website lint --fix`,
  '**/*.(js|cjs|mjs|jsx|ts|tsx)': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
