import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuToolbar',
  argTypes: {
    reverse: { control: 'boolean', description:'Reverse the direction of the child components'},
    border: { control: 'select', options: ['none', 'top', 'bottom'], description:'Adds a border and padding to the top or bottom'},
    skin: { control: 'select', options: ['none', 'tint'], description:'Adds a background color'},
    size: { control: 'select', options: ['none', 'small', 'medium', 'large'], description:'Adds more padding'},
    nowrap: { control: 'boolean', description:'Aligns elements to the top and makes sure groups, when dealing with longer content, do not push groups into a new line'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToolbar
      @reverse={{this.reverse}}
      @border={{this.border}}
      @skin={{this.skin}}
      @size={{this.size}}
      @nowrap={{this.nowrap}}
    >
      <AuToolbarGroup>
        <AuButtonGroup>
          <AuButton>
            Primary button
          </AuButton>
          <AuButton @skin="secondary">
            Secondary button
          </AuButton>
        </AuButtonGroup>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuLink @skin="secondary">
          Secondary link
        </AuLink>
      </AuToolbarGroup>
    </AuToolbar>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  reverse: false,
  border: "bottom",
  skin: "none",
  size: "small",
  nowrap: false
};
