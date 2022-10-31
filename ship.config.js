/* eslint-disable import/no-commonjs, functional/no-expression-statement, functional/immutable-data */
module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: [],
    packagesToPublish: [
      'packages/calculator-bigint',
      'packages/calculator-number',
      'packages/core',
      'packages/currencies',
      'packages/dinero.js',
    ],
  },
  publishCommand({ tag }) {
    return `pnpm publish --access public --tag ${tag}`;
  },
  // versionUpdated({ exec, version }) {
  //   // Update package dependencies
  //   exec(
  //     `yarn lerna version ${version} --exact --no-git-tag-version --no-push --yes`
  //   );

  //   // Ship.js reads JSON and writes with `fs.writeFileSync(JSON.stringify(json, null, 2))`
  //   // which causes a formatting error in the `lerna.json` file.
  //   exec('yarn prettier lerna.json --write');
  // },
  // Skip preparation if it contains only `chore` commits
  shouldPrepare({ releaseType, commitNumbersPerType }) {
    const { fix = 0 } = commitNumbersPerType;

    return releaseType !== 'patch' || fix !== 0;
  },
};
