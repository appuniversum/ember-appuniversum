import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Navigation/AuPagination',
  parameters: {
    layout: 'padded',
    status: {
      type: 'draft', // 'draft' | 'stable' | 'deprecated'
    },
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToolbar
      @border="top"
      @size="large"
      @nowrap={{true}}
    >
      <div class="au-c-pagination">
        <div class="au-c-pagination__list-item">
          <AuButton @skin="link" @icon="nav-left" @iconAlignment="left" >Vorige pagina</AuButton>
        </div>
        <p>
          <span class="au-u-hidden-visually">Resultaten</span>
          <strong>
            1 - 9
          </strong>
          van
          18
        </p>
        <div class="au-c-pagination__list-item">
          <AuButton @skin="link" @icon="nav-right" @iconAlignment="right">Volgende pagina</AuButton>
        </div>
      </div>
    </AuToolbar>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {};
