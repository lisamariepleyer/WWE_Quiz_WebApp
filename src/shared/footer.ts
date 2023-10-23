export function insertFooter() {
  const footer = `
    <div>
      <div style="position: absolute; bottom: 5px;">
        <h6>API from <a target="_blank" href="https://opentdb.com">Open Trivia Database</a> maintained by <a target="_blank" href="http://www.pixeltailgames.com/">PIXELTAIL GAMES LLC</a>.</h6>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', footer);
}