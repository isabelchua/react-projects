import { useState } from "react";
import "./App.css";
import imgDidEat from "./images/dideat.png";
import imgDidNotEat from "./images/didnoteat.png";
import food from "./images/food.png";
import blankBox from "./images/blank-box.png";

function App() {
	const [text, setText] = useState("");
	const [didFeed, setDidFeed] = useState("");
	const [didEat, setDidEat] = useState(false);

	const onChange = e => {
		setText({ ...text, name: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		//console.log(text);
	};

	const onClick = () => {
		setDidEat(!didEat);
		if (didEat) {
			setDidFeed(imgDidEat);
		} else {
			setDidFeed(imgDidNotEat);
		}
		//console.log(didEat);
	};

	// Add remove food

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" onChange={onChange} />
				{text.name}
				<img src={blankBox} alt="food-img" onClick={onClick} />
				<img src={food} alt="food-img" onClick={onClick} />
				<img src={imgDidEat} alt="food-img" onClick={onClick} />
				<img src={imgDidNotEat} alt="food-img" onClick={onClick} />
				<img src={didFeed} alt="food-img" onClick={onClick} />
				<button>submit</button>
			</form>
		</div>
	);
}

export default App;
