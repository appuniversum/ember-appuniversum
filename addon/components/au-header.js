import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AuHeader extends Component {
  @action
  headerLinkFocus() {
    // Focus content window
    document.querySelectorAll('#main')[0].focus();
  }
}
