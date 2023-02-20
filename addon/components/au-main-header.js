import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuMainHeader extends Component {
  @action
  headerLinkFocus() {
    document.querySelector('#main')?.focus();
  }
}
