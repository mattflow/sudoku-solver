import React, { Component } from 'react';

class SudokuBox extends Component {
  render() {
    return (
      <input id={"sudoku-box-" + this.props.index} className="SudokuBox" tabIndex={this.props.index + 1} type="text" />
    );
  }
}

export default SudokuBox;