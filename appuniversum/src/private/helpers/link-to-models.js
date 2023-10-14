import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

/*
 * This helper can be used to support both @model and @models arguments when wrapping
 * the `<LinkTo>` component without it triggering assertions or having to use the component helper.
 *
 * The result of this helper should be passed into the `@models` argument of the `<LinkTo>` component:
 *
 * ```hbs
 * <LinkTo @models={{au-link-to-models @model @models}}>...</LinkTo>
 * ```
 *
 * It uses similar logic as the `<LinkTo>` component:
 * https://github.com/emberjs/ember.js/blob/v3.26.1/packages/%40ember/-internals/glimmer/lib/components/link-to.ts#L524-L540
 */

export function linkToModels([model, models]) {
  assert(
    'You cannot provide both the `@model` and `@models` arguments to the component.',
    !model || !models,
  );

  if (model) {
    return [model];
  } else if (models) {
    return models;
  } else {
    return [];
  }
}

export default helper(linkToModels);
