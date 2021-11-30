# Modal

---


## Modal button styles

{{#docs-demo as |demo|}}
  {{#demo.example name='au-modal.hbs'}}
    <AuButton {{on "click" (fn (mut this.popup) true)}}>Open modal</AuButton>
    <AuModal 
    @modalTitle="Modal title" 
    @modalOpen={{this.popup}} 
    @closeModal={{fn (mut this.popup) false}} as |Modal| >
      <Modal.Body>
        <p>Modal content</p>
      </Modal.Body>
      <Modal.Footer>
        <AuButton>Action</AuButton>
      </Modal.Footer>
    </AuModal>
  {{/demo.example}}
  {{demo.snippet 'au-modal.hbs'}}
{{/docs-demo}}

## Fullscreen modal

{{#docs-demo as |demo|}}
  {{#demo.example name='au-modal-fullscreen.hbs'}}
    <AuButton {{on "click" (fn (mut this.popupFullScreen) true)}}>Open modal</AuButton>
    <AuModal @modalOpen={{this.popupFullScreen}} 
    @modalTitle="Modal title" 
    @size="fullscreen" 
    @closeModal={{fn (mut this.popupFullScreen) false}} as |Modal|>
      <Modal.Body>
        <p>Modal content</p>
      </Modal.Body>
      <Modal.Footer>
        <AuButton>Action</AuButton>
      </Modal.Footer>
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
| `@size` | Set the size of the modal | `default` /  `large` / `fullscreen` | `default` |
| `@padding` | Set the size of the modal | `default` /  `none` |
