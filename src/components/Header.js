// components 	Переиспользуемые штуки — например, заголовок, кнопка и т.п.

// Компонент шапки с навигацией
export function Header() {
  const nav = document.createElement('nav');

  // Важный момент: onclick вызывает navigateTo, чтобы не было перезагрузки
  nav.innerHTML = `
    <a class="header-nav" href="/" onclick="event.preventDefault(); navigateTo('/')">Главная</a> 
    <a class="header-nav" href="/about" onclick="event.preventDefault(); navigateTo('/about')">О нас</a>
    <a class="header-nav" href="/contacts" onclick="event.preventDefault(); navigateTo('/contacts')">Контакты</a>
    <a class="header-nav" href="/contacts" onclick="event.preventDefault(); navigateTo('/posts')">Посты</a>
  `;

  return nav;
}
