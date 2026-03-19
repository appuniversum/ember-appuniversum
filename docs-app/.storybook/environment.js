'use strict';

module.exports = function (environment) {
  const ENV = {};

  // @ember-cli-storybook resets the rootURL value, but we need it to be set for our icons and images to work on Github pages.
  // More information: https://github.com/storybookjs/ember-cli-storybook/pull/87
  if (process.env.ROOT_URL) {
    ENV.rootURL = process.env.ROOT_URL;
  }

  return ENV;
};
