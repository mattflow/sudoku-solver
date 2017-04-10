import React, { Component } from 'react';
import Button from './SudokuButtons/Button';

export default class SudokuButtons extends Component {
  render() {
    return (
      <div className="SudokuButtons">
        <div className="row">
          <div className="col-6">
            <Button style='primary' text='Solve' />
          </div>
          <div className="col-6">
            <Button style='secondary' text='Load Random' />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button style='secondary' text='Load Previous' />
          </div>
          <div className="col-6">
            <Button style='secondary' text='Clear' />
          </div>
        </div>
      </div>
    );
  }
}