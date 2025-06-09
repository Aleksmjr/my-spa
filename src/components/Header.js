// components 	Переиспользуемые штуки — например, заголовок, кнопка и т.п.

// Компонент шапки с навигацией
export function Header() {
  const nav = document.createElement('nav');

  // Важный момент: onclick вызывает navigateTo, чтобы не было перезагрузки
  nav.innerHTML = `
    <a href="/" onclick="event.preventDefault(); navigateTo('/')">Главная</a> |
    <a href="/about" onclick="event.preventDefault(); navigateTo('/about')">О нас</a>
  `;

  return nav;
}
