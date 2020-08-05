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

const render = (cells, gameBoard, index) => {
  // eslint-disable-next-line radix
  cells[parseInt(index) - 1].innerHTML = gameBoard.board[index - 1];
};

const updateCell = (gameBoard, event, currentPlayer, playerOne, playerTwo) => {
  const { index } = event.target.dataset;
  const gameArr = gameBoard.board;
  console.log(event.target.dataset);
  console.log(currentPlayer);
  gameArr[index - 1] = currentPlayer.symbol;
  render(cells, gameBoard, index);
  currentPlayer = swapTurns(currentPlayer, playerOne, playerTwo);
  console.log(currentPlayer);
};

const createPlayer = (name, symbol) => ({ name, symbol });

const swapTurns = (currentPlayer, playerOne, playerTwo) => {
  currentPlayer = currentPlayer === playerTwo ? playerOne : playerTwo;
  return currentPlayer;
  // console.log(currentPlayer);
};

const gameFlow = (playersArr) => {
  // alert('Player One enter your name:');
  console.log(playersArr);
  const playerOne = createPlayer(playersArr[0], playerOneSym);
  const playerTwo = createPlayer(playersArr[1], playerTwoSym);
  // alert('Player Two enter your name:');
  // console.log(playerOne);
  // console.log(playerTwo);

  window.currentPlayer = playerOne;
  // console.log(currentPlayer);

  // console.log(currentPlayer);
  // currentPlayer = swapTurns(currentPlayer, playerOne, playerTwo);
  // console.log(currentPlayer);
  [].forEach.call(cells, (e) => { e.addEventListener('click', (e) => { updateCell(gameBoard, e, window.currentPlayer, playerOne, playerTwo); }, { once: true }); });
  // const currentTurn = currentPlayer === playerOne ? playerOne.symbol : playerTwo.symbol;




  // gameBoard.board.forEach(element => {
  //   if (element !== '') {

  //   }
  // });


  // players take turn
  // player input array
  // wins combos
  //
};

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

// const handleClick = (e) => {



//   updateCell(gameBoard, event, currentPlayer);
// }


// [].forEach.call(cells, (e) => { e.addEventListener('click', (e) => { updateCell(gameBoard, e); }, { once: true }); });


form.addEventListener('submit', (e) => startGame(e));
