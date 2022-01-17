import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Navigation/AuDropdown',
  argTypes: {
    dropdownTitle: { control: 'text', description:'Pass the title of the dropdown'},
    dropdownButtonLabel: { control: 'text', description:'Pass name of the dropdown button'},
    alignment: { control: 'select', options: ['left', 'right', 'center'], description:'Position the icon and menu'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuDropdown
      @dropdownTitle={{this.dropdownTitle}}
      @dropdownButtonLabel={{this.dropdownButtonLabel}}
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
  dropdownTitle: "Demo dropdown",
  dropdownButtonLabel: "Dropdown",
  alignment: "left"
};
