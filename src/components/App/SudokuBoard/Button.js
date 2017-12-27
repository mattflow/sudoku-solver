import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button type="button" disabled={this.props.disabled} className={ 'Button btn btn-' + this.props.style } onClick={this.props.onClick} >
        { this.props.text }
      </button>
    );
  }
}
