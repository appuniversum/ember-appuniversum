import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuFieldset',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'inline', 'pre', 'post'],
      description: 'Choose the layout of the form row.',
    },
    skin: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', 'functional'],
      description: 'Defines the style and size of the legend',
    },
    inline: {
      control: 'boolean',
      description: 'Add an inline state to the legend.',
    },
    required: {
      control: 'boolean',
      description: 'Add a required state to the legend.',
    },
    requiredLabel: {
      control: 'text',
      description: 'Add the required state label to the legend.',
    },
    error: {
      control: 'boolean',
      description: 'Add an error state to the legend.',
    },
    warning: {
      control: 'boolean',
      description: 'Add an warning state to the legend.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuFieldset
      @alignment={{this.alignment}}
      as |f|
    >
      <f.legend
        @skin={{this.skin}}
        @inline={{this.inline}}
        @required={{this.required}}
        @requiredLabel={{this.requiredLabel}}
        @error={{this.error}}
        @warning={{this.warning}}
      >
        Legend
      </f.legend>
      <f.content>
        <AuInput id="input" />
      </f.content>
    </AuFieldset>
    `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  alignment: 'default',
  skin: '6',
  inline: false,
  required: false,
  requiredLabel: '',
  error: false,
  warning: false,
};
