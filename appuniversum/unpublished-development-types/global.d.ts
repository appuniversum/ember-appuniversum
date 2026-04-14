export {}; // Ensure this is treated as a module

declare global {
  interface Window {
    FastBoot: unknown;
  }

  // For Node.js or non-browser environments (e.g., Fastboot in Ember.js)
  var FastBoot: unknown;
}
