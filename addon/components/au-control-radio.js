import Component from '@glimmer/component';
import { action } from '@ember/object';
import { deprecate } from '@ember/debug';

export default class AuControlRadio extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      '[AuControlRadio] This component is deprecated in favour of AuRadio',
      false,
      {
        id: '@appuniversum/ember-appuniversum.au-control-radio',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.5.0',
        },
      }
    );
  }

  get disabledClass() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }
}
