# Sudoku Solver

Simple, fast sudoku solver.

See it in action here: [mattflow.github.io/sudoku-solver](https://mattflow.github.io/sudoku-solver)

[![Build Status](https://travis-ci.org/mattflow/sudoku-solver.svg?branch=master)](https://travis-ci.org/mattflow/sudoku-solver)
[![Coverage Status](https://coveralls.io/repos/github/mattflow/sudoku-solver/badge.svg?branch=master)](https://coveralls.io/github/mattflow/sudoku-solver?branch=master)

## Installation

`npm install @mattflow/sudoku-solver`

## Usage

The function accepts a string or array of 81 elements with `0` representing
an empty box.

```js
var solve = require('@mattflow/sudoku-solver');
var puzzle = '000001200100700045000430700090006300050807020006200090003019000970004006002500000';
var solution = solve(puzzle);
console.log(solution)
// Output -> 745981263138762945629435718297156384354897621816243597583619472971324856462578139
```

## Running Tests

`npm test`
