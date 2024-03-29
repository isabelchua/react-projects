import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
	const [notes, setNotes] = useState([]);

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
		setNotes(notes.filter(({ id }) => id !== idToDelete));
	};

	const getActiveNote = () => {
		return notes.find(({ id }) => id === activeNote);
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
			{console.log(getActiveNote)}
			<Main activeNote={getActiveNote()} />
		</div>
	);
}

export default App;
