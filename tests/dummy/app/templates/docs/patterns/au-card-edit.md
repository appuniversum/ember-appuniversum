# Editable Card

---

## Editable Card - With Title

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-editable.hbs'}}
    <div class="au-o-flow au-o-flow--large">
      <div>
        <AuToolbar class="au-u-margin-bottom-small">
          <AuToolbarGroup>
            <AuHeading @level="4" @skin="5">Card – editable</AuHeading>
          </AuToolbarGroup>
          <AuToolbarGroup>
            <AuButton @skin="tertiary" @icon="pencil" @iconAlignment="right">
              Bewerk
            </AuButton>
          </AuToolbarGroup>
        </AuToolbar>
        <AuCard @standOut={{true}} as |c|>
          <c.content>
            <div class="au-o-grid">
              <div class="au-o-grid__item au-u-1-1 au-u-1-2@medium">
                <div class="au-o-grid">
                  <div class="au-o-grid__item au-u-1-4">
                    <p><strong>Subject</strong></p>
                  </div>
                  <div class="au-o-grid__item au-u-3-4">
                    <p>Object (information)</p>
                  </div>
                </div>
              </div>
              <div class="au-o-grid__item  au-u-1-1 au-u-1-2@medium">
                <div class="au-o-grid">
                  <div class="au-o-grid__item au-u-1-4">
                    <p><strong>Context</strong></p>
                  </div>
                  <div class="au-o-grid__item au-u-3-4">
                    <p>Information</p>
                  </div>
                </div>
              </div>
            </div>
          </c.content>
        </AuCard>
      </div>
      <div>
        <AuToolbar class="au-u-margin-bottom-small">
          <AuToolbarGroup>
            <AuHeading @level="4" @skin="5">Card – editing</AuHeading>
          </AuToolbarGroup>
          <AuToolbarGroup>
            <AuButton @icon="check" @iconAlignment="right">
              Bewaar
            </AuButton>
          </AuToolbarGroup>
        </AuToolbar>
        <AuCard as |c|>
          <c.content>
            <div class="au-o-grid">
              <div class="au-o-grid__item au-u-1-1 au-u-1-2@medium">
                <div class="au-o-grid">
                  <div class="au-o-grid__item au-u-1-4">
                    <p><strong>Subject</strong></p>
                  </div>
                  <div class="au-o-grid__item au-u-3-4">
                    <AuLabel for="input-subject-object" class="au-u-hidden-visually">Object subject input</AuLabel>
                    <AuInput id="input-subject-object"/>
                    <AuHelpText>The label is there for accessibility, but hidden.</AuHelpText>
                  </div>
                </div>
              </div>
              <div class="au-o-grid__item  au-u-1-1 au-u-1-2@medium">
                <div class="au-o-grid">
                  <div class="au-o-grid__item au-u-1-4">
                    <p><strong>Context</strong></p>
                  </div>
                  <div class="au-o-grid__item au-u-3-4">
                    <p>Information</p>
                    <AuHelpText>We are not dealing with label-input, nor a definition list.</AuHelpText>
                  </div>
                </div>
              </div>
            </div>
          </c.content>
        </AuCard>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-card-editable.hbs'}}
{{/docs-demo}}

## Card arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@flex` | Layout elements as flexbox columns  | `boolean` | `false` |
| `@expandable` | Card becomes expandable  | `boolean` | `false` |
| `@textCenter` | Centers text | `boolean` | `false` |
| `@standOut` | Makes background colour stand out | `boolean` | `false` |

## Card header arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@badgeIcon` | Add an icon  | `value`: <AuLink @route="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@badgeSkin` | Set the theme of the badge  | `value`: `none` / `border` / `brand` / `success` / `warning` / `error` / `action` | `none` |
| `@badgeSize` | Set the size of the badge  | `value`: `small` / `default` | `default` |
