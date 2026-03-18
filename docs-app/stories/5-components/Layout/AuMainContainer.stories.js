import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuMainContainer',
  argTypes: {
    scroll: {
      control: 'boolean',
      description: 'Make content container scrollable',
    },
    size: {
      control: 'select',
      options: ['collapsed', 'small', 'regular', 'large'],
      description: 'Set the size of the sidebar container',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      {{!template-lint-disable no-inline-styles}}
      <div class="au-d-component-block" style="height: 40px">
        Environment banner
      </div>
      {{!template-lint-disable no-inline-styles}}
      <div class="au-d-component-block" style="height: 40px">
        Header
      </div>
      <AuMainContainer as |m|>
        <m.sidebar @size={{this.size}}>
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
      </AuMainContainer>
    </AuApp>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  scroll: true,
  size: 'regular',
};
