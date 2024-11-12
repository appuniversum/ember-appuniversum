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
      @content={{this.getData this.page this.itemsPerPage this.totalItems}}
      @page={{this.page}}
      @fields="title description"
      @noDataMessage="Geen documenten"
      @sort={{this.sort}}
      @hidePagination={{this.hidePagination}}
      as |t|
    >
      <t.menu as |menu|>
        <menu.general>
          <AuToolbar class="au-o-box" as |Group|>
            <Group>
              <AuHeading @skin="2">
                Notulen zitting
              </AuHeading>
            </Group>
            <Group class="au-c-toolbar__group--center">
              <AuDataTableTextSearch @filter={{this.title}} @placeholder="Zoek titel notulen" />
              <AuButton>
                Nieuwe zitting
              </AuButton>
            </Group>
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
  context: {
    ...args,
    getData: function (page = 0, perPage = 5, totalItems = 100) {
      const baseNumber = perPage * page + 1;
      const lastPage = totalItems / perPage - 1;

      let data = [];

      if (page <= lastPage && page >= 0) {
        data = Array(perPage)
          .fill(null)
          .map((_, index) => {
            return {
              title: `title ${index + baseNumber}`,
              description: `description ${index + baseNumber}`,
            };
          });
      }

      data.meta = {
        count: totalItems,
        pagination: {
          first: {
            number: 0,
          },
          last: {
            number: lastPage,
          },
        },
      };

      if (page > 0) {
        data.meta.pagination.prev = {
          number: page - 1,
        };
      }

      if (page < lastPage) {
        data.meta.pagination.next = {
          number: page + 1,
        };
      }

      return data;
    },
  },
});

export const Component = Template.bind({});
Component.args = {
  page: 0,
  itemsPerPage: 5,
  totalItems: 100,
  hidePagination: false,
};
