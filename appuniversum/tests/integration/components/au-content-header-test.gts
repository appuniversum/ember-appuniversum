import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';

module('Integration | Component | au-content-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts block content and extra attributes', async function (assert) {
    await render(
      <template>
        <AuContentHeader data-test-content-header>
          template block text
        </AuContentHeader>
      </template>,
    );

    assert.dom('[data-test-content-header]').hasText('template block text');
  });

  test('it has arguments to configure the title sections', async function (assert) {
    await render(
      <template>
        <AuContentHeader data-test-content-header>
          template block text
        </AuContentHeader>
      </template>,
    );

    assert.dom('[data-test-content-header]').hasText('template block text');

    await render(
      <template>
        <AuContentHeader
          @titlePartOne="foo"
          @titlePartTwo="bar"
          data-test-content-header
        >
          template block text
        </AuContentHeader>
      </template>,
    );

    assert
      .dom('[data-test-content-header]')
      .hasText('template block text foo bar');
  });
});
