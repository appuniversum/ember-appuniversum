import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuFileUpload',
  argTypes: {
    accept: {
      control: 'text',
      description:
        'A list of MIME types/extensions to be accepted by the input',
    },
    endPoint: {
      control: 'text',
      description: 'Endpoint file is being uploaded to',
    },
    title: { control: 'text', description: 'Title shown on the dropzone' },
    helpTextDragDrop: {
      control: 'text',
      description: 'Help text shown below the title on the dropzone ',
    },
    helpTextFileNotSupported: {
      control: 'text',
      description: 'Error shown when unsupported file format is added ',
    },
    maxFileSizeMB: {
      control: 'number',
      description: 'Maximum filesize allowed (in MB)',
    },
    minFileSizeKB: {
      control: 'number',
      description: 'Minimum filesize allowed (in KB)',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple files can be selected when uploading',
    },
    onFinishUpload: {
      control: 'action',
      description: 'Action called when upload was finished successfully',
    },
    onQueueUpdate: {
      control: 'action',
      description: 'Action called when queue was updated',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuFileUpload
      @accept={{this.accept}}
      @endPoint={{this.endPoint}}
      @title={{this.title}}
      @helpTextDragDrop={{this.helpTextDragDrop}}
      @helpTextFileNotSupported={{this.helpTextFileNotSupported}}
      @maxFileSizeMB={{this.maxFileSizeMB}}
      @minFileSizeKB={{this.minFileSizeKB}}
      @multiple={{this.multiple}}
      @onFinishUpload={{this.onFinishUpload}}
      @onQueueUpdate={{this.onQueueUpdate}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  accept: 'image/*',
  endPoint: '',
  title: 'Bestanden toevoegen',
  helpTextDragDrop: 'Sleep de bestanden naar hier om toe te voegen',
  helpTextFileNotSupported: 'Dit bestandsformaat wordt niet ondersteund.',
  maxFileSizeMB: 20,
  minFileSizeKB: 0,
  multiple: false,
  onFinishUpload: null,
  onQueueUpdate: null,
};
