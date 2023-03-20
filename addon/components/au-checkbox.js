import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuCheckboxComponent extends Component {
  get groupValue() {
    return this.args.groupValue || [];
  }

  get isCheckedInGroup() {
    const { name } = this.args;
    return this.groupValue.includes(name);
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
      const { name } = this.args;

      let updatedGroupValue;

      if (checked) {
        updatedGroupValue = [...groupValue, name];
      } else {
        updatedGroupValue = groupValue.filter((n) => n !== name);
      }

      onChangeGroup(updatedGroupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }
}
