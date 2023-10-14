import AuInput from './au-input.gjs';
import auDateInput from '../modifiers/au-date-input.js';

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
