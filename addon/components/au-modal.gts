import type { TOC } from '@ember/component/template-only';
import { assert } from '@ember/debug';
import { concat, hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { focusTrap } from 'ember-focus-trap';
import { CrossIcon } from './icons/cross';
import { cn } from '../private/helpers/class-names';
import AuIcon from './au-icon';

// TODO: replace these with the named imports from ember-truth-helpers v4 once our dependencies support that version
import not from 'ember-truth-helpers/helpers/not';
import or from 'ember-truth-helpers/helpers/or';
import type ApplicationInstance from '@ember/application/instance';
import type ModalContainerService from '../services/modal-container';
import { service } from '@ember/service';
import { ensureRoot } from '../services/ensure-root';

const FOCUS_TRAP_ADDITIONAL_ELEMENTS = ['#ember-basic-dropdown-wormhole'];

export interface AuModalSignature {
  Args: {
    closable?: boolean;
    closeModal?: () => void;
    id?: string;
    initialFocus?: string;
    modalOpen?: boolean;
    overflow?: boolean;
    padding?: 'none';
    size?: 'large' | 'fullscreen';
    title?: string;
  };
  Blocks: {
    body: [];
    footer: [];
    title: [];
    default: [
      {
        Body: typeof Body;
        Footer: typeof Footer;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class AuModal extends Component<AuModalSignature> {
  destinationElement: HTMLElement;

  @service declare modalContainer: ModalContainerService;
  constructor(owner: ApplicationInstance, args: AuModalSignature['Args']) {
    super(owner, args);

    const modalContainer = this.modalContainer.element;
    assert(
      'au-modal: No target element was found. Please add the `<AuModalContainer />` component where appropriate.',
      modalContainer,
    );
    this.destinationElement = modalContainer;
  }
  get docRoot() {
    return ensureRoot(this.destinationElement);
  }

  get size() {
    if (this.args.size === 'fullscreen') return 'au-c-modal--fullscreen';
    if (this.args.size === 'large') return 'au-c-modal--large';
    else return '';
  }

  get padding() {
    if (this.args.padding === 'none') return 'au-c-modal--flush';
    else return '';
  }

  get overflow() {
    if (this.args.overflow) return 'au-c-modal--overflow';
    else return '';
  }

  get initialFocus() {
    return this.args.initialFocus ?? '.au-c-modal__title';
  }
  getInitialFocus = () => {
    return (
      this.docRoot.querySelector<HTMLElement>(this.initialFocus) ?? undefined
    );
  };

  get fallbackFocus() {
    return '.au-c-modal';
  }
  getFallbackFocus = () => {
    const fallback = this.docRoot.querySelector<HTMLElement>(
      this.fallbackFocus,
    );
    if (!fallback) {
      throw new Error(
        `could not find fallbackFocus with selector ${this.fallbackFocus}`,
      );
    }
    return fallback;
  };

  get additionalElements() {
    return FOCUS_TRAP_ADDITIONAL_ELEMENTS.filter(
      (element) =>
        ensureRoot(this.destinationElement).querySelector(element) !== null,
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
      {{#in-element this.destinationElement insertBefore=null}}
        <div class="au-c-modal-backdrop {{if @modalOpen 'is-visible'}}"></div>
        <div
          id="{{@id}}"
          class={{cn
            "au-c-modal"
            this.size
            this.padding
            this.overflow
            (if @modalOpen "is-visible")
          }}
          role="dialog"
          aria-describedby={{concat "au-c-modal-title-" @id}}
          tabindex="-1"
          {{focusTrap
            isActive=@modalOpen
            additionalElements=this.additionalElements
            focusTrapOptions=(hash
              initialFocus=this.getInitialFocus
              fallbackFocus=this.getFallbackFocus
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
              <AuIcon @icon={{CrossIcon}} @size="large" />
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
const Body: TOC<{ Blocks: { default: [] } }> = <template>
  <div class="au-c-modal__body" data-test-modal-body>
    {{yield}}
  </div>
</template>;

const Footer: TOC<{ Blocks: { default: [] } }> = <template>
  <div class="au-c-modal__footer" data-test-modal-footer>
    {{yield}}
  </div>
</template>;
