import Component from '@glimmer/component';
import AuInput, { type AuInputSignature } from './au-input';
import auDateInput, {
  type AuDateInputModifierSignature,
} from '../modifiers/au-date-input';

export interface AuDateInputSignature {
  Args: {
    disabled?: AuInputSignature['Args']['disabled'];
    error?: AuInputSignature['Args']['error'];
    warning?: AuInputSignature['Args']['warning'];
    width?: AuInputSignature['Args']['width'];
    value?: AuDateInputModifierSignature['Args']['Named']['value'];
    prefillYear?: AuDateInputModifierSignature['Args']['Named']['prefillYear'];
    onChange?: AuDateInputModifierSignature['Args']['Named']['onChange'];
  };
  Element: AuInputSignature['Element'];
}

export default class AuDateInput extends Component<AuDateInputSignature> {
  <template>
    {{~!~}}
    <AuInput
      @disabled={{@disabled}}
      @error={{@error}}
      @icon="calendar"
      @warning={{@warning}}
      @width={{@width}}
      autocomplete="off"
      placeholder="DD-MM-JJJJ"
      {{auDateInput value=@value prefillYear=@prefillYear onChange=@onChange}}
      ...attributes
    />
    {{~!~}}
  </template>
}
