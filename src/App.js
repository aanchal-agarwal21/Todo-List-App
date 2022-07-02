import "./App.css";
import Header from "./Components /Header/Header";
import Form from "./Components /Form/Form";

function App() {
	return (
		<div className="app">
			<div className="todo">
				<div className="header">
					<Header />
				</div>
        <div className="form">
          <Form />
        </div>
			</div>
		</div>
	);
}

export default App;
