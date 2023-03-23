import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuCheckboxComponent extends Component {
  get groupValue() {
    return this.args.groupValue || [];
  }

  get isCheckedInGroup() {
    const { value } = this.args;
    return this.groupValue.includes(value);
  }

  get checked() {
    const { inGroup, checked } = this.args;
    return inGroup ? this.isCheckedInGroup : checked;
  }

  @action
  onChange(event) {
    const { checked } = event.target;
    const { inGroup, onChange, onChangeGroup } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      const { groupValue } = this;
      const { value } = this.args;

      let updatedGroupValue;

      if (checked) {
        updatedGroupValue = [...groupValue, value];
      } else {
        updatedGroupValue = groupValue.filter((n) => n !== value);
      }

      onChangeGroup(updatedGroupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }
}
