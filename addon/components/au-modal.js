import { action } from '@ember/object';
import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
const LANDMARKS = ['aside', 'footer', 'form', 'header', 'main', 'nav'];

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

  get title() {
    if (this.args.modalTitle) {
      deprecate('@modalTitle is deprecated, use @title instead', false, {
        id: '@appuniversum/ember-appuniversum.au-modal.modalTitle-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '0.5.0',
        },
      });

      return this.args.modalTitle;
    } else if (this.args.title) {
      return this.args.title;
    } else {
      return undefined;
    }
  }

  @action
  setInert(toggle) {
    let landmarkElements = document.querySelectorAll(LANDMARKS);

    this.destinationElement.inert = toggle;

    landmarkElements.forEach(function (landmarkElement) {
      if (landmarkElement.parentElement === document.body) {
        landmarkElement.inert = !toggle;
      }
    });
  }

  @action
  closeModal() {
    this.setInert(true);
    this.args.closeModal?.();
  }
}
