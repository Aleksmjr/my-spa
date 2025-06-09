export function Post() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Последние посты</h2>
    <p>Некий текст</p>
  `;
  return div;
}
