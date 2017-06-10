import React from 'react';


const ShowList = (props) => {

	return (
	  <ul>
  			{props.toDoData.map((toDoItem,index)=>{return (
				<li>{props.toDoData[index]}</li>
			)})}
      </ul>
    );  
}

export default ShowList;