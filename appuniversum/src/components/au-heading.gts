import type { TOC } from '@ember/component/template-only';
import Component from '@glimmer/component';
import type { ComponentLike } from '@glint/template';

type Level = '1' | '2' | '3' | '4' | '5' | '6';
type Skin = '1' | '2' | '3' | '4' | '5' | '6' | 'functional';

export interface AuHeadingSignature {
  Args: {
    level?: Level;
    skin?: Skin;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLHeadingElement;
}

export default class AuHeading extends Component<AuHeadingSignature> {
  get skin() {
    if (this.args.skin == '1') return 'au-c-heading--1';
    if (this.args.skin == '2') return 'au-c-heading--2';
    if (this.args.skin == '3') return 'au-c-heading--3';
    if (this.args.skin == '4') return 'au-c-heading--4';
    if (this.args.skin == '5') return 'au-c-heading--5';
    if (this.args.skin == '6') return 'au-c-heading--6';
    if (this.args.skin == 'functional') return 'au-c-heading--functional';
    else return 'au-c-heading--1';
  }

  get Heading() {
    if (!this.args.level) {
      return Heading1;
    }

    const HEADING: Record<Level, ComponentLike<HeadingSignature>> = {
      '1': Heading1,
      '2': Heading2,
      '3': Heading3,
      '4': Heading4,
      '5': Heading5,
      '6': Heading6,
    };

    return HEADING[this.args.level] ?? Heading1;
  }

  <template>
    <this.Heading class="au-c-heading {{this.skin}}" ...attributes>
      {{yield}}
    </this.Heading>
  </template>
}

interface HeadingSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLHeadingElement;
}

const Heading1 = <template>
  <h1 ...attributes>{{yield}}</h1>
</template> satisfies TOC<HeadingSignature>;

const Heading2 = <template>
  <h2 ...attributes>{{yield}}</h2>
</template> satisfies TOC<HeadingSignature>;

const Heading3 = <template>
  <h3 ...attributes>{{yield}}</h3>
</template> satisfies TOC<HeadingSignature>;

const Heading4 = <template>
  <h4 ...attributes>{{yield}}</h4>
</template> satisfies TOC<HeadingSignature>;

const Heading5 = <template>
  <h5 ...attributes>{{yield}}</h5>
</template> satisfies TOC<HeadingSignature>;

const Heading6 = <template>
  <h6 ...attributes>{{yield}}</h6>
</template> satisfies TOC<HeadingSignature>;
