import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Brand/AuIcon',
  argTypes: {
    icon: {
      control: 'select',
      options: icons,
      description:
        'Pass the svg name to select the icon | See below for available icons',
    },
    size: {
      control: 'select',
      options: ['default', 'medium', 'large'],
      description: 'Define the size of the icon',
    },
    alignment: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Add margin to the icon',
    },
    ariaHidden: {
      control: 'boolean',
      description:
        'Hide the icon from screenreaders (false hides the icon from screenreaders, true announces the icon)',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuIcon
      @icon={{this.icon}}
      @size={{this.size}}
      @alignment={{this.alignment}}
      @ariaHidden={{this.ariaHidden}}
    />`,
  context: args,
});

const CustomIconTemplate = (args) => ({
  template: hbs`
    <AuIcon
      @icon={{component 'au-icon' icon=this.icon}}
      @size={{this.size}}
      @alignment={{this.alignment}}
      @ariaHidden={{this.ariaHidden}}
    />`,
  context: args,
});

const IconList = (args) => ({
  template: hbs`
    <AuIconList />
  `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  icon: 'info-circle',
  size: 'large',
  alignment: '',
  ariaHidden: true,
};

export const WithCustomIcon = CustomIconTemplate.bind({});
WithCustomIcon.args = {
  icon: 'info-circle',
  size: 'large',
  alignment: '',
  ariaHidden: true,
};

export const Icons = IconList.bind({});
IconList.args = {};
