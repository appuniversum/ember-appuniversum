import { AuIcon } from '@appuniversum/ember-appuniversum';
import Component from '@glimmer/component';

// TODO: replace this with the named import from ember-truth-helpers v4 once our dependencies support that version
import eq from 'ember-truth-helpers/helpers/eq';

export default class AuInput extends Component {
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

  get classes() {
    return ['au-c-input', this.error, this.warning, this.disabled, this.width]
      .filter(Boolean)
      .join(' ');
  }

  <template>
    {{~#if @icon~}}
      <span class="au-c-input-wrapper {{this.iconAlignment}} {{this.width}}">
        <input class={{this.classes}} disabled={{@disabled}} ...attributes />
        <AuIcon
          @icon={{@icon}}
          @alignment={{if (eq @iconAlignment "right") "right" "left"}}
        />
      </span>
    {{~else~}}
      <input class={{this.classes}} disabled={{@disabled}} ...attributes />
    {{~/if~}}
  </template>
}
