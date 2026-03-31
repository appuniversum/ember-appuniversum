/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import EmberApp from 'ember-strict-application-resolver';
import EmberRouter from '@ember/routing/router';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';
import ToasterService from '#src/services/toaster.ts';
import { FileQueueService } from 'ember-file-upload';
import BasicDropdown from 'ember-basic-dropdown/components/basic-dropdown';
import PowerSelectBeforeOptions from 'ember-power-select/components/power-select/before-options';
import PowerSelectOptions from 'ember-power-select/components/power-select/options';
import PowerSelectPlaceholder from 'ember-power-select/components/power-select/placeholder';
import PowerSelectTrigger from 'ember-power-select/components/power-select/trigger';
import powerSelectIsSelectedPresent from 'ember-power-select/helpers/ember-power-select-is-selected-present';
import powerSelectIsGroup from 'ember-power-select/helpers/ember-power-select-is-group';
import powerSelectIsEqual from 'ember-power-select/helpers/ember-power-select-is-equal';
import { eq, notEq, and, or, not } from 'ember-truth-helpers';
// @ts-expect-error no types
import assign from 'ember-assign-helper/helpers/assign';
import '../styles/_index.scss';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

class TestApp extends EmberApp {
  modules = {
    './config/environment': {
      rootURL: '/', // Needed by the AuIcon component during the tests
    },
    './router': Router,
    // add any custom services here
    // import.meta.glob('./services/*', { eager: true }),
    './services/toaster': ToasterService,
    './services/file-queue': FileQueueService,

    // PowerSelect modules: We use PowerSelect in some tests, which requires us to list all "loose mode" modules it uses
    // TODO: Remove this once v9 is released which is fully .gts
    './components/basic-dropdown': BasicDropdown,
    './components/power-select/before-options': PowerSelectBeforeOptions,
    './components/power-select/options': PowerSelectOptions,
    './components/power-select/placeholder': PowerSelectPlaceholder,
    './components/power-select/trigger': PowerSelectTrigger,
    './helpers/ember-power-select-is-selected-present':
      powerSelectIsSelectedPresent,
    './helpers/ember-power-select-is-equal': powerSelectIsEqual,
    './helpers/ember-power-select-is-group': powerSelectIsGroup,
    './helpers/assign': assign,
    './helpers/not-eq': notEq,
    './helpers/eq': eq,
    './helpers/or': or,
    './helpers/and': and,
    './helpers/not': not,
  };
}

Router.map(function () {});

export function start() {
  setTesting(true);
  setApplication(
    TestApp.create({
      autoboot: false,
      rootElement: '#ember-testing',
    }),
  );
  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
