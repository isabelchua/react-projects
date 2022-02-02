import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleDelete, handleCheck }) => {
	//const [name, setName] = useState("Isabel");

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

	return (
		<main>
			<ItemList
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>

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
