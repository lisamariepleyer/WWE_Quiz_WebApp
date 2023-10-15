class MenuBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="menu-bar">
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
  }
}

customElements.define('menu-bar', MenuBar);