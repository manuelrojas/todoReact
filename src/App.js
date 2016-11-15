import React, { Component } from 'react';
import store from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    let _store = store();
    console.log('Current state:');
    console.log(_store.getState());
    console.log('--------------');
    console.log('Dispaching ADD_TODO');
    _store.dispatch({
      type: 'ADD_TODO',
      id: 1,
      text: 'Go shopping'
    });
    console.log('Current state:');
    console.log(_store.getState());

    _store.dispatch({
      type: 'TOGGLE_TODO',
      id: 1
    });

    console.log(_store.getState());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
