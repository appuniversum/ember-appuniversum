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
  title: 'Components/AuLinkExternal',
  argTypes: {
    text: {control: 'text', description:''},
    href: {control: 'text', description:''},
    skin: { control: 'select', options: ['primary', 'secondary', 'button', 'button-secondary'], description:'Defines the style of the link'},
    icon: { control: 'select', options: icons, description:'Adds an icon'},
    iconAlignment: { control: 'select', options: ["left","right"], description:'hoose the position of the icon, adds correct margin next to the icon'},
    hideText: { control: 'boolean',  description:'Hides the link text visually'},
    width: { control: 'select', options: ["","block"], description:'Defines the width of the link'},
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLinkExternal
      href={{this.href}}
      @skin={{this.skin}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @width={{this.width}}
      @active={{this.active}}
    >
      {{text}}
    </AuLinkExternal>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: "External link",
  href: "https://www.vlaanderen.be/",
  route: "index",
  skin: "primary",
  icon: "manual",
  iconAlignment: "left",
  hideText: false,
  width: "",
  active: false
};
