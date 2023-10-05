import { AuIcon } from '@appuniversum/ember-appuniversum';
import Component from '@glimmer/component';

const SKIN_CLASSES = {
  border: 'au-c-badge--border',
  action: 'au-c-badge--action',
  brand: 'au-c-badge--brand',
  success: 'au-c-badge--success',
  warning: 'au-c-badge--warning',
  error: 'au-c-badge--error',
};

export default class AuBadge extends Component {
  get skin() {
    const skin = SKIN_CLASSES[this.args.skin];
    return skin ? skin : 'au-c-badge--default';
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
