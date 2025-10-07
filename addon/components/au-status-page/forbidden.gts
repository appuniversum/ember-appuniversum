import { StatusLayout } from './status-layout';

<template>
  <StatusLayout>
    <:title>Oeps, die pagina is beveiligd</:title>
    <:content>
      De pagina die u zoekt, vinden we niet terug of hebt u geen toegang toe.
    </:content>
    <:decoration>
      <img src="/@appuniversum/ember-appuniversum/images/status/access-forbidden.svg" alt="" />
    </:decoration>
  </StatusLayout>
</template>
