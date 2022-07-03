import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="todo-list">
			{todos.map((todo) => (
				<li className="todo-items">
					{/* {todo.title} */}
					<input
						type="text"
						value={todo.title}
						className="todo-item"
						onChange={(event) => event.preventDefault()}
					/>
				</li>
			))}
		</div>
	);
};

export default TodoList;
