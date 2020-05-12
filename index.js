'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function(type, config) {
    if (type === 'body'){
      return '<div id="ember-appuniversum-wormhole"></div>';
    } else {
      return '';
    }
  }
};
