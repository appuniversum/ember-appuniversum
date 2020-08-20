import Component from '@glimmer/component';

export default class AuButtonGroup extends Component {

  get inline() {
    if (this.args.inline == "true")
      return "au-c-button-group--inline";
    else
      return "";
  }
}
