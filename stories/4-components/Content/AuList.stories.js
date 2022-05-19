import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuList',
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Set the direction of the list',
    },
    divider: {
      control: 'boolean',
      description: 'Adds a divider',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuList
      @direction={{this.direction}}
      @divider={{this.divider}}
      as |Item|
    >
      <Item>
        List item 1
      </Item>
      <Item>
        List item 2
      </Item>
      <Item>
        List item 3
      </Item>
    </AuList>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  direction: 'vertical',
  divider: true,
};
