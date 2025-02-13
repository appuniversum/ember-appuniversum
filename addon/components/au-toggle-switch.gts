import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import and from 'ember-truth-helpers/helpers/and';
import not from 'ember-truth-helpers/helpers/not';

export interface AuToggleSwitchSignature {
  Args: {
    alignment?: 'right';
    checked?: boolean;
    disabled?: boolean;
    identifier?: string;
    label?: string;
    name?: string;
    onChange?: (checked: boolean, event: Event) => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class AuToggleSwitch extends Component<AuToggleSwitchSignature> {
  get alignmentClass() {
    if (this.args.alignment === 'right')
      return 'au-c-toggle-switch--alignment-right';
    else return '';
  }

  @action
  onChange(event: Event) {
    if (this.args.onChange) {
      this.args.onChange(
        (event.target as AuToggleSwitchSignature['Element']).checked,
        event,
      );
    }
  }

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><label
      for={{@identifier}}
      class="au-c-toggle-switch
        {{this.alignmentClass}}
        {{if
          (and (not (has-block)) (not @label))
          'au-c-toggle-switch--labelless'
        }}
        {{if @disabled 'is-disabled'}}"
    >
      <input
        checked={{@checked}}
        type="checkbox"
        class="au-c-toggle-switch__input au-u-hidden-visually"
        id={{@identifier}}
        name={{@name}}
        disabled={{@disabled}}
        {{on "change" this.onChange}}
        ...attributes
      />
      <span class="au-c-toggle-switch__toggle"></span>
      {{yield}}
    </label></template>
}
