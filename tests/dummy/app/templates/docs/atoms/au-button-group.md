# Button

---

## Button Group

Groups and spaces buttons

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-group.hbs'}}
    <AuButtonGroup>
      <AuButton>
        Primary button in group
      </AuButton>
      <AuButton @skin="secondary">
        Secondary button in group
      </AuButton>
    </AuButtonGroup>

    <hr>
    <AuButtonGroup>
      <AuButton @size="large">
        Large primary button in group
      </AuButton>
      <AuButton @skin="secondary" @size="large">
        Large secondary button in group
      </AuButton>
    </AuButtonGroup>
  {{/demo.example}}
  {{demo.snippet 'au-button-group.hbs'}}
{{/docs-demo}}

## Inline

Can be used as a toggle function. Not functional in this demo.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-group-inline.hbs'}}
    <AuButtonGroup @inline={{true}}>
      <AuButton>
        Primary button in group
      </AuButton>
      <AuButton class="is-active">
        Primary button in group - active
      </AuButton>
    </AuButtonGroup>

    <br/>
    
    <AuButtonGroup @inline={{true}}>
      <AuButton @size="large">
        Large primary button in group
      </AuButton>
      <AuButton @size="large" class="is-active">
        Large primary button in group - active
      </AuButton>
    </AuButtonGroup>

    <hr>

    <AuButtonGroup @inline={{true}}>
      <AuButton @skin="secondary">
        Secondary button in group
      </AuButton>
      <AuButton @skin="secondary" class="is-active">
        Secondary button in group - active
      </AuButton>
    </AuButtonGroup>

    <br/>

    <AuButtonGroup @inline={{true}}>
      <AuButton @skin="secondary" @size="large">
        Large secondary button in group
      </AuButton>
      <AuButton @skin="secondary" @size="large" class="is-active">
        Large secondary button in group - active
      </AuButton>
    </AuButtonGroup>

    <hr>

    <AuButtonGroup @inline={{true}}>
      <AuButton @skin="tertiary">
        Tertiary button in group
      </AuButton>
      <AuButton @skin="tertiary" class="is-active">
        Tertiary button in group - active
      </AuButton>
    </AuButtonGroup>
  {{/demo.example}}
  {{demo.snippet 'au-button-group-inline.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@inline` | Removes whitespace between buttons  | `Boolean` | false |
