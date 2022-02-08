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
