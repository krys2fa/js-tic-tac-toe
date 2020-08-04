import { boardDisplay, cells, playerName, playerSym } from './dom.js';

let gameBoard = {
   board: ['_', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
}

console.log(gameBoard.board);
// // let gameBoard = (() => {
// //   let board = ['_', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
// //   return { board };
// // })();


// const gameStart = () => {

// }

const updateCell = ( gameBoard ) => {
  // TODO: check whether cell is populated
  const {index} = event.target.dataset
  console.log(index);
  let gameArr = gameBoard;
  const playerInput = index;
  
  gameArr[index-1] = 'O'
  console.log(gameArr);
  
}


// let player = (name, symbol) => {
//   return { name, symbol };
// };

// const playerOne =  player(playerName.value, 'X')
// const playerTwo =  player(playerName.value, 'O')

// let gameFlow = () => {

// };

// const render = (game) => {
//   game.map((gameValue, index) => {
//     // if cell.index = game.index print symbol
//     // const cell = document.createElement('div');
//     // const newContent = document.createTextNode(gameValue);
//     // cell.classList.add('cell', `cell${index+1}`);
//     // cell.appendChild(newContent);
//     // // document.body.insertBefore(cell, rightDiv);
//     // boardDisplay.appendChild(cell);
//   });
//   // boardDisplay.innerHTML = `${game}`;
//   return game;
// };

// // console.log(gameBoard);
// // console.log(gameBoard.game());

// render(gameBoard.board);


[].forEach.call(cells,function(e){e.addEventListener('click',()=>{updateCell(gameBoard)} , false)}) 
// cells[0].addEventListener('click', updateCell);
