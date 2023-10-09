import Component from '@glimmer/component';

export default class AuContentHeader extends Component {
  get pictureSize() {
    if (this.args.pictureSize == 'large') return 'au-c-content-header--large';
    else return '';
  }

  <template>
    <section
      aria-label="pagina introductie"
      class="au-c-content-header {{this.pictureSize}}"
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
