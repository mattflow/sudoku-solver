import React, { Component } from 'react';
import Container from './App/Container';
import Header from './App/Header';
import SudokuBoard from './App/SudokuBoard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header title="Sudoku Solver" />
          <SudokuBoard />
          <hr></hr>
          <div style={{ marginBottom: 15 }}>
              <a className="btn btn-secondary" style={{ marginRight: 10 }} href="https://github.com/mattflow/sudoku-solver">View on GitHub</a>      
              <a className="btn btn-secondary" href="https://www.npmjs.com/package/@mattflow/sudoku-solver">View on NPM</a>
          </div>
        </Container>
      </div>
    );
  }
}
