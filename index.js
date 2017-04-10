'use strict';

var checkLength = 9; // Number of elements in a row/col/3x3
  
// Throws error if board is invalid
function validate(board) {
  // Check for valid input
  if (!Array.isArray(board)) {
    throw 'Input must be an array or string';
  }

  // Check board length
  if (board.length !== 81) {
    throw 'Invalid board size';
  }
  
};

// Returns a deep copy of a board
function copy(board) {
  var copy = [];
  var emptyBoxes = 0;
  for (var i = 0; i < board.length; i++) {
    copy.push(Number(board[i]));
    if (copy[i] === 0)
      emptyBoxes++;
    if (emptyBoxes > 64)
      throw 'A board must have at least 17 hints';
  }
  return copy;
}

// Recursive function that accepts a unsolved puzzle and
// an index and returns a solved puzzle
function solve(index, puzzle) {
  if (index >= 81) {
    puzzle.solved = true;
  }
  else if (puzzle.board[index] != 0) {
    solve(index + 1, puzzle);
  }
  else {
    for (var number = 1; number <= 9; number++) {
      if (check(index, number, puzzle.board)) {
        puzzle.board[index] = number;
        solve(index + 1, puzzle);
        if (puzzle.solved) {
          return;
        }
      }
    }
    puzzle.board[index] = 0;
  }
}

// Takes an index, number, and the board and
// returns if the number is valid at that
// location in the board
function check(index, number, board) {
  return checkRow(index, number, board) &&
         checkCol(index, number, board) &&
         check3x3(index, number, board);
}

// Takes an index, number, and the board and
// returns if the number is valid in that index's
// row
function checkRow(index, number, board) {
  var start = Math.floor(index / 9) * 9;
  for (var i = 0; i < checkLength; i++) {
    if (board[start + i] == number)
      return false;
  }
  return true;
}

// Takes an index, number, and the board and
// returns if the number is valid in that index's
// column
function checkCol(index, number, board) {
  var start = index % 9;
  for (var i = 0; i < checkLength; i++) {
    if (board[start + i * 9] == number)
      return false;
  }
  return true;
}

// Takes an index, number, and the board and
// returns if the number is valid in that index's
// 3x3 box
function check3x3(index, number, board) {
  var start = (index - ((index % 9) % 3) - (9 * (Math.floor(index / 9) % 3)));
  for (var i = 0; i < checkLength; i++) {
    if (board[start + (9 * Math.floor(i / 3)) + i % 3] == number)
      return false;
  }
  return true;
}

module.exports = (board) => {
  // Turn string input into an array
  if (typeof board === 'string')
    board = board.split('');
  
  // Validate board
  validate(board);
  
  var puzzle = {board:copy(board), solved:false};
  solve(0, puzzle);
  return puzzle.board.join('');

};
