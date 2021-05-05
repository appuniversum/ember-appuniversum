# Card

---

## Card – normal – centered – flexed with badge

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-2">
        <AuCard as |c|>
          <c.header>
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
          <c.content>
            <p>Information in the card that comes below the header. Content.</p>
          </c.content>
          <c.footer>
            <AuButton>Ga naar toezicht</AuButton>
          </c.footer>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard @textCenter={{true}} as |c|>
          <c.header>
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
          <c.content>
            <p>Information in the card that comes below the header. Content.</p>
          </c.content>
          <c.footer>
            <AuButton>Ga naar toezicht</AuButton>
          </c.footer>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard @flex={{true}} as |c|>
          <c.header @badgeSkin="brand" @badgeIcon="users">
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
          <c.content>
            <p>Information in the card that comes below the header. Content.</p>
          </c.content>
          <c.footer>
            <AuButton>Ga naar toezicht</AuButton>
          </c.footer>
        </AuCard>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-card.hbs'}}
{{/docs-demo}}

## Card – with badges, small or big, icon or number

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-badge.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-2">
        <AuCard as |c|>
          <c.header @badgeIcon="users" @badgeSkin="brand">
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard as |c|>
          <c.header @badgeNumber="1" @badgeSkin="action">
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard as |c|>
          <c.header @badgeNumber="1" @badgeSkin="success" @badgeSize="small">
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard as |c|>
          <c.header @badgeIcon="manual" @badgeSkin="border" @badgeSize="small">
            <AuHeading @level="2" @skin="4">
              Title for card
            </AuHeading>
            <p>
              Subtitle for card
            </p>
          </c.header>
        </AuCard>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-card-badge.hbs'}}
{{/docs-demo}}

## Card - divided

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-divided.hbs'}}
    <AuCard @flex={{true}} @divided={{true}} as |c|>
      <c.header @badgeSkin="brand" @badgeIcon="users">
        <AuHeading @level="2" @skin="4">
          Title for card
        </AuHeading>
        <p>
          Subtitle for card
        </p>
      </c.header>
      <c.content>
        <p>Information in the card that comes below the header. Content.</p>
      </c.content>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-divided.hbs'}}
{{/docs-demo}}

## Card expandable

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-expandable.hbs'}}
    <AuCard @expandable={{true}} @flex={{true}} @divided={{true}} as |c|>
      <c.header @badgeSkin="brand" @badgeIcon="users">
        <AuHeading @level="2" @skin="4">
          Title for card
        </AuHeading>
        <p>
          Subtitle for card
        </p>
      </c.header>
      <c.content>
        <p>Information in the card that comes below the header. Content.</p>
      </c.content>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-expandable.hbs'}}
{{/docs-demo}}

## Card Standout

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-standout.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-2-3">
        <AuHeading @level="4" @skin="4">Example standout card with editing</AuHeading>
      </div>
      <div class="au-o-grid__item au-u-1-3 au-u-align-right">
        <AuButton @skin="tertiary" @icon="pencil" @iconAlignment="right">
          Bewerk
        </AuButton>
      </div>
    </div>
    <AuCard @standOut={{true}} as |c|>
      <c.content>
        <div class="au-o-grid">
          <div class="au-o-grid__item au-u-1-2">
            <dl class="au-u-definition-list">
              <dt class="au-u-definition-list__label">First Label</dt>
              <dd class="au-u-definition-list__description">Description for first label</dd>
              <dt class="au-u-definition-list__label">Second Label</dt>
              <dd class="au-u-definition-list__description">Second description</dd>
            </dl>
          </div>
          <div class="au-o-grid__item au-u-1-2">
            <dl class="au-u-definition-list">
              <dt class="au-u-definition-list__label">First Label</dt>
              <dd class="au-u-definition-list__description">Description for first label</dd>
              <dt class="au-u-definition-list__label">Second Label</dt>
              <dd class="au-u-definition-list__description">Second description</dd>
            </dl>
          </div>
        </div>
      </c.content>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-standout.hbs'}}
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
| `@badgeIcon` | Add an icon  | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@badgeSkin` | Set the theme of the badge  | `value`: `none` / `border` / `brand` / `success` / `warning` / `error` / `action` | `none` |
| `@badgeSize` | Set the size of the badge  | `value`: `small` / `default` | `default` |
