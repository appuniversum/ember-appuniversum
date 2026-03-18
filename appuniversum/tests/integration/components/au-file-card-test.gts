import AuFileCard from '@appuniversum/ember-appuniversum/components/au-file-card';
import { settled } from '@ember/test-helpers';
import { click, render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const FILE_CARD = {
  DELETE: '[data-test-file-card-delete]',
  FILENAME: '[data-test-file-card-filename]',
  FILE_SIZE: '[data-test-file-card-file-size]',
  DOWNLOAD: '[data-test-file-card-download]',
};

class TestState {
  @tracked downloadLink?: string;
  @tracked handleDeletion?: () => void;
}

module('Integration | Component | au-file-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a basic card', async function (assert) {
    await render(
      <template><AuFileCard @filename="test.txt" @fileSize="2kb" /></template>,
    );

    assert.dom(FILE_CARD.FILENAME).containsText('test.txt');
    assert.dom(FILE_CARD.FILE_SIZE).containsText('2kb');
  });

  test('it shows a download link if it is provided as an argument', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuFileCard
          @filename="test.txt"
          @fileSize="2kb"
          @downloadLink={{state.downloadLink}}
        />
      </template>,
    );

    assert.dom(FILE_CARD.DOWNLOAD).doesNotExist();

    state.downloadLink = '';
    await settled();
    assert.dom(FILE_CARD.DOWNLOAD).doesNotExist();

    state.downloadLink = 'https://foo.bar/test.txt';
    await settled();
    assert
      .dom(FILE_CARD.DOWNLOAD)
      .hasTagName('a')
      .hasAttribute('download')
      .hasAttribute('href', 'https://foo.bar/test.txt');
  });

  test('it shows a delete button if a handler was passed in', async function (assert) {
    const state = new TestState();
    await render(
      <template>
        <AuFileCard
          @filename="test.txt"
          @fileSize="2kb"
          @onDelete={{state.handleDeletion}}
        />
      </template>,
    );

    assert.dom(FILE_CARD.DELETE).doesNotExist();

    state.handleDeletion = () => {
      assert.step('handler was called');
    };
    await settled();
    assert.dom(FILE_CARD.DELETE).exists();

    await click(FILE_CARD.DELETE);
    assert.verifySteps(['handler was called']);
  });

  test('it accepts extra attributes', async function (assert) {
    await render(
      <template>
        <AuFileCard @filename="test.txt" @fileSize="2kb" data-test-file-card />
      </template>,
    );

    assert.dom('[data-test-file-card]').exists();
  });
});
