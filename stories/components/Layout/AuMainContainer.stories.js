import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuMainContainer',
  argTypes: {
    scroll: { control: 'boolean', description:'Make content container scrollable'}
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuMainContainer as |m|>
      <m.sidebar>
        <div style="display: flex; align-items:center; justify-content: center; padding: 1rem; background-color: lightgray; height: 100%">
          Sidebar
        </div>
      </m.sidebar>
      <m.content
        @scroll={{this.scroll}}
      >
        <div style="display: flex; align-items:center; justify-content: center; padding: 1rem; background-color: silver;  height: 105%">
          Main content
        </div>
      </m.content>
    </AuMainContainer>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  scroll: false
};
