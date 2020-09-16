# Button

---

## Primary button

Indicates the main action of the view (only one should be used per view).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuButton>
      Primary button
    </AuButton>

    <hr>

    <AuButton @size="large">
      Primary button - large
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left">
      Primary button - icon
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="right">
      Primary button - icon
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @hideText="true">
      Primary button - icon
    </AuButton>

    <hr>

    <AuButton @width="block">
      Primary button - block
    </AuButton>

    <hr>

    <AuButton @alert="true">
      Primary button - error
    </AuButton>

    <hr>

    <AuButton @loading="true">
      Primary button - loading
    </AuButton>

    <hr>

    <AuButton @disabled="true">
      Primary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button.hbs'}}
{{/docs-demo}}

## Secondary button

Addon to a primary action (should not be used without the presence of a primary button).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-secondary.hbs'}}
    <AuButton @skin="secondary">
      Secondary button
    </AuButton>

    <hr>
    <AuButton @skin="secondary" @size="large">
      Secondary button - large
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @icon="pencil" @iconAlignment="left">
      Secondary button - icon
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @icon="pencil" @iconAlignment="right">
      Secondary button - icon
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @icon="pencil" @hideText="true">
      Secondary button - icon
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @width="block">
      Secondary button - block
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @alert="true">
      Secondary button - error
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @loading="true">
      Secondary button - loading
    </AuButton>

    <hr>

    <AuButton @skin="secondary" @disabled="true">
      Secondary button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-secondary.hbs'}}
{{/docs-demo}}

## Tertiary button

Can be used as a standalone secondary action or link.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-tertiary.hbs'}}
    <AuButton @skin="tertiary">
      Tertiary button
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left" @skin="tertiary">
      Tertiary button - icon
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="right" @skin="tertiary">
      Tertiary button - icon
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @hideText="true" @skin="tertiary">
      Tertiary button - icon
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left" @skin="tertiary" @width="block">
      Tertiary button - block
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left" @skin="tertiary" @alert="true">
      Tertiary button - error
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left" @skin="tertiary" @loading="true">
      Tertiary button - loading
    </AuButton>

    <hr>

    <AuButton @icon="pencil" @iconAlignment="left" @skin="tertiary" @disabled="true">
      Link button - disabled
    </AuButton>
  {{/demo.example}}
  {{demo.snippet 'au-button-tertiary.hbs'}}
{{/docs-demo}}

## Properties

- `@skin`: [ secondary | tertiary ] - default is primary
- `@size`: [ large ] - makes a button larger
- `@icon`: [ icon name ] - adds an icon
- `@iconAlignment`: [ left | right ] - adds margin left or right of the icon
- `@hideText`: [ true ] - hides the button text visually
- `@width`: [ block ] - makes a button behave like a block element
- `@alert`: [ true ] - adds an alert state to the button
- `@disabled`: [ true ] - adds a disabled state to the button
- `@loading`: [ true ] - adds a loading state to the button


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

## Button Group Inline

Can be used as a toggle function. Not functional in this demo.

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button-group-inline.hbs'}}
    <AuButtonGroup @inline="true">
      <AuButton>
        Primary button in group
      </AuButton>
      <AuButton class="is-active">
        Primary button in group - active
      </AuButton>
    </AuButtonGroup>
    <AuButtonGroup @inline="true">
      <AuButton @size="large">
        Large primary button in group
      </AuButton>
      <AuButton @size="large" class="is-active">
        Large primary button in group - active
      </AuButton>
    </AuButtonGroup>

    <hr>
    <AuButtonGroup @inline="true">
      <AuButton @skin="secondary">
        Secondary button in group
      </AuButton>
      <AuButton @skin="secondary" class="is-active">
        Secondary button in group - active
      </AuButton>
    </AuButtonGroup>
    <AuButtonGroup @inline="true">
      <AuButton @skin="secondary" @size="large">
        Large secondary button in group
      </AuButton>
      <AuButton @skin="secondary" @size="large" class="is-active">
        Large secondary button in group - active
      </AuButton>
    </AuButtonGroup>

    <hr>
    <AuButtonGroup @inline="true">
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
