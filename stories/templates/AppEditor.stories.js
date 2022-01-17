import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Templates/App with Editor',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuApp>
      <MockupAppChrome />
      <div class="say-container">
        <div class="say-container__main">
          <div class="say-editor">
            <div class="say-editor__paper">
              <div class="say-editor__inner say-content">
              </div>
            </div>
          </div>
          <div class="say-container__aside">
            <div class="say-editor-hints">
              <ul class="say-editor-hints__list">
                <li class="say-editor-hints__list-item">
                  <AuCard @flex={{true}} @divided={{true}} @shadow={{true}} @size="small" as |c|>
                    <c.header>
                      <AuHeading @level="3" @skin="6">
                        Title for card
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Information in the card that comes below the header. Content.</p>
                    </c.content>
                    <c.footer>
                      <AuButtonGroup class="au-u-text-right">
                        <AuButton @skin="link" @icon="cross" @iconAlignment="left">Venster sluiten</AuButton>
                      </AuButtonGroup>
                    </c.footer>
                  </AuCard>
                </li>
                <li class="say-editor-hints__list-item">
                  <AuCard @flex={{true}} @divided={{true}} @expandable={{true}} @shadow={{true}} @size="small" as |c|>
                    <c.header>
                      <AuHeading @level="3" @skin="6">
                        Title for card
                      </AuHeading>
                    </c.header>
                    <c.content>
                      <p>Information in the card that comes below the header. Content.</p>
                    </c.content>
                  </AuCard>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AuApp>
  `,
  context: args,
});

export const Page = Template.bind({});
Page.args = {

};
