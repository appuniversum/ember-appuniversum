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
                <dl class="au-o-grid au-o-grid--tiny">
                  <dt class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                    <p><strong>Subject</strong></p>
                  </dt>
                  <dd class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                    <p>Object (information)</p>
                  </dd>
                </dl>
              </div>
              <div class="au-o-grid__item  au-u-1-1 au-u-1-2@medium">
                <dl class="au-o-grid au-o-grid--tiny">
                  <dt class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                    <p><strong>Context</strong></p>
                  </dt>
                  <dd class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                    <p>Information</p>
                  </dd>
                </dl>
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
              <div class="au-o-grid__item au-u-1-2@medium">
                <div class="au-o-grid au-o-grid--tiny">
                  <div class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                    <AuLabel for="input-subject-object" @inline={{true}} @required={{true}} @requiredLabel="*">Subject</AuLabel>
                  </div>
                  <div class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                    <AuInput id="input-subject-object" @width="block" />
                    <AuHelpText>Helptext</AuHelpText>
                  </div>
                </div>
              </div>
              <div class="au-o-grid__item au-u-1-2@medium">
                <div class="au-o-grid au-o-grid--tiny">
                  <div class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                    <AuLabel for="input-subject-object" @inline={{true}} @required={{true}} @requiredLabel="*" @error={{true}}>Subject</AuLabel>
                  </div>
                  <div class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                    <AuInput id="input-subject-object" @error={{true}} @width="block" />
                    <AuHelpText @error={{true}}>Error message</AuHelpText>
                  </div>
                </div>
              </div>
            </div>
          </c.content>
          <c.footer>
            <AuHelpText @skin="secondary">
              * Required field
            </AuHelpText>
          </c.footer>
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
