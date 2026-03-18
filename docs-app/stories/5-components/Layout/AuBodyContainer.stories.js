import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuBodyContainer',
  argTypes: {
    scroll: {
      control: 'boolean',
      description: 'Make body container scrollable',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <AuBodyContainer
        @scroll={{this.scroll}}
      >
        <div class="au-d-component-block au-d-component-block--overflow">
          Content
        </div>
      </AuBodyContainer>
    </AuApp>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  scroll: false,
};
