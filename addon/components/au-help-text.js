import Component from '@glimmer/component';

export default class AuHelpTextComponent extends Component {
  get errorClass() {
    if (this.args.error == "error")
      return "au-c-help-text--error";
    else
      return "";
  }
}
