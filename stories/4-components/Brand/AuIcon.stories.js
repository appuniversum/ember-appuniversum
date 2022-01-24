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
  title: 'Components/Brand/AuIcon',
  argTypes: {
    icon: {
      control: 'select',
      options: icons,
      description:
        'Pass the svg name to select the icon | See below for available icons',
    },
    size: {
      control: 'select',
      options: ['default', 'medium', 'large'],
      description: 'Define the size of the icon',
    },
    alignment: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Add margin to the icon',
    },
    ariaHidden: {
      control: 'boolean',
      description:
        'Hide the icon from screenreaders (false hides the icon from screenreaders, true announces the icon)',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuIcon
      @icon={{this.icon}}
      @size={{this.size}}
      @alignment={{this.alignment}}
      @ariaHidden={{this.ariaHidden}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  icon: 'info-circle',
  size: 'large',
  alignment: '',
  ariaHidden: false,
};
