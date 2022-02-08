const inputTodo = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

function addListItem(e) {
	if (event.key === "Enter") {
		e.preventDefault();
		const todoText = inputTodo.value;
		const listItem = document.createElement("li");
		listItem.innerText = todoText;
		todoList.appendChild(listItem);
		inputTodo = "";
	}
}

document.getElementById("task-input").addEventListener("keydown", addListItem);
