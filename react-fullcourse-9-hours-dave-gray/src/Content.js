import React from "react";

const Content = () => {
	const handleNameChange = () => {
		const names = ["Bob", "Kevin", "Dave"];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};

	const handleClick = () => {
		console.log("click");
	};
	const handleClick2 = name => {
		console.log(name);
	};

	return (
		<main>
			hello {handleNameChange()}!<button onClick={handleClick}>click</button>
			<button onClick={() => handleClick2(handleNameChange())}>click</button>
		</main>
	);
};

export default Content;
