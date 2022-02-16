import React, { useState } from "react";
import food from "../images/food.png";
import imgDidEat from "../images/dideat.png";
import imgDidNotEat from "../images/didnoteat.png";
import date from "date-and-time";

const FeedList = ({ feedList, setFeedList }) => {
	const [didFeed, setDidFeed] = useState(food);
	const [didEat, setDidEat] = useState(false);
	const [dateFed, setDateFed] = useState("");

	const handleDelete = ({ id }) => {
		setFeedList(feedList.filter(feed => feed.id !== id));
	};

	const onHandleClick = () => {
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
	console.log(feedList);
	return (
		<div>
			{/* Avic Versicolor
			<img src={didFeed} alt="food-img" onClick={onClick} />
			{dateFed}
			<button>Delete</button> */}

			{feedList.map(food => (
				<div className="row" key={food.id}>
					<div className="col">test</div>
					<div className="col">{food.name}</div>
					<div className="col">
						<img src={didFeed} alt="food-img" onClick={onHandleClick} />
					</div>
					<div className="col">{food.date}</div>
					<div className="col">
						<button onClick={() => handleDelete(food)}>delete</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeedList;
