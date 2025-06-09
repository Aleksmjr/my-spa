// views 	Каждая страница как отдельный JS-файл, возвращает DOM-элемент

// Страница "О нас"
export function AboutView() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>О нас</h2>
    <p>Здесь можно написать информацию о проекте или команде.</p>
  `;
  return div;
}
