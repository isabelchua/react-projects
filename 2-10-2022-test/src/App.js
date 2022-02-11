import { useState } from "react";
import "./App.css";
import Button from "./Button";
import TextField from "./TextField";
import Input from "./TextField";
import food from "./images/food.png";

function App() {
	const [text, setText] = useState("");
	const [didFeed, setDidFeed] = useState("");
	const [didEat, setDidEat] = useState(false);

	const onChange = e => {
		setText({ ...text, name: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(text);
	};

	const onClick = () => {
		setDidEat(!didEat);
		console.log(didEat);
	};

	// Add remove food

	return (
		<div className="App">
			<Button />
			<TextField />
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" onChange={onChange} />
				{text.name}
				<img src={food} alt="food-img" onClick={onClick} />
				<button>submit</button>
			</form>
		</div>
	);
}

export default App;
