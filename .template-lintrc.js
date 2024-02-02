'use strict';

module.exports = {
  extends: 'recommended',
  ignore: [
    'addon/components/au-data-table.hbs',
    'addon/components/au-data-table/**',
    'tests/dummy/app/components/docs*/**',
  ],
  overrides: [
    {
      files: ['tests/integration/**'],
      rules: {
        'require-input-label': 'off',
      },
    },
  ],
};
