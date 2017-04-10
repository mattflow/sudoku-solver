import React, { Component } from 'react';
import SudokuBox from './SudokuBoard/SudokuBox';

export default class SudokuBoard extends Component {
  constructor() {
    super();
    const numBoxes = 81;
    this.state = {
      puzzle: Array(numBoxes).fill(0)
    }
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
            boxRow.push(this.renderBox(index, puzzle[index]));
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
    return <td key={id}><SudokuBox id={ id } value={ value } /></td>
  }

  render() {
    return (
      <table className="SudokuBoard">
        <tbody>
          { this.renderBoxes(this.state.puzzle) }
        </tbody>
      </table>
    );
  }
}