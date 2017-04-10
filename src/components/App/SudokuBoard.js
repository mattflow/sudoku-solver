import React, { Component } from 'react';
import SudokuBoardBox from './SudokuBoard/SudokuBoardBox';

export default class SudokuBoard extends Component {
  constructor() {
    super();
    this.state = {
      puzzle: Array(81).fill(0)
    }
  }
  render() {
    const length = 3;
    const width = 3;
    let row;
    let rows = [];
    for (var i = 0; i < length; i++) {
      row = [];
      for (var j = 0; j < width; j++) {
        row.push(<td key={j}><SudokuBoardBox puzzle={this.state.puzzle} start={27*i + 3*j} /></td>);
      }
      rows.push(<tr key={i}>{ row }</tr>);
    }
    return (
      <table className="SudokuBoard">
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}