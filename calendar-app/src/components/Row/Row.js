import React, { Component } from 'react';
import './Row.css';

class Row extends Component {
  render() {
    return (
      <div className="row-container">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    );
  }
}

export default Row;