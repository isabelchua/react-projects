import { useState } from "react";
import "./App.css";
import imgDidEat from "./images/dideat.png";
import imgDidNotEat from "./images/didnoteat.png";
import food from "./images/food.png";
import blankBox from "./images/blank-box.png";
import date from "date-and-time";

function App() {
	const [text, setText] = useState("");
	const [didFeed, setDidFeed] = useState(food);
	const [didEat, setDidEat] = useState(false);
	const [dateFed, setDateFed] = useState("");

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
		const now = new Date();
		setDateFed(date.format(now, "ddd, MMM DD YYYY"));
		//console.log(didEat);
	};

	const clickNewFeed = () => {
		console.log("new feed");
	};

	// Add remove food

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				{/* <input type="text" name="name" onChange={onChange} />
				{text.name} */}
				<h1 className="center">Tarantula Feed Tracker</h1>
				<h3 className="center">February 2022</h3>
				<div className="container">
					<div className="row head">
						<div className="head">Name</div>
						<div className="date-fed">Did it Eat?</div>
						<div className="date-fed">Fed on:</div>
						<div className="">Delete</div>
					</div>
					<div className="row">
						Avic Versicolor
						<img src={didFeed} alt="food-img" onClick={onClick} />
						{dateFed}
						<button>Delete</button>
					</div>
					<div className="row">
						<button onClick={clickNewFeed}>New Feed</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default App;
