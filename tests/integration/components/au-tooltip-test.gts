import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent, triggerKeyEvent } from '@ember/test-helpers';
import AuTooltip from '@appuniversum/ember-appuniversum/components/au-tooltip';

module('Integration | Component | au-tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays a tooltip when hovering the target element', async function (assert) {
    await render(
      <template>
        <AuTooltip as |tooltip|>
          <button type="button" {{tooltip.target}}>Some button</button>
          <tooltip.Content data-test-tooltip-content>
            Tooltip content
          </tooltip.Content>
        </AuTooltip>
      </template>,
    );

    assert.dom('[data-test-tooltip-content]').doesNotExist();
    await triggerEvent('button', 'mouseenter');

    assert
      .dom('[data-test-tooltip-content]')
      .exists('it displays the tooltip when hovering the target element')
      .hasText('Tooltip content');

    await triggerEvent('button', 'mouseleave');
    assert
      .dom('[data-test-tooltip-content]')
      .doesNotExist(
        'it hides the tooltip when the mouse leaves the target element',
      );
  });

  test('it displays a tooltip when focusing the target element', async function (assert) {
    await render(
      <template>
        <AuTooltip as |tooltip|>
          <button type="button" {{tooltip.target}}>Some button</button>
          <tooltip.Content data-test-tooltip-content>
            Tooltip content
          </tooltip.Content>
        </AuTooltip>
      </template>,
    );

    assert.dom('[data-test-tooltip-content]').doesNotExist();
    await triggerEvent('button', 'focus');

    assert
      .dom('[data-test-tooltip-content]')
      .exists('it displays the tooltip when focusing the target element');

    await triggerEvent('button', 'blur');
    assert
      .dom('[data-test-tooltip-content]')
      .doesNotExist('it hides the tooltip when the focus is lost');
  });

  test('it closes when the escape key is pressed', async function (assert) {
    await render(
      <template>
        <AuTooltip as |tooltip|>
          <button type="button" {{tooltip.target}}>Some button</button>
          <tooltip.Content data-test-tooltip-content>
            Tooltip content
          </tooltip.Content>
        </AuTooltip>
      </template>,
    );

    assert.dom('[data-test-tooltip-content]').doesNotExist();
    await triggerEvent('button', 'mouseenter');

    assert.dom('[data-test-tooltip-content]').hasText('Tooltip content');

    await triggerKeyEvent('button', 'keydown', 'Escape');
    assert.dom('[data-test-tooltip-content]').doesNotExist();
  });

  test('it enables the "large" variant of the tooltip when there is a lot of text in the content component', async function (assert) {
    await render(
      <template>
        <AuTooltip as |tooltip|>
          <button type="button" {{tooltip.target}}>Some button</button>
          <tooltip.Content data-test-tooltip-content>
            Foo
          </tooltip.Content>
        </AuTooltip>
      </template>,
    );

    await triggerEvent('button', 'mouseenter');
    assert
      .dom('[data-test-tooltip-content]')
      .hasNoClass(
        'au-c-tooltip--large',
        "it doesn't add the class when the minimum character breakpoint hasn't been reached",
      );

    await render(
      <template>
        <AuTooltip as |tooltip|>
          <button type="button" {{tooltip.target}}>Some button</button>
          <tooltip.Content data-test-tooltip-content>
            For a large button, label or other element with more text, the
            content is shown in a smaller, more condensed way.
          </tooltip.Content>
        </AuTooltip>
      </template>,
    );

    await triggerEvent('button', 'mouseenter');
    assert.dom('[data-test-tooltip-content]').hasClass('au-c-tooltip--large');
  });
});
