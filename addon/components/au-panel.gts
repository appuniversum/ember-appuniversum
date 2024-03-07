import type { TOC } from '@ember/component/template-only';

export interface AuPanelSignature {
  Args: {
    active?: boolean;
  };
  Blocks: {
    default: [typeof Section];
  };
  Element: HTMLDivElement;
}

const AuPanel: TOC<AuPanelSignature> = <template>
  <div class="au-c-panel {{if @active 'au-c-panel--active'}}" ...attributes>
    {{yield Section}}
  </div>
</template>;

export default AuPanel;

interface SectionSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}
const Section: TOC<SectionSignature> = <template>
  <div class="au-c-panel__section au-o-box au-o-box--small" ...attributes>
    {{yield}}
  </div>
</template>;
