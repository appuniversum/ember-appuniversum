import { AuHeading, AuIcon } from '@appuniversum/ember-appuniversum';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class AuFileCard extends Component {
  get isRemovable() {
    return typeof this.args.onDelete === 'function';
  }

  get isDownloadable() {
    return (
      typeof this.args.downloadLink === 'string' &&
      this.args.downloadLink.length > 0
    );
  }

  @action
  delete(event) {
    event.preventDefault();
    this.args.onDelete();
  }

  <template>
    <article class="au-c-file-card au-o-box au-o-box--small" ...attributes>
      {{#if this.isRemovable}}
        <button
          type="button"
          class="au-c-file-card__delete"
          data-test-file-card-delete
          {{on "click" this.delete}}
        >
          <AuIcon @icon="cross" @size="large" />
          <span class="au-u-hidden-visually">Verwijderen</span>
        </button>
      {{/if}}

      <AuHeading @level="4" @skin="6" data-test-file-card-filename>
        {{@filename}}

        {{#if @fileSize}}
          <span
            class="au-c-file-card__file-size"
            data-test-file-card-file-size
          >({{@fileSize}})</span>
        {{/if}}
      </AuHeading>

      {{#if this.isDownloadable}}
        <div class="au-u-margin-top-tiny">
          <a
            class="au-c-link"
            href={{@downloadLink}}
            download={{@filename}}
            data-test-file-card-download
          >
            <AuIcon @icon="download" />
            Download bestand
          </a>
        </div>
      {{/if}}
    </article>
  </template>
}
