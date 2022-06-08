import "./App.css";
import { useState } from "react";

function App() {
	const [text, setText] = useState("sasd");

	return (
		<div className="App">
			{" "}
			test
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			{text}
		</div>
	);
}

export default App;
