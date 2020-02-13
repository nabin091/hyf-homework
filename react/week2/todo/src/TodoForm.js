
import React, { useState } from 'react';

const TodoForm = ( { addToDo } ) => {
	const [ value, setValue ] = useState( '' );

	const onFormSubmit = (event) => {
		event.preventDefault();
		if ( ! value ) return;

		addToDo( value );
		setValue( '' );

	};

	const handleOnChange = ( event ) => {
		return setValue( event.target.value );
	};

	return (
		<form onSubmit={ onFormSubmit }>
			<label className="form-label">
				<h3>Add Todo:</h3>
				<input
					type="text"
					className="form-input"
					placeholder="Enter new todo task"
					value={value}
					onChange={ handleOnChange }
				/>
			</label>
		</form>
	)
};

export default TodoForm;