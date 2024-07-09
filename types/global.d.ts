import '@glint/environment-ember-loose';
import type AppuniversumRegistry from '@appuniversum/ember-appuniversum/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends AppuniversumRegistry /* other addon registries */ {
    // local entries
  }
}

declare global {
  // eslint-disable-next-line no-var
  var FastBoot: unknown; // it needs to be a `var` for the types to work, not sure why exactly..
}
