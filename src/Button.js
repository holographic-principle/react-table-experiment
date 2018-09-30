import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onButtonClick}
          className={"control-button " + this.props.classes}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;