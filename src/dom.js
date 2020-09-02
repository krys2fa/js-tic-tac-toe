/* eslint-disable import/no-cycle */
import img from './giphy.gif';
import { gameFlow } from './index';

const boardDisplay = document.querySelector('.board-display');
const cells = document.querySelectorAll('.cell');
const playerName = document.querySelector('#username');
const form = document.querySelector('.form');
const message = document.querySelector('.message');
const replayBtn = document.querySelector('.replay-btn');
const image = document.querySelector('.image');
const giphy = document.querySelector('.congrats-img');

const drawGame = () => {
  const msg = 'This game is a draw!';
  message.innerHTML = msg;
  replayBtn.classList.add('show');
  image.classList.add('hide');
};

const endGame = (player) => {
  const msg = `${player} has won this game!`;
  message.innerHTML = msg;
  cells.forEach((cell) => {
    cell.removeEventListener('click', gameFlow);
  });
  form.classList.add('hide');
  form.classList.remove('show');
  replayBtn.classList.add('show');
  giphy.src = img;
  image.classList.remove('hide');
};

const updateCell = (cells, gameBoard, index) => {
  // eslint-disable-next-line radix
  cells[parseInt(index) - 1].innerHTML = `<p>${gameBoard.board[index - 1]}</p>`;
};

const resetGameInterface = () => {
  replayBtn.classList.remove('show');

  cells.forEach((cell) => {
    cell.innerHTML = '<p></p>';
  });
  boardDisplay.classList.add('hide');
  form.classList.remove('hide');
  message.innerHTML = '<p>Player one, enter name:</p>';

  image.classList.add('hide');
};

const gameLoading = () => {
  form.classList.add('hide');
  form.classList.remove('show');
  boardDisplay.classList.remove('hide');
  cells.forEach((cell) => {
    cell.removeEventListener('click', gameFlow);
    cell.addEventListener('click', gameFlow, { once: true });
  });
};


export {
  boardDisplay, cells, playerName, form, message, replayBtn,
  image, giphy, drawGame, endGame, updateCell, resetGameInterface,
  gameLoading,
};
