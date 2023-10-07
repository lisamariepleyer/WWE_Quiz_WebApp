console.log("This is the quiz page.");

import { fetchQuestion } from '../shared/fetchQuestion';

function init() {
    fetchQuestion(({ question, correctAnswer, answers }) => {
        // Create the question element
        const questionElement = document.createElement('p');
        questionElement.innerHTML = question;
        document.body.appendChild(questionElement);

        // Create answer buttons
        answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = answer;
            answerButton.onclick = () => {
                if (answer === correctAnswer) {
                    alert('Correct!');
                } else {
                    alert('Incorrect. Try again.');
                }
            };
            document.body.appendChild(answerButton);
        });
    });
}

init();
