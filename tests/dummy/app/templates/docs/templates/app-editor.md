# Editor / Plugins

---

## Sidebar content

{{#docs-demo as |demo|}}
  {{#demo.example name='app-editor.hbs'}}
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
  {{/demo.example}}
  {{demo.snippet 'app-editor.hbs'}}
{{/docs-demo}}


## Modal plugins

{{#docs-demo as |demo|}}
  {{#demo.example name='app-editor-modal.hbs'}}
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
                      <AuButton @skin="link-secondary" {{on "click" (fn (mut this.popup) true)}}>Open modal</AuButton>
                      <AuModal 
                      @size="large"
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
                    </c.content>
                    <c.footer>
                      <AuButtonGroup class="au-u-text-right">
                        <AuButton @skin="link" @icon="cross" @iconAlignment="left">Venster sluiten</AuButton>
                      </AuButtonGroup>
                    </c.footer>
                  </AuCard>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AuApp>
  {{/demo.example}}
  {{demo.snippet 'app-editor-modal.hbs'}}
{{/docs-demo}}
