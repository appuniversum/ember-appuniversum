import '@glint/ember-tsc/types';
import type AppuniversumRegistry from '@appuniversum/ember-appuniversum/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- This is how it comes out of the blueprint, so we keep it like that for now
  export default interface Registry
    extends AppuniversumRegistry /* other addon registries */ {
    // local entries
  }
}

declare global {
  var FastBoot: unknown; // it needs to be a `var` for the types to work, not sure why exactly..
}
