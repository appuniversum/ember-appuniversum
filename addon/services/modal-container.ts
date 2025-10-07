import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ModalContainerService extends Service {
  @tracked element: HTMLElement | null = null;
  setElement = (element: HTMLElement) => {
    this.element = element;
  };
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:modal-container')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('modal-container') declare altName: ModalContainerService;`.
declare module '@ember/service' {
  interface Registry {
    'modal-container': ModalContainerService;
  }
}
