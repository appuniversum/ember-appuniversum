import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuAlertComponent extends Component {
  @tracked isVisible = true;

  get skin() {
    deprecate(
      '@alertSkin is deprecated, use @skin instead',
      !this.args.alertSkin,
      {
        id: '@appuniversum/ember-appuniversum.au-alert.alertSkin-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );

    let skin = this.args.alertSkin || this.args.skin;

    if (skin === 'info') return 'au-c-alert--info';
    if (skin === 'success') return 'au-c-alert--success';
    if (skin == 'warning') return 'au-c-alert--warning';
    if (skin == 'error') return 'au-c-alert--error';
    return '';
  }

  get size() {
    deprecate(
      '@alertSize is deprecated, use @size instead',
      !this.args.alertSize,
      {
        id: '@appuniversum/ember-appuniversum.au-alert.alertSize-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );

    let size = this.args.alertSize || this.args.size;
    if (size === 'tiny') return 'au-c-alert--tiny';
    if (size === 'small') return 'au-c-alert--small';
    return '';
  }

  get icon() {
    deprecate(
      '@alertIcon is deprecated, use @icon instead',
      !this.args.alertIcon,
      {
        id: '@appuniversum/ember-appuniversum.au-alert.alertIcon-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );
    return this.args.alertIcon || this.args.icon;
  }

  get title() {
    deprecate(
      '@alertTitle is deprecated, use @title instead',
      !this.args.alertTitle,
      {
        id: '@appuniversum/ember-appuniversum.au-alert.alertTitle-argument',
        until: '2.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '1.1.0',
        },
      }
    );
    return this.args.alertTitle || this.args.title;
  }

  // @TODO: add icon switching functionality

  @action
  closeAlert() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
