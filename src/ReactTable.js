import './ReactTable.css';
import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import HeaderRow from './HeaderRow';
import Row from './Row';
import { exportCSV } from './CSVUtils';

class ReactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: this.props.tableData || [],
      toDelete: {
        columns: new Map(),
        rows: new Map()
      }
    };
    this.onCellChange = this.onCellChange.bind(this);
    this.onAddColumnClick = this.onAddColumnClick.bind(this);
    this.onAddRowClick = this.onAddRowClick.bind(this);
    this.onExportCSVClick = this.onExportCSVClick.bind(this);
    this.onCheckColumnToDelete = this.onCheckToDelete.bind(this, 'columns');
    this.onCheckRowToDelete = this.onCheckToDelete.bind(this, 'rows');
    this.onDeleteColumnsClick = this.onDeleteColumnsClick.bind(this);
    this.onDeleteRowsClick = this.onDeleteRowsClick.bind(this);
    this.getNewTableData = this.getNewTableData.bind(this);
  }

  onCellChange(value, rowIndex, cellIndex) {
    this.setState(oldState => ({tableData: this.getNewTableData(oldState.tableData, value, rowIndex, cellIndex)}));
  }

  getNewTableData(oldTableData, value, rowIndex, cellIndex) {
    return oldTableData.map((row, rIndex) => {
      if (rIndex !== rowIndex) {
        return row;
      }
      return row.map((cellValue, cIndex) => {
        if (cIndex !== cellIndex) {
          return cellValue;
        }
        return value;
      });
    })
  }

  onAddColumnClick() {
    const tableData = this.state.tableData;
    if (!tableData.length) {
      this.setState({tableData: [...tableData, ['']]});
      return;
    }
    const newTableData = tableData.map((row) => [...row, '']);
    this.setState({tableData: newTableData});
  }

  onAddRowClick() {
    const tableData = this.state.tableData;
    if (!tableData.length) {
      this.setState({tableData: [...tableData, ['']]});
      return;
    }
    const columnCount = tableData[0].length;
    this.setState({tableData: [...tableData, Array(columnCount).fill('')]});
  }

  onExportCSVClick() {
    exportCSV(this.state.tableData);
  }

  onCheckToDelete(type, index, isChecked) {
    this.setState(oldState => ({
      toDelete: Object.assign({}, oldState.toDelete, {[type]: oldState.toDelete[type].set(index, isChecked)})
    }));
  }

  onDeleteColumnsClick() {
    this.setState(oldState => ({
      tableData: oldState.tableData.map((row) => row.filter((_, column) => !oldState.toDelete.columns.get(column))),
      toDelete: Object.assign({}, oldState.toDelete, {columns: new Map()})
    }));
  }

  onDeleteRowsClick() {
    this.setState(oldState => ({
      tableData: oldState.tableData.filter((_, row) => !oldState.toDelete.rows.get(row)),
      toDelete: Object.assign({}, oldState.toDelete, {rows: new Map()})
    }));
  }

  render() {
    if (!this.state.tableData.length) {
      return (
        <div>
          <ControlButtons
            onAddColumnClick={this.onAddColumnClick}
            onAddRowClick={this.onAddRowClick}
          />
          <div className="no-data">No data. Please add some columns and rows.</div>
        </div>
      );
    }
    const [headerRow, ...rows] = this.state.tableData;
    const rowsHtml = rows.map((row, index) => {
      return <Row
                key={index + 1}
                values={row}
                rowIndex={index + 1}
                onCellChange={this.onCellChange}
                onCheckRowToDelete={this.onCheckRowToDelete}
                selectedRows={this.state.toDelete.rows}
              />;
    });
    return (
      <div>
        <ControlButtons
          onAddColumnClick={this.onAddColumnClick}
          onAddRowClick={this.onAddRowClick}
          onExportCSVClick={this.onExportCSVClick}
          onDeleteColumnsClick={this.onDeleteColumnsClick}
          onDeleteRowsClick={this.onDeleteRowsClick}
        />
        <table className="react-table">
          <thead><HeaderRow
                    key={0}
                    values={headerRow}
                    rowIndex={0}
                    onCellChange={this.onCellChange}
                    onCheckColumnToDelete={this.onCheckColumnToDelete}
                    selectedColumns={this.state.toDelete.columns}
                  />
          </thead>
          <tbody>{rowsHtml}</tbody>
        </table>
      </div>
    );
  }
}

export default ReactTable;