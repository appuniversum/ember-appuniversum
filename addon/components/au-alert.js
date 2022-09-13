import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuAlertComponent extends Component {
  @tracked isVisible = true;

  get skin() {
    let skin = this.args.skin;

    if (skin === 'info') return 'au-c-alert--info';
    if (skin === 'success') return 'au-c-alert--success';
    if (skin == 'warning') return 'au-c-alert--warning';
    if (skin == 'error') return 'au-c-alert--error';
    return '';
  }

  get size() {
    let size = this.args.size;
    if (size === 'tiny') return 'au-c-alert--tiny';
    if (size === 'small') return 'au-c-alert--small';
    return '';
  }

  // @TODO: add icon switching functionality

  @action
  closeAlert() {
    this.isVisible = !this.isVisible;
  }
}
