import React, { Component } from 'react';
import SudokuBox from './SudokuBoardBox/SudokuBox';
import './SudokuBoardBox.css';

export default class SudokuBoardBox extends Component {
  render() {
    const length = 3;
    const width = this.props.start + 3;
    let row, index, value;
    let rows = [];
    for (var i = 0; i < length; i++) {
      row = [];
      for (var j = this.props.start; j < width; j++) {
        index = 9*i + j;
        value = Number(this.props.puzzle[index]);
        row.push(
          <td key={j}>
            <SudokuBox value={value} id={index} />
          </td>
        );
      }
      rows.push(<tr key={i}>{ row }</tr>);
    }
    return (
      <table className="SudokuBoardBox">
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}