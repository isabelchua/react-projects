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

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
