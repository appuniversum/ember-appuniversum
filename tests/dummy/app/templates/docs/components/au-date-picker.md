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
    <AuDatePicker  @id="dateMinMax" @label="Choose a date" @min="2020-01-15" @max="2020-01-23" />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-range.hbs'}}
{{/docs-demo}}

## Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-date-picker-disabled.hbs'}}
    <AuDatePicker  @id="dateDisabled" @label="Choose a date" @disabled={{true}} />
  {{/demo.example}}
  {{demo.snippet 'au-date-picker-disabled.hbs'}}
{{/docs-demo}}

## Localization

You can customize all button labels, names, placeholders... by passing in a localization object.

{{docs-snippet name="au-date-picker.js" unindent=false language=js showCopy=false}}

It is not required to pass in all object properties. If you are only interested in changing the buttonLabel property value, it suffices to pass in the localization object with only buttonLabel as property. <br> <br>
If you have multiple date pickers on one page, then you only need to pass in the localization object to a single date picker. All the others will use that localization object automatically. 

## Adapter

Customize how the dates are formatted and/or parsed. The adapter argument expects an object with 2 properties (parse & format). The property values have to be functions containing a return statement.

{{docs-snippet name="au-date-picker-adapter.js" unindent=false language=js showCopy=false}}



## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@id` | Set id of component  | `required` | - |
| `@label` | Set label text  | `String` | - |
| `@value` | Set/get the date value  | `date` | - |
| `@min` | Set starting date | `date` | - |
| `@max` | set ending date | `date` | - |
| `@first-day` | Choose first day of the week (range: 1 - 7) | `Integer` | 1 |
| `@disabled` | Makes the date picker input component disabled | `Boolean` | false |
| `@localization` | Object for localizing Button labels, names... | `Object` | [See above](#localization) |
| `@adapter` | Object for parsing and formatting | `Object` | [See above](#adapter) |



