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

var iterations = 0;
function recursiveSolve(puzzle, index, maxIterations) {
  if (maxIterations !== 0 && ++iterations > maxIterations) {
    throw new Error('Max iterations reached. No solution found.');
  }
  if (index >= SIZE) {
    return true;
  } else if (puzzle[index] !== 0) {
    return recursiveSolve(puzzle, index + 1, maxIterations);
  }

  for (var number = 1; number <= ROW_COL_SIZE; number += 1) {
    if (check(puzzle, number, index)) {
      puzzle[index] = number;
      if (recursiveSolve(puzzle, index + 1, maxIterations)) {
        return true;
      }
    }
  }
  puzzle[index] = 0;
  return false;
}

function solve(puzzle, options) {
  var opts = {
    emptyValue: '0',
    hintCheck: true,
    outputArray: false,
    maxIterations: 1<<20,
  };

  if (options !== undefined) {
    Object.assign(opts, options);
  }

  if (typeof puzzle === 'string') {
    puzzle = puzzle.split('');
  }

  if (!Array.isArray(puzzle)) {
    throw new TypeError('Puzzle must be string or array.');
  }

  if (puzzle.length !== SIZE) {
    throw new Error('Puzzle is an invalid size.');
  }

  var hints = 0;
  puzzle = puzzle.map(function(element) {
    if (element === opts.emptyValue || element === parseInt(opts.emptyValue, 10)) {
      return 0;
    }
    hints++;
    var value = parseInt(element, 10);
    if (isNaN(value) || value > 9 || value < 1) {
      throw new TypeError('Invalid puzzle value: ' + element);
    }
    return value;
  });

  if (opts.hintCheck && hints < MIN_HINTS) {
    throw new Error('A valid puzzle must have at least ' + MIN_HINTS + ' hints.');
  }

  if (!recursiveSolve(puzzle, 0, opts.maxIterations)) {
    throw new Error('Puzzle could not be solved.');
  }

  return opts.outputArray ? puzzle : puzzle.join('');
}

module.exports = solve;