import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-notifier-notification/close', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(6);

    this.set('closeAction', () => assert.equal(true, true));

    await render(hbs`{{ember-notifier-notification/close close=(action closeAction)}}`);

    assert.dom('.ember-notifier-close').exists();
    assert.dom('.ember-notifier-close').hasText('×');

    await click('.ember-notifier-close-button');

    await render(hbs`
      {{#ember-notifier-notification/close}}
        <span {{action closeAction}}>my button</span>
      {{/ember-notifier-notification/close}}
    `);

    assert.dom('.ember-notifier-close').exists();
    assert.dom('.ember-notifier-close').hasText('my button');

    await click('span');
  });
});
