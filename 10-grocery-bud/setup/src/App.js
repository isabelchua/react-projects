import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
	const [name, setName] = useState("");
	const [list, setList] = useState([]);
	const [isEditing, setEditing] = useState(false);

	const [editID, setEditId] = useState(null);
	const [alert, setAlert] = useState({});
	return <h2>grocery bud setup</h2>;
}

export default App;
