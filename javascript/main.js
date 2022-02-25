const inputTodo = document.getElementById("input-todo");
const todoList = document.getElementById("todo-list");

function addListItem(event) {
	console.log(event.keyCode);
	if (event.key === "Enter") {
		event.preventDefault();
		const todoText = inputTodo.value;
		const listItem = document.createElement("li");
		//const value = document.getElementById("input-todo").value;
		//const listContain = document.getElementById("todo-list");
		listItem.innerText = todoText;
		todoList.appendChild(listItem);

		//listContain.appendChild(listItem);
	}
}

document.getElementById("input-todo").addEventListener("keydown", addListItem);

const convertTime = dirtyTime => {
	let timePeriod = dirtyTime.slice(-2).toLowerCase();
	let isPM = timePeriod === "pm";
	let timeNumbers = dirtyTime.slice(0, dirtyTime.length - 2);
	let [hour, minute] = timeNumbers.split(":").map(item => parseInt(item));

	let convertedHour = hour + (isPM ? 12 : 0);
	let newHour = convertedHour.padStart(2, "0");
	return `${newHour}:${minute}`;
};
