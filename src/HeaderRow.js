import React, { Component } from 'react';
import HeaderCell from './HeaderCell';

class HeaderRow extends Component {
  render() {
    const cells = this.props.values.map((cellData, index) => {
      return <HeaderCell
        key={index}
        value={cellData}
        rowIndex={this.props.rowIndex}
        cellIndex={index}
        onCellChange={this.props.onCellChange}
        onCheckColumnToDelete={this.props.onCheckColumnToDelete}
        selectedColumns={this.props.selectedColumns}
      />;
    });
    return (
      <tr>{cells}</tr>
    );
  }
}

export default HeaderRow;