module.exports = {
  plugins: ['functional', 'sonarjs', 'promise', 'import'],
  extends: [
    'algolia',
    'algolia/jest',
    'algolia/typescript',
    'plugin:functional/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'functional/no-conditional-statement': ['off'],
    'functional/functional-parameters': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'valid-jsdoc': [
      'error',
      {
        requireReturnType: false,
        requireParamType: false,
      },
    ],
    'jsdoc/check-param-names': ['off'],
    'import/extensions': ['error', 'never', { js: 'always', ts: 'always' }],
    'import/no-unresolved': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**/*',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
  overrides: [
    {
      files: ['test/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': ['off'],
        'import/no-named-as-default': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        'functional/no-expression-statement': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-named-as-default': 'off',
        'sonarjs/no-duplicate-string': ['off'],
        'import/extensions': ['off'],
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: '**/*.cjs',
      rules: {
        'import/extensions': ['off'],
        'import/no-commonjs': ['off'],
        'functional/immutable-data': ['off'],
        'functional/no-loop-statement': ['off'],
        'functional/no-try-statement': ['off'],
        'functional/no-expression-statement': ['off'],
      },
    },
    {
      files: 'examples/**/*',
      rules: {
        'import/extensions': ['off'],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        extensions: ['js', 'ts'],
        enforceExtension: true,
        project: ['./'],
      },
    },
  },
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
};
