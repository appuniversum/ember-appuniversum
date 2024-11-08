import ts from 'typescript-eslint';
import ember from 'eslint-plugin-ember/recommended';

const parserOptions = {
  esm: {
    ts: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
};

export default ts.config(
  {
    ignores: ['**/*.js', '**/*.mjs'],
  },
  {
    name: 'ts',
    files: ['**/*.ts'],
    languageOptions: {
      // Uncommenting this fixes the issue so it seems to be related to switching parsers for different kinds of typed files?
      // parser: ember.parser,
      parserOptions: parserOptions.esm.ts,
    },
    extends: [...ts.configs.recommendedTypeChecked],
    // extends: [...ts.configs.recommended], // also fails
  },
  {
    name: 'gts',
    files: ['**/*.gts'],
    languageOptions: {
      parser: ember.parser,
      parserOptions: parserOptions.esm.ts,
    },
    // These don't really matter, commented or not, it fails
    // extends: [...ts.configs.recommendedTypeChecked, ember.configs.gts],
  },
);
