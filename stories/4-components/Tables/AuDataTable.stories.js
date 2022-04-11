import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Tables/AuDataTable',
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuDataTable
      @content={{this.model}}
      @fields="title description"
      @noDataMessage="Geen documenten"
      @sort={{this.sort}}
      as |t|
    >
      <t.menu as |menu|>
        <menu.general>
          <AuToolbar class="au-o-box">
            <AuToolbarGroup>
              <AuHeading @skin="2">
                Notulen zitting
              </AuHeading>
            </AuToolbarGroup>
            <AuToolbarGroup class="au-c-toolbar__group--center">
              <AuDataTableTextSearch @filter={{this.title}} @placeholder="Zoek titel notulen" />
              <AuButton>
                Nieuwe zitting
              </AuButton>
            </AuToolbarGroup>
          </AuToolbar>
        </menu.general>
      </t.menu>
      <t.content as |c|>
        <c.header>
          <AuDataTableThSortable
            @field="title"
            @currentSorting={{this.sort}}
            @label="Titel notulen" @class="data-table__header-title"
          />
          <AuDataTableThSortable
            @field="description"
            @currentSorting={{this.sort}}
            @label="Omschrijving" @class="data-table__header-title"
          />
        </c.header>
        <c.body as |row|>
          <td>{{row.title}}</td>
          <td>{{row.description}}</td>
        </c.body>
      </t.content>
    </AuDataTable>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {};
