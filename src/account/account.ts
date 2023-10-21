import '../shared/style.scss';
import { insertMenuBar } from "../shared/menubar.ts";
import { renderFavourites } from "../shared/favouritesTable.ts";

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