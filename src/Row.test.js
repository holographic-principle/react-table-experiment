import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';


describe('Row component', () => {
  let cellValues;
  let wrapper;
  let onCellChange;
  let onCheckRowToDelete;
  let selectedRows;

  beforeEach(() => {
    cellValues = ['myName', 'mySurname', 'myEyeColor'];
    onCellChange = jest.fn();
    onCheckRowToDelete = jest.fn();
    selectedRows = new Map();
    wrapper = shallow(<Row
      key={1}
      values={cellValues}
      rowIndex={1}
      onCellChange={onCellChange}
      onCheckRowToDelete={onCheckRowToDelete}
      selectedRows={selectedRows}
    />);
  });

  afterEach(() => {
    cellValues = null;
    wrapper = null;
    onCellChange = null;
    onCheckRowToDelete = null;
    selectedRows = null;
  });

  it('renders a table row', () => {
    expect(wrapper.name()).toEqual('tr');
  });

  it('renders children based on the values prop', () => {
    expect(wrapper.children()).toHaveLength(cellValues.length);
  });
});