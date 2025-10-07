'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    scenarios: [
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
      {
        name: 'ember-concurrency-v3',
        npm: {
          dependencies: {
            'ember-concurrency': '^3.0.0',
          },
          devDependencies: {
            'ember-basic-dropdown': null,
            'ember-power-select': '^7.0.0',
          },
        },
      },
      {
        name: 'ember-concurrency-v4',
        npm: {
          dependencies: {
            'ember-concurrency': '^4.0.0',
          },
        },
      },
    ],
  };
};
