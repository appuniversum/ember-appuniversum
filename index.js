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
};
