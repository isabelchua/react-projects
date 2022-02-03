import "./App.css";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("green");
	const onChange = e => {
		e.preventDefault();
		setColor(e);
	};
	return (
		<div className="App">
			<div className="colorBox" style={{ backgroundColor: color }}></div>
			<input
				type="text"
				value={color}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	);
}

export default App;
