import Component from '@glimmer/component';

export default class AuLoader extends Component {
  get size() {
    if (this.args.size == "small")
      return "au-c-loader--small";
    if (this.args.size == "large")
      return "au-c-loader--large";
    else
      return "";
  }
}
