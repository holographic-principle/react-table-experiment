import React, { Component } from 'react';
import ReactTable from './ReactTable';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Table Experiment</h1>
        </header>
        <div className="App-intro">
          <ReactTable tableData={[['id', 'name', 'surname'],['123', 'Name1', 'Surname1'],['345', 'Name2', 'Surname2']]} />
        </div>
      </div>
    );
  }
}

export default App;
