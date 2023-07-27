import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

const FOCUS_TRAP_ADDITIONAL_ELEMENTS = ['#ember-basic-dropdown-wormhole'];
const CLOSE_TRIGGERS = {
  escape: true,
  x: true,
  outside: true,
}

export default class AuModal extends Component {
  constructor() {
    super(...arguments);

    this.destinationElement =
      document.querySelector('[data-au-modal-container]') ||
      document.getElementById('ember-appuniversum-wormhole');

    assert(
      'au-modal: No target element was found. Please add the `<AuModalContainer />` component where appropriate.',
      this.destinationElement
    );

    this.closeTriggers = this.args.closeTriggers ? {...CLOSE_TRIGGERS, ...this.args.closeTriggers} : CLOSE_TRIGGERS;
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

  get initialFocus() {
    return this.args.initialFocus ?? '.au-c-modal__title';
  }

  get additionalElements() {
    return FOCUS_TRAP_ADDITIONAL_ELEMENTS.filter(
      (element) => document.querySelector(element) !== null
    );
  }

  get isClosable() {
    return this.args.closable ?? true;
  }

  @action
  handleOutsideClick() {
    if (this.isClosable && this.closeTriggers.outside) {
      this.closeModal();
    }
  }

  @action
  handleCloseClick() {
    if (this.isClosable && this.closeTriggers.x) {
      this.closeModal();
    }
  }

  @action
  handleEscapePress() {
    if (this.isClosable && this.closeTriggers.escape) {
      this.closeModal();
    }

    // escapeDeactivates should be set to false since we don't want the focus-trap to deactivate if the modal stays open
    // which could happen if the consumer doesn't change the `@modalOpen` argument in the callback.
    return false;
  }

  @action
  closeModal() {
    this.args.closeModal?.();
  }
}
