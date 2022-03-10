import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
	const [notes, setNotes] = useState([
		{ id: 1, note: "test", date: "1/2/2022" }
	]);

	return (
		<div className="App">
			<Sidebar notes={notes} />
			<Main />
		</div>
	);
}

export default App;
