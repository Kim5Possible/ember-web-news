import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Unit | Component | article-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders article data', async function (assert) {
    await render(hbs`{{article-card}}`);
    assert.ok(this.element, 'component is rendered');
  });
});
