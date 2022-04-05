import React from "react";
import { useState } from "react";

const AddText = ({ addText }) => {
	const [text, setText] = useState("");

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		//console.log(text);
		e.preventDefault();
		addText(text);
	};

	return (
		<div>
			<form>
				<input type="text" value={text} onChange={handleChange} />
				<button onClick={handleSubmit}>send</button>
			</form>
		</div>
	);
};

export default AddText;
