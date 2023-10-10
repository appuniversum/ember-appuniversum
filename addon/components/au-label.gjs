import Component from '@glimmer/component';
import { AuBadge, AuPill } from '@appuniversum/ember-appuniversum';

export default class AuLabel extends Component {
  get inline() {
    if (this.args.inline) return 'au-c-label--inline';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-label--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-label--warning';
    else return '';
  }

  <template>
    <label
      class="au-c-label {{this.error}} {{this.warning}} {{this.inline}}"
      ...attributes
    >
      {{#if this.warning}}
        <AuBadge
          @icon="alert-triangle"
          @size="small"
          @skin="warning"
          class="au-u-margin-right-tiny"
        />
      {{/if}}
      {{#if this.error}}
        <AuBadge
          @icon="cross"
          @size="small"
          @skin="error"
          class="au-u-margin-right-tiny"
        />
      {{/if}}

      {{yield}}

      {{#if @required}}
        {{#if @inline}}
          <span class="au-c-label__addendum">
            {{~if @requiredLabel @requiredLabel "*"~}}
          </span>
        {{else}}
          <AuPill>{{if @requiredLabel @requiredLabel "Verplicht"}}</AuPill>
        {{/if}}
      {{/if}}
    </label>
  </template>
}
