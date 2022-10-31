/* eslint-disable import/no-commonjs, functional/no-expression-statement, functional/immutable-data */
module.exports = {
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
  },
  publishCommand({ tag }) {
    return `pnpm publish --access public --tag ${tag} --publish-branch develop`;
  },
  installCommand: () => 'pnpm install',
  // Skip preparation if it contains only `chore` commits
  shouldPrepare({ releaseType, commitNumbersPerType }) {
    const { fix = 0 } = commitNumbersPerType;

    return releaseType !== 'patch' || fix !== 0;
  },
};
