import { auDateInput, AuInput } from '@appuniversum/ember-appuniversum';

<template>
  {{~!~}}
  <AuInput
    @disabled={{@disabled}}
    @error={{@error}}
    @icon="calendar"
    @warning={{@warning}}
    @width={{@width}}
    autocomplete="off"
    placeholder="DD-MM-JJJJ"
    {{auDateInput value=@value prefillYear=@prefillYear onChange=@onChange}}
    ...attributes
  />
  {{~!~}}
</template>
