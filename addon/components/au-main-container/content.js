import Component from '@glimmer/component';

export default class AuMainContainerContent extends Component {
  get scroll() {
    if (this.args.scroll) return 'au-c-main-container__content--scroll';
    return '';
  }
}
