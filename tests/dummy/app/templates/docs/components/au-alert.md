# Alert

---

## Alert Skins

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-skins.hbs'}}
    <AuAlert @alertTitle="Informatie" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} />
    <AuAlert @alertTitle="Success" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"success"}} />
    <AuAlert @alertTitle="Waarschuwing" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It " @alertskin={{"warning"}} />
    <AuAlert @alertTitle="Error" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"error"}} />
  {{/demo.example}}
  {{demo.snippet 'au-alert-skins.hbs'}}
{{/docs-demo}}


## Alert Smaller Sizes

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-sizes.hbs'}}
    <AuAlert @alertTitle="Success" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} @alertsize={{"small"}} />
    <AuAlert @alertTitle="Waarschuwing" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It " @alertskin={{"info"}} @alertsize={{"tiny"}} />

  {{/demo.example}}
  {{demo.snippet 'au-alert-sizes.hbs'}}
{{/docs-demo}}


## Alert Closable

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-closable.hbs'}}
    <AuAlert @alertTitle="Success" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} @closable="true" />
    <AuAlert @alertTitle="Success" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} @alertsize={{"small"}} @closable="true" />
    <AuAlert @alertTitle="Waarschuwing" @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It " @alertskin={{"info"}} @alertsize={{"tiny"}} @closable="true" />

  {{/demo.example}}
  {{demo.snippet 'au-alert-closable.hbs'}}
{{/docs-demo}}


## Alert Content Variations

{{#docs-demo as |demo|}}
  {{#demo.example name='au-alert-content.hbs'}}
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} />
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"small"}} />
    <AuAlert @alertTitle="Success" @alertskin={{"info"}} @alertsize={{"tiny"}} />

    <AuAlert @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} />
    <AuAlert @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} @alertsize={{"small"}} />
    <AuAlert @alertMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." @alertskin={{"info"}} @alertsize={{"tiny"}} />
  {{/demo.example}}
  {{demo.snippet 'au-alert-content.hbs'}}
{{/docs-demo}}
