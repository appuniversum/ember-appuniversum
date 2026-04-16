import Component from '@glimmer/component';

export interface AuContentHeaderSignature {
  Args: {
    pictureSize?: 'large';
    titlePartOne?: string;
    titlePartTwo?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

export default class AuContentHeader extends Component<AuContentHeaderSignature> {
  get pictureSize() {
    if (this.args.pictureSize == 'large') return 'au-c-content-header--large';
    else return '';
  }

  <template>
    <section
      aria-label="pagina introductie"
      class="au-c-content-header {{this.pictureSize}}"
      ...attributes
    >
      <picture class="au-c-content-header__bg">
        {{yield}}
      </picture>
      <div class="au-c-content-header__wrapper">
        <div class="au-o-layout">
          {{#if @titlePartOne}}
            <span class="au-c-content-header__top">
              {{@titlePartOne}}
            </span>
          {{/if}}
          <br />
          {{#if @titlePartTwo}}
            <span class="au-c-content-header__bottom">
              {{@titlePartTwo}}
            </span>
          {{/if}}
        </div>
      </div>
    </section>
  </template>
}
