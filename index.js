'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      // This is needed for dynamic imports to work: https://github.com/ef4/ember-auto-import#installing-ember-auto-import-in-an-addon
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },

  included: function (app) {
    this._super.included.apply(this, arguments);

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths =
      app.options.sassOptions.includePaths || [];

    app.options.sassOptions.includePaths.push(
      'node_modules/@appuniversum/appuniversum'
    );
  },

  contentFor: function(type, config) {
    if (type === 'body'){
      return '<div id="ember-appuniversum-wormhole"></div>';
    } else {
      return '';
    }
  }
};
