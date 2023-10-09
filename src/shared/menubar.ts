document.addEventListener("DOMContentLoaded", function() {
  const menu = `
    <div>
      <a href="/">
        <button href>Home</button>
      </a>
      <a href="/src/quiz/">
        <button>Quiz</button>
      </a>
      <a href="/src/account/">
        <button>Account</button>
      </a>
    </div>
  `;
  
    document.body.insertAdjacentHTML('afterbegin', menu);
});