import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import InputList from './InputList';
import ShowList from './ShowList';
import { addTodo } from './actions'



const App = () => 
 (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React To Do List</h2>
        </div>
        <div className="App-intro">
          <InputList />
        </div>
        <div className="App-intro">
          
        </div>
      </div>
    );
  


export default App;
