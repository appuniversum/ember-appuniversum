import Component from '@glimmer/component';

export default class AuLoader extends Component {
  get padding() {
    if (this.args.padding == 'small') return 'au-c-loader--small';
    if (this.args.padding == 'large') return 'au-c-loader--large';
    else return '';
  }

  get message() {
    if (this.args.message) return this.args.message;
    else return 'Aan het laden';
  }

  <template>
    <div class="au-c-loader {{this.padding}}" ...attributes>
      <div class="au-c-loader__animation" aria-hidden="true"></div>
      {{#unless @disableMessage}}
        <span class="au-u-hidden-visually">{{this.message}}</span>
      {{/unless}}
    </div>
  </template>
}
