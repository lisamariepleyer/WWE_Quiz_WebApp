import '../shared/style.scss';
import { fetchQuestion } from '../shared/fetchQuestion';
import { insertMenuBar } from "../shared/menubar.ts";
import { handleAddToFavorites } from "../shared/favouritesTable.ts";
import { insertFooter } from "../shared/footer.ts";

function renderQuestion(question: string) {
    const questionElement = document.createElement('p');
    questionElement.innerHTML = question;
    document.body.appendChild(questionElement);
}

function renderAnswerButtons(question: string, answers: string[], correctAnswer: string) {
    const answersContainer = document.createElement('div');
    document.body.appendChild(answersContainer);

    answers.forEach(answer => {

        const answerButton = document.createElement('quizbutton');
        answerButton.innerHTML = answer;
        answerButton.onclick = () => {

            answerButton.classList.remove('correct-answer', 'incorrect-answer');

            if (answer === correctAnswer) {
                answerButton.classList.add('correct-answer');
                handleCorrectAnswer(question, correctAnswer);
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

function handleCorrectAnswer(question: string, correctAnswer: string) {
    const resolveQuestionContainer = document.createElement('div');
    document.body.appendChild(resolveQuestionContainer);

    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.innerHTML = 'Next Question';
    nextQuestionButton.onclick = () => { window.location.reload() }
    resolveQuestionContainer.appendChild(nextQuestionButton);

    const addToFavouritesButton = document.createElement('button');
    addToFavouritesButton.innerHTML = 'Add To Favorites';
    addToFavouritesButton.onclick = () => {
        handleAddToFavorites(question, correctAnswer);
        window.location.reload();
    }
    resolveQuestionContainer.appendChild(addToFavouritesButton);
}

function init() {
    insertMenuBar(import.meta.env.BASE_URL);

    fetchQuestion(({ question, correctAnswer, answers }) => {
        renderQuestion(question);
        renderAnswerButtons(question, answers, correctAnswer);
    });

    insertFooter();
}

init();
