import Component from '@glimmer/component';

export default class AuAlertComponent extends Component {
  get alertSkin() {
    if (this.args.alertskin == "info")
      return "--info";
    if (this.args.alertskin == "success")
      return "--success";
    if (this.args.alertskin == "warning")
      return "--warning";
    if (this.args.alertskin == "error")
      return "--error";
    return "";
  }

  get alertSize() {
    if (this.args.alertsize == "tiny")
      return "--tiny";
    if (this.args.alertsize == "small")
      return "--small";
    return "";
  }
}
