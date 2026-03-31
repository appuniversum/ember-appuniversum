import type { TOC } from '@ember/component/template-only';
import { hash } from '@ember/helper';
import Component from '@glimmer/component';

export interface AuMainContainerSignature {
  Element: HTMLElement;
  Blocks: {
    default: [
      {
        sidebar?: typeof Sidebar;
        content?: typeof Content;
      },
    ];
  };
}

const AuMainContainer: TOC<AuMainContainerSignature> = <template>
  <main id="main" class="au-c-main-container" tabindex="-1" ...attributes>
    {{yield (hash sidebar=Sidebar)}}
    {{yield (hash content=Content)}}
  </main>
</template>;

export default AuMainContainer;

interface SidebarSignature {
  Args: {
    size?: 'collapsed' | 'small' | 'large';
  };
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

class Sidebar extends Component<SidebarSignature> {
  get size() {
    if (this.args.size == 'collapsed')
      return 'au-c-main-container__sidebar--collapsed';
    if (this.args.size == 'small') return 'au-c-main-container__sidebar--small';
    if (this.args.size == 'large') return 'au-c-main-container__sidebar--large';
    return '';
  }

  <template>
    {{#if (has-block)}}
      <div
        class="au-c-main-container__sidebar {{this.size}} au-u-hide-on-print"
        ...attributes
      >
        {{yield}}
      </div>
    {{/if}}
  </template>
}

interface ContentSignature {
  Args: {
    scroll?: boolean;
  };
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

class Content extends Component<ContentSignature> {
  get scroll() {
    if (this.args.scroll) return 'au-c-main-container__content--scroll';
    return '';
  }

  <template>
    {{#if (has-block)}}
      <div
        id="content"
        class="au-c-main-container__content {{this.scroll}} au-u-wide-on-print"
        tabindex="-1"
        ...attributes
      >
        {{yield}}
      </div>
    {{/if}}
  </template>
}
