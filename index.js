'use strict';

// Returns true for a valid board
function isValid(board) {
  // Check for valid input
  if (!Array.isArray(board)) {
    throw 'Input must be an array or string';
    return false;
  }

  // Check board length
  if (board.length !== 81) {
    throw 'Invalid board size';
    return false;
  }

  return true;
};

// Returns a deep copy of a board
function copy(board) {
  let ret = [];
  for (let i = 0; i < board.length; i++) {
    ret.push(board[i]);
  }
  return ret;
}

module.exports = (board) => {
  const checkLength = 9; // Number of elements in a row/col/3x3
  
  // Turn string input into an array
  if (typeof board === 'string')
    board = board.split('');
  
  // Validate board
  if (!isValid(board)) {
    return false;
  }
  
  let puzzle = {board:copy(board), solved:false};
  solve(0, puzzle);
  return puzzle.board;

};