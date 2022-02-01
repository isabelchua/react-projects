import { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("");

	const onChange = e => {
		setName(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log(name);
	};
	return (
		<div className="App">
			<form onSubmit={onSubmit}>
				tarantula
				<input type="text" value={name} onChange={onChange} />
				<input type="submit" value="submit" />
			</form>
		</div>
	);
}

export default App;
