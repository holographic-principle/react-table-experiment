import React, { Component } from 'react';
import Button from './Button';

class ControlButtons extends Component {
  render() {
    return (
      <div className="control-buttons">
        <Button classes="add-button" label="Add column" onButtonClick={this.props.onAddColumnClick} />
        <Button classes="add-button" label="Add row" onButtonClick={this.props.onAddRowClick} />
        <Button classes="export-button" label="Export CSV" onButtonClick={this.props.onExportCSVClick} />
        <Button classes="delete-button" label="Delete marked columns" onButtonClick={this.props.onDeleteColumnsClick} />
        <Button classes="delete-button" label="Delete marked rows" onButtonClick={this.props.onDeleteRowsClick} />
      </div>
    );
  }
}

export default ControlButtons;