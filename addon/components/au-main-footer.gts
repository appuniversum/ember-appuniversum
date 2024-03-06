import type { TOC } from '@ember/component/template-only';
import AuBrand from './au-brand';

export interface AuMainFooterSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const AuMainFooter: TOC<AuMainFooterSignature> = <template>
  <footer class="au-c-main-footer" ...attributes>
    <div class="au-c-main-footer__brand">
      <AuBrand @tagline="verbeelding werkt" />
    </div>
    <div class="au-c-main-footer__content">
      {{yield}}
    </div>
  </footer>
</template>;

export default AuMainFooter;
