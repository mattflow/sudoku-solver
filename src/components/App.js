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
          <p>Note: I am a broke college student, so I enroll in the free plans offered by most of the technologies I use (mLab, Heroku and GitHub). With that being said, my API, which is hosted on Heroku, becomes inactive if it goes a short period of time without a request. If you press the 'Load Random' button, and a puzzle does not load right away, give the API a couple seconds to wake up. I promise it will load!</p>
        </Container>
      </div>
    );
  }
}
