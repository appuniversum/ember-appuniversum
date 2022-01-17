import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuBodyContainer',
  argTypes: {
    scroll: { control: 'boolean', description:'Make body container scrollable'}
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBodyContainer
      @scroll={{this.scroll}}
    >
      <div style="display: flex; align-items:center; justify-content: center; padding: 1rem; background-color: silver; height: 105%">
        Content
      </div>
    </AuBodyContainer>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  scroll: false
};
