import React from 'react';


const ShowList = (props) => {

	return (
	  <ul>
  			{props.toDoData.map((toDoItem,index)=>{return (
				<li key={index}>{toDoItem}</li>
			)})}
      </ul>
    );  
}

export default ShowList;