// const tasks =

import { useState } from "react";

const Tasks = () => {
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
		<>
			{tasks.map(task => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
