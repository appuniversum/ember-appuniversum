import type { TOC } from '@ember/component/template-only';

interface Signature {
  Element: HTMLDivElement;
}

export const LoadingAnimation: TOC<Signature> = <template>
  <div class="au-p-c-loading-animation" aria-hidden="true" ...attributes></div>
</template>;
