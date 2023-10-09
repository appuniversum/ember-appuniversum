<template>
  <div class="au-c-panel {{if @active 'au-c-panel--active'}}" ...attributes>
    {{yield Section}}
  </div>
</template>

const Section = <template>
  <div class="au-c-panel__section au-o-box au-o-box--small" ...attributes>
    {{yield}}
  </div>
</template>;
