'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      plugins: [
        // This is needed for dynamic imports to work: https://github.com/ef4/ember-auto-import#installing-ember-auto-import-in-an-addon
        require.resolve('ember-auto-import/babel-plugin'),
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
  },
};
