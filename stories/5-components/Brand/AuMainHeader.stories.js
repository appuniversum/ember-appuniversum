import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Brand/AuMainHeader',
  argTypes: {
    brandLink: { control: 'text', description: 'Pass a link to the logo' },
    appTitle: { control: 'text', description: 'Pass the header title' },
    homeRoute: {
      control: 'text',
      description: 'Pass a route for the appTitle link',
    },
    contactRoute: {
      control: 'text',
      description: 'Pass a route for the contact link',
    },
    contactLabel: {
      control: 'text',
      description: 'Set the label for the contact link (default: Contacteer ons)',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuMainHeader
      @brandLink={{this.brandLink}}
      @appTitle={{this.appTitle}}
      @homeRoute={{this.homeRoute}}
      @contactRoute={{this.contactRoute}}
      @contactLabel={{this.contactLabel}}
    >
      <AuDropdown @title="Demo dropdown" @alignment="right" role="menu">
        <AuButton @skin="link" @icon="logout" role="menuitem">
          Afmelden
        </AuButton>
      </AuDropdown>
    </AuMainHeader>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  brandLink: '',
  appTitle: 'App title',
  homeRoute: 'home',
  contactRoute: 'contact',
  contactLabel: 'Contacteer ons',
};
