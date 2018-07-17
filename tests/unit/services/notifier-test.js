import { run } from '@ember/runloop';
import { settled } from '@ember/test-helpers'
import { typeOf } from '@ember/utils';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('service:notifier', 'Unit | Service | notifier', function (hooks) {
  setupTest(hooks);

  test('#notification returns an array of notifications', function (assert) {
    assert.expect(2);

    const service = this.owner.factoryFor('service:notifier').create({});

    service.info('info 1');
    service.info('info 2');
    service.info('info 3');

    assert.equal(typeOf(service.get('notifications')), 'array', 'it returns an array');
    assert.equal(service.get('notifications.length'), 3, 'it returns the correct number of notifications');
  });

  test('#add adds a custom notification', async function (assert) {
    assert.expect(7);

    const service = this.owner.factoryFor('service:notifier').create({});
    let result = false;

    service.add({
      message: 'msg',
      title: 'header',
      type: 'is-class',
      icon: 'bell',
      duration: 0,
      contentComponent: 'test-component',
      onRemove() {
        result = true;
      },
    });

    assert.equal(service.get('notifications.0.message'), 'msg', 'it has the correct message');
    assert.equal(service.get('notifications.0.title'), 'header', 'it has the correct title');
    assert.equal(service.get('notifications.0.type'), 'is-class', 'it has the correct type');
    assert.equal(service.get('notifications.0.icon'), 'bell', 'it has the correct icon');
    assert.equal(service.get('notifications.0.duration'), 0, 'it has the correct duration');
    assert.equal(service.get('notifications.0.contentComponent'), 'test-component', 'it has the correct content component');

    service.remove(service.get('notifications.0'));

    await settled();

    assert.equal(result, true, 'it called the onRemove function');
  });

  test('#remove removes a notification', async function (assert) {
    assert.expect(1);

    const service = this.owner.factoryFor('service:notifier').create({});

    service.primary('primary');
    service.remove(service.get('notifications.0'));

    await settled();

    assert.equal(service.get('notifications.length'), 0, 'it removes the notification');
  });

  test('#cancelRemoval cancels removal of a notification', function (assert) {
    assert.expect(1);

    const done = assert.async();
    const service = this.owner.factoryFor('service:notifier').create({});

    service.add({
      message: 'schedule',
      duration: 500,
    });
    service.cancelRemoval(service.get('notifications.0'));

    run.later(() => {
      assert.equal(service.get('notifications.length'), 1, 'it cancels the removal of the notification');
      done();
    }, 750);
  });

  test('#scheduleRemoval schedules removal of a notification', function (assert) {
    assert.expect(1);

    const done = assert.async();
    const service = this.owner.factoryFor('service:notifier').create({});

    service.add({
      message: 'schedule',
      duration: 500,
    });

    run.later(() => {
      assert.equal(service.get('notifications.length'), 0, 'it removes the notification automatically');
      done();
    }, 750);
  });

  test('#empty clears the notifications', async function (assert) {
    assert.expect(2);

    const service = this.owner.factoryFor('service:notifier').create({});

    service.info('info 1');
    service.info('info 2');
    service.info('info 3');
    service.empty();

    await settled();

    assert.equal(typeOf(service.get('notifications')), 'array', 'it returns an array');
    assert.equal(service.get('notifications.length'), 0, 'it empties the array');
  });

  test('it has default notification styles', function (assert) {
    assert.expect(12);

    const service = this.owner.factoryFor('service:notifier').create({});
    const defaultStyles = ['primary', 'info', 'success', 'warning', 'danger', 'secondary'];

    defaultStyles.forEach((style) => {
      const method = service[style];

      assert.ok(method);
      assert.equal(typeOf(method), 'function');
    });
  });
});
