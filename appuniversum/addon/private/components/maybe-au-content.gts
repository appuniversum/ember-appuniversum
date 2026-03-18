import Component from '@glimmer/component';
import AuContent, {
  type AuContentSignature,
} from '../../components/au-content';
import { deprecate } from '@ember/debug';
import { getOwnConfig } from '@embroider/macros';

export interface MaybeAuContentSignature {
  Args: {
    useAuContent: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: AuContentSignature['Element'];
}

const deprecationMessage = `The internal usage of the <AuContent> component is deprecated.

More information can be found in the migration guide: https://github.com/appuniversum/ember-appuniversum/pull/535
`;

export class MaybeAuContent extends Component<MaybeAuContentSignature> {
  constructor(owner: unknown, args: MaybeAuContentSignature['Args']) {
    super(owner, args);

    deprecate(deprecationMessage, !this.useAuContent, {
      id: '@appuniversum/ember-appuniversum.internal-au-content-usage',
      until: '4.0.0',
      for: '@appuniversum/ember-appuniversum',
      since: {
        available: '3.11.0',
        enabled: '3.11.0',
      },
    });
  }

  get useAuContent() {
    const disabledGlobally = getOwnConfig<{
      disableInternalAuContentUsage?: boolean;
    }>()?.disableInternalAuContentUsage;

    if (typeof disabledGlobally === 'undefined') {
      return this.args.useAuContent ?? true;
    } else {
      return !disabledGlobally;
    }
  }

  <template>
    {{~#if this.useAuContent~}}
      <AuContent ...attributes>{{yield}}</AuContent>
    {{~else~}}
      <div ...attributes>{{yield}}</div>
    {{~/if~}}
  </template>
}
