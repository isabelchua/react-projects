import "./App.css";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

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

	const [searchText, setSearchText] = useState("");

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

	const deleteNote = id => {
		const newNotes = notes.filter(note => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className="App">
			<Header />
			<Search handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter(note =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	);
}

export default App;
