import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';


describe('Cell component', () => {
  let onBlurFn;
  let wrapper;

  beforeEach(() => {
    onBlurFn = jest.fn();
    wrapper = shallow(<Cell onCellChange={onBlurFn} value={'I am the content of the cell'} />);
  });

  afterEach(() => {
    onBlurFn = null;
    wrapper = null;
  });

  it('renders a table cell', () => {
    expect(wrapper.name()).toEqual('td');
  });

  it('displays the provided value', () => {
    expect(wrapper.text()).toEqual('I am the content of the cell');
  });

  it('invokes the callback on blur', () => {
    wrapper.find('span').simulate('blur', {target: wrapper});
    expect(onBlurFn).toHaveBeenCalled();
  });
});