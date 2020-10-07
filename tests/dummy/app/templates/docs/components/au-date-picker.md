# Date Picker

---

## Default 

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker.hbs'}}
    <AuDatePicker @label="Choose a date" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker.hbs'}}
{{/docs-demo}}


## Dynamic value

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-value.hbs'}}
    <AuDatePicker @label="Choose a date" @value="2020-01-01" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-value.hbs'}}
{{/docs-demo}}

## Minimum and maximum date

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-range.hbs'}}
    <AuDatePicker @label="Choose a date" @min="2020-01-15" @max="2020-01-23"/>
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-range.hbs'}}
{{/docs-demo}}





