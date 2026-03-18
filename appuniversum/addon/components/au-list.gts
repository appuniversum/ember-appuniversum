import Component from '@glimmer/component';

export interface AuListSignature {
  Args: {
    direction?: 'horizontal';
    divider?: boolean;
  };
  Blocks: {
    default: [typeof ListItem];
  };
  Element: HTMLUListElement;
}

export default class AuList extends Component<AuListSignature> {
  get direction() {
    if (this.args.direction == 'horizontal') return 'au-c-list--horizontal';
    else return 'au-c-list--vertical';
  }

  get divider() {
    if (this.args.divider) return 'au-c-list--divider';
    else return '';
  }

  <template>
    <ul class="au-c-list {{this.direction}} {{this.divider}}" ...attributes>
      {{yield ListItem}}
    </ul>
  </template>
}

interface ListItemSignature {
  Blocks: { default: [] };
  Element: HTMLLIElement;
}

class ListItem extends Component<ListItemSignature> {
  <template>
    <li class="au-c-list__item" ...attributes>
      {{yield}}
    </li>
  </template>
}
