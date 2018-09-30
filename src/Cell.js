import React, { Component } from 'react';
import Checkbox from './Checkbox';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(event) {
    this.props.onCellChange(event.target.innerText, this.props.rowIndex, this.props.cellIndex);
  }

  render() {
    const checkbox = this.props.cellIndex !== 0 ?
      '' :
      <Checkbox
        classes="checkbox-row"
        index={this.props.rowIndex}
        onCheckboxChange={this.props.onCheckRowToDelete}
        selections={this.props.selectedRows}
      />;
    return (
      <td className="react-table-td">
        {checkbox}
        <span className="react-table-td-span" contentEditable="true" onBlur={this.onBlur}>{this.props.value}</span>
      </td>
    );
  }
}

export default Cell;