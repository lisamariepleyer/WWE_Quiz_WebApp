import './styles.scss';
import { insertMenuBar } from "../shared/menubar.ts";

function renderFavourites() {
  const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

  const existingTable = document.getElementsByTagName('table');
  if (existingTable.length > 0) {
    existingTable[0].remove();
  }

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-bordered');

  favourites.forEach((fav: { question: string | null; answer: string | null }) => {
    const row = table.insertRow();
    const questionCell = row.insertCell(0);
    const answerCell = row.insertCell(1);
    if (fav.question !== null) {
      questionCell.innerHTML = fav.question;
    }
    if (fav.answer !== null) {
      answerCell.innerHTML = fav.answer;
    }
  });

  document.body.appendChild(table);
}

function handleUserDataInput() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm') as HTMLFormElement;

    form.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateInputs()) {
        renderFavourites();
      }
    });

    form.addEventListener('input', validateInputs);
  });
}

function validateInputs(): boolean {
  const inputs = document.querySelectorAll('input[required]') as NodeListOf<HTMLInputElement>;
  let allValid = true;

  inputs.forEach(input => {
    const errorMessage = input.parentElement?.querySelector('.error-message') as HTMLElement;

    if (input.validity.valid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
      errorMessage.style.display = 'none';
    } else {
      allValid = false;
      input.classList.add('invalid');
      input.classList.remove('valid');
      errorMessage.textContent = input.validationMessage;
      errorMessage.style.display = 'block';
    }
  });

  return allValid;
}

function init() {
  insertMenuBar();
  handleUserDataInput();
}

init();