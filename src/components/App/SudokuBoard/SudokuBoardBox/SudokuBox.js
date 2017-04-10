import React, { Component } from 'react';
import './SudokuBox.css';

export default class SudokuBox extends Component {
  render() {
    const value = this.props.value !== 0 ? this.props.value : '';
    return (
      <input tabIndex={this.props.id + 1} defaultValue={value} id={ 'box' + this.props.id } className="SudokuBox" />
    );
  }
}