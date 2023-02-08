import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Layout/AuApp',
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      {{!template-lint-disable no-inline-styles}}
      <div class="au-d-component-block" style="height: 40px">
        Header
      </div>
      {{!template-lint-disable no-inline-styles}}
      <div class="au-d-component-block" style="height: 40px">
        Subheader
      </div>
      <AuBodyContainer
        @scroll={{true}}
      >
        <div class="au-d-component-block au-d-component-block--overflow">
          Content
        </div>
      </AuBodyContainer>
    </AuApp>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {};
