import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';
import type ModalContainerService from '../services/modal-container';
import { service } from '@ember/service';

export interface AuModalContainerSignature {
  Element: HTMLDivElement;
}

export default class AuModalContainer extends Component<AuModalContainerSignature> {
  @service declare modalContainer: ModalContainerService;

  registerModalContainer = modifier((element: HTMLElement) => {
    this.modalContainer.setElement(element);
  });

  <template>
    <div {{this.registerModalContainer}} ...attributes></div>
  </template>
}
