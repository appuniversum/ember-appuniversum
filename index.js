'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      // This is needed for dynamic imports to work: https://github.com/ef4/ember-auto-import#installing-ember-auto-import-in-an-addon
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },
};
