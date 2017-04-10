import React, { Component } from 'react';
import SudokuBoardBox from './SudokuBoard/SudokuBoardBox';

export default class SudokuBoard extends Component {
  constructor() {
    super();
    this.state = {
      puzzle: '400002690902658000060034000500020163100000002278010005000780050000263809081500007'
    };
  }
  
  render() {
    const length = 3;
    const width = 3;
    let row;
    let rows = [];
    for (var i = 0; i < length; i++) {
      row = [];
      for (var j = 0; j < width; j++) {
        row.push(<td key={j}><SudokuBoardBox puzzle={this.state.puzzle.split('')} start={27*i + 3*j} /></td>);
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