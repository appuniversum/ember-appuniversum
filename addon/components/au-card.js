import Component from '@glimmer/component';

export default class AuCardComponent extends Component {
  get flex() {
    if (this.args.flex == "true")
      return "au-c-card--flex";
    return "";
  }
}
