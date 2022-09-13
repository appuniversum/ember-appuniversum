import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

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
    if (this.args.loading) return 'is-loading';
    else return '';
  }

  get iconOpen() {
    if (this.args.iconOpen) {
      return this.args.iconOpen;
    } else {
      return 'nav-down';
    }
  }

  get iconClosed() {
    if (this.args.iconClosed) {
      return this.args.iconClosed;
    } else {
      return 'nav-right';
    }
  }

  get skin() {
    if (this.args.skin == 'border') return 'au-c-accordion--border';
    return '';
  }

  get reverse() {
    if (this.args.reverse) return 'au-c-accordion--reverse';
    return '';
  }
}
