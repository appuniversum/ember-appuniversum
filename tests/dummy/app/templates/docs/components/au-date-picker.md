# Date Picker

---

## Default 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker.hbs'}}
    <AuDatePicker @id="dateDefault" @label="Choose a date" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker.hbs'}}
{{/docs-demo}}


## Dynamic value

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-value.hbs'}}
    <AuDatePicker @id="dateValue" @label="Choose a date" @value="2020-01-01" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-value.hbs'}}
{{/docs-demo}}

## Minimum and maximum date

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-range.hbs'}}
    <AuDatePicker  @id="dateMinMax" @label="Choose a date" @min="2020-01-15" @max="2020-01-23"/>
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-range.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@id` | Set id of component  | `required` | - |
| `@label` | Set label text  | `String` | - |
| `@value` | Set/get the date value  | `date` | - |
| `@min` | Set starting date | `date` | - |
| `@max` | set ending date | `date` | - |
| `@first-day` | Choose first day of the week (range: 1 - 7) | `Integer` | 1 |



