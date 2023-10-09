<template>
  <nav class="au-c-tabs {{if @reversed 'au-c-tabs--reversed'}}" ...attributes>
    <ul class="au-c-tabs-list">
      {{yield Tab}}
    </ul>
  </nav>
</template>

const Tab = <template>
  <li class="au-c-tabs-list__item" ...attributes>
    {{yield}}
  </li>
</template>;
