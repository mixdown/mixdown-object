module.exports = function(namespace) {
  namespace = namespace || 'undefined';

  this.attach = function(options) {
    this[namespace] = options;
  };

};