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
          <p>Note: I am a broke college student, so I enroll in the free plans offered by most of the technology I use (mLab, Heroku and GitHub Pages). That being said, my API, which is hosted on Heroku, goes to sleep if it is not hit with requests for a short amount of time. If you press the 'Load Random' button and a puzzle does not load right away, give the API a couple seconds to wake up. I promise it will load!</p>
        </Container>
      </div>
    );
  }
}
