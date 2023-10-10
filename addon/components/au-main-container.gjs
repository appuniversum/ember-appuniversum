import { hash } from '@ember/helper';
import Component from '@glimmer/component';

<template>
  <main
    id="main"
    class="au-c-main-container"
    tabindex="-1"
    data-test-main-container
    ...attributes
  >
    {{yield (hash sidebar=Sidebar)}}
    {{yield (hash content=Content)}}
  </main>
</template>

class Sidebar extends Component {
  get size() {
    if (this.args.size == 'collapsed')
      return 'au-c-main-container__sidebar--collapsed';
    if (this.args.size == 'small') return 'au-c-main-container__sidebar--small';
    if (this.args.size == 'large') return 'au-c-main-container__sidebar--large';
    return '';
  }

  <template>
    {{#if (has-block)}}
      <div
        class="au-c-main-container__sidebar {{this.size}} au-u-hide-on-print"
        data-test-main-container-sidebar
        ...attributes
      >
        {{yield}}
      </div>
    {{/if}}
  </template>
}

class Content extends Component {
  get scroll() {
    if (this.args.scroll) return 'au-c-main-container__content--scroll';
    return '';
  }

  <template>
    {{#if (has-block)}}
      <div
        id="content"
        class="au-c-main-container__content {{this.scroll}} au-u-wide-on-print"
        tabindex="-1"
        data-test-main-container-content
        ...attributes
      >
        {{yield}}
      </div>
    {{/if}}
  </template>
}
