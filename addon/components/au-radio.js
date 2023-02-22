import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuRadioComponent extends Component {
  get checked() {
    const { inGroup, checked, groupValue, value } = this.args;
    return inGroup ? value === groupValue : checked;
  }

  get value() {
    const { value } = this.args;
    return value === undefined ? undefined : String(value);
  }

  @action
  onChange(event) {
    if (this.args.disabled === true) {
      return;
    }

    const { inGroup, onChange, onChangeGroup, value } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      onChangeGroup(value, event);
    } else if (typeof onChange === 'function') {
      onChange(event.target.value, event);
    }
  }
}
