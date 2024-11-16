import { module, test } from 'qunit';
import { setupTest } from 'ember-web-news/tests/helpers';

module('Unit | Route | news-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:news-list');
    assert.ok(route);
  });
});
