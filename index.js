'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      // This is needed for dynamic imports to work: https://github.com/ef4/ember-auto-import#installing-ember-auto-import-in-an-addon
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    '@embroider/macros': {
      setOwnConfig: {
        dutchDatePickerLocalization: false,
      },
    },
  },

  included: function (app) {
    this._super.included.apply(this, arguments);

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths =
      app.options.sassOptions.includePaths || [];

    let addonOptions = app.options[this.name];
    if (addonOptions?.dutchDatePickerLocalization) {
      this.options[
        '@embroider/macros'
      ].setOwnConfig.dutchDatePickerLocalization = true;
    }

    this.shouldDisableWormholeElementRendering = Boolean(
      addonOptions?.disableWormholeElement
    );

    this.ui.writeDeprecateLine(
      `\
The #ember-appuniversum-wormhole element is deprecated. Please use the \`<AuModalContainer />\` component where appropriate and disable this warning by adding the following flag to your ember-cli-build.js file:

//ember-cli-build.js
'@appuniversum/ember-appuniversum': {
  disableWormholeElement: true,
},

More information: https://github.com/appuniversum/ember-appuniversum/issues/258
`,
      this.shouldDisableWormholeElementRendering
    );
  },

  contentFor: function (type) {
    if (type === 'body') {
      return this.shouldDisableWormholeElementRendering
        ? ''
        : '<div id="ember-appuniversum-wormhole"></div>';
    } else {
      return '';
    }
  },
};
