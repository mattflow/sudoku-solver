'use strict';

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

module.exports = (board) => {
  const checkLength = 9; // Number of elements in a row/col/3x3
  
  // Turn string input into an array
  if (typeof board === 'string')
    board = board.split('');
  
  // Validate board
  if (!isValid(board)) {
    return false;
  }
  

};