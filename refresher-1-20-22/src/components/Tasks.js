import React from "react";
import { useState } from "react";

// const tasks = [
// 	{
// 		id: 1,
// 		text: "task 1",
// 		day: "Jan 8th at 3:30pm"
// 	},
// 	{
// 		id: 2,
// 		text: "eat",
// 		day: "Feb 18th at 11:30am"
// 	},
// 	{
// 		id: 3,
// 		text: "sleep",
// 		day: "March 23th at 1:30pm"
// 	}
// ];

const Tasks = ({ tasks }) => {
	return (
		<div>
			{tasks.map(task => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</div>
	);
};

export default Tasks;
