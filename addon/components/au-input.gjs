import { AuIcon } from '@appuniversum/ember-appuniversum';
import auInputmask from '@appuniversum/ember-appuniversum/modifiers/au-inputmask';
import { Input } from '@ember/component';
import { assert, deprecate } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

// TODO: replace this with the named import from ember-truth-helpers v4 once our dependencies support that version
import eq from 'ember-truth-helpers/helpers/eq';

export default class AuInput extends Component {
  constructor() {
    super(...arguments);

    assert(
      '<AuInput>: An `@onChange` handler was provided but that will only be called if `@mask` or `@maskOptions` is provided as well.',
      !this.args.onChange ||
        (typeof this.args.onChange === 'function' && this.isMasked),
    );

    deprecate(
      '[AuInput] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      !('value' in this.args),
      {
        id: '@appuniversum/ember-appuniversum.au-input',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.13.0',
        },
      },
    );
  }

  get useDeprecatedInput() {
    return 'value' in this.args || 'type' in this.args;
  }

  get width() {
    if (this.args.width == 'block') return 'au-c-input--block';
    else return '';
  }

  get iconAlignment() {
    if (this.args.iconAlignment == 'left') return 'au-c-input-wrapper--left';
    if (this.args.iconAlignment == 'right') return 'au-c-input-wrapper--right';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-input--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-input--warning';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  get type() {
    deprecate(
      '[AuInput] The `@type` argument is deprecated. Use the `type` attribute instead.',
      !('type' in this.args),
      {
        id: '@appuniversum/ember-appuniversum.au-input',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.13.0',
        },
      },
    );
    return this.args.type || 'text';
  }

  get classes() {
    return [
      'au-c-input',
      this.isMasked ? 'au-c-input--mask' : '',
      this.error,
      this.warning,
      this.disabled,
      this.width,
    ]
      .filter(Boolean)
      .join(' ');
  }

  get isMasked() {
    return Boolean(this.args.mask) || Boolean(this.args.maskOptions);
  }

  get inputmaskModifier() {
    return this.isMasked ? auInputmask : undefined;
  }

  get inputmaskOptions() {
    if (!this.isMasked) {
      return {};
    }

    deprecate(
      '[AuInput] The masking feature is deprecated. Use the `{{au-inputmask}}` modifier instead.',
      false,
      {
        id: '@appuniversum/ember-appuniversum.au-input',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.13.0',
        },
      },
    );

    let { mask, maskPlaceholder, maskOptions = {} } = this.args;

    let options = {
      ...maskOptions,
    };

    if (mask) {
      options.mask = mask;
    }

    if (maskPlaceholder) {
      options.placeholder = maskPlaceholder;
    }

    return options;
  }

  @action
  handleChange(event) {
    // Inputmask is a no-op if no options are provided when setting it up, as a result, the .inputmask property won't be set on the element
    // In that situation we fall back to the regular value.
    let value = event.target.inputmask?.unmaskedvalue() || event.target.value;
    this.args.onChange?.(value);
  }

  <template>
    {{~#if @icon~}}
      <span class="au-c-input-wrapper {{this.iconAlignment}} {{this.width}}">
        {{#if this.isMasked}}
          <input
            type={{this.type}}
            value={{@value}}
            class={{this.classes}}
            disabled={{@disabled}}
            ...attributes
            {{on "input" this.handleChange}}
            {{this.inputmaskModifier options=this.inputmaskOptions}}
          />
        {{else}}
          {{#if this.useDeprecatedInput}}
            <Input
              @value={{@value}}
              @type={{this.type}}
              class={{this.classes}}
              disabled={{@disabled}}
              ...attributes
            />
          {{else}}
            <input
              type={{this.type}}
              value={{@value}}
              class={{this.classes}}
              disabled={{@disabled}}
              ...attributes
            />
          {{/if}}
        {{/if}}
        {{#if (eq @iconAlignment "right")}}
          <AuIcon @icon={{@icon}} @alignment="right" />
        {{else}}
          <AuIcon @icon={{@icon}} @alignment="left" />
        {{/if}}
      </span>
    {{~else~}}
      {{~#if this.isMasked~}}
        <input
          type={{this.type}}
          value={{@value}}
          class={{this.classes}}
          disabled={{@disabled}}
          ...attributes
          {{on "input" this.handleChange}}
          {{this.inputmaskModifier options=this.inputmaskOptions}}
        />
      {{~else~}}
        {{~#if this.useDeprecatedInput~}}
          <Input
            @value={{@value}}
            @type={{this.type}}
            class={{this.classes}}
            disabled={{@disabled}}
            ...attributes
          />
        {{~else~}}
          <input
            type={{this.type}}
            value={{@value}}
            class={{this.classes}}
            disabled={{@disabled}}
            ...attributes
          />
        {{~/if~}}
      {{~/if~}}
    {{~/if~}}
  </template>
}
