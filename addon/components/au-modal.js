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
    this.setInert(true);
    this.args.closeModal && this.args.closeModal();
  }


}
