import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class AuFileCardComponent extends Component {
  get isRemovable() {
    return typeof this.args.onDelete === 'function';
  }

  get isDownloadable() {
    return (
      typeof this.args.downloadLink === 'string' &&
      this.args.downloadLink.length > 0
    );
  }

  @action
  delete(event) {
    event.preventDefault();
    this.args.onDelete();
  }
}
