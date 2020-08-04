import { boardDisplay } from './dom.js';

const gameBoard = (() => {
  const game = () => ['X', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  return { game };
})();

let player = (name, symbol) => {
  return { name, symbol };
};

let gameFlow = () => {

};

const render = (game) => {
  game.map((gameValue, index) => {

    const cell = document.createElement('div');
    const newContent = document.createTextNode(gameValue);
    cell.classList.add('cell', `cell${index+1}`);
    cell.appendChild(newContent);
    // document.body.insertBefore(cell, rightDiv);
    boardDisplay.appendChild(cell);
  });
  // boardDisplay.innerHTML = `${game}`;
  return game;
};

// console.log(gameBoard);
// console.log(gameBoard.game());

render(gameBoard.game());
