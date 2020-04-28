import Component from '@glimmer/component';

export default class AuHeading extends Component {
  get skin() {
    if (this.args.skin == "1")
      return "au-c-heading--1";
    if (this.args.skin == "2")
      return "au-c-heading--2";
    if (this.args.skin == "3")
      return "au-c-heading--3";
    if (this.args.skin == "4")
      return "au-c-heading--4";
    if (this.args.skin == "5")
      return "au-c-heading--5";
    if (this.args.skin == "6")
      return "au-c-heading--6";
    else
      return "au-c-heading--1";
  }
}
