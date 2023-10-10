import { deprecate } from '@ember/debug';
import {
  dependencySatisfies,
  importSync,
  macroCondition,
} from '@embroider/macros';
import Component from '@glimmer/component';

// TODO: remove this conditional importing once we drop Ember v3 support
let Textarea;
if (macroCondition(dependencySatisfies('ember-source', '^4.1 || ^5.0'))) {
  Textarea = importSync('@ember/component').Textarea;
} else {
  Textarea = importSync('@ember/-internals/glimmer').Textarea;
}

export default class AuTextarea extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      '[AuTextarea] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      !this.useDeprecatedTextarea,
      {
        id: '@appuniversum/ember-appuniversum.au-textarea-value-argument',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.15.0',
        },
      },
    );
  }

  get useDeprecatedTextarea() {
    return 'value' in this.args;
  }

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
    {{~#if this.useDeprecatedTextarea~}}
      <Textarea
        @value={{@value}}
        class="au-c-textarea
          {{this.error}}
          {{this.warning}}
          {{this.width}}
          {{this.disabled}}"
        disabled={{@disabled}}
        ...attributes
      >
        {{yield}}
      </Textarea>
    {{~else~}}
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
    {{~/if~}}
  </template>
}
