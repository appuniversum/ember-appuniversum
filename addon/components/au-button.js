import { computed } from '@ember/object';
import Component from '@glimmer/component';

export default class AuButton extends Component {

  get widthClass() {
    if (this.args.width == "block") {
      return "au-c-button--block";
    }
  }

  get styleClass() {
    if( this.args.skin == "ghost" ){
      return "au-c-button--ghost";
    }
  }
};
