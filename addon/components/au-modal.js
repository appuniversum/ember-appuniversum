import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuModal extends Component {
  // Variables
  destinationElementId =  null;

  constructor() {
    super(...arguments);

    // Set wormhole destination
    if (!this.destinationElementId) {
      this.destinationElementId = 'ember-appuniversum-wormhole';
    }
  }

  get buttonSkin() {
    if (this.args.buttonSkin == "secondary")
      return "au-c-button--secondary";
    if (this.args.buttonSkin == "tertiary")
      return "au-c-button--tertiary";
    else
      return "";
  }

  get size() {
    if (this.args.size == "fullscreen")
      return "au-c-modal--fullscreen";
    else
      return "";
  }

  get modalOpen() {
    if (this.args.modalOpen)
      return "test";
    else
      return "";
  }

  // Open modal
  // @action
  // openModal() {
  //   // Toggle modal view state
  //   this.modalOpen = !this.modalOpen;

  //   // Add body class
  //   document.getElementsByTagName('html')[0].classList.add("au-c-modal-open");
  // }



  // Close modal
  @action
  closeModal() {
    // Only run this action when a modal is open
    // if (modalOpen) {
      // Close the modal
      //   this.modalOpen = !this.modalOpen;

      // Remove html class when modal is disabled
      // document.getElementsByTagName('html')[0].classList.remove("au-c-modal-open");
    // }
  }
}
