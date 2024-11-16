import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class NewsListRoute extends Route {
  model() {
    return fetch('/api/articles.json')
      .then((response) => response.json())
      .then((data) => data.articles);
  }
}
