import React, { useEffect, useState } from "react";
import food from "../images/food.png";
import imgDidEat from "../images/dideat.png";
import imgDidNotEat from "../images/didnoteat.png";
import date from "date-and-time";

const FeedList = ({ feedList, setFeedList }) => {
	const [didFeed, setDidFeed] = useState(food);
	const [didEat, setDidEat] = useState(false);
	const [dateFed, setDateFed] = useState("");

	const [editDate, setEditDate] = useState(null);
	const [changeDate, setChangeDate] = useState("");

	useEffect(() => {
		if (editDate) {
			setChangeDate(food.date);
		} else {
			setChangeDate("");
		}
	}, [setChangeDate, editDate]);

	const handleDelete = ({ id }) => {
		setFeedList(feedList.filter(feed => feed.id !== id));
	};

	const handleFeed = food => {
		setFeedList(
			feedList.map(foodmap => {
				if (foodmap.id === food.id) {
					return { ...foodmap, feed: !foodmap.feed };
				}
				return foodmap;
			})
		);

		// setDidEat(!didEat);
		// if (didEat) {
		// 	setDidFeed(imgDidEat);
		// } else {
		// 	setDidFeed(imgDidNotEat);
		// }

		// const now = new Date();
		// setDateFed(date.format(now, "ddd, MMM DD YYYY"));
		//console.log(didEat);
	};

	const handleEditDate = ({ id }) => {
		const findEditDate = food.find(foodmap => foodmap.id === id);
		setEditDate(findEditDate);
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
					<div className="col">{food.name}</div>
					<div className="col">
						<img
							src={food.feed ? imgDidEat : imgDidNotEat}
							alt="food-img"
							onClick={() => handleFeed(food)}
						/>
					</div>
					<div className="col" onClick={() => handleEditDate(food)}>
						{food.date}
					</div>
					<div className="col">
						<button onClick={() => handleDelete(food)}>delete</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeedList;
