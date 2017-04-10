import React, { Component } from 'react';
import SudokuBox from './SudokuBoard/SudokuBox';
import Button from './SudokuBoard/Button';

export default class SudokuBoard extends Component {
  constructor() {
    super();
    const numBoxes = 81;
    this.state = {
      puzzle: Array(numBoxes).fill(0)
    };
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
  }

  loadRandom() {
    fetch('https://enigmatic-crag-59629.herokuapp.com/api/sudokus/random')
      .then(response => response.json())
      .then(data => {
        const puzzle = data.puzzle.split('');
        this.setState({
          puzzle: puzzle
        });
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
            boxRow.push(this.renderBox(index, Number(puzzle[index])));
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

  renderBox(id, value) {
    return <td key={id}><SudokuBox id={ id } value={ value } onChange={ (e, index) => this.handleChange(e, id) } /></td>
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
              <Button style='secondary' text='Load Random' onClick={() => this.loadRandom()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}