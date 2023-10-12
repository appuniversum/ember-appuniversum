'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
    sassOptions: {
      sourceMapEmbed: true,
      includePaths: ['./styles'], // This ensures that the /styles folder is watched and auto-reloading works.
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true,
    },
    autoImport: {
      alias: {
        '@duetds/date-picker/loader':
          '@duetds/date-picker/dist/loader/index.cjs',
      },
    },
    '@appuniversum/ember-appuniversum': {
      dutchDatePickerLocalization:
        process.env.DATE_PICKER_EN_LOCALIZATION === 'true' ? false : true,
      disableWormholeElement: true,
    },
    fingerprint: {
      // Disable fingerprinting for now until this ember-cli-storybook issue is resolved:
      // https://github.com/storybookjs/ember-cli-storybook/issues/158
      enabled: false,
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
