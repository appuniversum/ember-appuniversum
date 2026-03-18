'use strict';

module.exports = {
  extends: 'recommended',
  ignore: ['tests/dummy/app/components/docs*/**'],
  overrides: [
    {
      files: ['tests/integration/**'],
      rules: {
        'require-input-label': 'off',
      },
    },
  ],
};
