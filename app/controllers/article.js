import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ArticleController extends Controller {
  @tracked copiedLink = null;

  copyLink = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        this.copiedLink = url;

        setTimeout(() => {
          this.copiedLink = null;
        }, 2000);
      })
      .catch((err) => {
        alert('Failed to copy the text: ' + err);
      });
  };
}
