import Component from '@glimmer/component';

export default class AuLabelComponent extends Component {

  get errorClass() {
    if (this.args.error == "error")
      return "au-c-label--error";
    else
      return "";
  }
}
