import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuFileCard',
  argTypes: {
    filename: { control: 'text', description: '' },
    fileSize: { control: 'text', description: '' },
    downloadLink: {
      control: 'text',
      description: 'If set, it will display a link to download the file',
    },
    onDelete: {
      control: 'function',
      description:
        'If set, it will show a button which calls the provided function.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <div class="au-u-max-width-tiny">
      <AuFileCard
        @filename={{this.filename}}
        @fileSize={{this.fileSize}}
        @downloadLink={{this.downloadLink}}
        @onDelete={{this.onDelete}}
      />
    </div>
  `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  filename: 'file.txt',
  fileSize: '1KB',
  downloadLink: 'https://some-download-link/',
};
