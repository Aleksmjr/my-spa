//Определяет, какую страницу показывать (по window.location)

// Импортируем компоненты-страницы
import { HomeView } from './views/HomeView.js';
import { AboutView } from './views/AboutView.js';

// Возвращает компонент для текущего URL
export function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/about':
      return AboutView();
    case '/':
    default:
      return HomeView();
  }
}
