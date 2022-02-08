import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Content/AuAccordion',
  argTypes: {
    subtitle: {
      control: 'text',
      description: 'Set the subtitle of the accordion',
    },
    iconOpen: {
      control: 'select',
      options: icons,
      description:
        "Adds an icon to the accordion when it's open. Defaults to nav-down.",
    },
    iconClosed: {
      control: 'select',
      options: icons,
      description:
        "Adds an icon to the accordion when it's closed. Defaults to nav-right.",
    },
    buttonLabel: { control: 'text', description: '' },
    loading: {
      control: 'boolean',
      description: 'Adds a loading state to the button',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuAccordion
      @subtitle={{this.subtitle}}
      @iconOpen={{this.iconOpen}}
      @iconClosed={{this.iconClosed}}
      @buttonLabel={{this.buttonLabel}}
      @loading={{this.loading}}
    >
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  subtitle: 'subtitle',

  buttonLabel: 'Accordion with arrows',
  loading: false,
};
