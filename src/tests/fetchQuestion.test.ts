import { fetchQuestion } from '../shared/fetchQuestion.ts';

describe("Fetch Quiz tests", () => {
    test("The fetchQuestion function can fetch a question", async () => {

        // simulate XMLHttpRequest() function without actually making a network request
        // eslint-disable-next-line
        (XMLHttpRequest as any) = jest.fn().mockImplementation(() => {
            return {
                open: jest.fn(),
                send: jest.fn(),
                readyState: 4,
                status: 200,
                responseText: JSON.stringify({
                    results: [{
                        question: "Sample Question?",
                        correct_answer: "Correct Answer",
                            incorrect_answers: ["Wrong 1", "Wrong 2", "Correct Answer", "Wrong 3"]
                    }]
                })
            };
        });

        // add tests 
        fetchQuestion((data) => {
            expect(data.question).toBeInstanceOf(String);
            expect(data.answers).toHaveLength(4);
            expect(data.answers.indexOf(data.correctAnswer) > -1);
        });
    });
})