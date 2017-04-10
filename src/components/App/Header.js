import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="display-3">{ this.props.title }</h1>
        <hr />
      </div>
    );
  }
}