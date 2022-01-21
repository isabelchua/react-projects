import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "task 1",
			day: "Jan 8th at 3:30pm",
			reminder: true
		},
		{
			id: 2,
			text: "eat",
			day: "Feb 18th at 11:30am",
			reminder: true
		},
		{
			id: 3,
			text: "sleep",
			day: "March 23th at 1:30pm",
			reminder: true
		}
	]);

	// Delete Task
	const deleteTask = id => {
		// console.log("delete", id);
		setTasks(tasks.filter(task => task.id !== id));
	};

	// const onToggle = id => {
	// 	console.log(id);
	// };

	// Toggle Reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header title="Task Tracker" />
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"no tasks to show"
			)}
		</div>
	);
}

export default App;
