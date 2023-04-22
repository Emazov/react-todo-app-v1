import MenuIcon from '@mui/icons-material/MenuOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Create';
import BinIcon from '@mui/icons-material/Delete';

import './todo.scss';

const Todo = ({ task, toggleComplete, editTodo, removeTodo }) => {
	const toggleBurger = (id) => {
		const task = Array.from(document.getElementsByClassName('todo__item'));

		const burgerList = task.map(
			(el) =>
				Array.from(el.children)
					.map((el) => el)
					.at(-1).lastChild
		);

		burgerList.map((el) =>
			+el.id === id
				? el.classList.toggle('todo__burger_list_active')
				: el.classList.remove('todo__burger_list_active')
		);
	};

	return (
		<div className='todo__item'>
			<div
				className={`${
					task.isDone ? 'todo__content todo__item_complete' : 'todo__content'
				}`}
			>
				{task.isDone ? (
					<p>
						{task.completeTime} <CheckIcon />
					</p>
				) : (
					<p>{task.time}</p>
				)}
				<h3>{task.task}</h3>
			</div>
			<div className='todo__burger'>
				<MenuIcon onClick={() => toggleBurger(task.id)} />

				<div className='todo__burger_list' id={task.id}>
					<EditIcon onClick={() => editTodo(task.id)} />

					{task.isDone ? (
						<ClearIcon onClick={() => toggleComplete(task.id)} />
					) : (
						<CheckIcon onClick={() => toggleComplete(task.id)} />
					)}

					<BinIcon onClick={() => removeTodo(task.id)} />
				</div>
			</div>
		</div>
	);
};

export default Todo;
