// Основная обёртка, туда вставляется страница

// Импортируем логику роутинга
import { router } from './router.js';

// Импортируем компонент меню
import { Header } from './components/Header.js';

// Функция собирает приложение: вставляет меню и нужную страницу в корневой div
export function renderApp(root) {
  root.innerHTML = ''; // очищаем содержимое

  const header = Header(); // создаём шапку (меню)
  const view = router(); // выбираем страницу, которую нужно показать

  root.appendChild(header);
  root.appendChild(view);
}
