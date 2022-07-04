import React from "react";
import "./TodoList.css";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TodoList = ({ todos, setTodos }) => {
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
						className="todo-item"
						onChange={(event) => event.preventDefault()}
					/>
					<button className="button check">
						<CheckIcon />
					</button>
					<button className="button edit">
						<EditIcon />
					</button>
					<button className="button delete" onClick={()=>handleDelete(todo)}>
						<DeleteForeverIcon />
					</button>
				</li>
			))}
		</div>
	);
};

export default TodoList;
