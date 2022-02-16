import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import FeedList from "./components/FeedList";
import date from "date-and-time";

function App() {
	const [text, setText] = useState("");

	//map list
	const [feedList, setFeedList] = useState([]);

	const onChange = e => {
		setText({ ...text, name: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		//console.log(text);
	};

	const clickNewFeed = e => {
		e.preventDefault();
		console.log("new feed");
		const now = new Date();
		setFeedList([
			...feedList,
			{
				id: uuidv4(),
				feed: false,
				date: date.format(now, "ddd, MMM DD YYYY")
			}
		]);
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
					<FeedList feedList={feedList} setFeedList={setFeedList} />
					{feedList.map(food => (
						<div>
							<div>{feedList.name}</div>
							<div>{feedList.didEat}</div>
						</div>
					))}
					<div className="row">
						<button onClick={clickNewFeed}>New Feed</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default App;
