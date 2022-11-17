import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { modifier } from 'ember-modifier';
import AuFloatingUiModifier from '../modifiers/au-floating-ui';

export default class AuFloatingUiComponent extends Component {
  @tracked reference = undefined;
  @tracked arrow = undefined;

  referenceModifier = modifier(
    (element) => {
      this.reference = element;
    },
    { eager: false }
  );

  arrowModifier = modifier(
    (element) => {
      this.arrow = element;
    },
    { eager: false }
  );

  floaterModifier = AuFloatingUiModifier;
}
