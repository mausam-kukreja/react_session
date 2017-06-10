import React, { Component } from 'react';

class InputList extends Component{

	constructor(props) {
    	super(props);    	
    	this.state = {
    		eachItem: 'try out'
    	};

    	/*this.state = {
	      posts:{st : '0'}
	    };*/
		//console.log(this.state);

		//this.state = this.state.bind(this);

  	};	
		
  	componentDidMount(){
	    console.log('sdfsd');
	    this.setState({eachItem: 'Loaded'});
	  }

	getTodoItem(evt) {
    	console.log("on click of add getTodoItem");

    	//console.log(this.enter_todo.target.value);

    	console.log(evt.target.value);
    	/*this.setState({
	      eachItem: new Date()
	    });*/
	    //this.setState('sahil');
    	//console.log(this.state);
    	//this.setState({evt.target.value});
    	//this.setState({evt.target.value});
    	//console.log(this.state);
  	}

  	addTodoItem(){
  		console.log("on click of add addTodoItem");
  		//this.setState({term});
  		//console.log(this.state);
  		this.setState({eachItem: 'added'});

  	}

	render(){
		return(
			<div>
				
				<div>AA{this.state.eachItem}</div>
				<input type="text" name="enter_todo" id="enter_todo" value={this.state.eachItem} onChange={this.getTodoItem} />
				<input type="button" value="add" onClick={this.addTodoItem} />

			</div>
		)
	}
}

export default InputList;