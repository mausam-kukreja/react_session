import React, { Component } from 'react';

class ShowList extends Component{

	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
				<ul>
					<li>{this.props.data}</li>
				</ul>
			</div>
		)
	}
}

export default ShowList;