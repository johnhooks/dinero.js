/* eslint-disable import/no-commonjs, functional/immutable-data, functional/no-expression-statement */
module.exports = {
  // '**/*.ts': () => 'turbo test:types',
  '**/*.(ts|js)': (filenames) => [
    `eslint --ext .js,.ts --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
};
