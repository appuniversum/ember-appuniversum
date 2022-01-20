import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AuNavigationNarrator extends Component {
  @service router;

  get activeRoute() {
    return 'Nieuwe pagina: ' + this.router.currentRouteName ;
  }
}
