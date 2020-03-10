import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AuNavigationLink extends Component {
  @action
  linkFocus() {
    // Focus content window
    document.querySelectorAll('#content')[0].focus();
  }
}
