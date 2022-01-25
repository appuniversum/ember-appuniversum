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
  title: 'Components/Content/AuAccordion',
  argTypes: {
    subtitle: {
      control: 'text',
      description: 'Set the subtitle of the accordion',
    },
    iconOpen: {
      control: 'select',
      options: icons,
      description:
        "Adds an icon to the accordion when it's open. Defaults to nav-down.",
    },
    iconClosed: {
      control: 'select',
      options: icons,
      description:
        "Adds an icon to the accordion when it's closed. Defaults to nav-right.",
    },
    buttonLabel: { control: 'text', description: '' },
    loading: {
      control: 'boolean',
      description: 'Adds a loading state to the button',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuAccordion
      @subtitle={{this.subtitle}}
      @iconOpen={{this.iconOpen}}
      @iconClosed={{this.iconClosed}}
      @buttonLabel={{this.buttonLabel}}
      @loading={{this.loading}}
    >
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  subtitle: 'subtitle',

  buttonLabel: 'Accordion with arrows',
  loading: false,
};
