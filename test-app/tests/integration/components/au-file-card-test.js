import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const FILE_CARD = {
  DELETE: '[data-test-file-card-delete]',
  FILENAME: '[data-test-file-card-filename]',
  FILE_SIZE: '[data-test-file-card-file-size]',
  DOWNLOAD: '[data-test-file-card-download]',
};

module('Integration | Component | au-file-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a basic card', async function (assert) {
    await render(hbs`
      <AuFileCard
        @filename="test.txt"
        @fileSize="2kb"
      />
    `);

    assert.dom(FILE_CARD.FILENAME).containsText('test.txt');
    assert.dom(FILE_CARD.FILE_SIZE).containsText('2kb');
  });

  test('it shows a download link if it is provided as an argument', async function (assert) {
    await render(hbs`
      <AuFileCard
        @filename="test.txt"
        @fileSize="2kb"
        @downloadLink={{this.downloadLink}}
      />
    `);

    assert.dom(FILE_CARD.DOWNLOAD).doesNotExist();

    this.set('downloadLink', '');
    assert.dom(FILE_CARD.DOWNLOAD).doesNotExist();

    this.set('downloadLink', 'https://foo.bar/test.txt');
    assert
      .dom(FILE_CARD.DOWNLOAD)
      .hasTagName('a')
      .hasAttribute('download')
      .hasAttribute('href', 'https://foo.bar/test.txt');
  });

  test('it shows a delete button if a handler was passed in', async function (assert) {
    await render(hbs`
      <AuFileCard
        @filename="test.txt"
        @fileSize="2kb"
        @onDelete={{this.handleDeletion}}
      />
    `);

    assert.dom(FILE_CARD.DELETE).doesNotExist();

    this.set('handleDeletion', () => {
      assert.step('handler was called');
    });
    assert.dom(FILE_CARD.DELETE).exists();

    await click(FILE_CARD.DELETE);
    assert.verifySteps(['handler was called']);
  });
});
