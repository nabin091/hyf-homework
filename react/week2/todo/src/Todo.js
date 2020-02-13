
import React, { useState } from 'react';
import Item from './Item';
import TodoForm from "./TodoForm";

function Todo() {
         const  [todos,setTodos] = useState([
		{
			text: 'Get out of bed',
			isCompleted: false
		},

		{
			text: 'Brush teeth',
			isCompleted: false
		},

		{
			text: 'Eat breakfast',
			isCompleted: false
		}
	]);

	
       const addToDo = ( text ) => {
	       const newToDos = [ ...todos, { text, isCompleted: false } ];
	       setTodos( newToDos );
	};

	const handleItemClick = ( index ) => {
		// Get all todos array from state.
		const newTodos = [ ...todos ];
                //console.log(todos[index]);
		// Set isCompleted property to reverse of what its current value is ( boolean )
		newTodos[ index ].isCompleted = true;
               //console.log(todos[index]);

		// Set State with the new array of todos with the updated value
		setTodos( newTodos );
	};

	const handleRemoveClick = ( index ) => {
		// Get all todos array from state.
		const newTodos = [ ...todos ];

		// Remove the clicked item from the todos array
		newTodos.splice( index, 1 );

		// Set State with the new array of todos with the updated value
		setTodos( newTodos );
	};


	return (
		<div className="todo-container">
			<h1 className="main-heading">Todo App</h1>
			<TodoForm addToDo={addToDo}/>
			<div className="todo-list">
				{ 
					todos.map( ( item, index ) => (
						<Item
							key={`${ item.text }-${ index }`}
							todo={ item }
							index={ index }
							handleItemClick={ handleItemClick }
							handleRemoveClick={handleRemoveClick}
						/>
					) )
                                   } 
			</div>
		</div>
	);
};

export default Todo;
