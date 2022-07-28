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
    <AuTabs @reversed={{this.reversed}} as |Tab|>
      <Tab>
        <AuLink @icon="hierarchal-back" @hideText={{true}}>Back</AuLink>
      </Tab>
      <Tab>
        <AuLink class="active">Tab 1</AuLink>
      </Tab>
      <Tab>
        <AuLink>Tab 2</AuLink>
      </Tab>
      <Tab>
        <AuLink>Tab 3</AuLink>
      </Tab>
      <Tab>
        <AuLinkExternal @icon="external" @iconAlignment="right">External link</AuLinkExternal>
      </Tab>
    </AuTabs>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  reversed: false,
};
