Sudoku Solver
=============

A simple, brute force sudoku sovler

## Installation

  `npm install @mattflow/sudoku-solver`

## Usage

```js
let solve = require('@mattflow/sudoku-solver');
let board = '000001200100700045000430700090006300050807020006200090003019000970004006002500000';
let solution = solve(board);
console.log(solution);
// Output -> 745981263138762945629435718297156384354897621816243597583619472971324856462578139
```

## Tests
  `npm test`

## Notes
A big thanks to [Joanne](https://medium.com/@jdaudier) whose [blog post](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738#.pr1bgk2mq)
really helped me publish my first npm package!