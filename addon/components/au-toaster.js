import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AuToaster extends Component {
  @service toaster;

  get position() {
    if (this.args.position == 'top') return 'au-c-toaster--top';
    else return 'au-c-toaster--bottom';
  }
}
