import { useState } from 'react';

import './todoForm.scss';

const TodoForm = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodo(todo);

		setTodo('');
	};

	return (
		<form className='todo_form' onSubmit={handleSubmit}>
			<input
				type='text'
				className='todo__input'
				required
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Write task...'
			/>
			<button className='todo__btn' type='submit'>
				Add
			</button>
		</form>
	);
};

export default TodoForm;
