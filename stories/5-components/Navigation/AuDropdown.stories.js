import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Navigation/AuDropdown',
  argTypes: {
    title: { control: 'text', description: 'Pass the title of the dropdown' },
    alignment: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Position the icon and menu',
    },
    skin: {
      control: 'select',
      options: ['primary', 'secondary', 'naked', 'link', 'link-secondary'],
      description: 'Defines the style of the button',
    },
    size: {
      control: 'select',
      options: ['', 'large'],
      description: 'Set the size of the button',
    },
    icon: { control: 'select', options: icons, description: 'Adds an icon' },
    iconAlignment: {
      control: 'select',
      options: ['', 'left', 'right'],
      description:
        'Choose the position of the icon, adds correct margin next to the icon',
    },
    hideText: {
      control: 'boolean',
      description: 'Hides the button text visually',
    },
    alert: {
      control: 'boolean',
      description: 'Adds an alert state to the button',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuDropdown
      @title={{this.title}}
      @alignment={{this.alignment}}
      @skin={{this.skin}}
      @size={{this.size}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @alert={{this.alert}}
    >
      <AuButton @skin="tertiary" @icon="switch" role="menuitem">
        Switch profile
      </AuButton>
      <AuButton @skin="tertiary" @icon="logout" role="menuitem">
        Afmelden
      </AuButton>
    </AuDropdown>`,
  context: args,
});

const TemplateSeparator = (args) => ({
  template: hbs`
    <AuDropdown
      @title={{this.title}}
      @alignment={{this.alignment}}
      @skin={{this.skin}}
      @size={{this.size}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @alert={{this.alert}}
    >
      <AuButton @skin="tertiary" role="menuitem">
        Agendapunt toevoegen
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        Beslissingen bekijken
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        Download alle documenten
      </AuButton>
      <AuHr />
      <AuButton @skin="tertiary" role="menuitem">
        Vergadering wijzigen
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        Alles formeel goedkeuren
      </AuButton>
      <AuHr />
      <AuButton @alert="true" @skin="tertiary" @icon="bin" role="menuitem">
        Verwijder
      </AuButton>
    </AuDropdown>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  title: 'Demo dropdown',
  alignment: 'left',
  skin: 'naked',
  size: 'default',
  icon: 'chevron-down',
  iconAlignment: 'right',
  hideText: false,
  alert: false,
};

export const Separator = TemplateSeparator.bind({});
Separator.args = {
  title: 'Acties',
  alignment: 'left',
  skin: 'primary',
  size: 'default',
  icon: 'chevron-down',
  iconAlignment: 'right',
  hideText: false,
  alert: false,
};
