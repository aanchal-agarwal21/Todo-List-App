import React from "react";
import "./TodoList.css";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TodoList = ({ todos, setTodos }) => {
	const handleComplete = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleDelete = ({ id }) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="todo-list">
			{todos.map((todo) => (
				<li className="todo-items">
					<input
						type="text"
						value={todo.title}
						className={todo.completed ? "todo-item completed" : "todo-item"}
						onChange={(event) => event.preventDefault()}
					/>
					<button className="button check" onClick={() => handleComplete(todo)}>
						<CheckIcon />
					</button>
					<button className="button edit">
						<EditIcon />
					</button>
					<button className="button delete" onClick={() => handleDelete(todo)}>
						<DeleteForeverIcon />
					</button>
				</li>
			))}
		</div>
	);
};

export default TodoList;
