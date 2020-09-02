import './main.css';
import img from './giphy.gif';
import {
  boardDisplay, cells, playerName, form, message, replayBtn, image, giphy,
// eslint-disable-next-line import/extensions
} from './dom.js';

let turn = true;
let playersArr = [];

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
  replayBtn.classList.add('show');
  image.classList.add('hide');
};

const endGame = (player) => {
  const msg = `${player} has won this game!`;
  message.innerHTML = msg;
  cells.forEach((cell) => {
    // eslint-disable-next-line no-use-before-define
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

// const switchTurns = () => {
//   turn = !turn;
// };

const gameFlow = (e) => {
  const { index } = e.target.dataset;
  const marker = turn ? 'X' : 'O';
  gameBoard.board[index - 1] = marker;
  updateCell(cells, gameBoard, index);
  switchTurns(turn);
  const win = checkWin(winCombos, marker, gameBoard);

  const player = playersArr.filter(el => el.symbol === marker)[0].name;
  const nextPlayer = playersArr.filter((el) => el.symbol !== marker)[0].name;
  const drawCondition = gameBoard.board.every((ele) => ele !== '');
  if (win) {
    endGame(player);
  } else if ((drawCondition) && (win !== true)) {
    drawGame();
  } else {
    message.innerHTML = `<p>${nextPlayer}, it's your turn:</p>`;
  }
};

const startGame = (e) => {
  e.preventDefault();

  if (playerName.value === '') {
    // eslint-disable-next-line no-alert
    alert('Please type in a name:');
    return;
  }

  playersArr.push(playerName.value);
  form.reset();
  message.innerHTML = '<p>Player two, enter name:</p>';
  if (playersArr.length === 2) {
    message.innerHTML = `<p>${playersArr[0]}, it's your turn:</p>`;
    form.classList.add('hide');
    form.classList.remove('show');
    boardDisplay.classList.remove('hide');
    cells.forEach((cell) => {
      cell.removeEventListener(
        'click',
        gameFlow,
      );
      cell.addEventListener('click', gameFlow, { once: true });
    });
    const playerOne = createPlayer(playersArr[0], 'X');
    playersArr[0] = playerOne;
    const playerTwo = createPlayer(playersArr[1], 'O');
    playersArr[1] = playerTwo;
  }
};

const restartGame = () => {
  replayBtn.classList.remove('show');
  gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.innerHTML = '<p></p>';
  });
  boardDisplay.classList.add('hide');
  form.classList.remove('hide');
  message.innerHTML = '<p>Player one, enter name:</p>';
  playersArr = [];
  turn = true;
  image.classList.add('hide');
};

form.addEventListener('submit', startGame);
replayBtn.addEventListener('click', restartGame);
