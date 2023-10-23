/**
 * @jest-environment jsdom
 */

import { insertMenuBar } from '../shared/menubar';

describe("Insert Menu Bar", () => {
  test('insertMenuBar should insert the menu bar with expected buttons', () => {
    document.body.innerHTML = ''; // Clear the body
    insertMenuBar("/");

    const buttons = document.querySelectorAll('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].textContent).toBe('Home');
    expect(buttons[1].textContent).toBe('Quiz');
    expect(buttons[2].textContent).toBe('Account');
  });
})
