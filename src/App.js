import "./App.css";
import React, { useState } from "react";
import Header from "./Components /Header/Header";
import Form from "./Components /Form/Form";

function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="app">
			<div className="todo">
				<div className="header">
					<Header />
				</div>
				<div className="form">
					<Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	);
}

export default App;
