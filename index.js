'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      // This is needed for dynamic imports to work: https://github.com/ef4/ember-auto-import#installing-ember-auto-import-in-an-addon
      plugins: [
        require.resolve('ember-auto-import/babel-plugin'),
        // Copied from the v2 addon blueprint: https://github.com/embroider-build/addon-blueprint/blob/eef35575e7130ffe3b588ecd83c637f35fa56220/files/__addonLocation__/babel.config.json#L3
        [
          '@babel/plugin-transform-typescript',
          {
            allExtensions: true,
            onlyRemoveTypeImports: true,
            allowDeclareFields: true,
          },
        ],
      ],
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
  },

  init() {
    this._super.init.apply(this, arguments);
    this.maybeAddConcurrencyPlugin();
  },

  maybeAddConcurrencyPlugin() {
    const VersionChecker = require('ember-cli-version-checker');
    const checker = new VersionChecker(this.project);
    const dep = checker.for('ember-concurrency');

    if (dep.gte('4.0.0')) {
      // ember-concurrency v4+ requires a custom babel transform. Once we drop ember-concurrency v3 support we can remove this conditional registration.
      this.options.babel.plugins.push(
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      );
    }
  },
};
