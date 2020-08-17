import Component from '@glimmer/component';

export default class AuBodyContainer extends Component {
  get scroll() {
    if (this.args.scroll == "true")
      return "au-c-input--scroll";
    else
      return "";
  }
}
