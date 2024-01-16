import { getOwner } from '@ember/owner';
import Component from '@glimmer/component';

export interface AuIconSignature {
  Args: {
    alignment?: 'left' | 'right';
    // TODO: We should deprecate the non-boolean versions since there is no reason to support them
    ariaHidden?: boolean | 'true' | 'false';
    icon: string;
    size?: 'large';
  };
  Element: SVGSVGElement;
}

export default class AuIcon extends Component<AuIconSignature> {
  get iconPrefix() {
    const config = getOwner(this)?.factoryFor('config:environment')
      ?.class as unknown as { rootURL?: string };

    return config.rootURL || '/';
  }

  get size() {
    if (this.args.size == 'large') return 'au-c-icon--large';
    else return '';
  }

  get alignment() {
    if (this.args.alignment == 'left') return 'au-c-icon--left';
    if (this.args.alignment == 'right') return 'au-c-icon--right';
    else return '';
  }

  get ariaHidden() {
    if (this.args.ariaHidden === false || this.args.ariaHidden === 'false') {
      return 'false';
    } else {
      return 'true';
    }
  }

  <template>
    <svg
      role="img"
      class="au-c-icon au-c-icon--{{@icon}} {{this.alignment}} {{this.size}}"
      aria-hidden={{this.ariaHidden}}
      ...attributes
    >
      <use
        xlink:href="{{this.iconPrefix}}@appuniversum/ember-appuniversum/appuniversum-symbolset.svg#{{@icon}}"
      ></use>
    </svg>
  </template>
}
