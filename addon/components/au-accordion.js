import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { deprecate } from '@ember/debug';

export default class AuAccordionComponent extends Component {
  // Track section state
  @tracked accordionOpen = false;

  // Open accordion
  @action
  openAccordion() {
    // Toggle accordion view state
    this.accordionOpen = !this.accordionOpen;
  }

  get loading() {
    if (this.args.loading)
      return "is-loading";
    else
      return "";
  }

  get subtitle() {
    if (this.args.accordionSubtitle) {
      deprecate(
        '@accordionSubtitle is deprecated, use @subtitle instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.accordionSubtitle-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.accordionSubtitle;
    } else if (this.args.subtitle) {
      return this.args.subtitle;
    } else {
      return undefined;
    }
  }

  get iconOpen() {
    if (this.args.accordionIconOpen) {
      deprecate(
        '@accordionIconOpen is deprecated, use @iconOpen instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.accordionIconOpen-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.accordionIconOpen;
    } else if (this.args.iconOpen) {
      return this.args.iconOpen;
    } else {
      return "nav-down";
    }
  }

  get iconClosed() {
    if (this.args.accordionIconClosed) {
      deprecate(
        '@accordionIconClosed is deprecated, use @iconClosed instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.accordionIconClosed-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.accordionIconClosed;
    } else if (this.args.iconClosed) {
      return this.args.iconClosed;
    } else {
      return "nav-right";
    }
  }

  get buttonLabel() {
    if (this.args.accordionButtonLabel) {
      deprecate(
        '@accordionButtonLabel is deprecated, use @buttonLabel instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-accordion.accordionButtonLabel-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

      return this.args.accordionButtonLabel;
    } else if (this.args.buttonLabel) {
      return this.args.buttonLabel;
    } else {
      return undefined;
    }
  }
}
