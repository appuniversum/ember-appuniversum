import AuBrand from './au-brand.gjs';

<template>
  <footer class="au-c-main-footer" ...attributes>
    <div class="au-c-main-footer__brand">
      <AuBrand @tagline="verbeelding werkt" />
    </div>
    <div class="au-c-main-footer__content">
      {{yield}}
    </div>
  </footer>
</template>
