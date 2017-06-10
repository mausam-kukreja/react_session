import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShowList extends Component{

	//why constructor is useless here???
	render() {
		return ( 
			<ul>
	  			{this.props.todos.map((toDoItem,index)=>{return (
					<li key={index}>{toDoItem.text}</li>
				)})}
      		</ul>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);    
	return state;
}

export default connect(mapStateToProps)(ShowList);
