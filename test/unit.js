var assert = require('assert');
var MixdownObject = require('../index.js');
var App = require('mixdown-app').App;

suite('Mixdown Object', function() {

  var app = new App();
  var namespace = "foo";
  var obj = new MixdownObject(namespace);

  setup(function(done) {
    app.use(obj, namespace);
    done();
  });

  test('Attach', function(done) {
    assert.ok(app[namespace], 'Attach should have happened at correct namespace');
    assert.deepEqual(app[namespace], obj, 'Attached object should be correct.');
    done();

  });
});
