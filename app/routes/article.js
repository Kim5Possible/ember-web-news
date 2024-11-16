import Route from '@ember/routing/route';

export default class ArticleRoute extends Route {
  model(params) {
    return fetch('/api/articles.json')
      .then((response) => response.json())
      .then((data) => {
        const article = data.articles.find(
          (article) => Number(article.source.id) === Number(params.id),
        );
        return article;
      });
  }

  constructor() {
    super(...arguments);
    const body = document.querySelector('body');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
