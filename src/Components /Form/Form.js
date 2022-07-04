import React, { useEffect } from "react";
import "./Form.css";
import {v4 as uuidv4} from "uuid";
const form = ({input,setInput,todos, setTodos}) => {
    const onInputChange =(event)=>{
        setInput(event.target.value);
    }

    const onFormSubmit =(event)=>{
        event.preventDefault();
        setTodos([ ...todos , {id:uuidv4() ,title :input , completed :false}]);
		console.log("todos",todos);
        setInput("");
    }
	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Enter a todo ..."
				className="todo-input"
                value={input}
                required
                onChange={onInputChange}
			></input>
			<button type="submit" className="add-button">
				Add
			</button>
		</form>
	);
};

export default form;
