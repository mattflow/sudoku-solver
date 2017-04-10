import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button type="button" className={ 'Button btn btn-' + this.props.style }>
        { this.props.text }
      </button>
    );
  }
}