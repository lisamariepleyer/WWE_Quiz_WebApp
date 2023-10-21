export function renderFavourites() {
  const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

  const existingTable = document.getElementsByTagName('table');
  if (existingTable.length > 0) {
    existingTable[0].remove();
  }

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-bordered');

  favourites.forEach((fav: { question: string | null; answer: string | null }, index: number) => {
    const row = table.insertRow();
    const questionCell = row.insertCell(0);
    const answerCell = row.insertCell(1);
    const removeCell = row.insertCell(2);

    if (fav.question !== null) {
      questionCell.innerHTML = fav.question;
    }
    if (fav.answer !== null) {
      answerCell.innerHTML = fav.answer;
    }

    const removeButton = document.createElement('removebutton');
    removeButton.textContent = '🗑️';
    removeButton.addEventListener('click', () => removeFavourite(index));
    removeCell.appendChild(removeButton);
  });

  document.body.appendChild(table);
}

export function handleAddToFavorites(question: string, correctAnswer: string) {
  const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  favourites.push({ question: question, answer: correctAnswer });
  localStorage.setItem('favourites', JSON.stringify(favourites));
}

export function removeFavourite(index: number) {
  const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  favourites.splice(index, 1);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  renderFavourites();
}
