import AuCard from '@appuniversum/ember-appuniversum/components/au-card';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | au-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts extra attributes', async function (assert) {
    await render(
      <template>
        <AuCard data-test-card as |Card|>
          <Card.content>
            template block text
          </Card.content>
        </AuCard>
      </template>,
    );

    assert.dom('[data-test-card]').exists();
  });

  test('it yields a content component', async function (assert) {
    await render(
      <template>
        <AuCard data-test-card as |Card|>
          <Card.content data-test-card-content>
            template block text
          </Card.content>
        </AuCard>
      </template>,
    );

    assert.dom('[data-test-card-content]').hasText('template block text');
  });
});
