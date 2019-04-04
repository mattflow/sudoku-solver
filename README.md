# Sudoku Solver

Simple, fast sudoku solver.

See it in action here: [mattflow.github.io/sudoku-solver](https://mattflow.github.io/sudoku-solver)

[![Build Status](https://travis-ci.org/mattflow/sudoku-solver.svg?branch=master)](https://travis-ci.org/mattflow/sudoku-solver)
[![Coverage Status](https://coveralls.io/repos/github/mattflow/sudoku-solver/badge.svg?branch=master)](https://coveralls.io/github/mattflow/sudoku-solver?branch=master)

## Installation

`npm install --save @mattflow/sudoku-solver`

or

`yarn add @mattflow/sudoku-solver`

## Simple Usage

Accepts a string or array of 81 elements with `0` representing an empty box.

Returns a string containing the solved puzzle.

```js
var solve = require('@mattflow/sudoku-solver');
var puzzle = '000001200100700045000430700090006300050807020006200090003019000970004006002500000';
var solution = solve(puzzle);
console.log(solution);
// 745981263138762945629435718297156384354897621816243597583619472971324856462578139
```

## solve(puzzle, options)

`puzzle`: A string or array of 81 elements with `0` representing an empty box.

`options`: An optional object containing configurations.

- `emptyValue`: Value representing an empty box. **Default:** `'0'`
- `hintCheck`: Boolean determining if a hint check is performed. **Default:** `true`
- `outputArray`: Boolean determining if an array is returned instead of a string. **Default:** `false`
- `maxIterations`: Value determining the maximum number of iterations before exiting. `0` to disable. **Default:** `1000000`

## Running Tests

`npm test`
