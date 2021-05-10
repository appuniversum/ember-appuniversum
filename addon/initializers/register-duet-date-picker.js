export function initialize() {
  if (typeof FastBoot === 'undefined') {
    import('@duetds/date-picker/custom-element').then(({ defineCustomElements: registerDuetDatePicker }) => {
      registerDuetDatePicker();
    });
  }
}

export default {
  initialize
};
