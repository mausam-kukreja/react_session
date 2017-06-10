import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowList from './ShowList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    }

    //this.addTodo = this.addTodo.bind(this);
    this.getTodoItem  = this.getTodoItem.bind(this);
    this.addTodoItem  = this.addTodoItem.bind(this);
  };


  getTodoItem(evt) {
      //console.log("on click of add getTodoItem");
      //console.log(evt.target.value);
     
    }

    addTodoItem(){
      console.log("on click of add addTodoItem");      

      //read current input
      const label = this.refs.label.value;
      console.log(label);

      //read current state
      const  {toDoItems} = this.state;

      console.log(this.state);

      //set state using concat
      var newToDoList = this.state.toDoList.concat([label]);
      //this.setState({toDoList: newToDoList});


      //set state using const
      const newToDo = [...this.state.toDoList, label];      
      this.setState({toDoList: newToDo});

      console.log(this.state);

      //reset the text value
      this.refs.label.value = '';
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React To Do List</h2>
        </div>
        <div className="App-intro">
          <input type="text" ref="label" value={this.state.eachItem} onChange={this.getTodoItem} />
          <input type="button" value="add" onClick={this.addTodoItem} />
        </div>
        <div className="App-intro">
          <ShowList toDoData={this.state.toDoList}  />
        </div>
      </div>
    );
  }
}

export default App;
