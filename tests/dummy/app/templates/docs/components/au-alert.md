# Alert

---

## Alert Skins

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-skins.hbs'}}
    <AuAlert @alertTitle="Informatie" @alertskin={{"info"}}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </AuAlert>
    <AuAlert @alertTitle="Success" @alertskin={{"success"}}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </AuAlert>
    <AuAlert @alertTitle="Waarschuwing" @alertskin={{"warning"}}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </AuAlert>
    <AuAlert @alertTitle="Error" @alertskin={{"error"}}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </AuAlert>
  {{/demo.example}}
  {{demo.snippet 'au-alert-skins.hbs'}}
{{/docs-demo}}

## Alert Action

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-action.hbs'}}
    <AuAlert @alertTitle="Informatie" @alertskin={{"info"}}>
      <p class="au-u-margin-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <AuButton>Primary action</AuButton>
      <AuButton @skin="ghost">Secondary action</AuButton>
    </AuAlert>
  {{/demo.example}}
  {{demo.snippet 'au-alert-action.hbs'}}
{{/docs-demo}}

## Alert Smaller Sizes

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-sizes.hbs'}}
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"small"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertTitle="Waarschuwing" @alertskin={{"info"}} @alertsize={{"tiny"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>

  {{/demo.example}}
  {{demo.snippet 'au-alert-sizes.hbs'}}
{{/docs-demo}}


## Alert Closable

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-closable.hbs'}}
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @closable="true">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"small"}} @closable="true">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertTitle="Waarschuwing" @alertskin={{"info"}} @alertsize={{"tiny"}} @closable="true">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>

  {{/demo.example}}
  {{demo.snippet 'au-alert-closable.hbs'}}
{{/docs-demo}}


## Alert Content Variations

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-content.hbs'}}
    <AuAlert @alertTitle="Success" @alertskin={{"info"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"small"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"tiny"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>

    <AuAlert @alertskin={{"info"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertskin={{"info"}} @alertsize={{"small"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
    <AuAlert @alertskin={{"info"}} @alertsize={{"tiny"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AuAlert>
  {{/demo.example}}
  {{demo.snippet 'au-alert-content.hbs'}}
{{/docs-demo}}
