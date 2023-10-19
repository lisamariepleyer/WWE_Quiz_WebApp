export function insertMenuBar() {
  const baseUrl = import.meta.env.BASE_URL

  const menu = `
    <div>
      <a href=${baseUrl}>
        <button>Home</button>
      </a>
      <a href="${baseUrl}src/quiz/">
        <button>Quiz</button>
      </a>
      <a href="${baseUrl}src/account/">
        <button>Account</button>
      </a>
      <h1>Quiz Web App</h1>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', menu);
}