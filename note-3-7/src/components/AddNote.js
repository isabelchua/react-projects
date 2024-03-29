import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;

	const handleChange = e => {
		if (characterLimit - e.target.value.length >= 0)
			setNoteText(e.target.value);
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
		}
	};
	return (
		<div className="note new">
			<textarea
				name=""
				id=""
				cols="10"
				rows="8"
				placeholder="Type to add a note.."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>{characterLimit - noteText.length} remaining</small>
				<button className="save" onClick={handleSaveClick}>
					save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
