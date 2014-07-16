var BasePlugin = require('mixdown-app').Plugin;

module.exports = BasePlugin.extend({
  get: function(namespace) {
    namespace = namespace || 'undefined';

    this.attach = function(options) {
      this[namespace] = options;
    };

  }
});
