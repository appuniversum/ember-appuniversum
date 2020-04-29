import Component from '@glimmer/component';

export default class AuHelpTextComponent extends Component {
  get error() {
    if (this.args.error == "true")
      return "au-c-help-text--error";
    else
      return "";
  }
}
