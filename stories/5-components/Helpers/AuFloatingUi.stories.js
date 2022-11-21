import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Helpers/AuFloatingUI',
  argTypes: {
    defaultPlacement: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom',
        'bottom-end',
        'top-start',
        'top',
        'top-end',
      ],
      description: 'Set the default placement of the floater',
    },
    options: {
      control: 'object',
      description: 'Set general options of the floater & arrow',
      defaultValue: {},
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
  <AuExampleScroller>
    <AuFloatingUi @defaultPlacement={{this.defaultPlacement}} @options={{this.options}} as |floatingUI|>
      <AuButton
        {{floatingUI.reference}}
        @skin="primary"
        @text="Reference"
      >
        Reference
      </AuButton>
      <div
        {{floatingUI.floater}}
        class="au-d-example-floater"
      >
        <div
          {{floatingUI.arrow}}
          class="au-d-example-floater-arrow"
        ></div>
        <div class="au-d-example-floater-content">
          <strong>Floater</strong><br/>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </AuFloatingUi>
  </AuExampleScroller>`,
  context: args,
});

export const Component = Template.bind();
