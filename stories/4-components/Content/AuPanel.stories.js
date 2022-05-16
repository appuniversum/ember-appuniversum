import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuPanel',
  argTypes: {
    active: {
      control: 'boolean',
      options: ['default', 'active'],
      description: 'Set an active or editing state.',
    },
    padding: {
      control: 'select',
      options: ['default', 'flush', 'small', 'large'],
      description: 'Set the size of the panel section',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPanel @active={{this.active}}>
      <AuPanel::Section @padding={{this.padding}}>
        <AuToolbar as |Group|>
          <Group>
            <AuHeading @skin="4">
              Panel
            </AuHeading>
          </Group>
          <Group>
            <AuButton @icon="pencil" @skin="naked" @iconAlignment="left">
              Bewerken
            </AuButton>
          </Group>
        </AuToolbar>
      </AuPanel::Section>
      <AuPanel::Section @padding={{this.padding}}>
        <AuContent @skin="small">
          Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna.
        </AuContent>
      </AuPanel::Section>
    </AuPanel>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  active: false,
  padding: 'default',
};
