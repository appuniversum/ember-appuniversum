import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Brand/AuContentHeader',
  argTypes: {
    titlePartOne: { control: 'text', description:'Top part of the title' },
    titlePartTwo: {control: 'text', description:'Bottom part of the title'},
    pictureSize: {control: 'select', options: ['default',  'large'], description:'Sets the size of the header picture'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuContentHeader
      @titlePartOne={{this.titlePartOne}}
      @titlePartTwo={{this.titlePartTwo}}
      @pictureSize={{this.pictureSize}}
    >
      <img sizes="50vw" src={{root-url "/images/loket-header-1600.jpg"}} srcset={{srcSet}} alt="Foto van een laptop met daarop het vlaanderen logo.">
    </AuContentHeader>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  titlePartOne: "Vlaanderen",
  titlePartTwo: "is lokaal bestuur",
  pictureSize: "default"
};
