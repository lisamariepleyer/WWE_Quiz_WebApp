import './style.scss'
import { insertMenuBar } from "./shared/menubar.ts";

insertMenuBar();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>This is a project for the course "Web Engineering" at FH Campus Wien.</p>

    <a href="src/quiz/">
      <darkbutton>Quiz</darkbutton>
    </a>
  </div>
`