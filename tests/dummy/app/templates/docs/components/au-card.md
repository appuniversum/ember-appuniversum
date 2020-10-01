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
        <AuCard @textCenter="true" as |c|>
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
        <AuCard @flex="true" as |c|>
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
    <AuCard @flex="true" @divided="true" as |c|>
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
    <AuCard @expandable="true" @flex="true" @divided="true" as |c|>
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


## Card arguments

- `@flex`: [ true ] - layout elements as flexbox columns
- `@expandable`: [ true ] - card becomes expandable
- `@textCenter`: [ true ] - centers text

## Card header arguments

- `@badgeIcon`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink>
- `@badgeSkin`: [ none | border | brand | success | warning | error | action ] - default is gray
- `@badgeSize`: [ small ] - makes badge smaller
