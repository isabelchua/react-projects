import Content from "./Content";
import Header from "./Header";

import { useState } from "react";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("shoppinglist"))
	);

	const [newItem, setNewItem] = useState("");
	const [search, setSearch] = useState("");

	const setAndSaveItems = newItems => {
		setItems(newItems);
		localStorage.setItem("shoppinglist", JSON.stringify(newItems));
	};

	const addItem = item => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setAndSaveItems(listItems);
	};

	const handleCheck = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);

		setAndSaveItems(listItems);
	};

	const handleDelete = id => {
		//console.log(id);
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!newItem) return;
		console.log(newItem);
		//addItem
		addItem(newItem);
		setNewItem("");
	};

	//const [newItem, setNewItem] = useState("");
	return (
		<div className="App">
			<Header title="Groceries" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<Content
				items={items}
				setItems={setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer list={items} />
		</div>
	);
}

export default App;
