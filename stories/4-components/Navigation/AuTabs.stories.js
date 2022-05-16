import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Navigation/AuTabs',
  argTypes: {
    reversed: {
      control: 'boolean',
      description:
        'Puts the default bottom border and active state border on top.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuTabs @reversed={{this.reversed}}>
      <AuTabs::Item>
        <AuLink class="active">Tab 1</AuLink>
      </AuTabs::Item>
      <AuTabs::Item>
        <AuLink>Tab 2</AuLink>
      </AuTabs::Item>
      <AuTabs::Item>
        <AuLink>Tab 3</AuLink>
      </AuTabs::Item>
    </AuTabs>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  reversed: false,
};
