// views 	Каждая страница как отдельный JS-файл, возвращает DOM-элемент

// Главная страница — возвращает DOM элемент с контентом
export function HomeView() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Главная страница</h2>
    <p>Добро пожаловать на наш сайт!</p>
  `;
  return div;
}
