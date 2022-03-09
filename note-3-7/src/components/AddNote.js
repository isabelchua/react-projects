import React from "react";

const AddNote = () => {
	return (
		<div className="note new">
			<textarea
				name=""
				id=""
				cols="10"
				rows="8"
				placeholder="Type to add a note.."
			></textarea>
			<div className="note-footer">
				<small>200 remaining</small>
				<button className="save">save</button>
			</div>
		</div>
	);
};

export default AddNote;
