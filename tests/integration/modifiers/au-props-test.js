import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | au-props', function (hooks) {
  setupRenderingTest(hooks);

  test('it sets values as properties on the DOM element', async function (assert) {
    this.value = 'bar';

    await render(hbs`<div data-test {{au-props foo=this.value}}></div>`);

    assert.dom('[data-test]').hasProperty('foo', 'bar');

    this.set('value', 'baz');
    assert
      .dom('[data-test]')
      .hasProperty(
        'foo',
        'baz',
        'it updates the property if the value changes',
      );
  });

  test('it can set multiple properties at once', async function (assert) {
    await render(hbs`<div data-test {{au-props foo="bar" baz="qux"}}></div>`);

    assert
      .dom('[data-test]')
      .hasProperty('foo', 'bar')
      .hasProperty('baz', 'qux');
  });
});
