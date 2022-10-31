/* eslint-disable functional/no-expression-statement, functional/immutable-data, import/no-commonjs, @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');

exports.getBundleBanner = function getBundleBanner(pkg) {
  const lastCommitHash = execSync('git rev-parse --short HEAD')
    .toString()
    .trim();
  const version = process.env.SHIPJS
    ? pkg.version
    : `${pkg.version} (UNRELEASED ${lastCommitHash})`;
  const authors = pkg?.author?.name
    ? `© ${pkg.author.name} and contributors`
    : `© ${pkg.contributors
        .map(({ name }) => name)
        .join(', ')} and contributors`;

  return `/*! ${pkg.name} ${version} | MIT License | ${authors} | ${pkg.homepage} */`;
};
