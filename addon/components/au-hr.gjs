import Component from '@glimmer/component';

export default class AuHr extends Component {
  get size() {
    if (this.args.size == 'large') return 'au-c-hr--large';
    if (this.args.size == 'huge') return 'au-c-hr--huge';
    else return '';
  }

  <template>
    <hr class="au-c-hr {{this.size}}" ...attributes />
  </template>
}
