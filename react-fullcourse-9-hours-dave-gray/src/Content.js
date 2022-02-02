import React from "react";
import { FaTrashAlt } from "react-icons/fa";

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
			{items.length < 1 && "no items to show"}
			<ul>
				{items.map(item => (
					<li className="item" key={item.id}>
						<input
							type="checkbox"
							onChange={() => handleCheck(item.id)}
							checked={item.checked}
						/>
						<label
							style={
								item.checked ? { textDecoration: "line-through" } : null
							}
							onDoubleClick={() => handleCheck(item.id)}
							htmlFor=""
						>
							{item.item}
						</label>
						<FaTrashAlt
							onClick={() => handleDelete(item.id)}
							role="button"
							tabIndex="0"
						/>
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
