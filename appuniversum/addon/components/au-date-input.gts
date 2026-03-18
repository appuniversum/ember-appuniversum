import Component from '@glimmer/component';
import AuInput, { type AuInputSignature } from './au-input';
import auDateInput, {
  type AuDateInputModifierSignature,
} from '../modifiers/au-date-input';
import { CalendarIcon } from './icons/calendar';

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
  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><AuInput
      @disabled={{@disabled}}
      @error={{@error}}
      @icon={{CalendarIcon}}
      @warning={{@warning}}
      @width={{@width}}
      autocomplete="off"
      placeholder="DD-MM-JJJJ"
      {{auDateInput value=@value prefillYear=@prefillYear onChange=@onChange}}
      ...attributes
    /></template>
}
