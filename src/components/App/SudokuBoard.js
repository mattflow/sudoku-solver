import React, { Component } from 'react';
import SudokuSection from './SudokuBoard/SudokuSection';

class SudokuBoard extends Component {
  constructor() {
    super();
    this.state = { indecies: [
                      0,  1,  2,  9,  10, 11, 18, 19, 20,
                      3,  4,  5,  12, 13, 14, 21, 22, 23,
                      6,  7,  8,  15, 16, 17, 24, 25, 26, 
                      27, 28, 29, 36, 37, 38, 45, 46, 47,
                      30, 31, 32, 39, 40, 41, 48, 49, 50,
                      33, 34, 35, 42, 43, 44, 51, 52, 53, 
                      54, 55, 56, 63, 64, 65, 72, 73, 74, 
                      57, 58, 59, 66, 67, 68, 75, 76, 77, 
                      60, 61, 62, 69, 70, 71, 78, 78, 80
                    ] };
  }
  render() {
    return (
      <table className="SudokuBoard">
        <tbody>
          <tr>
            <td><SudokuSection index={this.state.indecies.slice(0, 9)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(9, 18)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(18, 27)} /></td>
          </tr>
          <tr>
            <td><SudokuSection index={this.state.indecies.slice(27, 36)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(36, 45)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(45, 54)} /></td>
          </tr>
          <tr>
            <td><SudokuSection index={this.state.indecies.slice(54, 63)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(63, 72)} /></td>
            <td><SudokuSection index={this.state.indecies.slice(72, 81)} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SudokuBoard;