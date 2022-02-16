import React, { useState } from "react";
import food from "../images/food.png";
import imgDidEat from "../images/dideat.png";
import imgDidNotEat from "../images/didnoteat.png";
import date from "date-and-time";

const FeedList = ({ feedList, setFeedList }) => {
	const [didFeed, setDidFeed] = useState(food);
	const [didEat, setDidEat] = useState(false);
	const [dateFed, setDateFed] = useState("");

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
	console.log(feedList);
	return (
		<div className="row">
			{/* Avic Versicolor
			<img src={didFeed} alt="food-img" onClick={onClick} />
			{dateFed}
			<button>Delete</button> */}

			{feedList.map(food => (
				<div key={food.id}>
					<div className="col">test</div>
					<div className="col">{food.name}</div>
					<div className="col">
						<img src={didFeed} alt="food-img" onClick={onClick} />
					</div>
					<div className="col">{food.date}</div>
				</div>
			))}
		</div>
	);
};

export default FeedList;
