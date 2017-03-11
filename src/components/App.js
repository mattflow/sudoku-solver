import React, { Component } from 'react';
import Header from './App/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Sudoku Solver" />
      </div>
    );
  }
};

export default App;