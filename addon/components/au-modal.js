import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class AuModal extends Component {
  get destinationElement() {
    return document.getElementById('ember-appuniversum-wormhole');
  }

  get size() {
    if (this.args.size === 'fullscreen') return 'au-c-modal--fullscreen';
    if (this.args.size === 'large') return 'au-c-modal--large';
    else return '';
  }

  get padding() {
    if (this.args.padding === 'none') return ' au-c-modal--flush';
    else return '';
  }

  get overflow() {
    if (this.args.overflow) return 'au-c-modal--overflow';
    else return '';
  }

  @action
  handleEscapePress() {
    this.closeModal();

    // escapeDeactivates should be set to false since we don't want the focus-trap to deactivate if the modal stays open
    // which could happen if the consumer doesn't change the `@modalOpen` argument in the callback.
    return false;
  }

  @action
  closeModal() {
    this.args.closeModal?.();
  }
}
