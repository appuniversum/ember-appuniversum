/* eslint-disable no-undef -- This is a workaround for a false-positive bug: https://github.com/ember-cli/eslint-plugin-ember/issues/1747 */
import { AuAlert } from '@appuniversum/ember-appuniversum';
import { fn } from '@ember/helper';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class AuToaster extends Component {
  @service toaster;

  get position() {
    if (this.args.position == 'bottom') return 'au-c-toaster--bottom';
    else return 'au-c-toaster--top';
  }

  closeToast = (toast) => {
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
