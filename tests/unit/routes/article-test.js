import { module, test } from 'qunit';
import { setupTest } from 'ember-web-news/tests/helpers';

module('Unit | Route | article', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:article');
    assert.ok(route);
  });

  test('it fetches data', async function (assert) {
    let route = this.owner.lookup('route:article');

    let model = await route.model({ id: 1 });

    assert.ok(model, 'it fetches data');
  });
});
