import EmberObject from '@ember/object';
import SwipeSupportMixin from 'ember-notifier/mixins/swipe-support';
import { module, test } from 'qunit';

module('Unit | Mixin | swipe-support', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let SwipeSupportObject = EmberObject.extend(SwipeSupportMixin);
    let subject = SwipeSupportObject.create();
    assert.ok(subject);
  });
});
