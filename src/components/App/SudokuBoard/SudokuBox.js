import React, { Component } from 'react';

export default class SudokuBox extends Component {
  render() {
    const value = this.props.value !== 0 ? this.props.value : '';
    return (
      <input
        tabIndex={this.props.id + 1}
        type='tel'
        value={value} 
        id={ 'box' + this.props.id } 
        className={ 'SudokuBox' + ' ' + this.props.class }
        onChange={this.props.onChange}
      />
    );
  }
}
