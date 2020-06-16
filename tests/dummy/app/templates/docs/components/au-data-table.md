# Data table (draft)

---

Wrapper for [https://github.com/mu-semtech/ember-data-table](https://github.com/mu-semtech/ember-data-table)

{{#docs-demo as |demo|}}
  {{#demo.example name='au-data-table.hbs'}}
    <AuDataTable @content={{this.model}} @fields="title description" @noDataMessage="Geen documenten" @sort={{sort}} as |t|>
      <t.menu as |menu|>
        <menu.general>
          <AuToolbar class="au-o-box">
            <AuToolbarGroup>
              <AuHeading @skin="2">
                Notulen zitting
              </AuHeading>
            </AuToolbarGroup>
            <AuToolbarGroup class="au-c-toolbar__group--center">
              <AuDataTableTextSearch @filter={{title}} @placeholder="Zoek titel notulen" />
              <AuButton>
                Nieuwe zitting
              </AuButton>
            </AuToolbarGroup>
          </AuToolbar>
        </menu.general>
      </t.menu>
      <t.content as |c|>
        <c.header>
          <AuDataTableThSortable @field="title" @currentSorting={{sort}} @label="Titel notulen" @class="data-table__header-title" />
          <AuDataTableThSortable @field="description" @currentSorting={{sort}} @label="Omschrijving" @class="data-table__header-title" />
        </c.header>
        <c.body as |row|>
          <td>{{row.title}}</td>
          <td>{{row.description}}</td>
        </c.body>
      </t.content>
    </AuDataTable>
  {{/demo.example}}
  {{demo.snippet 'au-data-table.hbs'}}
{{/docs-demo}}
