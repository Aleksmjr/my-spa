//Определяет, какую страницу показывать (по window.location)

// Импортируем компоненты-страницы
import { HomeView } from './views/HomeView.js';
import { ContactView } from './views/ContactView.js';
import { AboutView } from './views/AboutView.js';
import { Post } from './views/Post.js';

// Возвращает компонент для текущего URL
export function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/about':
      return AboutView();
    case '/contacts':
      return ContactView();
    case '/posts':
      return Post();
    case '/':
    default:
      return HomeView();
  }
}
