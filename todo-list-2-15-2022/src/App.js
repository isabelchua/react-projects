import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);

	return (
		<div className="container">
			<div className="app-wrapper">
				<Header />
				<Form
					input={input}
					setInput={setInput}
					todos={todos}
					setTodos={setTodos}
					editTodo={editTodo}
					setEditTodo={setEditTodo}
				/>

				<div>
					<TodoList
						todos={todos}
						setTodos={setTodos}
						setEditTodo={setEditTodo}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
