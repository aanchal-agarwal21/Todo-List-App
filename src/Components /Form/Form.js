import React from "react";
import "./Form.css";
//import {v4 as uuidv4} from uuid;
const form = ({input,setInput,todos, setTodos}) => {
    let id =1;
    const onInputChange =(event)=>{
        setInput(event.target.value);
        console.log("first",input);
    }

    const onFormSubmit =(event)=>{
        event.preventDefault();
        setTodos([ ...todos , {id : id, title :input , completed :false}]);
        console.log("second" , todos);
        id=+1;
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
