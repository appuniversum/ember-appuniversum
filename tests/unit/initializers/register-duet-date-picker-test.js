import Application from '@ember/application';

import { initialize } from 'dummy/initializers/register-duet-date-picker';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | register-duet-date-picker', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('it registers the duet-date-picker web component', async function(assert) {
    await this.application.boot();

    assert.ok(window.customElements.get('duet-date-picker'));
  });
});
