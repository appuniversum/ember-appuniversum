import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AuToaster extends Component {
  @service toaster;

  get position() {
    if (this.args.position == 'bottom') return 'au-c-toaster--bottom';
    else return 'au-c-toaster--top';
  }

  closeToast = (toast) => {
    this.toaster.close(toast);
  };
}
