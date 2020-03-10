import Component from "@ember/component";
import { action } from "@ember/object";

export default class navigationLink extends Component {
  @action
  linkFocus() {
    // Focus content window
    document.querySelectorAll('#content')[0].focus();
  }
}
