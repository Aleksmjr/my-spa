//Загружает и монтирует всё в #root

// Импортируем функцию для рендера всего приложения
import { renderApp } from './app.js';

// Импортируем функцию для навигации без перезагрузки
import { navigateTo } from './utils/dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  renderApp(root);
});

// Чтобы при кликах в меню вызывать navigateTo без перезагрузки,
// делаем её доступной глобально (чтобы можно было вызвать в onClick из html)
window.navigateTo = navigateTo;

// Обрабатываем кнопки назад/вперед браузера
window.addEventListener('popstate', () => {
  const root = document.getElementById('root');
  renderApp(root);
});
