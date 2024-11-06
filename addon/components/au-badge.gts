import Component from '@glimmer/component';
import AuIcon, { type AuIconSignature } from './au-icon';

export interface AuBadgeSignature {
  Args: {
    icon?: AuIconSignature['Args']['icon'];
    iconVisible?: boolean;
    number?: number;
    size?: 'small';
    skin?: 'action' | 'border' | 'brand' | 'error' | 'success' | 'warning';
  };
  Element: HTMLSpanElement;
}

const SKIN_CLASSES = {
  border: 'au-c-badge--border',
  action: 'au-c-badge--action',
  brand: 'au-c-badge--brand',
  success: 'au-c-badge--success',
  warning: 'au-c-badge--warning',
  error: 'au-c-badge--error',
  default: 'au-c-badge--default',
};

export default class AuBadge extends Component<AuBadgeSignature> {
  get skin() {
    if (!this.args.skin) {
      return SKIN_CLASSES.default;
    }

    const skin = SKIN_CLASSES[this.args.skin];
    return skin ? skin : SKIN_CLASSES.default;
  }

  get size() {
    if (this.args.size === 'small') return 'au-c-badge--small';
    return '';
  }

  // We don't want whitespace between our component and the outer template tag since that's visible in the app (inline element): https://github.com/emberjs/rfcs/issues/982
  // prettier-ignore
  <template><span
      class="au-c-badge {{this.skin}} {{this.size}}"
      aria-hidden={{if @iconVisible "false" "true"}}
      ...attributes
    >
      {{#if @icon}}
        <AuIcon @icon={{@icon}} />
      {{/if}}
      {{#if @number}}
        <span class="au-c-badge__number">{{@number}}</span>
      {{/if}}
    </span></template>
}
