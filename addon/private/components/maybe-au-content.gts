import Component from '@glimmer/component';
import AuContent, {
  type AuContentSignature,
} from '../../components/au-content';
import { deprecate } from '@ember/debug';

export interface MaybeAuContentSignature {
  Args: {
    useAuContent: boolean;
    deprecationMessage: string;
  };
  Blocks: {
    default: [];
  };
  Element: AuContentSignature['Element'] | HTMLDivElement;
}

export class MaybeAuContent extends Component<MaybeAuContentSignature> {
  constructor(owner: unknown, args: MaybeAuContentSignature['Args']) {
    super(owner, args);

    deprecate(this.args.deprecationMessage, !this.args.useAuContent, {
      id: '@appuniversum/ember-appuniversum.internal-au-content-usage',
      until: '4.0.0',
      for: '@appuniversum/ember-appuniversum',
      since: {
        available: '3.9.0',
        enabled: '3.9.0',
      },
    });
  }
  <template>
    {{~#if @useAuContent~}}
      <AuContent ...attributes>{{yield}}</AuContent>
    {{~else~}}
      <div ...attributes>{{yield}}</div>
    {{~/if~}}
  </template>
}
