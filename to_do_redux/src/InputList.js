import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './actions'

class InputList extends Component{

  	addTodoItem(){
  		console.log("on click of add addTodoItem");
  		//store.dispatch(addTodo('sajoi'))
  	}

	render(){
		return(
			<div>				
				<input type="text" ref="label"  />
          		<input type="button" value="add" onClick={this.addTodoItem} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps');    
}


function matchDispatchToProps(dispatch){
	console.log('matchDispatchToProps');   
}


export default connect()(InputList);
