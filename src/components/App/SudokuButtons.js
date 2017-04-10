import React, { Component } from 'react';
import Button from './SudokuButtons/Button';
import solver from '@mattflow/sudoku-solver';

export default class SudokuButtons extends Component {
  solvePuzzle(puzzle) {
    console.log(solver(puzzle));
  }

  render() {
    return (
      <div className="SudokuButtons">
        <div className="row">
          <div className="col-6">
            <Button style='primary' text='Solve' />
          </div>
          <div className="col-6">
            <Button style='secondary' text='Load Random' />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button style='secondary' text='Load Previous' />
          </div>
          <div className="col-6">
            <Button style='secondary' text='Clear' />
          </div>
        </div>
      </div>
    );
  }
}