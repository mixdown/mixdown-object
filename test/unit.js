var assert = require('assert');
var MixdownObject = require('../index.js');
var broadway = require('broadway');

suite('Mixdown Object', function() {

  var app = {
    plugins: new broadway.App()
  };
  var namespace = (Math.random() * 1000).toString();
  var obj = {
    foo: "bar"
  };

  setup(function(done) {
    app.plugins.use(new MixdownObject(namespace), obj);
    done();
  });

  test('Attach', function(done) {

    assert.ok(app.plugins[namespace], 'Attach should have happened at correct namespace');
    assert.deepEqual(app.plugins[namespace], obj, 'Attached object should be correct.');
    done();

  });
});