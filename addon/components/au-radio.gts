import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import not from 'ember-truth-helpers/helpers/not';

interface PrivateArgs {
  groupValue?: unknown;
  inGroup?: boolean;
  onChangeGroup?: (selected: string | undefined, event: Event) => void;
}

export interface AuRadioSignature {
  Args: {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (selected: string, event: Event) => void;
    value?: string;
  } & PrivateArgs;
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class AuRadio extends Component<AuRadioSignature> {
  get checked() {
    const { inGroup, checked, groupValue, value } = this.args;
    return inGroup ? value === groupValue : checked;
  }

  @action
  onChange(event: Event) {
    const { inGroup, onChange, onChangeGroup, value } = this.args;

    if (inGroup && typeof onChangeGroup === 'function') {
      onChangeGroup(value, event);
    } else if (typeof onChange === 'function') {
      onChange((event.target as AuRadioSignature['Element']).value, event);
    }
  }

  <template>
    {{~!~}}
    <label
      class="au-c-control au-c-control--radio
        {{if (and (not @inGroup) (not (has-block))) 'au-c-control--labelless'}}
        {{if @disabled 'is-disabled'}}"
    >
      <input
        type="radio"
        name={{@name}}
        value={{@value}}
        checked={{this.checked}}
        disabled={{@disabled}}
        class="au-c-control__input"
        {{on "change" this.onChange}}
        ...attributes
      />
      <span class="au-c-control__indicator"></span>
      {{yield}}
    </label>
    {{~!~}}
  </template>
}
