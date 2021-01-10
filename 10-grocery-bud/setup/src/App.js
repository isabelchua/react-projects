import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { BiPlusMedical } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { deleteTodo, editTodo } from "./todo/todoSlice";

import { useDispatch } from "react-redux";

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(localStorage.getItem("list"));
	} else {
		return [];
	}
};

function App() {
	const dispatch = useDispatch();

	const [name, setName] = useState("");

	const [isEditing, setIsEditing] = useState(false);

	const [editID, setEditId] = useState(null);

	const [list, setList] = useState(getLocalStorage());

	const [alert, setAlert] = useState({
		show: false,
		msg: "",
		type: ""
	});

	const [editColor, setEditColor] = useState("");

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};
	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
	};

	const removeItem = id => {
		showAlert(true, "danger", "item removed");

		dispatch(deleteTodo({ id: id }));
		//setList(list.filter(item => item.id !== id));
	};

	const editItem = id => {
		const specificItem = Object.values(todo).find(item => item.id === id);
		showAlert(true, "success", "edit item");
		setEditColor("highlight");
		setIsEditing(true);
		//dispatch(editTodo({ id: id }));
		setEditId(id);
		setName(specificItem.title);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!name) {
			// display alert
			showAlert(true, "danger", "please enter value");
			//setAlert({show: true, msg: 'please enter value', type: 'danger'})
		} else if (name && isEditing) {
			// deal with edit
			setList(
				list.map(item => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName("");
			setEditId(null);
			setIsEditing(false);
			showAlert(true, "success", "value changed");
			setEditColor("");
		} else {
			showAlert(true, "success", "item to the list");
			// show alert
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName("");
		}
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form className="todo-form" onSubmit={handleSubmit}>
				{alert.show && (
					<Alert {...alert} removeAlert={showAlert} list={list} />
				)}
				<h3>Notes</h3>
				<div className="form-control">
					<input
						type="text"
						className={`todo input-field ${editColor}`}
						placeholder="e.g. buy dogfood"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? <FaEdit /> : <BiPlusMedical />}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<>
					<div className="todo">
						<List
							items={list}
							removeItem={removeItem}
							editItem={editItem}
						/>
					</div>
					<button className="clear-btn" onClick={clearList}>
						{" "}
						clear items
					</button>
				</>
			)}
		</section>
	);
}

export default App;
