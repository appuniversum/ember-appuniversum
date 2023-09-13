import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/Input/Inputmasking',
  argTypes: {
    value: {
      control: 'text',
    },
    mask: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuContent class="au-u-max-width-small">
      <p>
        You can add input masking to the AuInput by applying the <AuPill>{{"{{au-inputmask}}"}}</AuPill> modifier. It is a simple wrapper around the inputmask library. Usage instructions can be found in the <AuLinkExternal href="https://github.com/RobinHerbots/Inputmask">inputmask repo</AuLinkExternal>.
      </p>
    </AuContent>
    <br>
    <AuLabel for="masked-input">Masked input</AuLabel>
    <AuInput
      id="masked-input"
      value={{this.value}}
      {{au-inputmask options=(hash
        mask=this.mask
        placeholder=this.placeholder
      )}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  mask: '99.99.99-999.99',
  placeholder: '_',
};
