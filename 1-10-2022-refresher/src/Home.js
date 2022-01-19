import React, { useState } from "react";

const Home = () => {
	const [name, setName] = useState("isabel");
	const [age, setAge] = useState("35");

	const handleClick = () => {
		setName("andrew");
	};

	const handleClickAgain = name => {};

	return (
		<div>
			<div className="home">Homepage </div>
			<p>{name} is</p>
			<p>{age} years old</p>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={e => handleClickAgain("isabel", e)}>
				click again
			</button>
		</div>
	);
};

export default Home;
