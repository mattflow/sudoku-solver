import React, { Component } from 'react';
import Header from './App/Header';
import SudokuBoard from './App/SudokuBoard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Sudoku Solver" />
        <SudokuBoard />
      </div>
    );
  }
};

export default App;