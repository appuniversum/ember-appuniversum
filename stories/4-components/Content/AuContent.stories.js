import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuContent',
  argTypes: {
    skin: {
      control: 'select',
      options: ['default', 'tiny', 'small', 'large'],
      description: 'Smaller/larger text and vertical spacing',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuContent @skin={{this.skin}}>
      <h1>
        Title
      </h1>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna.
      </p>
      <h2>
        Subtitle
      </h2>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna.
      </p>

      </AuContent>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  skin: '',
};
