import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from 'a11y-announcer/templates/components/route-announcer';

export default Component.extend({
  announcer: service('announcer'),
  layout: layout,
  classNames: ['au-u-hidden-visually'],
  attributeBindings: ['ariaLive:aria-live'],
  ariaLive: computed('tone', function() {
    return this.get('announcer').getWithDefault('announceTone', 'polite');
  }),
  tone: alias('announcer.announceTone'),
  message: "Nieuwe pagina geladen"
  // message: alias('announcer.announceMessage')
});
