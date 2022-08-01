import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Navigation/AuDropdown',
  argTypes: {
    title: { control: 'text', description: 'Pass the title of the dropdown' },
    buttonLabel: {
      control: 'text',
      description: 'Pass name of the dropdown button',
    },
    alignment: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Position the icon and menu',
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
      @buttonLabel={{this.buttonLabel}}
      @alignment={{this.alignment}}
    >
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="switch" @alignment="left" />Switch profile
      </AuButton>
      <AuButton @skin="tertiary" role="menuitem">
        <AuIcon @icon="logout" @alignment="left" />Afmelden
      </AuButton>
    </AuDropdown>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  title: 'Demo dropdown',
  buttonLabel: 'Dropdown',
  alignment: 'left',
};
