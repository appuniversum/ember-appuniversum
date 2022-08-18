import { isValidFileType } from '@appuniversum/ember-appuniversum/components/au-file-upload';
import { module, test } from 'qunit';

// Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const MIME_TYPE = {
  IMAGE: 'image/*',
  PNG: 'image/png',
  JPG: 'image/jpeg',

  VIDEO: 'video/*',
  MP4: 'video/mp4',
  WEBM: 'video/webm',

  AUDIO: 'audio/*',
  MP3: 'audio/mp3',
  OGG: 'audio/ogg',

  PDF: 'application/pdf',
  XLS: 'application/vnd.ms-excel',
  XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

const TEST_FILE = {
  PNG: { name: 'foo.png', type: MIME_TYPE.PNG },
  JPG: { name: 'foo.jpg', type: MIME_TYPE.JPG },

  PDF: { name: 'foo.pdf', type: MIME_TYPE.PDF },
  XLS: { name: 'foo.xls', type: MIME_TYPE.XLS },

  MP3: { name: 'foo.mp3', type: MIME_TYPE.MP3 },
  OGA: { name: 'foo.oga', type: MIME_TYPE.MP3 },

  MP4: { name: 'foo.mp4', type: MIME_TYPE.MP4 },
  WEBM: { name: 'foo.webm', type: MIME_TYPE.WEBM },
};

module('Unit | Private Utility | is-valid-file-type', function () {
  test('it returns true if no `accept` value is passed', function (assert) {
    let file = {
      name: 'test.png',
      type: 'image/png',
    };

    let isValid = isValidFileType(file, undefined);
    assert.true(isValid);
  });

  test('it validates the file extension', function (assert) {
    let file = TEST_FILE.PNG;
    assert.true(isValidFileType(file, '.png'));
    assert.false(isValidFileType(file, '.jpg'));
    assert.false(isValidFileType(file, '.pdf'));

    file = TEST_FILE.PDF;
    assert.false(isValidFileType(file, '.png'));
    assert.false(isValidFileType(file, '.jpg'));
    assert.true(isValidFileType(file, '.pdf'));
  });

  test('it accepts multiple comma-separated file extensions', function (assert) {
    assert.true(isValidFileType(TEST_FILE.PDF, '.png,.jpg,.pdf'));
    assert.true(isValidFileType(TEST_FILE.PNG, '.png,.jpg,.pdf'));
    assert.true(isValidFileType(TEST_FILE.JPG, '.png,.jpg,.pdf'));
    assert.false(isValidFileType(TEST_FILE.XLS, '.png,.jpg,.pdf'));
  });

  test('it can validate based on the MIME type', function (assert) {
    assert.true(isValidFileType(TEST_FILE.PNG, MIME_TYPE.PNG));
    assert.false(isValidFileType(TEST_FILE.PDF, MIME_TYPE.PNG));

    assert.true(isValidFileType(TEST_FILE.PDF, MIME_TYPE.PDF));
    assert.false(isValidFileType(TEST_FILE.JPG, MIME_TYPE.PDF));

    assert.true(isValidFileType(TEST_FILE.WEBM, MIME_TYPE.WEBM));
    assert.false(isValidFileType(TEST_FILE.JPG, MIME_TYPE.WEBM));

    assert.true(isValidFileType(TEST_FILE.MP3, MIME_TYPE.MP3));
    assert.false(isValidFileType(TEST_FILE.XLS, MIME_TYPE.MP3));
  });

  test('it supports the generic image/* for all image MIME types', function (assert) {
    assert.true(isValidFileType(TEST_FILE.JPG, MIME_TYPE.IMAGE));
    assert.true(isValidFileType(TEST_FILE.PNG, MIME_TYPE.IMAGE));
    assert.false(isValidFileType(TEST_FILE.PDF, MIME_TYPE.IMAGE));
  });

  test('it supports the generic audio/* for all audio MIME types', function (assert) {
    assert.true(isValidFileType(TEST_FILE.MP3, MIME_TYPE.AUDIO));
    assert.true(isValidFileType(TEST_FILE.OGA, MIME_TYPE.AUDIO));
    assert.false(isValidFileType(TEST_FILE.PNG, MIME_TYPE.AUDIO));
  });

  test('it supports the generic video/* for all video MIME types', function (assert) {
    assert.true(isValidFileType(TEST_FILE.MP4, MIME_TYPE.VIDEO));
    assert.true(isValidFileType(TEST_FILE.WEBM, MIME_TYPE.VIDEO));
    assert.false(isValidFileType(TEST_FILE.PNG, MIME_TYPE.VIDEO));
  });

  test('it supports combining extensions and MIME types', function (assert) {
    let accept = [MIME_TYPE.IMAGE, MIME_TYPE.VIDEO, '.pdf'].join();

    assert.true(isValidFileType(TEST_FILE.PNG, accept));
    assert.true(isValidFileType(TEST_FILE.MP4, accept));
    assert.true(isValidFileType(TEST_FILE.PDF, accept));
    assert.false(isValidFileType(TEST_FILE.XLS, accept));
  });

  test('it can validate the MIME type even if no file name is available', function (assert) {
    assert.true(isValidFileType({ type: MIME_TYPE.PNG }, MIME_TYPE.PNG));
  });

  test('it can validate the extension even if no MIME type is available', function (assert) {
    assert.true(isValidFileType({ name: 'foo.png' }, '.png'));
  });
});
