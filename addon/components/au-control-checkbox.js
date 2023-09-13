import Component from '@glimmer/component';
import { action } from '@ember/object';
import { deprecate } from '@ember/debug';

export default class AuControlCheckbox extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      '[AuControlCheckbox] This component is deprecated in favour of AuCheckboxGroup (or AuCheckbox in specific scenarios).',
      false,
      {
        id: '@appuniversum/ember-appuniversum.au-control-checkbox',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.5.0',
        },
      },
    );
  }

  get disabledClass() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.checked, event);
    }
  }
}
