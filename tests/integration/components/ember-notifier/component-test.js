import Component from '@ember/component';
import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

function setupService(hooks) {
  hooks.afterEach(function (/* assert */) {
    this.owner.lookup('service:notifier').empty();
  });
}

module('Integration | Component | ember-notifier', function (hooks) {
  setupRenderingTest(hooks);
  setupService(hooks);

  test('it renders', async function (assert) {
    assert.expect(3);

    await render(hbs`{{ember-notifier}}`);

    assert.dom('.ember-notifier').exists();
    assert.dom('.ember-notifier').hasClass('is-top');

    await render(hbs`{{ember-notifier position="is-bottom"}}`);

    assert.dom('.ember-notifier').hasClass('is-bottom');
  });

  test('it renders a notification', async function (assert) {
    assert.expect(5);

    const service = this.owner.lookup('service:notifier');
    service.add({ title: 'header', message: 'msg', duration: 0 });

    await render(hbs`{{ember-notifier}}`);

    assert.dom('.ember-notifier-notification').exists();
    assert.dom('.ember-notifier-notification-base').exists();
    assert.dom('.ember-notifier-content').exists();
    assert.dom('.ember-notifier-title').hasText('header');
    assert.dom('.ember-notifier-message').hasText('msg');
  });

  test('it renders a notification with custom class', async function (assert) {
    assert.expect(2);

    const service = this.owner.lookup('service:notifier');
    service.add({ title: 'header', message: 'msg', duration: 0 });

    await render(hbs`{{ember-notifier notificationClass="alert"}}`);

    assert.dom('.alert').exists();
    assert.dom('.ember-notifier-notification-base').exists();
  });

  test('a custom component can use the close closure action', async function (assert) {
    assert.expect(2);

    const service = this.owner.lookup('service:notifier');
    service.add({ title: 'header', message: 'msg', duration: 0 });

    await render(hbs`
      {{#ember-notifier as |notification close|}}
        <h5>{{notification.title}}</h5>
        <p>{{notification.message}}</p>
        <button {{action close}}>Close</button>
      {{/ember-notifier}}
    `);
    await click('button');

    assert.dom('.ember-notifier-notification').exists({ count: 0 });
    assert.equal(service.get('notifications.length'), 0, 'Notification was removed by button click.');
  });

  test('a custom component for icon, message, and close can be used', async function (assert) {
    assert.expect(7);

    this.owner.register('component:icon-component', Component.extend({
      layout: hbs`<div class="icon-component">{{icon}}</div>`
    }));
    this.owner.register('component:message-component', Component.extend({
      layout: hbs`<div class="message-component">{{title}} - {{message}}</div>`
    }));
    this.owner.register('component:close-component', Component.extend({
      layout: hbs`<button class="close-component" {{action close}}>Close</button>`
    }));

    const service = this.owner.lookup('service:notifier');
    service.add({ title: 'header', message: 'msg', icon: 'bell', duration: 0 });

    await render(hbs`
      {{ember-notifier 
        iconComponent="icon-component"
        contentComponent="message-component"
        closeComponent="close-component"}}
    `);

    assert.dom('.icon-component').exists();
    assert.dom('.icon-component').hasText('bell');
    assert.dom('.message-component').exists();
    assert.dom('.message-component').hasText('header - msg');
    assert.dom('.close-component').exists();

    await click('.close-component');

    assert.dom('.ember-notifier-notification').exists({ count: 0 });
    assert.equal(service.get('notifications.length'), 0, 'Notification was removed by button click.');
  });
});
