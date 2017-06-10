import React, { Component } from 'react';

class ShowList extends Component{

	constructor(props){
		super(props);

		console.log(props);

	}

	render(){
		return(
			<div>
				<ul>
					<li>AA</li>
				</ul>
			</div>
		)
	}
}

export default ShowList;