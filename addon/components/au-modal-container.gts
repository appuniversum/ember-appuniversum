import type { TOC } from '@ember/component/template-only';

export interface AuModalContainerSignature {
  Element: HTMLDivElement;
}

const AuModalContainer: TOC<AuModalContainerSignature> = <template>
  <div data-au-modal-container ...attributes></div>
</template>;

export default AuModalContainer;
