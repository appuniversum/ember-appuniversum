import { action } from '@ember/object';
import Component from "@glimmer/component";
import { deprecate } from '@ember/debug';
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
      if (this.args.size === "large")
      return "au-c-modal--large";
    else
      return "";
  }

  get padding() {
    if (this.args.padding === "none")
      return " au-c-modal--flush";
    else
      return "";
  }

  get title() {
    if (this.args.modalTitle) {
      deprecate(
        '@modalTitle is deprecated, use @title instead',
        false,
        {
          id: '@appuniversum/ember-appuniversum.au-modal.modalTitle-argument',
          until: "1.0.0",
          for: '@appuniversum/ember-appuniversum',
          since: {
            enabled: '0.5.0'
          }
        }
      );

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
    // Prevent that the @closeModal action is run more than once.
    // {{focus-trap}} calls closeModal when it is deactivated which also happens when the element it is attached to is destroyed.
    // This means that this method will be called twice if the user closes the modal with something else than the escape button.
    // (once by the click handler of the close button and once when {{focus-trap}} deactivates)
    // It would be better if focus-trap exposed events that would be called when Escape is pressed, or the user clicks outside of the trap
    // That way we replace `onDeactivate` with those events and this check wouldn't be needed anymore.
    //
    // More information: https://github.com/josemarluedke/ember-focus-trap/issues/36#issuecomment-850844483
    // new focus-trap events issue: https://github.com/focus-trap/focus-trap/issues/126
    if (!this.isDestroying && this.args.modalOpen) {
      this.setInert(true);
      this.args.closeModal?.();
    }
  }
}
