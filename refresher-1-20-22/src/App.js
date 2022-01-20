import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "task 1",
			day: "Jan 8th at 3:30pm"
		},
		{
			id: 2,
			text: "eat",
			day: "Feb 18th at 11:30am"
		},
		{
			id: 3,
			text: "sleep",
			day: "March 23th at 1:30pm"
		}
	]);

	return (
		<div className="container">
			<Header title="Task Tracker" />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
