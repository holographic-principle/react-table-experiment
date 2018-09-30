import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';


describe('Checkbox component', () => {
  let onCheckRowToDelete;
  let selectedRows;
  let wrapper;

  beforeEach(() => {
    onCheckRowToDelete = jest.fn();
    selectedRows = new Map();
    selectedRows.set(1, true);
    wrapper = shallow(<Checkbox
      classes="checkbox-row"
      index={1}
      onCheckboxChange={onCheckRowToDelete}
      selections={selectedRows}
    />);
  });

  afterEach(() => {
    onCheckRowToDelete = null;
    selectedRows = null;
    wrapper = null;
  });

  it('renders a checkbox', () => {
    expect(wrapper.name()).toEqual('input');
  });

  it('calls the supplied callback on change', () => {
    wrapper.simulate('change', {target: wrapper});
    expect(onCheckRowToDelete).toHaveBeenCalled();
  });

  it('should be checked if its index is among selections', () => {
    expect(wrapper.prop('checked')).toEqual(true);
  });
});