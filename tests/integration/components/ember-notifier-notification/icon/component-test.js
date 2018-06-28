import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-notifier-notification/icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(4);

    await render(hbs`{{ember-notifier-notification/icon icon="fa-bell"}}`);

    assert.dom('.ember-notifier-icon').exists();
    assert.dom('.fa-bell').exists();

    await render(hbs`
      {{#ember-notifier-notification/icon}}
        <i class="fa-bell"></i>
      {{/ember-notifier-notification/icon}}
    `);

    assert.dom('.ember-notifier-icon').exists();
    assert.dom('.fa-bell').exists();
  });
});
