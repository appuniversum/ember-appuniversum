import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

// TODO Cleanup v2: Remove this file and move the template to the components/au-toolbar/group.hbs
export default class AuToolbarGroupComponent extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      'Invoking `AuToolbarGroup` directly is deprecated. You should use the component that is yielded from the `AuToolbar` component instead.',
      this.args.wasYielded,
      {
        id: '@appuniversum/ember-appuniversum.au-toolbar-group.direct-invocation',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );
  }
}
