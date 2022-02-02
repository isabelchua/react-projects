import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
	//const [name, setName] = useState("Isabel");
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
	//const [count, setCount] = useState(0);

	// const handleNameChange = () => {
	// 	const names = ["Bob", "Kevin", "Dave"];
	// 	const int = Math.floor(Math.random() * 3);
	// 	// return names[int];
	// 	setName(names[int]);
	// };

	// const handleClick = () => {
	// 	console.log("click");
	// };

	// const handleCount = () => {
	// 	setCount(count + 1);
	// };

	// const handleClick2 = name => {
	// 	console.log(name);
	// };
	const handleCheck = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};

	return (
		<main>
			<ul>
				{items.map(item => (
					<li className="item" key={item.id}>
						<input
							type="checkbox"
							onChange={() => handleCheck(item.id)}
							checked={item.checked}
						/>
						<label htmlFor="">{item.item}</label>
						<FaTrashAlt role="button" tabIndex="0" />
					</li>
				))}
			</ul>

			{/* hello {handleNameChange()}!<button onClick={handleClick}>click</button>
			hello {handleNameChange}! hello {name}!{count}
			<button onClick={handleNameChange}>Change Name</button>
			<button onClick={handleClick}>click</button>
			<button onClick={handleCount}>count</button>
			<button onClick={() => handleClick2(handleNameChange())}>
				change name
			</button> */}
		</main>
	);
};

export default Content;
