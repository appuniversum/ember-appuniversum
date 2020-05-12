import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuAlertComponent extends Component {
  get alertSkin() {
    if (this.args.alertskin == "info")
      return "au-c-alert--info";
    if (this.args.alertskin == "success")
      return "au-c-alert--success";
    if (this.args.alertskin == "warning")
      return "au-c-alert--warning";
    if (this.args.alertskin == "error")
      return "au-c-alert--error";
    return "";
  }

  get alertSize() {
    if (this.args.alertsize == "tiny")
      return "au-c-alert--tiny";
    if (this.args.alertsize == "small")
      return "au-c-alert--small";
    return "";
  }

  // @TODO: add icon switching functionality

  // Close alert
  @tracked alertVisible = true;

  @action
  closeAlert() {
    this.alertVisible = !this.alertVisible;
  }
}
