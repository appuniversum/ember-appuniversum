import Component from '@glimmer/component';
import { LoadingAnimation } from '../private/components/loading-animation';

export interface AuLoaderSignature {
  Args: {
    inline?: boolean;
    hideMessage?: boolean;
    centered?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class AuLoader extends Component<AuLoaderSignature> {
  get centered() {
    if (typeof this.args.centered === 'undefined' || this.args.centered) {
      return 'au-u-text-center';
    }

    return '';
  }

  <template>
    <div class="au-c-loader {{this.centered}}" role="status" ...attributes>
      <LoadingAnimation />
      {{#if @inline}}
        <span
          class="au-u-para {{if @hideMessage 'au-u-hidden-visually'}}"
        >{{~yield~}}</span>
      {{else}}
        <p
          class="au-u-para {{if @hideMessage 'au-u-hidden-visually'}}"
        >{{yield}}</p>
      {{/if}}
    </div>
  </template>
}
