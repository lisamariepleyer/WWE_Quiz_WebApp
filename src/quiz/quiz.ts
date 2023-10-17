console.log("This is the quiz page.");

import './styles.scss';
import { fetchQuestion } from '../shared/fetchQuestion';
import { insertMenuBar } from "../shared/menubar.ts";

insertMenuBar();

function init() {
    fetchQuestion(({ question, correctAnswer, answers }) => {

        const questionElement = document.createElement('p');
        questionElement.innerHTML = question;
        document.body.appendChild(questionElement);

        answers.forEach(answer => {

            const answerButton = document.createElement('quizbutton');
            answerButton.innerHTML = answer;
            answerButton.onclick = () => {

                answerButton.classList.remove('correct-answer', 'incorrect-answer');

                if (answer === correctAnswer) {
                    answerButton.classList.add('correct-answer');
                } else {
                    answerButton.classList.add('incorrect-answer');
                    setTimeout(() => {
                        answerButton.classList.remove('incorrect-answer');
                    }, 3000);
                }
            };
            
            document.body.appendChild(answerButton);
        });
    });
}

init();
