# Card (draft)

---

## Card – normal – centered – flexed with badge

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card.hbs'}}
    <div class="au-o-grid">
      <div class="au-o-grid__item au-u-1-2">
        <AuCard @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card">
          <AuButton>Ga naar toezicht</AuButton>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @textCenter="true">
          <AuButton>Ga naar toezicht</AuButton>
        </AuCard>
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard @flex="true"
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @badgeSkin="brand"
                @badgeIcon="users">
          <AuButton>Ga naar toezicht</AuButton>
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
        <AuCard
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @badgeIcon="users"
                @badgeSkin="brand" />
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @badgeNumber="1"
                @badgeSkin="action" />
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @badgeNumber="1"
                @badgeSkin="success"
                @badgeSize="small" />
      </div>
      <div class="au-o-grid__item au-u-1-2">
        <AuCard
                @cardTitle="Title for card"
                @cardSubTitle="Subtitle for card"
                @badgeIcon="manual"
                @badgeSkin="border"
                @badgeSize="small" />
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-card-badge.hbs'}}
{{/docs-demo}}

## Card - divided

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-divided.hbs'}}
    <AuCard @flex="true"
            @divided="true"
            @cardTitle="Title for card"
            @cardSubTitle="Subtitle for card"
            @badgeSkin="brand"
            @badgeIcon="users">
      <p>Information in the card that comes below the header. Content.</p>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-divided.hbs'}}
{{/docs-demo}}

## Card expandable

{{#docs-demo as |demo|}}
  {{#demo.example name='au-card-expandable.hbs'}}
    <AuCard @expandable="true"
            @flex="true"
            @divided="true"
            @cardTitle="Title for card"
            @cardSubTitle="Subtitle for card"
            @badgeSkin="brand"
            @badgeIcon="users">
      <p>Information in the card that comes below the header. Content.</p>
    </AuCard>
  {{/demo.example}}
  {{demo.snippet 'au-card-expandable.hbs'}}
{{/docs-demo}}


## Properties

- `@flex`: [ true ] - layout elements as flexbox columns
- `@expandable`: [ true ] - card becomes expandable
- `@textCenter`: [ true ] - centers text
- `@badgeIcon`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink>
- `@badgeSkin`: [ none | border | brand | success | warning | error | action ] - default is gray
- `@badgeSize`: [ small ] - makes badge smaller