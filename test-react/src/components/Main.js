import React from "react";

const Main = ({ activeNote }) => {
	return (
		<div className="app-name">
			<div className="app-main-note-edit">
				<input type="text" id="title" autoFocus />
				<textarea
					name=""
					id="body"
					placeholder="Write your notes.."
				></textarea>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote.title}</h1>
				<div className="markdown-preview">t</div>
			</div>
		</div>
	);
};

export default Main;
