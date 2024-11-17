import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | news-list', function (hooks) {
  setupTest(hooks);

  test('it updates search query', function (assert) {
    const controller = this.owner.lookup('controller:news-list');
    const searchQuery = 'test query';
    controller.updateSearchQuery(searchQuery);
    assert.equal(
      controller.get('searchQuery'),
      searchQuery,
      'search query is updated',
    );
  });

  test('it sorts articles by category', function (assert) {
    const controller = this.owner.lookup('controller:news-list');
    const articles = [
      { source: { name: 'Category A' } },
      { source: { name: 'Category B' } },
      { source: { name: 'Category A' } },
    ];
    controller.set('model', articles);
    const mockEvent = { target: { value: 'category' } };
    controller.updateSortList(mockEvent);
    const sortedArticles = controller.get('model');
    assert.deepEqual(
      sortedArticles,
      [
        { source: { name: 'Category A' } },
        { source: { name: 'Category A' } },
        { source: { name: 'Category B' } },
      ],
      'articles are sorted by category',
    );
  });
});
