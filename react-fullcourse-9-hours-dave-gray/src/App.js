import Content from "./Content";
import Header from "./Header";

import { useState } from "react";
import Footer from "./Footer";

function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			item: "Sugar"
		},
		{
			id: 2,
			checked: true,
			item: "Chocolate"
		},
		{
			id: 3,
			checked: false,
			item: "Beef"
		}
	]);

	const handleCheck = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	const handleDelete = id => {
		//console.log(id);
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};
	return (
		<div className="App">
			<Header title="Groceries" />
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
