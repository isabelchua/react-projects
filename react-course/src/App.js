import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "food shopping",
			day: "Feb 5th at 2:30pm",
			reminder: false
		},
		{
			id: 2,
			text: "shopping",
			day: "Feb 5th at 2:30pm",
			reminder: true
		},
		{
			id: 3,
			text: "eat",
			day: "Feb 5th at 2:30pm",
			reminder: false
		}
	]);

	// Delete Task
	const deleteTask = id => {
		//console.log("delete", id);
		setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"no tasks to show"
			)}
		</div>
	);
}

export default App;
