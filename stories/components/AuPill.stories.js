import { hbs } from 'ember-cli-htmlbars';
const icons = [
  'add',
  'alert-triangle',
  'archive',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attachment',
  'bin',
  'bold',
  'calendar',
  'check',
  'copy',
  'cross',
  'document',
  'documents',
  'download',
  'draft',
  'drag',
  'export',
  'external',
  'eye',
  'github',
  'hierarchal-back',
  'indent',
  'italic',
  'info-circle',
  'label',
  'link',
  'login',
  'logout',
  'manual',
  'message',
  'nav-down',
  'nav-left',
  'nav-right',
  'nav-up',
  'nav-up-down',
  'ordered-list',
  'pencil',
  'plus-text',
  'question-circle',
  'redo',
  'remove',
  'renew',
  'reverse-indent',
  'search',
  'search-folder',
  'settings',
  'sitemap',
  'strikethrough',
  'switch',
  'upload',
  'underlined',
  'unordered-list',
  'user',
  'user-fill',
  'user-popup',
  'users',
]

export default {
  title: 'Components/AuPill',
  argTypes: {
    text: { control: 'text', description:'Sets the style of the pill' },
    skin: { control: 'select', options: ['default', 'border', 'action', 'success', 'warning', 'error'], description:'Adds an icon'},
    icon: { control: 'select', options: icons, description:'Adds an icon to the badge' },
    iconAlignment: {control: 'select', option:['left','right'], description:'Choose the position of the icon, adds correct margin next to the icon'}
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPill
      @skin={{this.skin}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
    >
      {{text}}
    </AuPill>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Pill',
  skin: '',
  icon: 'info-circle',
  iconAlignment: 'left',
};
