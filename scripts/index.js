import {
  boardDisplay, cells, playerName, form, message, replayBtn,
// eslint-disable-next-line import/extensions
} from './dom.js';

const playerOneSym = 'X';
const playerTwoSym = 'O';
let playersArr = [];
let playersObj = [];
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
};

const endGame = (player) => {
  const msg = `${player} has won this game!`;
  message.innerHTML = msg;
  boardDisplay.classList.add('hide');
  form.classList.add('hide');
  form.classList.remove('show');
  replayBtn.classList.add('show');
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

let turn = true;
const switchTurns = () => {
  turn = !turn;
};

const gameFlow = (gameBoard, event, winCombos, playersObj) => {
  const { index } = event.target.dataset;
  // console.log(index);
  console.log(turn);

  const marker = turn ? 'X' : 'O';
    console.log(marker);
    // console.log(turn);
    console.log(gameBoard.board);

  gameBoard.board[index - 1] = marker;
  updateCell(cells, gameBoard, index);
  console.log('after');
   console.log(gameBoard.board);
  switchTurns();
  const win = checkWin(winCombos, marker, gameBoard);

  const player = playersObj.filter(el => el.symbol === marker)[0].name;
  const nextPlayer = playersObj.filter((el) => el.symbol !== marker)[0].name;

  if (win) {
    endGame(player);
  } else if (gameBoard.board.every((ele) => ele !== '') && win !== true) {
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
    form.classList.remove('show');
    boardDisplay.classList.remove('hide');
    [].forEach.call(cells, (e) => {
      e.addEventListener(
        'click',
        (e) => {
          gameFlow(gameBoard, e, winCombos, playersObj);
        },
        { once: true },
      );
    });
    const playerOne = createPlayer(playersArr[0], playerOneSym);
    const playerTwo = createPlayer(playersArr[1], playerTwoSym);
    playersObj.push(playerOne);
    playersObj.push(playerTwo);
    // console.log('start game');
    // console.log(turn);
    // switchTurns();
  }
};

const restartGame = () => {
  replayBtn.classList.remove('show');
  gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.innerHTML = '<p></p>';
  });
  boardDisplay.classList.add('hide');
  form.classList.add('show');
  message.innerHTML = '<p>Player one, enter name...</p>';
  playersArr = [];
  playersObj = [];
  turn = true;
};

form.addEventListener('submit', (e) => startGame(e));
replayBtn.addEventListener('click', restartGame);
