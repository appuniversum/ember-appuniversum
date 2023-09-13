import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import { deprecate } from '@ember/debug';

export default class AuToggleSwitch extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      '[AuToggleSwitch] The @label argument for this component is deprecated in favour of using block content.',
      !isPresent(this.args.label),
      {
        id: '@appuniversum/ember-appuniversum.au-toggle-switch.label',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.6.0',
        },
      },
    );
  }

  get alignmentClass() {
    if (this.args.alignment === 'right')
      return 'au-c-toggle-switch--alignment-right';
    else return '';
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.checked, event);
    }
  }
}
