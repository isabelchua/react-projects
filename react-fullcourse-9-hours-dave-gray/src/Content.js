import React from "react";

const Content = () => {
	const handleNameChange = () => {
		const names = ["Bob", "Kevin", "Dave"];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	};
	return <div>hello {handleNameChange()}!</div>;
};

export default Content;
