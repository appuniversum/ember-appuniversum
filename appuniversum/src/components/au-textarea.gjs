import Component from '@glimmer/component';

export default class AuTextarea extends Component {
  get width() {
    if (this.args.width == 'block') return 'au-c-textarea--block';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-textarea--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-textarea--warning';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  <template>
    {{~!~}}
    <textarea
      class="au-c-textarea
        {{this.error}}
        {{this.warning}}
        {{this.width}}
        {{this.disabled}}"
      disabled={{@disabled}}
      ...attributes
    >
      {{~yield~}}
    </textarea>
    {{~!~}}
  </template>
}
