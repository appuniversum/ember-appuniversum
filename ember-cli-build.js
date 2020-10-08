'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    sassOptions: {
      sourceMapEmbed: true,
      includePaths: [
        'node_modules/@appuniversum/appuniversum'
      ]
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true
    },
    autoImport: {
      alias: {
        '@duetds/date-picker/loader': '@duetds/date-picker/dist/loader/index.cjs',
      },
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
