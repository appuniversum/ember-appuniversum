import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export default class AuListItem extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      'Invoking `AuList::Item` directly is deprecated. You should use the component that is yielded from the `AuList` component instead.',
      this.args.wasYielded,
      {
        id: '@appuniversum/ember-appuniversum.au-list.item.direct-invocation',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );
  }
}
