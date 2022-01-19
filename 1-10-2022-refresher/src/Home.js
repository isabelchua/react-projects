import React from "react";

const handleClick = () => {
	console.log("hello there");
};

const handleClickAgain = name => {
	console.log("hello " + name);
};

const Home = () => {
	return (
		<div>
			<div className="home">Homepage </div>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={e => handleClickAgain("isabel", e)}>
				click again
			</button>
		</div>
	);
};

export default Home;
