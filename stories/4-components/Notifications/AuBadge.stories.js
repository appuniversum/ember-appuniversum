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
];

export default {
  title: 'Components/Notifications/AuBadge',
  argTypes: {
    skin: {
      control: 'select',
      options: [
        '',
        'border',
        'brand',
        'success',
        'warning',
        'error',
        'action',
        'gray',
      ],
      description: 'Sets the color and background color',
    },
    size: {
      control: 'select',
      options: ['', 'small'],
      description: 'Change the size of the badge',
    },
    icon: {
      control: 'select',
      options: icons,
      description: 'Adds an icon to the badge',
    },
    number: { control: 'text', description: 'Adds a number to the badge' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBadge
      @icon={{this.icon}}
      @skin={{this.skin}}
      @size={{this.size}}
      @number={{this.number}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  skin: '',
  icon: 'info-circle',
  size: '',
  number: '',
};
