import './style.scss'
import { insertMenuBar } from './shared/menubar';

insertMenuBar();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Quiz Web App</h1>

    <p>This is a project for the course "Web Engineering" at FH Campus Wien.</p>

    <a href="src/quiz/">
      <darkbutton>Quiz</darkbutton>
    </a>
  </div>
`