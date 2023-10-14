'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['../appuniversum/styles'], // This ensures that the /styles folder is watched and auto-reloading works.
    },
    autoImport: {
      watchDependencies: ['@appuniversum/ember-appuniversum'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
