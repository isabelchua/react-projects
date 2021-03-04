import React, { useState } from "react";

const CountButton = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>+1</button>
			<div>{count}</div>
		</div>
	);
};

export default CountButton;
