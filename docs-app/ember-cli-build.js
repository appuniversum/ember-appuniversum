'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      // Disable fingerprinting for now until this ember-cli-storybook issue is resolved:
      // https://github.com/storybookjs/ember-cli-storybook/issues/158
      enabled: false,
    },
  });

  return app.toTree();
};
