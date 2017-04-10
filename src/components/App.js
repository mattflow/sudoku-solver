import React, { Component } from 'react';
import Container from './App/Container';
import Header from './App/Header';
import SudokuBoard from './App/SudokuBoard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header title="Sudoku Solver" />
          <SudokuBoard />
        </Container>
      </div>
    );
  }
}