export function fetchQuestion(callback: (data: { question: string, correctAnswer: string, answers: string[] }) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://opentdb.com/api.php?amount=1&type=multiple', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const questionData = data.results[0];
            const answers = [...questionData.incorrect_answers, questionData.correct_answer];

            answers.sort(() => Math.random() - 0.5);
            callback({
                question: questionData.question,
                correctAnswer: questionData.correct_answer,
                answers: answers
            });
        }
    };
    xhr.send();
}