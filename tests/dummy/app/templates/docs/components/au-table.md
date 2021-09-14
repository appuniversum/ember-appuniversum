# Table

---

## Regular table

{{#docs-demo as |demo|}}
  {{#demo.example name='au-table.hbs'}}
    <AuTable>
      <:title>Test</:title>
      <:header>
        <tr>
          <th>Titel notulen</th>
          <th>Omschrijving</th>
        </tr>
      </:header>
      <:body>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Reglementen en verordeningen</td>
        </tr>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Advies bij jaarrekening AGB</td>
        </tr>
      </:body>
      <:footer>
        <tr>
          <td>College van Burgemeester en Schepenen Gent</td>
          <td>Besluitenlijst</td>
        </tr>
      </:footer>
    </AuTable>
  {{/demo.example}}
  {{demo.snippet 'au-table.hbs'}}
{{/docs-demo}}


## Small table

{{#docs-demo as |demo|}}
  {{#demo.example name='au-table-small.hbs'}}
    <AuTable @size="small">
      <:title>Test</:title>
      <:header>
        <tr>
          <th>Titel notulen</th>
          <th>Omschrijving</th>
        </tr>
      </:header>
      <:body>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Reglementen en verordeningen</td>
        </tr>
        <tr>
          <td>Gemeenteraad Gent</td>
          <td>Advies bij jaarrekening AGB</td>
        </tr>
      </:body>
      <:footer>
        <tr>
          <td>College van Burgemeester en Schepenen Gent</td>
          <td>Besluitenlijst</td>
        </tr>
      </:footer>
    </AuTable>
  {{/demo.example}}
  {{demo.snippet 'au-table-small.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@size` | Set the size of the table | `default` / `small` | `default` |
