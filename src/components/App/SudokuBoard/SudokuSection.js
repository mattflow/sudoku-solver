import React, { Component } from 'react';
import SudokuBox from './SudokuSection/SudokuBox';

class SudokuSection extends Component {
  render() {
    return (
      <table className="SudokuSection">
        <tbody>
          <tr>
            <td><SudokuBox index={this.props.index[0]} /></td>
            <td><SudokuBox index={this.props.index[1]} /></td>
            <td><SudokuBox index={this.props.index[2]} /></td>
          </tr>
          <tr>
            <td><SudokuBox index={this.props.index[3]} /></td>
            <td><SudokuBox index={this.props.index[4]} /></td>
            <td><SudokuBox index={this.props.index[5]} /></td>
          </tr>
          <tr>
            <td><SudokuBox index={this.props.index[6]} /></td>
            <td><SudokuBox index={this.props.index[7]} /></td>
            <td><SudokuBox index={this.props.index[8]} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default SudokuSection;