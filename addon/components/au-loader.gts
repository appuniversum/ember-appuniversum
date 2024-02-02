import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import { LoadingAnimation } from '../private/components/loading-animation';
import { modifier } from 'ember-modifier';

const deprecateOldVersion = modifier(function deprecateOldVersion() {
  deprecate(
    `[AuLoader] This version of the \`AuLoader\` component is deprecated.

Follow the migration guide to switch to the new version: https://github.com/appuniversum/ember-appuniversum/pull/464

`,
    false,
    {
      id: '@appuniversum/ember-appuniversum.au-loader-visible-by-default',
      until: '4.0.0',
      for: '@appuniversum/ember-appuniversum',
      since: {
        available: '3.1.0',
        enabled: '3.1.0',
      },
    },
  );
});

export interface AuLoaderSignature {
  Args: {
    inline?: boolean;
    hideMessage?: boolean;
    // Deprecated arguments
    disableMessage?: boolean;
    message?: string;
    padding?: 'small' | 'large';
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuLoader extends Component<AuLoaderSignature> {
  get padding() {
    if (this.args.padding == 'small') return 'au-c-loader--small';
    if (this.args.padding == 'large') return 'au-c-loader--large';
    else return '';
  }

  get message() {
    return this.args.message || 'Aan het laden';
  }

  <template>
    {{#if (has-block)}}
      <div class="au-c-loader au-u-text-center" role="status" ...attributes>
        <LoadingAnimation />
        {{#if @inline}}
          <span
            class="au-u-para {{if @hideMessage 'au-u-hidden-visually'}}"
          >{{~yield~}}</span>
        {{else}}
          <p
            class="au-u-para {{if @hideMessage 'au-u-hidden-visually'}}"
          >{{yield}}</p>
        {{/if}}
      </div>
    {{else}}
      <div
        class="au-c-loader {{this.padding}}"
        {{deprecateOldVersion}}
        ...attributes
      >
        <div class="au-c-loader__animation" aria-hidden="true"></div>
        {{#unless @disableMessage}}
          <span class="au-u-hidden-visually">{{this.message}}</span>
        {{/unless}}
      </div>
    {{/if}}
  </template>
}
