import React, { Component } from 'react';
import Checkbox from './Checkbox';

class HeaderCell extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(event) {
    this.props.onCellChange(event.target.innerText, this.props.rowIndex, this.props.cellIndex);
  }

  render() {
    return (
      <th className="react-table-th">
        <Checkbox
          classes="checkbox-column"
          index={this.props.cellIndex}
          onCheckboxChange={this.props.onCheckColumnToDelete}
          selections={this.props.selectedColumns}
        />
        <span className="react-table-th-span" contentEditable="true" onBlur={this.onBlur}>{this.props.value}</span>
      </th>
    );
  }
}

export default HeaderCell;