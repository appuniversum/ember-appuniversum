import Component from '@glimmer/component';
import AuContent from '../au-content';
import AuHeading from '../au-heading';

interface StatusLayoutSignature {
  Element: HTMLDivElement;
  Blocks: {
    title: [];
    content: [];
    link?: [];
    decoration: [];
  };
}

export class StatusLayout extends Component<StatusLayoutSignature> {
  <template>
    {{#let (has-block "decoration") as |hasDecoration|}}
      <div class="au-o-layout au-o-region-large" ...attributes>
        <div
          class="au-u-flex@medium au-u-flex--row-reverse au-u-flex--center au-u-flex--vertical-center
            {{if hasDecoration 'u-h-full'}}"
        >
          <div
            class="au-u-text-center au-u-text-left@medium au-u-margin-bottom au-u-margin-bottom-none@medium"
          >
            {{yield to="decoration"}}
          </div>
          <div class={{if hasDecoration "au-u-margin-right-large@medium"}}>
            <AuHeading @skin="2">
              {{yield to="title"}}
            </AuHeading>
            {{#if (has-block "content")}}
              <AuContent>
                {{yield to="content"}}
              </AuContent>
            {{/if}}
            {{#if (has-block "link")}}
              <div>
                {{yield to="link"}}
              </div>
            {{/if}}
          </div>
        </div>
      </div>
    {{/let}}
  </template>
}
