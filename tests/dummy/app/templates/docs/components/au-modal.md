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

- `@buttonTitle`: [ string ] - set the title of the open modal button
- `@buttonIcon`: add an icon to the open modal button (see icon component for available icons)
- `@modalTitle`: [ string ] - set the title of the modal
- `@buttonSkin`: [ secondary | tertiary ] - default is primary
- `@size`: [ fullscreen ] - make the modal open fullscreen
