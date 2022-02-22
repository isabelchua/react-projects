import Content from "./Content";
import Header from "./Header";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("shoppinglist")) || []
	);

	const [newItem, setNewItem] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		localStorage.getItem("shoppinglist", JSON.stringify(items));
	}, [items]);

	// const setAndSaveItems = newItems => {
	// 	setItems(newItems);
	// 	localStorage.setItem("shoppinglist", JSON.stringify(newItems));
	// };

	const addItem = item => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		addItem(listItems);
	};

	const handleCheck = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);

		addItem(listItems);
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
			<SearchItem search={search} setSearch={setSearch} />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>

			<Content
				items={items.filter(item =>
					item.item.toLowerCase().includes(search.toLowerCase())
				)}
				setItems={setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer list={items} />
		</div>
	);
}

export default App;
