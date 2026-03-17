import { fn } from '@ember/helper';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import AuAlert from './au-alert';
import type ToasterService from '../services/toaster';
import type { ToastData } from '../services/toaster';

export interface AuToasterSignature {
  Args: {
    position?: 'top' | 'bottom';
  };
  Element: HTMLDivElement;
}

export default class AuToaster extends Component<AuToasterSignature> {
  @service declare toaster: ToasterService;

  get position() {
    if (this.args.position == 'bottom') return 'au-c-toaster--bottom';
    else return 'au-c-toaster--top';
  }

  closeToast = (toast: ToastData) => {
    this.toaster.close(toast);
  };

  <template>
    {{#if this.toaster.toasts.length}}
      <div class="au-c-toaster {{this.position}}" ...attributes>
        {{#each this.toaster.toasts as |toast|}}
          {{#if toast.component}}
            <toast.component
              @options={{toast.options}}
              @close={{fn this.closeToast toast}}
            />
          {{else}}
            <AuAlert
              @title={{toast.title}}
              @skin={{toast.options.type}}
              @icon={{toast.options.icon}}
              @size="small"
              @closable={{toast.options.closable}}
              @onClose={{fn this.closeToast toast}}
              data-test-toast
            >
              {{#if toast.message}}
                <p>{{toast.message}}</p>
              {{/if}}
            </AuAlert>
          {{/if}}
        {{/each}}
      </div>
    {{/if}}
  </template>
}
