/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

export const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

export const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function switchTurns(turn) {
  return turn = !turn;
}

export function createPlayer(name, symbol) {
  return { name, symbol };
}

export function checkWin(winCombos, symbol, gameBoard) {
  for (let i = 0; i < winCombos.length; i += 1) {
    const a = gameBoard.board[winCombos[i][0]];
    const b = gameBoard.board[winCombos[i][1]];
    const c = gameBoard.board[winCombos[i][2]];

    if (a === symbol && b === symbol && c === symbol) {
      return true;
    }
  }
  return false;
}
