import Component from '@glimmer/component';

export default class AuToaster extends Component {
  get destinationElement() {
    return document.getElementById('ember-appuniversum-wormhole');
  }
}
