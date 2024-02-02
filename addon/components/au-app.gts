import Component from '@glimmer/component';

export interface AuAppSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuApp extends Component<AuAppSignature> {
  <template>
    <div class="au-c-app" ...attributes>
      {{yield}}
    </div>
  </template>
}
