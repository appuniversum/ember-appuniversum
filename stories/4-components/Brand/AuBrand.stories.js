import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Brand/AuBrand',
  argTypes: {
    link: { control: 'text', description:'Adds a link on the logotype' },
    tagline: {control: 'text', description:'Adds a tagline underneath the logotype'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBrand
      @link={{this.link}}
      @tagline={{this.tagline}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  link: '',
  tagline: ''
};

export const WithLink = Template.bind({});
WithLink.args = {
  link: 'https://www.vlaanderen.be/',
  tagline: ''
};

export const WithTagline = Template.bind({});
WithTagline.args = {
  link: '',
  tagline: 'verbeelding werkt'
};
