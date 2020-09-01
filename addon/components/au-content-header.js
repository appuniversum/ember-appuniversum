import Component from '@glimmer/component';

export default class AuContentHeader extends Component {
  get pictureSize() {
    if (this.args.pictureSize == "large")
      return "au-c-content-header--large";
    else
      return "";
  }
}
