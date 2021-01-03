import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const AddTodo = () => {
	const [name, setName] = useState("");

	const [isEditing, setIsEditing] = useState(false);

	const [editID, setEditId] = useState(null);

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
	return (
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
	);
};

export default AddTodo;
