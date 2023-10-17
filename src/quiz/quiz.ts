import './styles.scss';
import { fetchQuestion } from '../shared/fetchQuestion';
import { insertMenuBar } from "../shared/menubar.ts";

function renderQuestion(question: string) {
    const questionElement = document.createElement('p');
    questionElement.innerHTML = question;
    document.body.appendChild(questionElement);
}

function renderAnswerButtons(answers: string[], correctAnswer: string) {
    const answersContainer = document.createElement('div');
    document.body.appendChild(answersContainer);

    answers.forEach(answer => {

        const answerButton = document.createElement('quizbutton');
        answerButton.innerHTML = answer;
        answerButton.onclick = () => {

            answerButton.classList.remove('correct-answer', 'incorrect-answer');

            if (answer === correctAnswer) {
                answerButton.classList.add('correct-answer');
                handleCorrectAnswer();
            } else {
                answerButton.classList.add('incorrect-answer');
                setTimeout(() => {
                    answerButton.classList.remove('incorrect-answer');
                }, 3000);
            }
        };
        answersContainer.appendChild(answerButton);
    });
}

function handleCorrectAnswer() {
    const resolveQuestionContainer = document.createElement('div');
    document.body.appendChild(resolveQuestionContainer);

    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.innerHTML = 'Next Question';
    nextQuestionButton.onclick = () => { window.location.reload(); }
    resolveQuestionContainer.appendChild(nextQuestionButton);
}

function init() {
    insertMenuBar();

    fetchQuestion(({ question, correctAnswer, answers }) => {
        renderQuestion(question);
        renderAnswerButtons(answers, correctAnswer);
    });
}

init();
