import React from "react";

const Sidebar = ({ notes }) => {
	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>Notes</h1>
				<button>Add</button>
			</div>

			<div className="app-sidebar-notes">
				{notes.map(note => (
					<div className="app-sidebar-note">
						<div className="sidebar-note-title">
							<strong>TITLE</strong>
							<button>DELETE</button>
						</div>

						<p>Note preview</p>
						<small className="note-meta">Last modified [date]</small>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
