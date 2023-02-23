import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuCheckboxComponent extends Component {
  get groupValueAsArray() {
    return this.args.groupValue || [];
  }

  get groupValueAsObject() {
    return this.args.groupValue || {};
  }

  get isCheckedInGroup() {
    const name = this.args.name;

    if (this.args.groupValueIsObject) {
      return this.groupValueAsObject[name] === true;
    }

    return this.groupValueAsArray.includes(name);
  }

  get checked() {
    const { inGroup, checked } = this.args;
    return inGroup ? this.isCheckedInGroup : checked;
  }

  @action
  onChange(event) {
    if (this.args.isDisabled === true) {
      return;
    }

    const { checked } = event.target;
    const { inGroup, onChange, onChangeGroup } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      const { groupValueAsArray, groupValueAsObject } = this;
      const { groupValueIsObject, name } = this.args;

      let groupValue;

      if (groupValueIsObject) {
        groupValue = { ...groupValueAsObject, name: checked };
      } else if (checked) {
        groupValue = [...groupValueAsArray, name];
      } else {
        groupValue = groupValueAsArray.filter((n) => n !== name);
      }

      onChangeGroup(groupValue, event);
    } else if (typeof onChange === 'function') {
      onChange(checked, event);
    }
  }
}
