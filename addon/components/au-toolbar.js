import Component from '@glimmer/component';

export default class AuToolbar extends Component {
  get reverse() {
    if (this.args.reverse == "true")
      return "au-c-toolbar--reverse";
    else
      return "";
  }

  get border() {
    if (this.args.border == "top")
      return "au-c-toolbar--top";
    if (this.args.border == "bottom")
      return "au-c-toolbar--bottom";
    else
      return "";
  }

  get skin() {
    if (this.args.skin == "tint")
      return "au-c-toolbar--tint";
    else
      return "";
  }
}
