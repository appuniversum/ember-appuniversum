'use strict';

// Copied from https://github.com/ember-cli/eslint-plugin-ember/pull/2107/files
const typescriptEslintRecommendedRules =
  require('@typescript-eslint/eslint-plugin').configs['eslint-recommended']
    .overrides[0].rules;

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['ember', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    // ts files
    {
      files: ['**/*.{gts,ts}'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // https://github.com/ember-cli/eslint-plugin-ember/issues/2106
        // TODO: remove this when eslint-plugin-ember ships it, or when we switch to the flat config setup
        ...typescriptEslintRecommendedRules,

        // This works around an issue in Glint https://github.com/typed-ember/glint/issues/697
        // It also makes adding state to a component easier, since no other code changes would be needed.
        'ember/no-empty-glimmer-component-classes': 'off',
      },
    },
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js',
      ],
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts,gts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
