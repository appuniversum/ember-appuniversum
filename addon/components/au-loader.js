import Component from '@glimmer/component';

export default class AuLoader extends Component {
  get padding() {
    if (this.args.padding == "small")
      return "au-c-loader--small";
    if (this.args.padding == "large")
      return "au-c-loader--large";``
    if (this.args.size == "small") // Deprecated: remove in next major release
      return "au-c-loader--small";
    if (this.args.size == "large") // Deprecated: remove in next major release
      return "au-c-loader--large";
    else
      return "";
  }
}
