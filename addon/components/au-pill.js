import Component from '@glimmer/component';

export default class AuPillComponent extends Component {

  get styleClass() {
    if( this.args.style == "success" ){
      return "au-c-pill--success";
    }

    if( this.args.style == "warning" ){
      return "au-c-pill--warning";
    }

    if( this.args.style == "error" ){
      return "au-c-pill--error";
    }
  }
}
