

import React from 'react';

const Item = ( { todo, index, handleItemClick, handleRemoveClick } ) => {

	return (
		<>
		<div className="todo" 
				style ={{textDecoration:todo.isCompleted ?'line-through': ''}} >
					{todo.text}
					</div>
					<div>
				<input type = 'checkbox'
				onClick={() => handleItemClick( index )} />
			
			<button onClick={() => handleRemoveClick(index)}>Delete</button>
			
		</div>
		</>
	);
}



export default Item;
