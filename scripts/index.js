import {
  boardDisplay, cells, playerName, form, message,
// eslint-disable-next-line import/extensions
} from './dom.js';

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

const playerOneSym = 'X';
const playerTwoSym = 'O';
const playersArr = [];


const render = (cells, gameBoard, index) => {
  // eslint-disable-next-line radix
  cells[parseInt(index) - 1].innerHTML = `<p>${gameBoard.board[index - 1]}</p>`;
};

const updateCell = (gameBoard, event, winCombos ) => {
  const { index } = event.target.dataset;
  const gameArr = gameBoard.board;
  // console.log(event.target.dataset);
  const countX = gameArr.filter(element => element == 'X').length;
  const countO = gameArr.filter(element => element == 'O').length;
  // console.log(countO);
  const symbol = countX > countO ? 'O' : 'X';
  gameArr[index - 1] = symbol;
  render(cells, gameBoard, index);
  // console.log(gameArr);
  const win = checkWin(winCombos, symbol, gameBoard);

  if (win) {
    endGame(player);
  } else if ((gameArr.every(ele => ele !== '')) && (win !== true)) {
    drawGame();
  }else{
    continue;
  }
  // console.log(win);

};

const drawGame = () => {
  const msg = 'This game is a draw!';
  message.innerHTML = msg;
};

const endGame = (player) => {
  const msg = `${player.name} has won this game!`;
  message.innerHTML = msg;
}

const createPlayer = (name, symbol) => ({ name, symbol });


const gameFlow = (playersArr) => {
  // console.log(playersArr);
  const playerOne = createPlayer(playersArr[0], playerOneSym);
  const playerTwo = createPlayer(playersArr[1], playerTwoSym);
  // [].forEach.call(cells, (e) => { e.addEventListener('click', (e) => { updateCell(gameBoard, e); }, { once: true }); });
};

const startGame = (e) => {
  e.preventDefault();
  playersArr.push(playerName.value);
  if (playersArr.length === 2) {
    gameFlow(playersArr);
  }
  form.reset();
};

// const checkWin = (currentSymbol, cells, winCombos) => {
//   return winCombos.some(combination => {
//     console.log(combination);
//     return combination.every(index => {
//       console.log(index);
//       console.log(cells[index]);
//       return cells[index].contains(p);
//     });
//   });
// };

const checkWin = (winCombos, symbol, gameBoard) => {
  console.log(winCombos);
  for (let i = 0; i < winCombos.length; i += 1) {
    console.log(winCombos[i]);
    // console.log(symbol);
    const index = (winCombos[i][0]);
    console.log(`Result: ${index}`)
    console.log(`Result: ${gameBoard.board[index]}`)

    const a = gameBoard.board[(winCombos[i][0])];
    const b = gameBoard.board[(winCombos[i][1])];
    const c = gameBoard.board[(winCombos[i][2])];

    if ( (a === symbol) && (b === symbol) && ( c === symbol)) {

      console.log('it works!');
      return true;
    }
    // const result = winCombos[i].every(elem => { gameBoard.board[elem] == symbol });
    // console.log(result);
    // if (result === true) {
    //   return true;
    // }
  }
  // console.log(arr);
  // console.log(arr.every(elem => {elem == symbol}));
};


[].forEach.call(cells, (e) => { e.addEventListener('click', (e) => { updateCell(gameBoard, e, winCombos); }, { once: true }); });


form.addEventListener('submit', (e) => startGame(e));
