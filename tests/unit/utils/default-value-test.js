import EmberObject from '@ember/object';
import defaultValue from 'dummy/utils/default-value';
import { module, test } from 'qunit';

const Notification = EmberObject.extend({
  icon: defaultValue('bell'),
});

module('Unit | Utility | default-value', function (/* hooks */) {
  test('it uses the fallback value', function (assert) {
    assert.expect(1);

    const primary = Notification.create({});

    assert.equal(primary.get('icon'), 'bell');
  });

  test('it uses the set value', function (assert) {
    assert.expect(1);

    const danger = Notification.create({
      icon: 'fire',
    });

    assert.equal(danger.get('icon'), 'fire');
  });
});
