import Component from "@glimmer/component";
import { inject as service } from '@ember/service';

export default class AuHeader extends Component {
  // Expose currentSession
  @service() currentSession;
}
