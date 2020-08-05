import {
  boardDisplay, cells, playerName, form,
// eslint-disable-next-line import/extensions
} from './dom.js';

const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const playerOneSym = 'X';
const playerTwoSym = 'O';
const playersArr = [];

// console.log(gameBoard.board);
// // let gameBoard = (() => {
// //   let board = ['_', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
// //   return { board };
// // })();


const gameStart = () => {};

const updateCell = (gameBoard) => {
  const { index } = event.target.dataset;
  const gameArr = gameBoard;
  const playerInput = index;
  console.log(event.target.dataset);
  gameArr[index - 1] = 'O';
  render(cells, gameBoard, index);
};


// const player = (name, symbol) => ({ name, symbol });


const createPlayer = (name, symbol) => {
  return { name, symbol };
};

const gameFlow = (playersArr) => {
  // alert('Player One enter your name:');
  console.log(playersArr);
  const playerOne = createPlayer(playersArr[0], playerOneSym);
  const playerTwo = createPlayer(playersArr[1], playerTwoSym);
  // alert('Player Two enter your name:');
  // createPlayer(playerName, 'O');
  console.log(playerOne);
  console.log(playerTwo);


  // gameBoard.board.forEach(element => {
  //   if (element !== '') {

  //   }
  // });


  // players take turn
  // player input array
  // wins combos
  //
};

// gameFlow();

const render = (cells, gameBoard, index) => {
  cells[parseInt(index) - 1].innerHTML = gameBoard.board[index - 1];
};

// // console.log(gameBoard);
// // console.log(gameBoard.game());

const startGame = (e) => {
  e.preventDefault();
  // console.log(playerName.value);
  playersArr.push(playerName.value);
  // console.log(playersArr);

  if (playersArr.length === 2) {
    gameFlow(playersArr);
  }
  form.reset();
};


[].forEach.call(cells, (e) => { e.addEventListener('click', () => { updateCell(gameBoard); }, false); });
form.addEventListener('submit', (e) => startGame(e));
