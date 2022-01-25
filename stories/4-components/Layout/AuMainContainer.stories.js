import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuMainContainer',
  argTypes: {
    scroll: {
      control: 'boolean',
      description: 'Make content container scrollable',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuMainContainer as |m|>
      <m.sidebar>
        <div class="au-d-component-block">
          Sidebar
        </div>
      </m.sidebar>
      <m.content
        @scroll={{this.scroll}}
      >
        <div class="au-d-component-block au-d-component-block--overflow">
          Main content
        </div>
      </m.content>
    </AuMainContainer>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  scroll: false,
};
