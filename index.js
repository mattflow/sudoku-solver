module.exports = (function() {
  'use-strict';

  var CHUNK_SIZE = 3;
  var ROW_COL_SIZE = CHUNK_SIZE * CHUNK_SIZE;
  var SIZE = ROW_COL_SIZE * ROW_COL_SIZE;

  var MIN_HINTS = 17;

  function checkRow(puzzle, number, index) {
    var start = Math.floor(index / ROW_COL_SIZE) * ROW_COL_SIZE;
    for (var i = 0; i < ROW_COL_SIZE; i += 1) {
      if (puzzle[start + i] === number) {
        return false;
      }
    }
    return true;
  }

  function checkCol(puzzle, number, index) {
    var start = index % ROW_COL_SIZE;
    for (var i = 0; i < ROW_COL_SIZE; i += 1) {
      if (puzzle[start + (i * ROW_COL_SIZE)] === number) {
        return false;
      }
    }
    return true;
  }

  function check3x3(puzzle, number, index) {
    var start = index - ((index % ROW_COL_SIZE) % CHUNK_SIZE) -
      (ROW_COL_SIZE * (Math.floor(index / ROW_COL_SIZE) % CHUNK_SIZE));
    for (var i = 0; i < ROW_COL_SIZE; i += 1) {
      if (
        puzzle[start + (ROW_COL_SIZE * Math.floor(i / CHUNK_SIZE)) + (i % CHUNK_SIZE)] === number
      ) {
        return false;
      }
    }
    return true;
  }

  function check(puzzle, number, index) {
    return checkRow(puzzle, number, index) &&
         checkCol(puzzle, number, index) &&
         check3x3(puzzle, number, index);
  }

  function recursiveSolve(puzzle, index) {
    if (index >= SIZE) {
      return true;
    } else if (puzzle[index] !== 0) {
      return recursiveSolve(puzzle, index + 1);
    }

    for (var number = 1; number <= ROW_COL_SIZE; number += 1) {
      if (check(puzzle, number, index)) {
        puzzle[index] = number;
        if (recursiveSolve(puzzle, index + 1)) {
          return true;
        }
      }
    }
    puzzle[index] = 0;
    return false;
  }

  function solve(puzzle) {
    if (typeof puzzle === 'string') {
      puzzle = puzzle.split('');
    } else if (puzzle.constructor !== Array) {
      throw new TypeError('Puzzle must be string or array.');
    }

    if (puzzle.length !== SIZE) {
      throw new Error('Puzzle is an invalid size.');
    }

    var hints = 0;
    var value;
    puzzle = puzzle.map(function(element) {
      value = Number(element);
      hints += value !== 0;
      return value;
    });

    if (hints < MIN_HINTS) {
      throw new Error('A valid puzzle must have at least ' + MIN_HINTS + ' hints.');
    }

    if (!recursiveSolve(puzzle, 0)) {
      throw new Error('Puzzle was unable to be solved.');
    }

    return puzzle.join('');
  }

  return solve;
}());
