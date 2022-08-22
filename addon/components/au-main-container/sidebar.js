import Component from '@glimmer/component';

export default class AuSidebarContainerContent extends Component {
  get size() {
    if (this.args.size == 'collapsed')
      return 'au-c-main-container__sidebar--collapsed';
    if (this.args.size == 'small') return 'au-c-main-container__sidebar--small';
    if (this.args.size == 'large') return 'au-c-main-container__sidebar--large';
    return '';
  }
}
