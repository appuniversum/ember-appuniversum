import Component from '@glimmer/component';

export default class AuTable extends Component {
  get size() {
    if (this.args.size == 'small') return 'au-c-table--small';
    else return '';
  }

  <template>
    <div class="au-c-table-wrapper">
      <table class="au-c-table {{this.size}}" data-test-table ...attributes>
        {{#if (has-block "title")}}
          <caption class="au-c-table__caption" data-test-table-title>
            {{yield to="title"}}
          </caption>
        {{/if}}
        {{#if (has-block "header")}}
          <thead class="au-c-table__header" data-test-table-header>
            {{yield to="header"}}
          </thead>
        {{/if}}
        {{#if (has-block "body")}}
          <tbody class="au-c-table__body" data-test-table-body>
            {{yield to="body"}}
          </tbody>
        {{/if}}
        {{#if (has-block "footer")}}
          <tfoot class="au-c-table__footer" data-test-table-footer>
            {{yield to="footer"}}
          </tfoot>
        {{/if}}
      </table>
    </div>
  </template>
}
