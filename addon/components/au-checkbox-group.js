import Component from '@glimmer/component';

export default class AuCheckboxGroupComponent extends Component {
  get alignmentClass() {
    if (this.args.alignment == 'inline') return 'au-c-control-group--inline';
    else return '';
  }
}
