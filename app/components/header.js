import Component from '@glimmer/component';
import { inject } from '@ember/service';

export default class Header extends Component {
  // application = inject('application');

  searchArticles = (event) => {
    const searchQuery = event.target.value;
    this.args.onSearch(searchQuery);
  };
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
  toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    localStorage.setItem(
      'darkMode',
      body.classList.contains('dark').toString(),
    );
  }
}
