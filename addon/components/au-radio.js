import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuRadioComponent extends Component {
  get checked() {
    const { inGroup, checked, groupValue, value } = this.args;
    return inGroup ? value === groupValue : checked;
  }

  @action
  onChange(event) {
    const { inGroup, onChange, onChangeGroup, value } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      onChangeGroup(value, event);
    } else if (typeof onChange === 'function') {
      onChange(event.target.value, event);
    }
  }
}
