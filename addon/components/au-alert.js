import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuAlertComponent extends Component {
  get alertSkin() {
    if (this.args.alertSkin == 'info') return 'au-c-alert--info';
    if (this.args.alertSkin == 'success') return 'au-c-alert--success';
    if (this.args.alertSkin == 'warning') return 'au-c-alert--warning';
    if (this.args.alertSkin == 'error') return 'au-c-alert--error';
    return '';
  }

  get alertSize() {
    if (this.args.alertSize == 'tiny') return 'au-c-alert--tiny';
    if (this.args.alertSize == 'small') return 'au-c-alert--small';
    return '';
  }

  // @TODO: add icon switching functionality

  // Close alert
  @tracked alertVisible = true;

  @action
  closeAlert() {
    this.alertVisible = !this.alertVisible;
  }
}
