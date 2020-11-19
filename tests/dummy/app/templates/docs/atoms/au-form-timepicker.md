# Time Picker

---

## Default

{{#docs-demo as |demo|}}
  {{#demo.example name='au-dateTime-picker-value.hbs'}}
    <AuTimePicker @hoursLabel="Hours" @minutesLabel="Minutes" @secondsLabel="Seconds" @nowLabel="Now" />
  {{/demo.example}}
  {{demo.snippet 'au-dateTime-picker-value.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@hoursLabel` | Hours label  | `string` | - |
| `@minutesLabel` | Minutes label  | `string` | - |
| `@secondsLabel` | Seconds label  | `string` | - |
| `@nowLabel` | Current time button label  | `string` | - |
