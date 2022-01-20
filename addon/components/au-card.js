import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuCardComponent extends Component {
  // Track section state
  @tracked isExpanded = this.args.isExpanded;

  constructor() {
    super(...arguments);
    if (this.args.isOpenInitially) {
      this.isExpanded = true;
    }
  }

  get size() {
    if (this.args.size == 'small')
      return 'au-c-card--padding-small';
    if (this.args.size == 'tiny')
      return 'au-c-card--padding-tiny';
    if (this.args.size == 'flush')
      return '';
    else
      return 'au-c-card--padding';
  }

  get flex() {
    if (this.args.flex)
      return 'au-c-card--flex';
    return '';
  }

  get expandable() {
    if (this.args.expandable)
      return 'au-c-card--expandable';
    return '';
  }

  get shadow() {
    if (this.args.shadow)
      return 'au-c-card--shadow';
    return '';
  }

  get divided() {
    if (this.args.divided)
      return 'au-c-card--divided';
    return '';
  }

  get textCenter() {
    if (this.args.textCenter)
      return 'au-c-card--text-center';
    return '';
  }

  get standOut() {
    if (this.args.standOut)
      return 'au-c-card--standout';
    return '';
  }

  // Open section
  @action
  openSection() {
    // Toggle section view state
    this.isExpanded = !this.isExpanded;
  }
}
