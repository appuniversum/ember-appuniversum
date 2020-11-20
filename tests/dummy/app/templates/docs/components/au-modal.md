# Modal (draft)

---

## Todo
- Seperate the open button from the modal component
- Make the modal open/close action available to other components

## Modal button styles

{{#docs-demo as |demo|}}
  {{#demo.example name='au-modal.hbs'}}
    <AuModal @buttonTitle="Open modal" @modalTitle="Modal title">
      <AuModalBody>
        <p>Modal content</p>
      </AuModalBody>
      <AuModalFooter>
        <AuButton>Action</AuButton>
      </AuModalFooter>
    </AuModal>
    <hr>
    <AuModal @buttonTitle="Open modal" @buttonSkin="secondary" @modalTitle="Modal title">
      <AuModalBody>
        <p>Modal content</p>
      </AuModalBody>
      <AuModalFooter>
        <AuButton>Action</AuButton>
      </AuModalFooter>
    </AuModal>
    <hr>
    <AuModal @buttonTitle="Open modal" @buttonSkin="tertiary" @buttonIcon="add" @modalTitle="Modal title">
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
    <AuModal @buttonTitle="Open fullscreen modal" @modalTitle="Modal title" @size="fullscreen">
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
| `@buttonTitle` | Set the title of the open modal button | `String` | - |
| `@buttonIcon` | Add an icon to the open modal button | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@buttonSkin` | Set the title of the modal | `value`: `primary` / `secondary` / `tertiary` | `primary` |
| `@modalTitle` | Set the title of the modal | `String` | - |
| `@size` | Set the size of the modal | `value`: `default` / `fullscreen` | `default` |
