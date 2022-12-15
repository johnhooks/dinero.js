const resolutions = [
  {
    matcher: /\.js$/i,
    extensions: ['.ts'],
  },
  {
    matcher: /\.mjs$/i,
    extensions: ['.mts'],
  },
  {
    matcher: /\.cjs$/i,
    extensions: ['.cts'],
  },
];

function resolverForTSJest(path, options) {
  const resolver = options.defaultResolver;

  const resolution = resolutions.find(({ matcher }) => matcher.test(path));

  if (resolution) {
    for (const extension of resolution.extensions) {
      try {
        return resolver(path.replace(resolution.matcher, extension), options);
      } catch {
        // eslint-disable-next-line no-continue
        continue;
      }
    }
  }

  return resolver(path, options);
}

module.exports = resolverForTSJest;
