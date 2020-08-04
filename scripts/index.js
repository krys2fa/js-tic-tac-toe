import { boardDisplay, cells, playerName, playerSym, form } from './dom.js';

let gameBoard = {
   board: ['', '', '', '', '', '', '', '', '']
}

console.log(gameBoard.board);
// // let gameBoard = (() => {
// //   let board = ['_', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
// //   return { board };
// // })();


 const gameStart = () => {
   
 }

const updateCell = ( gameBoard ) => {
  const {index} = event.target.dataset
  let gameArr = gameBoard;
  const playerInput = index;
  console.log(event.target.dataset);
  gameArr[index-1] = 'O'
  render(cells, gameBoard, index);
}


let player = (name, symbol) => {
  return { name, symbol };
};


let createPlayer = (name, symbol) => {
const playerOne =  player(name.value, symbol);
// const playerTwo =  player(name.value, 'O')
}

let gameFlow = () => {
  alert('Player One enter your name:');
  createPlayer(playerName, 'X');
  alert('Player Two enter your name:');
  createPlayer(playerName, 'O');


  gameBoard.board.forEach (element => {
    if(element !== ''){
      
    }
  })


  // players take turn
  // player input array
  // wins combos
  // 
};

gameFlow();

const render = (cells, gameBoard, index) => {

  cells[parseInt(index)-1].innerHTML = gameBoard.board[index-1]
 
};

// // console.log(gameBoard);
// // console.log(gameBoard.game());




[].forEach.call(cells,function(e){e.addEventListener('click',()=>{updateCell(gameBoard)} , false)}) 
form.addEventListener('submit', createPlayer);
