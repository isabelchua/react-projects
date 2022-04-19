import "./App.css";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "this is my note",
			date: "15/04/2022"
		},
		{
			id: nanoid(),
			text: "this is my 2nd note",
			date: "15/04/2022"
		},
		{
			id: nanoid(),
			text: "this is my 3rd note",
			date: "15/04/2022"
		},
		{
			id: nanoid(),
			text: "this is my 3rd note",
			date: "15/04/2022"
		}
	]);

	const addNote = text => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString()
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	return (
		<div className="App">
			<NotesList notes={notes} handleAddNote={addNote} />
		</div>
	);
}

export default App;
