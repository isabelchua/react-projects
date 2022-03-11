import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
	const [notes, setNotes] = useState([
		{ id: 1, note: "test", date: "1/2/2022" }
	]);

	const [activeNote, setActiveNote] = useState(false);

	const onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: "test title",
			body: "body text",
			lastModified: Date.now()
		};

		setNotes([newNote, ...notes]);
	};

	const onDeleteNote = idToDelete => {
		setNotes(notes.filter(note => note.id !== idToDelete));
	};

	return (
		<div className="App">
			<Sidebar
				notes={notes}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Main />
		</div>
	);
}

export default App;
