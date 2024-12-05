import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Navigation/AuPager',
  parameters: {
    layout: 'padded',
    status: {
      type: 'draft', // 'draft' | 'stable' | 'deprecated'
    },
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPager
      @currentPage={{this.currentPage}}
      @totalItems={{this.totalItems}}
      @itemsPerPage={{this.itemsPerPage}}
      @alignment={{this.alignment}}
    />
  `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  currentPage: 5,
  totalItems: 200,
  itemsPerPage: 10,
};
