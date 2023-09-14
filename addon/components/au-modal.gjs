import { AuIcon } from '@appuniversum/ember-appuniversum';
import { assert } from '@ember/debug';
import { concat, hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { focusTrap } from 'ember-focus-trap';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import not from 'ember-truth-helpers/helpers/not';
import or from 'ember-truth-helpers/helpers/or';

const FOCUS_TRAP_ADDITIONAL_ELEMENTS = ['#ember-basic-dropdown-wormhole'];

export default class AuModal extends Component {
  constructor() {
    super(...arguments);

    this.destinationElement = document.querySelector(
      '[data-au-modal-container]',
    );

    assert(
      'au-modal: No target element was found. Please add the `<AuModalContainer />` component where appropriate.',
      this.destinationElement,
    );
  }

  get size() {
    if (this.args.size === 'fullscreen') return 'au-c-modal--fullscreen';
    if (this.args.size === 'large') return 'au-c-modal--large';
    else return '';
  }

  get padding() {
    if (this.args.padding === 'none') return ' au-c-modal--flush';
    else return '';
  }

  get overflow() {
    if (this.args.overflow) return 'au-c-modal--overflow';
    else return '';
  }

  get initialFocus() {
    return this.args.initialFocus ?? '.au-c-modal__title';
  }

  get fallbackFocus() {
    return '.au-c-modal';
  }

  get additionalElements() {
    return FOCUS_TRAP_ADDITIONAL_ELEMENTS.filter(
      (element) => document.querySelector(element) !== null,
    );
  }

  get isClosable() {
    return this.args.closable ?? true;
  }

  @action
  handleCloseClick() {
    if (this.isClosable) {
      this.closeModal();
    }
  }

  @action
  handleEscapePress() {
    if (this.isClosable) {
      this.closeModal();
    }

    // escapeDeactivates should be set to false since we don't want the focus-trap to deactivate if the modal stays open
    // which could happen if the consumer doesn't change the `@modalOpen` argument in the callback.
    return false;
  }

  @action
  closeModal() {
    this.args.closeModal?.();
  }

  <template>
    {{#if @modalOpen}}
      {{#in-element this.destinationElement}}
        <div class="au-c-modal-backdrop {{if @modalOpen 'is-visible'}}"></div>
        <div
          id="{{@id}}"
          class={{concat
            "au-c-modal "
            this.size
            this.padding
            this.overflow
            (if @modalOpen " is-visible")
          }}
          role="dialog"
          aria-describedby={{concat "au-c-modal-title-" @id}}
          tabindex="-1"
          {{focusTrap
            isActive=@modalOpen
            additionalElements=this.additionalElements
            focusTrapOptions=(hash
              initialFocus=this.initialFocus
              fallbackFocus=this.fallbackFocus
              escapeDeactivates=this.handleEscapePress
              allowOutsideClick=true
            )
          }}
          data-test-modal
          ...attributes
        >
          <div class="au-c-modal__header" data-test-modal-header>
            <h1
              id="au-c-modal-title-{{@id}}"
              class="au-c-modal__title"
              tabindex="-1"
              data-test-modal-title
            >
              {{#if (has-block "title")}}
                {{yield to="title"}}
              {{else}}
                {{@title}}
              {{/if}}
            </h1>
            <button
              class="au-c-modal__close {{unless this.isClosable 'is-disabled'}}"
              type="button"
              disabled={{not this.isClosable}}
              data-test-modal-close
              {{on "click" this.handleCloseClick}}
            >
              <AuIcon @icon="cross" @size="large" />
              <span class="au-u-hidden-visually">Venster sluiten</span>
            </button>
          </div>

          {{#if
            (or (has-block "title") (has-block "body") (has-block "footer"))
          }}
            {{#if (has-block "body")}}
              <div class="au-c-modal__body" data-test-modal-body>
                {{yield to="body"}}
              </div>
            {{/if}}

            {{#if (has-block "footer")}}
              <div class="au-c-modal__footer" data-test-modal-footer>
                {{yield to="footer"}}
              </div>
            {{/if}}
          {{else}}
            {{yield (hash Body=Body Footer=Footer)}}
          {{/if}}
        </div>
      {{/in-element}}
    {{/if}}
  </template>
}
const Body = <template>
  <div class="au-c-modal__body" data-test-modal-body>
    {{yield}}
  </div>
</template>;

const Footer = <template>
  <div class="au-c-modal__footer" data-test-modal-footer>
    {{yield}}
  </div>
</template>;
