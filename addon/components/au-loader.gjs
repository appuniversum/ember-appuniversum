import { deprecate } from '@ember/debug';
import Component from '@glimmer/component';

export default class AuLoader extends Component {
  get padding() {
    deprecate(
      '[AuLoader] The `@size` argument is deprecated. Use `@padding` instead.',
      !('size' in this.args),
      {
        id: '@appuniversum/ember-appuniversum.au-loader-size',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.17.0',
        },
      },
    );

    if (this.args.padding == 'small') return 'au-c-loader--small';
    if (this.args.padding == 'large') return 'au-c-loader--large';
    if (this.args.size == 'small')
      // Deprecated: remove in next major release
      return 'au-c-loader--small';
    if (this.args.size == 'large')
      // Deprecated: remove in next major release
      return 'au-c-loader--large';
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
