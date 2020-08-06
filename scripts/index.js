import {
  boardDisplay, cells, playerName, form, message,
// eslint-disable-next-line import/extensions
} from './dom.js';

const playerOneSym = 'X';
const playerTwoSym = 'O';
const playersArr = [];
const playersObj = [];
const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createPlayer = (name, symbol) => ({ name, symbol });

const drawGame = () => {
  const msg = 'This game is a draw!';
  message.innerHTML = msg;
};

const endGame = (player) => {
  const msg = `${player} has won this game!`;
  message.innerHTML = msg;
};

const render = (cells, gameBoard, index) => {
  // eslint-disable-next-line radix
  cells[parseInt(index) - 1].innerHTML = `<p>${gameBoard.board[index - 1]}</p>`;
};

const checkWin = (winCombos, symbol, gameBoard) => {
  for (let i = 0; i < winCombos.length; i += 1) {
    const a = gameBoard.board[winCombos[i][0]];
    const b = gameBoard.board[winCombos[i][1]];
    const c = gameBoard.board[winCombos[i][2]];

    if (a === symbol && b === symbol && c === symbol) {
      return true;
    }
  }
  return false;
};

const gameFlow = (gameBoard, event, winCombos, playersObj) => {
  const { index } = event.target.dataset;
  const gameArr = gameBoard.board;
  const countX = gameArr.filter((element) => element === 'X').length;
  const countO = gameArr.filter((element) => element === 'O').length;
  const marker = countX > countO ? 'O' : 'X';
  gameArr[index - 1] = marker;
  render(cells, gameBoard, index);
  const win = checkWin(winCombos, marker, gameBoard);

  const player = playersObj.filter(el => el.symbol === marker)[0].name;
  const nextPlayer = playersObj.filter((el) => el.symbol !== marker)[0].name;

  if (win) {
    endGame(player);
  } else if (gameArr.every((ele) => ele !== '') && win !== true) {
    drawGame();
  } else {
    message.innerHTML = `<p>${nextPlayer}, it's your turn...</p>`;
  }
};

const startGame = (e) => {
  e.preventDefault();
  playersArr.push(playerName.value);
  form.reset();
  message.innerHTML = '<p>Player two, enter name...</p>';
  if (playersArr.length === 2) {
    message.innerHTML = `<p>${playersArr[0]}, it's your turn...</p>`;
    form.classList.add('hide');
    boardDisplay.classList.remove('hide');
    const playerOne = createPlayer(playersArr[0], playerOneSym);
    const playerTwo = createPlayer(playersArr[1], playerTwoSym);
    playersObj.push(playerOne);
    playersObj.push(playerTwo);
  }
};

[].forEach.call(cells, (e) => {
  e.addEventListener('click', (e) => {
    gameFlow(
      gameBoard,
      e,
      winCombos,
      playersObj,
    );
  }, { once: true });
});

form.addEventListener('submit', (e) => startGame(e));
