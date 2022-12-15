module.exports = {
  '**/*.ts': () => 'yarn test:types',
  '!(website/)**/*.(js|cjs|mjs|ts|)': (filenames) =>
    `yarn lint --fix ${filenames.join(' ')}`,
  'website/**/*.(js|jsx|ts|tsx)': () => `yarn --cwd website lint --fix`,
  '**/*.(js|cjs|mjs|jsx|ts|tsx)': (filenames) =>
    `yarn format ${filenames.join(' ')}`,
};
