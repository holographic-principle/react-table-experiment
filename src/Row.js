import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    const cells = this.props.values.map((cellData, index) => {
      return <Cell
        key={index}
        value={cellData}
        rowIndex={this.props.rowIndex}
        cellIndex={index}
        onCellChange={this.props.onCellChange}
        onCheckRowToDelete={this.props.onCheckRowToDelete}
        selectedRows={this.props.selectedRows}
      />;
    });
    return (
      <tr>{cells}</tr>
    );
  }
}

export default Row;