import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class NewsListController extends Controller {
  @tracked searchQuery = '';

  @computed('searchQuery', 'model.[]')
  get filteredArticles() {
    const query = this.searchQuery.toLowerCase();
    return this.model.filter((article) => {
      const title = article.title.toLowerCase();
      const description = article.description?.toLowerCase();
      const category = article.source.name.toLowerCase();
      const content = article.content.toLowerCase();
      return (
        title.includes(query) ||
        content.includes(query) ||
        description?.includes(query) ||
        category.includes(query)
      );
    });
  }

  updateSearchQuery = (searchQuery) => {
    this.searchQuery = searchQuery;
  };
  updateSortList = (event) => {
    let selectedOption = event.target.value;
    let sortedArticles = [...this.model];

    if (selectedOption === 'category') {
      sortedArticles.sort((a, b) => a.source.name.localeCompare(b.source.name));
    } else if (selectedOption === 'date') {
      sortedArticles.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
    } else if (selectedOption === 'author') {
      sortedArticles.sort((a, b) => a.author.localeCompare(b.author));
    }

    this.set('model', sortedArticles);
  };
}
