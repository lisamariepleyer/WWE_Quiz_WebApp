import './styles.scss';
import { insertMenuBar } from "../shared/menubar.ts";

function renderFavourites() {
  const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  const table = document.createElement('table');

  favourites.forEach((fav: { question: string | null; answer: string | null }) => {
    const row = table.insertRow();
    const questionCell = row.insertCell(0);
    const answerCell = row.insertCell(1);
    questionCell.textContent = fav.question;
    answerCell.textContent = fav.answer;
  });

  document.body.appendChild(table);
}

function init() {
  insertMenuBar();
  renderFavourites();
}

init();