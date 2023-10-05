import Component from '@glimmer/component';

export default class AuList extends Component {
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

const ListItem = <template>
  <li class="au-c-list__item" ...attributes>
    {{yield}}
  </li>
</template>;
