import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuCheckboxComponent extends Component {
  @action
  onChange(event) {
    if (this.args.isDisabled === true) {
      return;
    }

    const { checked } = event.target;
    const { onChange } = this.args;
    if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }
}
