import EmberRouter from '@ember/routing/router';
import config from 'ember-web-news/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('news-list', { path: '/' });
  this.route('article', { path: '/article/:id' });
});
