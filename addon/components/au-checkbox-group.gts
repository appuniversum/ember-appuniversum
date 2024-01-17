import AuCheckbox from './au-checkbox';
import { hash } from '@ember/helper';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';

export interface AuCheckboxGroupSignature {
  Args: {
    alignment?: 'inline';
    name?: string;
    selected?: string[];
    disabled?: boolean;
    onChange?: (updatedGroupValue: string[], event: Event) => void;
  };
  Blocks: {
    default: [
      {
        Checkbox: WithBoundArgs<
          typeof AuCheckbox,
          'name' | 'inGroup' | 'groupValue' | 'disabled' | 'onChangeGroup'
        >;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class AuCheckboxGroup extends Component<AuCheckboxGroupSignature> {
  get alignmentClass() {
    if (this.args.alignment === 'inline') return 'au-c-control-group--inline';
    else return '';
  }

  <template>
    <div
      class="au-c-control-group {{this.alignmentClass}}"
      role="group"
      ...attributes
    >
      {{yield
        (hash
          Checkbox=(component
            AuCheckbox
            name=@name
            inGroup=true
            groupValue=@selected
            disabled=@disabled
            onChangeGroup=@onChange
          )
        )
      }}
    </div>
  </template>
}
