import { AuBadge, AuPill } from '@appuniversum/ember-appuniversum';
import { hash } from '@ember/helper';
import Component from '@glimmer/component';

export default class AuFieldset extends Component {
  get alignment() {
    if (this.args.alignment == 'inline') return 'au-c-fieldset--inline';
    else return '';
  }

  <template>
    <fieldset class="au-c-fieldset {{this.alignment}}" ...attributes>
      {{yield (hash legend=Legend)}}
      {{yield (hash content=Content)}}
    </fieldset>
  </template>
}

class Legend extends Component {
  get skin() {
    if (this.args.skin == '1') return 'au-u-h1';
    if (this.args.skin == '2') return 'au-u-h2';
    if (this.args.skin == '3') return 'au-u-h3';
    if (this.args.skin == '4') return 'au-u-h4';
    if (this.args.skin == '5') return 'au-u-h5';
    if (this.args.skin == '6') return 'au-u-h6';
    if (this.args.skin == 'functional') return 'au-u-h-functional';
    else return 'au-u-h6';
  }

  get inline() {
    if (this.args.inline) return 'au-c-fieldset-legend--inline';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-fieldset-legend--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-fieldset-legend--warning';
    else return '';
  }

  <template>
    {{#if (has-block)}}
      <div ...attributes>
        <legend
          class="au-c-fieldset-legend
            {{this.skin}}
            {{this.error}}
            {{this.warning}}"
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
              <span class="au-c-fieldset-legend__addendum">
                {{~if @requiredLabel @requiredLabel "*"~}}
              </span>
            {{else}}
              <AuPill>{{if @requiredLabel @requiredLabel "Verplicht"}}</AuPill>
            {{/if}}
          {{/if}}
        </legend>
      </div>
    {{/if}}
  </template>
}

const Content = <template>
  {{#if (has-block)}}
    <div class="au-c-fieldset__content" ...attributes>
      {{yield}}
    </div>
  {{/if}}
</template>;
