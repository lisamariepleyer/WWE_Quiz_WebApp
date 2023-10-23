/**
 * @jest-environment jsdom
 */

import { handleAddToFavorites } from '../shared/favouritesTable.ts';

describe("Add to Favourites", () => {
  test('handleAddToFavorites should add question to favourites in local storage', () => {
    localStorage.clear();
    const question = 'Sample Question';
    const correctAnswer = 'Correct Answer';

    handleAddToFavorites(question, correctAnswer);
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    expect(favourites.length).toBe(1);
    expect(favourites[0].question).toBe(question);
    expect(favourites[0].answer).toBe(correctAnswer);
  });
})