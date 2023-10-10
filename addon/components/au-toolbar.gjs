import Component from '@glimmer/component';

export default class AuToolbar extends Component {
  get reverse() {
    if (this.args.reverse) return 'au-c-toolbar--reverse';
    else return '';
  }

  get border() {
    if (this.args.border == 'top') return 'au-c-toolbar--top';
    if (this.args.border == 'bottom') return 'au-c-toolbar--bottom';
    else return '';
  }

  get skin() {
    if (this.args.skin == 'tint') return 'au-c-toolbar--tint';
    else return '';
  }

  get size() {
    if (this.args.size == 'small') return 'au-c-toolbar--small';
    if (this.args.size == 'medium') return 'au-c-toolbar--medium';
    if (this.args.size == 'large') return 'au-c-toolbar--large';
    else return '';
  }

  get nowrap() {
    if (this.args.nowrap) return 'au-c-toolbar--nowrap';
    else return '';
  }

  <template>
    <div
      class="au-c-toolbar
        {{this.reverse}}
        {{this.border}}
        {{this.skin}}
        {{this.size}}
        {{this.nowrap}}"
      ...attributes
    >
      {{yield Group}}
    </div>
  </template>
}

const Group = <template>
  <div class="au-c-toolbar__group" ...attributes>
    {{yield}}
  </div>
</template>;
