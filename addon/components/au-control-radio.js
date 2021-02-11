import Component from '@glimmer/component';

export default class AuControlRadio extends Component {
  get disabled() {
    if (this.args.disabled)
      return "is-disabled";
    else
      return "";
  }
}
