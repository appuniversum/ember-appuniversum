'use strict';

module.exports = {
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{js,ts,gjs,gts,mjs,cjs}',
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
  ],
};
