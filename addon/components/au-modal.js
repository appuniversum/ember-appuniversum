import { action } from '@ember/object';
import Component from "@glimmer/component";
const LANDMARKS = [
    'aside',
    'footer',
    'form',
    'header',
    'main',
    'nav'
];
export default class AuModal extends Component {

  get destinationElement() {
    return document.getElementById("ember-appuniversum-wormhole");
  }

  get size() {
    if (this.args.size === "fullscreen")
      return "au-c-modal--fullscreen";
    else
      return "";
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
    // Don't run the callback when the modal is already closed.
    // {{focus-trap}} calls closeModal when it is deactivated which also happens when the element it is attached to is destroyed.
    // This means that this method will be called twice if the user closes the modal with something else than the escape button.
    // (once by the click handler of the button and once when {{focus-trap}} deactivates)
    if (this.args.modalOpen) {
      this.setInert(true);
      this.args.closeModal?.();
    }
  }
}
