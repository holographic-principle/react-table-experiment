import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  onChange(event) {
    this.props.onCheckboxChange(this.props.index, event.target.checked);
  }

  isChecked() {
    if (!this.props.selections) {
      return false;
    }
    return this.props.selections.get(this.props.index);
  }

  render() {
    return <input className={this.props.classes} type="checkbox" onChange={this.onChange} checked={this.isChecked()} />;
  }
}

export default Checkbox;