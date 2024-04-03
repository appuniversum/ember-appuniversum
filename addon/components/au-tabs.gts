import type { TOC } from '@ember/component/template-only';

export interface AuTabsSignature {
  Args: {
    reversed?: boolean;
  };
  Blocks: {
    default: [typeof Tab];
  };
  Element: HTMLElement;
}

const AuTabs: TOC<AuTabsSignature> = <template>
  <nav class="au-c-tabs {{if @reversed 'au-c-tabs--reversed'}}" ...attributes>
    <ul class="au-c-tabs-list">
      {{yield Tab}}
    </ul>
  </nav>
</template>;

export default AuTabs;

interface TabSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

const Tab: TOC<TabSignature> = <template>
  <li class="au-c-tabs-list__item" ...attributes>
    {{yield}}
  </li>
</template>;
