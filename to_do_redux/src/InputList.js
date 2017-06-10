import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addTodo } from './actions';

class InputList extends Component{

	constructor(props){
		super(props);
	    this.addTodoItem  = this.addTodoItem.bind(this);
	}

  	addTodoItem(){

  		//console.log("on click of add addTodoItem");  		
  		const label = this.refs.label.value;
  		this.props.addTodo(label);

  		console.log(this.props);
		
		//reset the text value
  		this.refs.label.value = '';
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
