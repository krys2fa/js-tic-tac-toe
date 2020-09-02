const switchTurns = require('../src/index.js');

test('players switch turns', () => {
  const turn = true;
  switchTurns();
  expect(turn).toBe(false);
});