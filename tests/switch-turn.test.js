const switchTurns = require('../src/game-logic.js');

test('players switch turns', () => {
  const turn = true;
  switchTurns(turn);
  expect(turn).toBe(false);
});