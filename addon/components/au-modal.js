import Component from "@glimmer/component";

export default class AuModal extends Component {

  get destinationElement() {
    return document.getElementById("ember-appuniversum-wormhole");
  }

  get size() {
    if (this.args.size === "fullscreen")
      return "au-c-modal--fullscreen";
    else
      return "";
  }

}
