// utils Вспомогательные функции, например createElement, navigateTo

// Функция меняет URL и вызывает событие popstate, чтобы обновить страницу без перезагрузки
export function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
