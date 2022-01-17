import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Brand/AuBrand',
  argTypes: {
    brandLink: { control: 'text', description:'Adds a link on the logotype' },
    tagline: {control: 'text', description:'Adds a tagline underneath the logotype'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBrand
      @brandLink={{this.brandLink}}
      @tagline={{this.tagline}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  brandLink: '',
  tagline: ''
};

export const WithLink = Template.bind({});
WithLink.args = {
  brandLink: 'https://www.vlaanderen.be/',
  tagline: ''
};

export const WithTagline = Template.bind({});
WithTagline.args = {
  brandLink: '',
  tagline: 'verbeelding werkt'
};
