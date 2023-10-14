import fsExtra from 'fs-extra';
const { readJsonSync, writeJsonSync } = fsExtra;
import walkSync from 'walk-sync';

/**
 * Temporary plugin to workaround an issue in the Embroider version:
 * https://github.com/embroider-build/embroider/issues/1569
 *
 * @param {{
 *  from: string;
 *  toPublicPath: string;
 *  include: string[];
 *  exclude: string[];
 * }} options
 *
 * @import { Plugin } from "rollup";
 * @returns {Plugin}
 */
export default function publicAssets(options) {
  const path = options.from;
  const includeGlobPatterns = options?.include;
  const excludedGlobPatterns = options?.exclude || [];

  return {
    name: 'public-assets-bundler',
    generateBundle() {
      let pkg = readJsonSync('package.json');
      const filenames = walkSync(path, {
        directories: false,
        globs: includeGlobPatterns,
        ignore: excludedGlobPatterns,
      });

      let filePrefix = options.toPublicPath;

      if (!filePrefix.startsWith('/')) {
        filePrefix = '/' + filePrefix;
      }

      if (!filePrefix.endsWith('/')) {
        filePrefix = filePrefix + '/';
      }

      const publicAssets = filenames.reduce((acc, filename) => {
        acc[`./${path}/${filename}`] = filePrefix + filename;
        return acc;
      }, {});

      let originalPublicAssets = pkg['ember-addon']?.['public-assets'];

      let hasChanges =
        JSON.stringify(originalPublicAssets) !== JSON.stringify(publicAssets);

      if (hasChanges) {
        pkg['ember-addon'] = Object.assign({}, pkg['ember-addon'], {
          'public-assets': publicAssets,
        });

        writeJsonSync('package.json', pkg, { spaces: 2 });
      }
    },
  };
}
