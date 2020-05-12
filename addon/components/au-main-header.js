import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AuMainHeader extends Component {
  @action
  headerLinkFocus() {
    // Focus content window
    document.querySelectorAll('#main')[0].focus();
  }
}
