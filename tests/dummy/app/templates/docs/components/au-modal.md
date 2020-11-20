# Modal (draft)

---

## Todo
- Seperate the open button from the modal component
- Make the modal open/close action available to other components

## Modal button styles

{{#docs-demo as |demo|}}
  {{#demo.example name='au-modal.hbs'}}
    <AuButton {{on "click" (action (mut popup) true)}}>Open modal</AuButton>
    <AuModal @modalTitle="Modal title" @modalOpen={{this.popup}}>
      <AuModalBody>
        <p>Modal content</p>
      </AuModalBody>
      <AuModalFooter>
        <AuButton>Action</AuButton>
      </AuModalFooter>
    </AuModal>
  {{/demo.example}}
  {{demo.snippet 'au-modal.hbs'}}
{{/docs-demo}}

## Fullscreen modal

{{#docs-demo as |demo|}}
  {{#demo.example name='au-modal-fullscreen.hbs'}}
    <AuModal @modalOpen={{false}} @modalTitle="Modal title" @size="fullscreen">
      <AuModalBody>
        <p>Modal content</p>
      </AuModalBody>
      <AuModalFooter>
        <AuButton>Action</AuButton>
      </AuModalFooter>
    </AuModal> 
  {{/demo.example}}
  {{demo.snippet 'au-modal-fullscreen.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@modalOpen` | Show or hide the modal | `Boolean` | - |
| `@onClose` | Add the action to close the modal | `function` | - |
| `@modalTitle` | Set the title of the modal | `string` | - |
| `@size` | Set the size of the modal | `default` / `fullscreen` | `default` |
