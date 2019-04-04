import React, { Component } from 'react';
import SudokuBox from './SudokuBoard/SudokuBox';
import Button from './SudokuBoard/Button';
import solve from '@mattflow/sudoku-solver';
import sudokus from '../sudokus.json';

export default class SudokuBoard extends Component {
  constructor() {
    super();
    this.numBoxes = 81;
    this.previous;
    this.state = {
      puzzle: Array(this.numBoxes).fill(0),
      colored: Array(this.numBoxes).fill(true),
      loading: false
    };
  }

  autotab(tabIndex) {
    const nextBox = document.querySelector('input[tabindex="' + tabIndex + '"]');
    nextBox.focus()
  }

  handleChange(e, index) {
    let puzzle = this.state.puzzle.slice();
    const value = Number(e.target.value);
    if (value <= 9 && value >= 0) {
      puzzle[index] = value;
      this.setState({
        puzzle: puzzle
      });
    }
    this.autotab(e.target.tabIndex + 1);
  }

  loadRandom() {
    this.setState({
      loading: true
    }, () => {
      const puzzle = sudokus[Math.floor(Math.random() * sudokus.length)].puzzle;
      this.setState({
        puzzle,
        colored: this.getColored(puzzle),
        loading: false,
      });
    });
  }

  getColored(puzzle) {
    let colored = [];
    for (let i = 0; i < puzzle.length; i++) {
      if (puzzle[i] !== '0' && puzzle[i] !== 0) {
        colored.push(true);
      }
      else {
        colored.push(false);
      }
    }
    return colored;
  }

  solvePuzzle() {
    let solvedPuzzle = solve(this.state.puzzle.slice(), 0);
    if (solvedPuzzle != undefined) {
      this.previous = this.state.puzzle.slice();
    }
    this.setState({
      puzzle: solvedPuzzle,
      colored: this.getColored(this.previous)
    });
  }

  loadPrevious() {
    if (this.previous !== undefined) {
      this.setState({
        puzzle: this.previous.slice(),
        colored: this.getColored(this.previous)
      });
    } else {
      alert('No previous puzzle stored.');
    }
  }

  clear() {
    this.coloredBoxes = Array(this.numBoxes).fill(true);
    this.setState({
      puzzle: Array(this.numBoxes).fill(0),
      colored: Array(this.numBoxes).fill(true),
    });
  }

  renderBoxes(puzzle) {
    let index, boxRow, boxRows, row;
    let rows = [];
    for (let i = 0; i < 3; i++) {
      row = [];
      for (let j = 0; j < 3; j++) {
        boxRows = [];
        for (let k = 0; k < 3; k++) {
          boxRow = [];
          for (let m = 0; m < 3; m++) {
            index = i*27 + k*9 + j*3 + m;
            boxRow.push(this.renderBox(index, Number(puzzle[index]), this.state.colored[index]));
          }
          boxRows.push(<tr key={index}>{ boxRow }</tr>);
        }
        row.push(
          <td key={index}>
            <table>
              <tbody>
                { boxRows }
              </tbody>
            </table>
          </td>
        );
      }
      rows.push(<tr key={index}>{ row }</tr>);
    }
    return rows;
  }

  renderBox(id, value, colored) {
    return (
      <td key={id}>
        <SudokuBox
          id={ id }
          value={ value } 
          onChange={ (e, index) => this.handleChange(e, id) } 
          class={ colored ? 'colored' : 'uncolored' }
         />
       </td>
    );
  }

  render() {
    return (
      <div>
        <table className="SudokuBoard">
          <tbody>
            { this.renderBoxes(this.state.puzzle) }
          </tbody>
        </table>
        <div className='SudokuButtons'>
          <div className='row'>
            <div className='col-6'>
              <Button style='primary' text='Solve' disabled={this.state.loading} onClick={() => this.solvePuzzle()} />
            </div>
            <div className='col-6'>
               <Button style='secondary' disabled={this.state.loading} text={this.state.loading ? 'Loading...' : 'Load Random'} onClick={() => this.loadRandom()} />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <Button style='secondary' disabled={this.state.loading} text='Load Previous' onClick={() => this.loadPrevious()} />
            </div>
            <div className='col-6'>
              <Button style='secondary' text='Clear' disabled={this.state.loading} onClick={() => this.clear()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
