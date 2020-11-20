import Component from '@glimmer/component';

export default class AuLabelComponent extends Component {

  get error() {
    if (this.args.error)
      return "au-c-label--error";
    else
      return "";
  }
}
