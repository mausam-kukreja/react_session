import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tic Tac Toe</h2>
        </div>

        <div className="game">
          <div className="game-board">
            <Board />
          </div>          
        </div>
        
      </div>
    );
  }
}

export default App;
