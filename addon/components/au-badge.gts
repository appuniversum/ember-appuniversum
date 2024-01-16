import Component from '@glimmer/component';
import AuIcon from './au-icon';

export interface AuBadgeSignature {
  Args: {
    icon?: string;
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

  <template>
    <span
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
    </span>
  </template>
}
