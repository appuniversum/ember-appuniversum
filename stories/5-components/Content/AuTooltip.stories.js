import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Content/AuTooltip',
  argTypes: {
    text: { control: 'text', description: '' },
    tooltipText: { control: 'text', description: '' },
  },
};

const Template = (args) => ({
  template: hbs`
     <AuTooltip
	 @text={{text}}
	 @tooltipText={{tooltipText}}
	 />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Lorem Ipsum',
  tooltipText: 'Tooltip text',
};
