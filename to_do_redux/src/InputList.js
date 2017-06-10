import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addTodo } from './actions';

class InputList extends Component{

  	addTodoItem(){
  		console.log("on click of add addTodoItem");
  		//store.dispatch(addTodo('sajoi'))
  		this.props.addTodo('sahil');
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
	return state;
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({addTodo: addTodo}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(InputList);
