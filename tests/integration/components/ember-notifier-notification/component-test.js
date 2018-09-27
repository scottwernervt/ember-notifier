import Component from '@ember/component';
import EmberObject from '@ember/object';
import { click, find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import triggerSwipeEvent from '../../../helpers/trigger-swipe-event';

const template = hbs`
  {{ember-notifier-notification notification=notification close=(action "onClose")}}
`;

module('Integration | Component | ember-notifier-notification', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.notification = EmberObject.create({
      title: 'title',
      message: 'message',
      type: 'is-primary',
      showAnimationClass: null,
      hideAnimationClass: null,
      animationTimeout: 0,
      minSwipeDistance: 150,
      maxSwipeTime: 300,
      swipeDirection: 'right',
    });
    this.actions = {
      onClose: () => void 0,
    };
    this.send = (actionName, ...args) =>
      this.actions[actionName].apply(this, args);
  });

  test('it renders', async function (assert) {
    assert.expect(9);

    await render(template);

    assert
      .dom('.ember-notifier-notification-base')
      .exists();
    assert
      .dom('.ember-notifier-notification-base')
      .hasClass('is-primary', 'Notification has correct type class');
    assert
      .dom('.ember-notifier-content')
      .exists();
    assert
      .dom('.ember-notifier-icon')
      .exists();
    assert
      .dom('.ember-notifier-title')
      .exists();
    assert
      .dom('.ember-notifier-title')
      .hasText('title', 'Notification has a title');
    assert
      .dom('.ember-notifier-message')
      .exists();
    assert
      .dom('.ember-notifier-message')
      .hasText('message', 'Notification has a message');
    assert
      .dom('.ember-notifier-close')
      .exists();
  });

  test('it renders as block param', async function (assert) {
    assert.expect(7);

    await render(hbs`
      {{#ember-notifier-notification 
        notificationClass="alert" 
        notification=notification 
        close=(action "onClose")}}
        <h5>{{notification.title}}</h5>
        <p>{{notification.message}}</p>
        <button {{action "onClose"}}>Close</button>
      {{/ember-notifier-notification}}
    `);

    assert
      .dom('.ember-notifier-notification-base')
      .exists();
    assert
      .dom('.ember-notifier-notification-base')
      .hasClass('is-primary', 'Notification has correct type class');
    assert
      .dom('h5')
      .exists();
    assert
      .dom('h5')
      .hasText('title', 'Notification has a title');
    assert
      .dom('p')
      .hasText('message', 'Notification has a message');
    assert
      .dom('button')
      .exists();
    assert
      .dom('button')
      .hasText('Close', 'Close button has text');
  });

  test('close action trigger', async function (assert) {
    assert.expect(1);

    let onClose = false;
    this.actions.onClose = () => (onClose = true);

    await render(template);
    await click('.ember-notifier-close-button');

    assert.ok(onClose, 'Close closure action was triggered');
  });

  test('#setOption action modifies the notification properties', async function (assert) {
    assert.expect(1);

    this.owner.register('component:message-component', Component.extend({
      layout: hbs`<button id="update-type" {{action setOption "type" "is-info"}}>Update Type</button>`
    }));

    this.set('notification', EmberObject.create({
      type: 'is-primary',
      contentComponent: 'message-component',
    }));
    this.set('close', () => {
    });

    await render(hbs`{{ember-notifier-notification notification=notification close=(action close)}}`);
    await click('#update-type');

    assert.equal(this.get('notification.type'), 'is-info');
  });

  test('swipe right to close notification', async function (assert) {
    assert.expect(1);

    this.set('notification', EmberObject.create({
      title: 'header',
      message: 'msg',
      type: 'is-primary',
      duration: 0,
      animationTimeout: 0,
      maxSwipeTime: 50,
      minSwipeDistance: 150,
      swipeDirection: 'right',
    }));

    this.set('close', () => {
      console.debug('wtf');
      assert.ok(true, 'Notification closed');
    });

    await render(hbs`{{ember-notifier-notification notification=notification close=(action close)}}`);
    await triggerSwipeEvent(find('.ember-notifier-notification-base'), 'right');
  });
});
